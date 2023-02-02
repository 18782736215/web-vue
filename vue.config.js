const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')// 打包项目进度条
const CompressionPlugin = require('compression-webpack-plugin') // 开启 gzip
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
// 拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 引入全局变量
        prependData: `@import "./src/style/_global.scss";`,
        // 解决图标乱码问题
        implementation: require('sass'),
        sassOptions: {
          // 生效代码
          outputStyle: 'expanded'
        }
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            // 把px单位换算成rem单位
            rootValue: 32, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: ['.van', '.el', '.moblie-cont'], // 要忽略的选择器并保留为px。
            propList: ['*']
          })
        ]
      }
    }
  },
  // 配置@路径
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('@config', resolve('src/config'))
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        config: resolve('src/config'),
        components: resolve('src/components'),
        mixins: resolve('src/mixins'),
        styles: resolve('src/styles'),
        utils: resolve('src/utils'),
        plugins: resolve('src/plugins')
      }
    },
    plugins: [
      new ProgressBarPlugin(),
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css$|\.scss$/,
        threshold: 10240 // 只处理比这个值大的资源。按字节计算 设置的是 10kb
      }),
      new MonacoWebpackPlugin()
    ]
  },
  outputDir: 'dist',
  /* 输出文件目录：在npm run build时，生成文件的目录名称，目标目录在构建之前会被清除 */
  assetsDir: 'assets',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  productionSourceMap: false,
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  filenameHashing: true,
  /* 默认为true，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  lintOnSave: true,
  /* 代码保存时进行eslint检测 */
  devServer: {
    progress: true,
    /* webpack-dev-server 相关配置 */
    open: true,
    /* 自动打开浏览器 */
    /* 设置为0.0.0.0则所有的地址均能访问 */
    port: 8000,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true
    },
    liveReload: true, // 监听到文件变化时 dev-server 将会重新加载或刷新页面
    // 提示:同时添加proxy和before对请求接口没有影响，但是在调用后台接口时，mock会引起冲突
    // 引入mock
    // before: require('./src/mock/mock-server.js'),
    proxy: {
      '/talent-service': {
        target: 'http://192.168.233.5/talent-service',
        changeOrigin: false,
        pathRewrite: {
          '^/talent-service': '/'
        }
      }
    }
  },
  // 修改默认路径
  publicPath: process.env.NODE_ENV === 'production' ? '/web_vue2_pc/' : '/'
}

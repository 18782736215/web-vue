<template>
  <div class="lucky-excel">
    <div class="tool-bar">
      <zle-button v-if="showDownload" type="primary" class="tool" plain @click="download">下载</zle-button>
      <zle-button v-if="showExport" type="primary" class="tool" plain @click="exportFile">导出</zle-button>
      <el-upload v-if="showImport" ref="upload" name="file" action="" :limit="1" :before-upload="beforeUpload" :show-file-list="false">
        <zle-button slot="trigger" type="primary" class="tool" plain>导入excel</zle-button>
      </el-upload>
      <zle-button v-if="showPrintDefault" v-print="`#${printParam.id}`" type="primary" class="tool" plain @click="printFn(false)">打印</zle-button>
      <zle-button v-if="showPrint" v-print="`#${printParam.id}`" type="primary" class="tool" plain @click="printFn(true)">打印选中区域</zle-button>
    </div>
    <div :id="luckysheetParam.containerId" class="container" />
    <div :id="printParam.id" :style="{ textAlign: printPosition }" />
  </div>
</template>

<script>
import LuckyExcel from 'luckyexcel'
import exportExcel from '@/assets/js/exportExcel.js'

export default {
  name: 'ZlExcel',
  props: {
    // 显示的excel文件
    file: {
      default: () => {
        return null
      },
      type: Object
    },
    // 打印时base64图片的位置
    printPosition: {
      default: 'center',
      type: String
    },
    showDownload: {
      type: Boolean,
      default: true
    },
    showExport: {
      type: Boolean,
      default: true
    },
    showImport: {
      type: Boolean,
      default: true
    },
    showPrintDefault: {
      type: Boolean,
      default: true
    },
    showPrint: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // excel基础配置
      luckysheetParam: {
        // 对应区域
        containerId: 'editSheet',
        // 语言
        lang: 'zh'
      },
      // 打印基础配置
      printParam: {
        // 对应区域
        id: 'print_html'
      }
    }
  },
  mounted() {
    if (this.file) {
      this.beforeUpload(this.file)
      return
    }
    // eslint-disable-next-line no-debugger
    this.initExcel()
  },
  methods: {
    /**
     * @description: 初始化excel
     * @author: flyer
     * @param {Object} exportJson 初始化数据
     */
    initExcel(exportJson = {}) {
      // eslint-disable-next-line no-undef
      luckysheet.create({
        container: this.luckysheetParam.containerId, // luckysheet为容器id
        lang: this.luckysheetParam.lang,
        showtoolbar: true,
        showtoolbarConfig: {
          print: false // 隐藏插件内部打印按钮
        },
        showinfobar: false, // 显示头部返回标题栏
        data: exportJson.sheets
      })
    },

    /**
     * @description: 打印默认区域
     * @author: flyer
     * @param {Boolean} flag 是否默认打印
     */
    printFn(flag) {
      // eslint-disable-next-line no-undef
      const src = flag ? luckysheet.getScreenshot() : luckysheet.getScreenshot({ range: 'A1:M50' })
      const $img = `<img src=${src} style="max-width: 90%;" />`
      this.$nextTick(() => {
        document.querySelector(`#${this.printParam.id}`).innerHTML = $img
      })
    },

    /**
     * @description: 获取在线excel数据后编辑成excel文件导出
     * @author: flyer
     */
    async exportExcel() {
      // eslint-disable-next-line no-undef
      const data = luckysheet.getluckysheetfile()
      const exportData = await exportExcel(data)
      const blob = new Blob([exportData])
      const file = new File([blob], '文档.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      return file
    },

    /**
     * @description: 导出excel文件对象
     * @author: flyer
     */
    async exportFile() {
      const file = await this.exportExcel()
      // this.$emit('exportFile', file)
      this.beforeUpload(file)
    },

    /**
     * @description: 浏览器导出excel
     * @author: flyer
     * @param {Object} blob excel数据，也可以是file对象
     */
    async download() {
      const file = await this.exportExcel()
      if (window.navigator && window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(file, file.name)
      } else {
        const a = document.createElement('a')
        a.download = file.name
        a.href = URL.createObjectURL(file)
        a.style.display = 'none'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }
    },

    /**
     * @description: 导入excel文件
     * @author: flyer
     * @param {Object} file excel文件
     */
    beforeUpload(file) {
      const suffix = file.name.split('.')
      if (suffix[suffix.length - 1] !== 'xlsx') {
        this.$message.error('文件格式只能是.xlsx')
        return false
      }
      // eslint-disable-next-line no-undef
      luckysheet.destroy()
      // eslint-disable-next-line no-undef
      LuckyExcel.transformExcelToLucky(file, exportJson => {
        if (exportJson.sheets == null || exportJson.sheets.length === 0) {
          this.$message.warning('读取excel文件内容失败，目前不支持xls文件!')
          return
        }
        this.initExcel(exportJson)
      })
    }
  }
}
</script>

  <style lang="scss" scoped>
$height: 40px;
.lucky-excel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: calc(100% - #{$height});
  }
  .tool-bar {
    display: flex;
    width: 100%;
    height: $height;
    justify-content: left;
    align-items: center;
    ::v-deep .el-button {
      padding: 0 10px;
      height: 30px;
      line-height: 30px;
    }
    .tool {
      margin-left: 10px;
    }
  }
  ::v-deep .luckysheet-toolbar-combo-button {
    vertical-align: middle;
  }
  ::v-deep .luckysheet-scrollbar-ltr {
    z-index: 800;
  }
  ::v-deep .luckysheet-rows-h {
    margin-top: -12px;
  }
}
</style>

<template>
  <div class="containers">
    <div ref="canvas" class="canvas" />
    <div id="js-properties-panel" class="panel" />
    <div id="process-xml" />
    <ul class="buttons">
      <li>下载</li>
      <li>
        <a ref="saveDiagram" href="javascript:" title="保存为bpmn">保存为bpmn</a>
      </li>
      <li>
        <a ref="saveSvg" href="javascript:" title="保存为svg">保存为svg</a>
      </li>
    </ul>
  </div>
</template>
<script>
// 引入相关的依赖
import BpmnModeler from 'bpmn-js/lib/Modeler'
import { xmlStr } from './customTranslate/xmlStr.js'
import propertiesPanelModule from 'bpmn-js-properties-panel'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda'
import customTranslateModule from './customTranslate/customTranslate'
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css'
export default {
  name: '',
  components: {},
  data() {
    return {
      // bpmn建模器
      bpmnModeler: null,
      container: null,
      canvas: null
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 获取到属性ref为“canvas”的dom节点
      const canvas = this.$refs.canvas
      console.log(canvas)
      // 建模
      this.bpmnModeler = new BpmnModeler({
        container: canvas,
        propertiesPanel: {
          parent: '#js-properties-panel'
        },
        additionalModules: [propertiesProviderModule, propertiesPanelModule, customTranslateModule],
        moddleExtensions: {
          camunda: camundaModdleDescriptor
        }
      })
      this.createNewDiagram()
    },
    async createNewDiagram() {
      // 将字符串转换成图显示出来
      try {
        const result = await this.bpmnModeler.importXML(xmlStr)
        const { warnings } = result
        console.log(warnings)
        this.success()
      } catch (err) {
        console.log(err.message, err.warnings)
      }
    },
    success() {
      // console.log('创建成功!')
      this.addBpmnListener()
      this.addModelerListener()
    },
    // 添加绑定事件
    addBpmnListener() {
      const that = this
      // 获取a标签dom节点
      const downloadLink = this.$refs.saveDiagram
      const downloadSvgLink = this.$refs.saveSvg
      // 给图绑定事件，当图有发生改变就会触发这个事件
      this.bpmnModeler.on('commandStack.changed', function() {
        that.saveSVG(function(err, svg) {
          that.setEncoded(downloadSvgLink, 'diagram.svg', err ? null : svg)
        })
        that.saveDiagram(function(err, xml) {
          that.setEncoded(downloadLink, 'diagram.bpmn', err ? null : xml)
        })
      })
    },
    addModelerListener() {
      // 监听 modeler
      const bpmnjs = this.bpmnModeler
      const that = this
      // 'shape.removed'
      const events = ['shape.added', 'shape.move.end', 'connect.end', 'connection.create', 'connection.move']
      events.forEach(function(event) {
        that.bpmnModeler.on(event, e => {
          console.log(event, e)
          var elementRegistry = bpmnjs.get('elementRegistry')
          var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
          console.log(shape)
        })
      })
    },
    // 下载为SVG格式,done是个函数，调用的时候传入的
    async saveSVG(done) {
      // 把传入的done再传给bpmn原型的saveSVG函数调用
      this.bpmnModeler.saveSVG(done)
    },
    // 下载为bpmn格式,done是个函数，调用的时候传入的
    saveDiagram(done) {
      // 把传入的done再传给bpmn原型的saveXML函数调用
      this.bpmnModeler.saveXML({ format: true }, function(err, xml) {
        done(err, xml)
      })
    },
    // 当图发生改变的时候会调用这个函数，这个data就是图的xml
    setEncoded(link, name, data) {
      // 把xml转换为URI，下载要用到的
      const encodedData = encodeURIComponent(data)
      // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
      //   console.log(link, name, data)
      let xmlFile = new File([data], 'test.bpmn')
      //   console.log(xmlFile)
      if (data) {
        link.className = 'active'
        link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
        link.download = name
      }
    }
  }
}
</script>

<style scoped lang="scss">
.containers {
  position: relative;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}
.canvas {
  width: 100%;
  height: 100%;
}
.panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  overflow: auto;
}
.buttons {
  position: absolute;
  left: 20px;
  bottom: 20px;
  & > li {
    display: inline-block;
    margin: 5px;
    & > a {
      color: #999;
      background: #eee;
      cursor: not-allowed;
      padding: 6px;
      border: 1px solid #ccc;
      text-decoration: none;
      &.active {
        color: #333;
        background: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>

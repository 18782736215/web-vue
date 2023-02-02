<template>
  <div class="print-box">
    <div v-loading="loading" class="left-box">
      <div class="left_box_inner">
        <template v-if="showEdit && !loading">
          <div id="print" :class="showEdit ? 'p-event' : ''" :style="`height: ${form.height}cm; width: ${form.width}cm`">
            <template v-for="(item, index) in list">
              <zl-drag-item :key="item + index" :drag-item="item" :item-index="index" :show-edit="showEdit" @clickItem="clickItem" @onDrag="onDrag" @onResize="onResize" />
            </template>
          </div>
        </template>
        <template v-else>
          <div v-for="(v, i) in planList" id="print" :key="i" class="page-break" :style="`height: ${form.height}cm; width: ${form.width}cm`">
            <template v-for="(item, index) in list">
              <zl-drag-item v-if="item.fatherName == ''" :key="item + index" :drag-item="item" :father-item="v" :item-index="index" :show-edit="showEdit" @clickItem="clickItem" @onDrag="onDrag" @onResize="onResize" />
              <template v-for="(e, ci) in v[item.fatherName]">
                <zl-drag-item :key="item.value + ci" :drag-item="item" :father-item="e" :item-index="ci" :show-edit="showEdit" @clickItem="clickItem" @onDrag="onDrag" @onResize="onResize" />
              </template>
            </template>
          </div>
        </template>
      </div>
    </div>
    <div v-if="showEdit" class="right-box">
      <zle-form ref="form" :model="form" label-width="90px">
        <div class="section_title">基本属性</div>
        <zle-form-item label="打印宽度">
          <zle-input
            v-model="form.width"
            class="input-style"
            placeholder="请输入打印宽度"
            @change="
              val => {
                opMethod('widthChange', val)
              }
            "
          >
            <template slot="append">cm</template>
          </zle-input>
        </zle-form-item>
        <zle-form-item label="打印高度">
          <zle-input
            v-model="form.height"
            class="input-style"
            placeholder="请输入打印高度"
            @change="
              val => {
                opMethod('heightChange', val)
              }
            "
          >
            <template slot="append">cm</template>
          </zle-input>
        </zle-form-item>
        <zle-form-item label="字段名称">
          <zle-cascader v-model="form.selectValue" class="input-style" :options="apiArr" :props="{ value: 'name', children: 'bomList' }" placeholder="请选择字段名称" @change="selectVal2" />
        </zle-form-item>
        <div v-if="form.type == 'String'">
          <div class="section_title">字体</div>
          <zle-form-item label="字体设置">
            <zle-select v-model="form.fontSize" class="input-style" placeholder="请选择大小" @change="changeVal('String')">
              <zle-option v-for="(item, index) in sizeList" :key="index + item.value" :label="item.label" :value="item.value" />
            </zle-select>
          </zle-form-item>
          <zle-form-item label="行高设置">
            <zle-select v-model="form.lineHeight" class="input-style" placeholder="请选择大小" @change="changeVal('String')">
              <zle-option v-for="(item, index) in sizeList" :key="index + item.value" :label="item.label" :value="item.value" />
            </zle-select>
          </zle-form-item>
          <div class="flex_a_center">
            <zle-form-item label="宽" label-width="55">
              <zle-input
                v-model="form.maxWidth"
                class="input-sm"
                placeholder="请输入最大宽度"
                @change="
                  val => {
                    opMethod('maxWidthChange', val)
                    changeVal('String')
                  }
                "
              />
            </zle-form-item>
            <zle-form-item label="高" label-width="55">
              <zle-input
                v-model="form.maxHeight"
                class="input-sm"
                placeholder="请输入最大高度"
                @change="
                  val => {
                    opMethod('maxHeightChange', val)
                    changeVal('String')
                  }
                "
              />
            </zle-form-item>
          </div>

          <div class="flex_a_center">
            <zle-form-item label="X轴" label-width="55">
              <zle-input
                v-model="x"
                class="input-sm"
                placeholder="请输入x轴位置"
                @change="
                  val => {
                    opMethod('xChange', val)
                    changeVal(form.type)
                  }
                "
              />
            </zle-form-item>
            <zle-form-item label="Y轴" label-width="55">
              <zle-input
                v-model="y"
                class="input-sm"
                placeholder="请输入y轴位置"
                @change="
                  val => {
                    opMethod('yChange', val)
                    changeVal(form.type)
                  }
                "
              />
            </zle-form-item>
          </div>

          <zle-form-item label="超出隐藏">
            <zle-switch v-model="form.isHide" active-color="#ec7259" inactive-color="#dcdfe6" @change="changeVal('String')" />
          </zle-form-item>
          <zle-form-item label="字体颜色">
            <div class="flex_a_center">{{ form.color }}<el-color-picker v-model="form.color" style="margin-left: 10px" @change="changeVal('String')" /></div>
          </zle-form-item>
        </div>
        <div v-if="form.type == 'QrCode' || form.type == 'BarCode'">
          <div class="section_title">{{ form.type == 'QrCode' ? '二维码' : '条形码' }}</div>
          <zle-form-item v-if="form.type == 'QrCode'" label="二维码大小">
            <zle-input
              v-model="form.size"
              class="input-style"
              placeholder="请输二维码大小"
              @change="
                val => {
                  opMethod('sizeChange', val)
                  changeVal('QrCode')
                }
              "
            >
              <template slot="append">px</template>
            </zle-input>
          </zle-form-item>
          <zle-form-item v-if="form.type == 'BarCode'" label="条形码宽度">
            <zle-input
              v-model="form.barWidth"
              class="input-style"
              placeholder="请输条形码宽度"
              @change="
                val => {
                  opMethod('barWidthChange', val)
                  changeVal('BarCode')
                }
              "
            >
              <template slot="append">px</template>
            </zle-input>
          </zle-form-item>
          <zle-form-item v-if="form.type == 'BarCode'" label="条形码高度">
            <zle-input
              v-model="form.barHeight"
              class="input-style"
              placeholder="请输条形码高度"
              @change="
                val => {
                  opMethod('barHeightChange', val)
                  changeVal('BarCode')
                }
              "
            >
              <template slot="append">px</template>
            </zle-input>
          </zle-form-item>
          <div class="flex_a_center">
            <zle-form-item label="X轴" label-width="55">
              <zle-input
                v-model="x"
                class="input-sm"
                placeholder="请输入x轴位置"
                @change="
                  val => {
                    opMethod('xChange', val)
                    changeVal(form.type)
                  }
                "
              />
            </zle-form-item>
            <zle-form-item label="Y轴" label-width="55">
              <zle-input
                v-model="y"
                class="input-sm"
                placeholder="请输入y轴位置"
                @change="
                  val => {
                    opMethod('yChange', val)
                    changeVal(form.type)
                  }
                "
              />
            </zle-form-item>
          </div>
          <zle-form-item label="底部文字">
            <zle-switch v-model="form.showText" active-color="#ec7259" inactive-color="#dcdfe6" @change="changeVal('QrCode')" />
          </zle-form-item>
        </div>
      </zle-form>
      <div class="flex_e_center">
        <zle-button @click="saveData">保存</zle-button>
        <zle-button v-print="'#print'">预览打印</zle-button>
        <!-- <zle-button @click="doPrint">打印</zle-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { ColorPicker } from 'element-ui'
Vue.component(ColorPicker.name, ColorPicker)
import ZlDragItem from '@/components/zl-print/drag-item.vue'
export default {
  name: 'ZlDragPrint',
  components: {
    ZlDragItem
  },
  props: {
    apiArr: {
      type: Array, // name集合
      default: () => {
        return []
      }
    },
    printList: {
      type: Array, // 打印数据集合
      default: () => {
        return []
      }
    },
    planList: {
      type: Array, // 打印数据集合
      default: () => {
        return []
      }
    },
    showEdit: {
      type: Boolean, // 是否展示编辑
      default: true
    },
    printWidth: {
      type: Number,
      default: 30
    },
    printHeight: {
      type: Number,
      default: 15
    }
  },
  data: function() {
    return {
      show: true,
      loading: false,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      form: {
        width: 30,
        height: 15,
        barWidth: 2, // 条形码宽度
        barHeight: 50, // 条形码高度
        maxX: 0,
        maxY: 0,
        type: '',
        fontSize: '',
        lineHeight: '',
        maxWidth: 100,
        maxHeight: 50,
        color: '#000000',
        size: '', // 二维码大小
        showText: false, // 是否展示底部文字
        isHide: true, // 是否超出隐藏
        paddingTop: 20
      },
      sizeList: [], // 字体号数组
      list: [], // apiArr带上所有属性的集合
      clickIndex: null // 点击属性下表
    }
  },
  created() {
    this.loading = true
  },
  mounted() {
    let dom = document.querySelector('.left-box')
    let width = dom.getBoundingClientRect().width
    let height = dom.getBoundingClientRect().height
    dom.style.maxWidth = width
    dom.style.maxHeight = height
    // 字号数组获取
    for (let i = 12; i <= 48; i++) {
      this.sizeList.push({ label: `${i}px`, value: `${i}px` })
    }
    // if (!this.showEdit) {
    // 打印
    this.list = this.printList ? this.printList : []
    this.form.width = this.printWidth
    this.form.height = this.printHeight
    // }
    setTimeout(() => {
      this.loading = false
    }, 1000)
    setTimeout(() => {
      let p = document.getElementById('print')
      let x = p.getBoundingClientRect().width
      let y = p.getBoundingClientRect().height
      this.form.maxX = x
      this.form.maxY = y
    }, 1000)
  },
  methods: {
    selectVal2(val) {
      let item = {}
      if (val.length == 1) {
        console.log(this.apiArr)
        item = this.apiArr.find(ele => ele.name == val[0])
      } else if (val.length == 2) {
        let obj = this.apiArr.find(ele => ele.name == val[0])
        item = obj.bomList.find(ele => ele.name == val[1])
        item.fatherName = val[0]
      }
      console.log(item)
      this.selectVal(item)
    },
    selectVal(val) {
      let flag = this.list.some(ele => ele.value == val.name)
      if (flag) {
        return false
      }
      let obj = []
      if (val.type == 'String') {
        obj = {
          fatherName: val.fatherName || '', // 父级name
          type: val.type, // 字段类型
          name: val.label, // 表名
          value: val.name, // 表值
          fontSize: '16px', // 默认字体
          lineHeight: '16px', // 默认行高
          color: '#000000', // 默认颜色
          maxWidth: 100, // 最大宽度
          maxHeight: 50, // 最大高度
          isHide: true, // 是否超出隐藏
          x: Math.floor(Math.random() * (800 - 10)) + 10, // x默认值
          y: Math.floor(Math.random() * (450 - 10)) + 10 // y 默认值
        }
      } else if (val.type == 'QrCode') {
        obj = {
          fatherName: val.fatherName || '', // 父级name
          type: val.type, // 字段类型
          name: val.label, // 表名
          value: val.name, // 表值
          showText: false, // 是否展示底部文字
          size: 50, // 默认大小
          x: Math.floor(Math.random() * (800 - 10)) + 10, // x默认值
          y: Math.floor(Math.random() * (450 - 10)) + 10 // y 默认值
        }
      } else if (val.type == 'BarCode') {
        obj = {
          fatherName: val.fatherName || '', // 父级name
          type: val.type, // 字段类型
          name: val.label, // 表名
          value: val.name, // 表值
          showText: false, // 是否展示底部文字
          barWidth: 2, // 宽度
          barHeight: 50, // 高度
          x: Math.floor(Math.random() * (800 - 10)) + 10, // x默认值
          y: Math.floor(Math.random() * (450 - 10)) + 10 // y 默认值
        }
      }
      this.list.push(obj)
      this.clickIndex = this.list.findIndex(ele => ele.value == val.name)
      if (this.clickIndex != -1) {
        this.clickItem(this.list[this.clickIndex], this.clickIndex)
        this.x = this.list[this.clickIndex].x
        this.y = this.list[this.clickIndex].y
      }
    },
    clickItem(item, index) {
      this.clickIndex = index
      this.form.type = item.type
      this.x = item.x
      this.y = item.y
      switch (item.type) {
        case 'String':
          this.form.fontSize = item.fontSize
          this.form.lineHeight = item.lineHeight
          this.form.color = item.color
          this.form.isHide = item.isHide
          break
        case 'QrCode':
          this.form.size = item.size
          this.form.showText = item.showText
          break
        case 'BarCode':
          this.form.barWidth = item.barWidth
          this.form.barHeight = item.barHeight
          this.form.showText = item.showText
          break
      }
    },
    opMethod(type, val) {
      let flag = !this.$u.validate.vCheckPositiveInteger(val)
      switch (type) {
        case 'sizeChange': // 二维码大小
          if (flag) {
            this.$zleMessage.warning('请输入正整数')
            this.form.size = 50
          }
          break
        case 'barWidthChange': // 条形码大小
          if (flag) {
            this.$zleMessage.warning('请输入正整数')
            this.form.barWidth = 2
          }
          break
        case 'barHeightChange': // 条形码大小
          if (flag) {
            this.$zleMessage.warning('请输入正整数')
            this.form.barHeight = 50
          }
          break
        case 'widthChange': // 打印宽度
          if (flag) {
            this.$zleMessage.warning('请输入正整数')
            this.form.width = 30
          }
          this.$nextTick(() => {
            window.dispatchEvent(new Event('resize'))
          })
          break
        case 'heightChange': // 打印高度
          if (flag) {
            this.$zleMessage.warning('请输入正整数')
            this.form.height = 15
          }
          this.$nextTick(() => {
            window.dispatchEvent(new Event('resize'))
          })
          break
        case 'maxWidthChange':
          if (flag) {
            this.$zleMessage.warning('请输入正整数')
            this.form.maxWidth = 100
          }
          break
        case 'maxHeightChange':
          if (flag) {
            this.$zleMessage.warning('请输入正整数')
            this.form.maxHeight = 50
          }
          break
        case 'xChange':
          if (!this.$u.validate.vCheckNonnegativeInteger(val)) {
            this.$zleMessage.warning('请输入正整数')
            this.x = 0
          }
          if (val > this.form.maxX) {
            this.$zleMessage.warning('不能超过最大值，请重试')
            this.x = 0
          }
          break
        case 'yChange':
          if (!this.$u.validate.vCheckNonnegativeInteger(val)) {
            this.$zleMessage.warning('请输入正整数')
            this.y = 0
          }
          if (val > this.form.maxY) {
            this.$zleMessage.warning('不能超过最大值，请重试')
            this.y = 0
          }
          break
      }
    },
    /** 打印方法 */
    doPrint() {
      if (this.list.length > 0) {
        this.$router.push({
          path: '/previewPrint',
          query: { list: this.list }
        })
      }
      console.log(this.list)
      // const subOutputRankPrint = document.getElementById('print')
      // const newContent = subOutputRankPrint.innerHTML
      // const oldContent = document.body.innerHTML
      // document.body.innerHTML = newContent
      // window.print()
      // window.location.reload()
      // document.body.innerHTML = oldContent
      // return false
    },
    saveData() {
      if (this.list.length > 0) {
        this.$emit('saveData', { list: this.list, width: this.form.width, height: this.form.height })
        this.$u.tool._setLocalItem('printData', { list: this.list, width: this.form.width, height: this.form.height })
      } else {
        this.$zleMessage.warning('请先选择字段')
      }
    },
    onResize: function(x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function(x, y) {
      this.x = x
      this.y = y
      this.list[this.clickIndex].x = this.x
      this.list[this.clickIndex].y = this.y
    },
    /** 选择列下拉框 */
    changeName() {
      this.form.fontSize = ''
      this.form.color = ''
    },
    changeHeight() {
      this.form.fontSize = ''
    },
    /** 下拉框改变的时候进行动态设置样式 */
    changeVal(type) {
      if (type == 'String') {
        this.list[this.clickIndex].fontSize = this.form.fontSize
        this.list[this.clickIndex].lineHeight = this.form.lineHeight
        this.list[this.clickIndex].color = this.form.color
        this.list[this.clickIndex].isHide = this.form.isHide
        this.list[this.clickIndex].maxWidth = Number(this.form.maxWidth)
        this.list[this.clickIndex].maxHeight = Number(this.form.maxHeight)
      } else if (type == 'QrCode') {
        this.list[this.clickIndex].size = Number(this.form.size)
        this.list[this.clickIndex].showText = this.form.showText
      } else if (type == 'BarCode') {
        this.list[this.clickIndex].barWidth = Number(this.form.barWidth)
        this.list[this.clickIndex].barHeight = Number(this.form.barHeight)
      }
      this.list[this.clickIndex].x = Number(this.x)
      this.list[this.clickIndex].y = Number(this.y)
    },
    /** 公共的设置样式方法 */
    commonMethod(val) {}
  }
}
</script>

<style lang="scss" scoped>
/** 这里vdr的样式设置是为了当没有选中目标文字时，去掉默认的虚线框，只有选中的时候才有虚线框 */
.vdr {
  border: none;
}
.handle,
.active.vdr {
  border: 1px dashed #000;
}
.p-event {
  border: 1px solid #eee;
  /** 网格样式 */
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px;
}
::v-deep .el-input-number__decrease {
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
}
::v-deep .el-input-number__increase {
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-style {
  width: 220px;
}
.input-sm {
  width: 100px;
}
.print-box {
  width: 100%;
  height: calc(100% - 55px);
  display: flex;
  .left-box {
    flex: 1;
    height: 100%;
    // max-height: 100%;
  }
  .right-box {
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid #eee;
  }
  .show-print {
    height: 100%;
    max-width: 100%;
    overflow: auto;
  }
}
.left_box_inner {
  height: 100%;
  max-height: 100%;
  overflow: auto;
}
.page-break {
  page-break-after: always;
}
</style>
<style lang="scss" media="print" scoped>
/** 去掉页头和页尾 */
@page {
  size: auto; /* auto is the initial value */
  margin: 0mm; /* this affects the margin in the printer settings */

}
.p-event{
  border: none;
}
</style>


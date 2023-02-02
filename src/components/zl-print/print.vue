<template>
  <div class="print-component">
    <div class="operate-box">
      <zle-button @click="print">打印</zle-button>
      <zle-button @click="configureShow = true">打印配置</zle-button>
    </div>
    <zle-dialog class="configure-dialog" width="500" :title="'提示'" :visible="configureShow" @handleClose="configureClose">
      <div class="configure-form">
        <zle-form ref="form" :model="form" :rules="rules" label-width="120px" label-suffix=":">
          <zle-form-item label="纸张" prop="paperType">
            <zle-select v-model="form.paperType" clearable class="my-select" @change="paperTypeChange">
              <zle-option v-for="(item, index) in paperTypeList" :key="index" :label="item.label" :value="item.value.id" />
            </zle-select>
          </zle-form-item>
          <zle-form-item label="纸张方向" prop="pagePosition">
            <zle-select v-model="form.pagePosition" clearable class="my-select">
              <zle-option v-for="(item, index) in positionList" :key="index" :label="item.label" :value="item.value" />
            </zle-select>
          </zle-form-item>
          <zle-form-item label="宽度" prop="pageWidth">
            <zle-input-number v-model="form.pageWidth" type="number" :controls="true" :min="0" :max="3800" />
          </zle-form-item>
          <zle-form-item label="高度" prop="pageHeight">
            <zle-input-number v-model="form.pageHeight" type="number" :controls="true" :min="0" :max="2400" />
          </zle-form-item>
          <zle-form-item label="上边距" prop="pagePaddingTop">
            <zle-input-number v-model="form.pagePaddingTop" type="number" :controls="true" :min="0" :max="1000" />
          </zle-form-item>
          <zle-form-item label="下边距" prop="pagePaddingBottom">
            <zle-input-number v-model="form.pagePaddingBottom" type="number" :controls="true" :min="0" :max="1000" />
          </zle-form-item>
          <zle-form-item label="左边距" prop="pagePaddingLeft">
            <zle-input-number v-model="form.pagePaddingLeft" type="number" :controls="true" :min="0" :max="1000" />
          </zle-form-item>
          <zle-form-item label="右边距" prop="pagePaddingRight">
            <zle-input-number v-model="form.pagePaddingRight" type="number" :controls="true" :min="0" :max="1000" />
          </zle-form-item>
        </zle-form>
      </div>
      <template #footer>
        <zle-button @click="configureCancel">取 消</zle-button>
        <zle-button type="primary" @click="configureConfirm">确 定</zle-button>
      </template>
    </zle-dialog>
  </div>
</template>

<script>
export default {
  name: 'Print',
  props: {
    // 打印元素的ref
    printRef: {
      type: String,
      default: 'print'
    }
  },
  data() {
    return {
      configureShow: false,
      form: {
        // 纸张类型
        paperType: '3',
        // 纸张宽度
        pageWidth: '794',
        // 纸张高度
        pageHeight: '1123',
        // 上边距
        pagePaddingTop: '40',
        // 下边距
        pagePaddingBottom: '40',
        // 左边距
        pagePaddingLeft: '40',
        // 右边距
        pagePaddingRight: '40',
        // 纸张方向
        pagePosition: 0
      },
      // 校验
      rules: {},
      // 纸张列表
      paperTypeList: [
        {
          label: 'A1',
          value: {
            id: 0,
            width: '2245',
            height: '3179'
          }
        },
        {
          label: 'A2',
          value: {
            id: 1,
            width: '1587',
            height: '2245'
          }
        },
        {
          label: 'A3',
          value: {
            id: 2,
            width: '1123',
            height: '1587'
          }
        },
        {
          label: 'A4',
          value: {
            id: 3,
            width: '794',
            height: '1123'
          }
        },
        {
          label: 'A5',
          value: {
            id: 4,
            width: '560',
            height: '794'
          }
        }
      ],
      // 纸张打印方向
      positionList: [
        {
          label: '水平',
          value: 0
        },
        {
          label: '垂直',
          value: 1
        }
      ]
    }
  },
  watch: {
    configureShow() {
      if (this.configureShow) {
        Object.assign(this.form, this.$u.tool._getLocalItem('printConfigL'))
        this.$emit('printConfigChange', this.form)
      }
    }
  },
  methods: {
    print() {
      let options = this.$u.tool._getLocalItem('printConfigL') ? this.$u.tool._getLocalItem('printConfigL') : this.form
      this.$emit('print', options)
    },
    paperTypeChange(val) {
      if (val) {
        let paper = this.paperTypeList.find(v => v.value.id == val)
        this.form.pageWidth = paper.value.width
        this.form.pageHeight = paper.value.height
      }
    },
    configureClose() {
      this.configureShow = false
    },
    configureCancel() {
      this.configureShow = false
      this.form = this.$u.tool._getLocalItem('printConfigL')
      this.$emit('printConfigChange', this.form)
    },
    configureConfirm() {
      this.$u.tool._setLocalItem('printConfigL', this.form)
      this.$emit('printConfigChange', this.form)
      this.configureShow = false
      this.$zlMessage.success('保存成功')
    }
  }
}
</script>
<style lang="scss" scoped>
.my-select {
  width: 220px;
}
</style>

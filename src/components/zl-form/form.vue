<template>
  <!-- 表单数据渲染 -->
  <zle-form ref="zleFormRef" :size="config.size" :model="zleForm" :label-width="config.labelWidth" :label-position="config.labelPosition">
    <zle-row :gutter="10">
      <template v-for="(item, index) in config.formItems">
        <zle-col v-if="!hideHandle(item)" :key="index" :size="item.span || 24">
          <!-- <sc-title v-if="item.component=='title'" :title="item.label"></sc-title> -->
          <zle-form-item :prop="item.name" :rules="rulesHandle(item)">
            <template #label>
              {{ item.label }}
              <!-- <zle-tooltip v-if="item.tips" :content="item.tips">
                <zle-icon>
                  <zle-icon-question-filled />
                </zle-icon>
              </zle-tooltip> -->
            </template>
            <!-- input -->
            <template v-if="item.component=='input'">
              <zle-input v-model="zleForm[item.name]" :placeholder="item.options.placeholder" clearable :maxlength="item.options.maxlength" show-word-limit />
            </template>
            <!-- checkbox -->
            <template v-else-if="item.component=='checkbox'">
              <template v-if="item.name">
                <zle-checkbox v-for="(_item, _index) in item.options.items" :key="_index" v-model="zleForm[item.name][_item.name]" :label="_item.label" />
              </template>
              <template v-else>
                <zle-checkbox v-for="(_item, _index) in item.options.items" :key="_index" v-model="zleForm[_item.name]" :label="_item.label" />
              </template>
            </template>
            <!-- checkboxGroup -->
            <template v-else-if="item.component=='checkboxGroup'">
              <zle-checkbox-group v-model="zleForm[item.name]">
                <zle-checkbox v-for="_item in item.options.items" :key="_item.value" :label="_item.value">{{ _item.label }}</zle-checkbox>
              </zle-checkbox-group>
            </template>
            <!-- upload -->
            <template v-else-if="item.component=='upload'">
              <zle-upload v-model="zleForm[item.name]" />
            </template>
            <!-- switch -->
            <template v-else-if="item.component=='switch'">
              <zle-switch v-model="zleForm[item.name]" />
            </template>
            <!-- select -->
            <template v-else-if="item.component=='select'">
              <zle-select v-model="zleForm[item.name]" :multiple="item.options.multiple" :placeholder="item.options.placeholder" clearable filterable style="width: 100%;">
                <zle-option v-for="option in item.options.items" :key="option.value" :label="option.label" :value="option.value" />
              </zle-select>
            </template>
            <!-- cascader -->
            <template v-else-if="item.component=='cascader'">
              <zle-cascader v-model="zleForm[item.name]" :options="item.options.items" clearable />
            </template>
            <!-- date -->
            <template v-else-if="item.component=='date'">
              <zle-date-picker v-model="zleForm[item.name]" :type="item.options.type" :shortcuts="item.options.shortcuts" :default-time="item.options.defaultTime" :value-format="item.options.valueFormat" :placeholder="item.options.placeholder || '请选择'" />
            </template>
            <!-- number -->
            <template v-else-if="item.component=='number'">
              <zle-input-number v-model="zleForm[item.name]" controls-position="right" />
            </template>
            <!-- radio -->
            <template v-else-if="item.component=='radio'">
              <zle-radio-group v-model="zleForm[item.name]">
                <zle-radio v-for="_item in item.options.items" :key="_item.value" :label="_item.value">{{ _item.label }}</zle-radio>
              </zle-radio-group>
            </template>
            <!-- color -->
            <template v-else-if="item.component=='color'">
              <!-- <zle-color-picker v-model="zleForm[item.name]" /> -->
            </template>
            <!-- rate -->
            <template v-else-if="item.component=='rate'">
              <zle-rate v-model="zleForm[item.name]" style="margin-top: 6px;" />
            </template>
            <!-- slider -->
            <template v-else-if="item.component=='slider'">
              <zle-slider v-model="zleForm[item.name]" :marks="item.options.marks" />
            </template>
            <!-- tableselect -->
            <!-- <template v-else-if="item.component=='tableselect'">
              <tableselect-render v-model="zleForm[item.name]" :item="item"></tableselect-render>
            </template> -->
            <!-- editor -->
            <template v-else-if="item.component=='editor'">
              <zl-editor v-model="zleForm[item.name]" placeholder="请输入" :auto-size="item.autoSize||false" :height="item.height||'450px'" />
            </template>
            <!-- noComponent -->
            <template v-else>
              <zle-tag type="danger">[{{ item.component }}] Component not found</zle-tag>
            </template>
            <div v-if="item.message" class="zle-form-item-msg">{{ item.message }}</div>
          </zle-form-item>
        </zle-col>
      </template>
      <zle-col :span="24">
        <zle-form-item>
          <slot>
            <zle-button type="primary" @click="submit">提交</zle-button>
          </slot>
        </zle-form-item>
      </zle-col>
    </zle-row>
  </zle-form>
</template>

<script>
import ZlEditor from '@/components/zl-editor/editor'
export default {
  components: {
    ZlEditor
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: { type: Object, default: () => { } },
    config: { type: Object, default: () => { } },
    loading: { type: Boolean, default: false }
  },
  data() {
    return {
      zleForm: {},
      renderLoading: false
    }
  },
  computed: {
    hasConfig() {
      return Object.keys(this.config).length > 0
    },
    hasValue() {
      return Object.keys(this.value).length > 0
    }
  },
  watch: {
    value() {
      if (this.hasConfig) {
        this.deepMerge(this.zleForm, this.value)
      }
    },
    config() {
      this.render()
    },
    zleForm: {
      handler(val) {
        this.$emit('update:value', val)
      },
      deep: true
    }
  },
  created() {

  },
  mounted() {
    if (this.hasConfig) {
      this.render()
    }
  },
  methods: {
    // 构建form对象
    render() {
      this.config.formItems.forEach((item) => {
        if (item.component == 'checkbox') {
          if (item.name) {
            const value = {}
            item.options.items.forEach((option) => {
              value[option.name] = option.value
            })
            this.$set(this.zleForm, item.name, value)
          } else {
            item.options.items.forEach((option) => {
              this.$set(this.zleForm, option.name, option.value)
            })
          }
        } else if (item.component == 'upload') {
          this.$set(this.zleForm, item.name, item.options.items)
        } else {
          this.$set(this.zleForm, item.name, item.value)
        }
      })
      if (this.hasValue) {
        this.zleForm = this.deepMerge(this.zleForm, this.value)
      }
      this.getData()
    },
    // 处理远程选项数据
    getData() {
      this.renderLoading = true
      var remoteData = []
      this.config.formItems.forEach((item) => {
        if (item.options && item.options.remote) {
          var req = this.$http.get(item.options.remote.api, item.options.remote.data).then(res => {
            item.options.items = res.data
          })
          remoteData.push(req)
        }
      })
      Promise.all(remoteData).then(() => {
        this.renderLoading = false
      })
    },
    // 合并深结构对象
    deepMerge(obj1, obj2) {
      let key
      for (key in obj2) {
        obj1[key] = obj1[key] && obj1[key].toString() === '[object Object]' && (obj2[key] && obj2[key].toString() === '[object Object]') ? this.deepMerge(obj1[key], obj2[key]) : (obj1[key] = obj2[key])
      }
      return obj1
      // return JSON.parse(JSON.stringify(obj1))
    },
    // 处理动态隐藏
    hideHandle(item) {
      if (item.hideHandle) {
        // eslint-disable-next-line no-eval
        const exp = eval(item.hideHandle.replace(/\$/g, 'this.zleForm'))
        return exp
      }
      return false
    },
    // 处理动态必填
    rulesHandle(item) {
      if (item.requiredHandle) {
        // eslint-disable-next-line no-eval
        const exp = eval(item.requiredHandle.replace(/\$/g, 'this.zleForm'))
        var requiredRule = item.rules.find(t => 'required' in t)
        requiredRule.required = exp
      }
      return item.rules
    },
    // 数据验证
    validate(valid, obj) {
      return this.$refs.zleFormRef.validate(valid, obj)
    },
    scrollToField(prop) {
      return this.$refs.zleFormRef.scrollToField(prop)
    },
    resetFields() {
      return this.$refs.zleFormRef.resetFields()
    },
    // 提交
    submit() {
      this.$emit('submit', this.zleForm)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

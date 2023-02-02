<template>
  <div>
    <zl-header> Cascader 级联选择器 </zl-header>
    <zl-section header="基础用法">
      <div class="box">
        <div class="block">
          <div class="demonstration">默认 click 触发子菜单</div>
          <zle-cascader v-model="value" :options="options" @change="handleChange" />
        </div>
        <div class="block">
          <div class="demonstration">hover 触发子菜单</div>
          <zle-cascader v-model="value1" :options="options" :props="{ expandTrigger: 'hover' }" @change="handleChange" />
        </div>
      </div>
      <hr>
      <div>{{ '当前值：' + value + '  ' + value1 }}</div>
    </zl-section>
    <zl-section header="多选">
      <div class="box">
        <div class="block">
          <div class="demonstration">默认显示所有Tag</div>
          <zle-cascader v-model="value2" :props="props" :options="options" @change="handleChange" />
        </div>
        <div class="block">
          <div class="demonstration">折叠展示Tag</div>
          <zle-cascader v-model="value3" :props="props" collapse-tags :options="options" @change="handleChange" />
        </div>
      </div>
      <hr>
      <div>{{ '当前值：' + value2 + '  ' + value3 }}</div>
    </zl-section>
    <zl-section header="选择任意一级选项">
      <div class="box">
        <div class="block">
          <div class="demonstration">单选选择任意一级选项</div>
          <zle-cascader v-model="value4" :props="{ checkStrictly: true }" :options="options" @change="handleChange" />
        </div>
        <div class="block">
          <div class="demonstration">多选选择任意一级选项</div>
          <zle-cascader v-model="value5" :props="{ multiple: true, checkStrictly: true }" :options="options" @change="handleChange" />
        </div>
      </div>
      <hr>
      <div>{{ '当前值：' + value4 + '  ' + value5 }}</div>
    </zl-section>
    <zl-section header="可搜索">
      <div class="box">
        <div class="block">
          <div class="demonstration">单选可搜索</div>
          <zle-cascader v-model="value6" :props="{ checkStrictly: true }" filterable :options="options" @change="handleChange" />
        </div>
        <div class="block">
          <div class="demonstration">多选可搜索</div>
          <zle-cascader v-model="value7" :props="{ multiple: true, checkStrictly: true }" filterable :options="options" @change="handleChange" />
        </div>
      </div>
      <hr>
      <div>{{ '当前值：' + value6 + '  ' + value7 }}</div>
    </zl-section>
    <zl-section header="动态加载">
      <zle-cascader v-model="value8" :props="props1" clearable />
      <hr>
      <div>{{ '当前值：' + value8 }}</div>
    </zl-section>
    <zl-section header="仅显示最后一级">
      <zle-cascader v-model="value9" :options="options" :show-all-levels="false" />
      <hr>
      <div>{{ '当前值：' + value9 }}</div>
    </zl-section>
    <zl-section header="自定义节点内容">
      <zle-cascader v-model="value10" :options="options">
        <template slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
      </zle-cascader>
      <hr>
      <div>{{ '当前值：' + value10 }}</div>
    </zl-section>
    <zl-section header="级联面板">
      <zle-cascader-panel v-model="value11" :options="options" style="border: 0px" />
      <hr>
      <div>{{ '当前值：' + value11 }}</div>
    </zl-section>
  </div>
</template>

<script>
let id = 0
export default {
  data() {
    return {
      props1: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(item => ({
              value: ++id,
              label: `选项${id}`,
              leaf: level >= 2
            }))
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes)
          }, 1000)
        }
      },
      props: { multiple: true },
      value: [],
      value1: [],
      value2: [],
      value3: [],
      value4: [],
      value5: [],
      value6: [],
      value7: [],
      value8: [],
      value9: [],
      value10: [],
      value11: [],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'tabs 标签'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ]
    }
  },
  created() {},
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  display: flex;
}
.block {
  text-align: center;
  margin-right: 20px;
}
</style>

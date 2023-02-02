<template>
  <div>
    <zl-header> Select 选择器 </zl-header>
    <zl-section header="基础用法">
      <zle-select v-model="value" placeholder="请选择">
        <zle-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zle-select>
      <hr>
      <div>{{ '当前值：' + value }}</div>
    </zl-section>
    <zl-section header="可清空单选 clearable ">
      <zle-select v-model="value0" placeholder="请选择" clearable>
        <zle-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zle-select>
      <hr>
      <div>{{ '当前值：' + value0 }}</div>
    </zl-section>
    <zl-section header="基础多选 multiple  ">
      <zle-select v-model="value1" placeholder="请选择" multiple>
        <zle-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zle-select>
      <zle-select v-model="value2" placeholder="请选择" multiple collapse-tags style="margin-left: 20px">
        <zle-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zle-select>
      <hr>
      <div>{{ '当前值：' + value1 + '  ' + value2 }}</div>
    </zl-section>
    <zl-section header="自定义模板 ">
      <zle-select v-model="value5" placeholder="请选择" clearable>
        <zle-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </zle-option>
      </zle-select>
      <hr>
      <div>{{ '当前值：' + value5 }}</div>
    </zl-section>
    <zl-section header="分组">
      <zle-select v-model="value6" placeholder="请选择" clearable>
        <zle-option-group v-for="group in options2" :key="group.label" :label="group.label">
          <zle-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
        </zle-option-group>
      </zle-select>
      <hr>
      <div>{{ '当前值：' + value6 }}</div>
    </zl-section>
    <zl-section header="可搜索">
      <zle-select v-model="value8" placeholder="请选择" clearable filterable>
        <zle-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zle-select>
      <hr>
      <div>{{ '当前值：' + value8 }}</div>
    </zl-section>
    <zl-section header="远程搜索">
      <zle-select v-model="value9" placeholder="请选择" clearable filterable multiple remote reserve-keyword :remote-method="remoteMethod" :loading="loading">
        <zle-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value" />
      </zle-select>
      <hr>
      <div>{{ '当前值：' + value9 }}</div>
    </zl-section>
    <zl-section header="创建条目 allow-create filterable default-first-option">
      <zle-select v-model="value7" multiple filterable allow-create default-first-option placeholder="请选择文章标签">
        <zle-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" />
      </zle-select>
      <hr>
      <div>{{ '当前值：' + value7 }}</div>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      options2: [
        {
          label: '热门城市',
          options: [
            {
              value: 'Shanghai',
              label: '上海'
            },
            {
              value: 'Beijing',
              label: '北京'
            }
          ]
        },
        {
          label: '城市名',
          options: [
            {
              value: 'Chengdu',
              label: '成都'
            },
            {
              value: 'Shenzhen',
              label: '深圳'
            },
            {
              value: 'Guangzhou',
              label: '广州'
            },
            {
              value: 'Dalian',
              label: '大连'
            }
          ]
        }
      ],
      options3: [
        {
          value: 'HTML',
          label: 'HTML'
        },
        {
          value: 'CSS',
          label: 'CSS'
        },
        {
          value: 'JavaScript',
          label: 'JavaScript'
        }
      ],
      value: '',
      value1: [],
      value2: [],
      cities: [
        {
          value: 'Beijing',
          label: '北京'
        },
        {
          value: 'Shanghai',
          label: '上海'
        },
        {
          value: 'Nanjing',
          label: '南京'
        },
        {
          value: 'Chengdu',
          label: '成都'
        },
        {
          value: 'Shenzhen',
          label: '深圳'
        },
        {
          value: 'Guangzhou',
          label: '广州'
        }
      ],
      value5: '',
      value0: '',
      value6: '',
      value8: '',
      value7: [],
      value9: [],
      loading: false,
      list: [],
      options4: [],
      states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }
  },
  created() {},
  mounted() {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` }
    })
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 500)
      } else {
        this.options4 = []
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>

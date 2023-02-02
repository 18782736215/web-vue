<template>
  <div>
    <zl-header> Checkbox 多选框 </zl-header>
    <zl-section header="基础用法">
      <!-- `checked` 为 true 或 false -->
      <zle-checkbox v-model="checked">备选项</zle-checkbox>
      <zle-checkbox v-model="checked2">备选项</zle-checkbox>
      <hr>
      <div>
        {{ checked }}
        {{ checked2 }}
      </div>
    </zl-section>
    <zl-section header="禁用状态">
      <zle-checkbox v-model="checked" disabled>备选项</zle-checkbox>
      <zle-checkbox v-model="checked2" disabled>备选项</zle-checkbox>
      <hr>
      <div>
        {{ checked }}
        {{ checked2 }}
      </div>
    </zl-section>
    <zl-section header="多选框组">
      <zle-checkbox-group v-model="checkList">
        <zle-checkbox label="复选框 A" />
        <zle-checkbox label="复选框 B" />
        <zle-checkbox label="复选框 C" />
        <zle-checkbox label="禁用" disabled />
        <zle-checkbox label="选中且禁用" disabled />
      </zle-checkbox-group>
      <hr>
      <div>
        {{ checkList }}
      </div>
    </zl-section>
    <zl-section header="indeterminate 状态">
      <zle-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange(checkAll)">全选</zle-checkbox>
      <div style="margin: 15px 0" />
      <zle-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <zle-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</zle-checkbox>
      </zle-checkbox-group>
      <hr>
      <div>
        {{ checkAll }}
        {{ checkedCities }}
      </div>
    </zl-section>
    <zl-section header="按钮样式">
      <div>
        <zle-checkbox-group v-model="checkboxGroup1">
          <zle-checkbox-button v-for="city in cities" :key="city" :label="city">{{ city }}</zle-checkbox-button>
        </zle-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <zle-checkbox-group v-model="checkboxGroup2" size="medium">
          <zle-checkbox-button v-for="city in cities" :key="city" :label="city">{{ city }}</zle-checkbox-button>
        </zle-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <zle-checkbox-group v-model="checkboxGroup3" size="small">
          <zle-checkbox-button v-for="city in cities" :key="city" :label="city" :disabled="city === '北京'">{{ city }}</zle-checkbox-button>
        </zle-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <zle-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
          <zle-checkbox-button v-for="city in cities" :key="city" :label="city">{{ city }}</zle-checkbox-button>
        </zle-checkbox-group>
      </div>
      <hr>
      <div>  {{ checkboxGroup1 }}</div>
      <div>  {{ checkboxGroup2 }}</div>
      <div>  {{ checkboxGroup3 }}</div>
      <div>  {{ checkboxGroup4 }}</div>
    </zl-section>
    <zl-section header="带有边框">
      <div>
        <zle-checkbox v-model="checked1" label="备选项1" border />
        <zle-checkbox v-model="checked2" label="备选项2" border />
      </div>
      <div style="margin-top: 20px">
        <zle-checkbox v-model="checked3" label="备选项1" border size="medium" />
        <zle-checkbox v-model="checked4" label="备选项2" border size="medium" />
      </div>
      <div style="margin-top: 20px">
        <zle-checkbox-group v-model="checkboxGroup5" size="small">
          <zle-checkbox label="备选项1" border />
          <zle-checkbox label="备选项2" border disabled />
        </zle-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <zle-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
          <zle-checkbox label="备选项1" border />
          <zle-checkbox label="备选项2" border />
        </zle-checkbox-group>
      </div>
      <hr>
      <div>  {{ checked1 }} {{ checked2 }}</div>
      <div>  {{ checked3 }} {{ checked4 }}</div>
      <div>  {{ checkboxGroup5 }}</div>
      <div>  {{ checkboxGroup6 }}</div>
    </zl-section>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data() {
    return {
      checked: true,
      checked2: true,
      checked3: false,
      checked4: true,
      checked1: true,
      checkList: ['选中且禁用', '复选框 A'],
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: true,
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: ['上海'],
      checkboxGroup5: ['上海'],
      checkboxGroup6: ['上海']
    }
  },
  created() {},
  methods: {
    handleCheckAllChange(val) {
      console.log(val)
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>

<style scoped lang="scss">
</style>

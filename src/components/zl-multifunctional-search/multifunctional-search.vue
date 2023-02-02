<template>
  <div>
    <zle-form ref="searchForm" class="my_form" :model="searchForm" label-width="0">
      <div class="searchForm_box">
        <div v-for="(v, index) in searchForm.searchData" :key="index" class="flex_a_center">
          <zle-form-item>
            <div class="my_select_input">
              <zle-select v-if="index > 0" v-model="v.searchName1" placeholder="请选择">
                <zle-option v-for="(item,i) in connectList" :key="i" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </div>
          </zle-form-item>
          <zle-form-item> 第{{ index + 1 }}组</zle-form-item>
          <zle-form-item>
            <zle-select v-model="v.searchName2" class="my-select" placeholder="请选择">
              <zle-option v-for="(item,i) in optionList" :key="i" :label="item[labelName]" :value="item[valueKey]" />
            </zle-select>
          </zle-form-item>
          <zle-form-item>
            <zle-select v-model="v.searchName3" class="my-select" placeholder="请选择">
              <zle-option v-for="(item,i) in conditionList" :key="i" :label="item[labelName]" :value="item[valueKey]" />
            </zle-select>
          </zle-form-item>
          <zle-form-item>
            <zle-input v-model="v.searchName4" class="my-input" placeholder="请输入" />
          </zle-form-item>
        </div>
      </div>
      <div>
        <div class="btn_item flex_b_center">
          <div class="btn_box">
            <zle-button type="primary" icon="el-icon-search" @click="operateM('search')">查询</zle-button>
            <zle-button type="info" icon="el-icon-refresh-left" @click="operateM('reset')">重置</zle-button>
          </div>
          <div>
            <zle-button v-if="searchForm.searchData.length != optionList.length" type="primary" icon="el-icon-plus" circle @click="operateM('add')" />
            <!-- <i v-if="!state" class="el-icon-arrow-down icon_item cursor" @click="operateM('screen')" />
            <i v-else class="el-icon-arrow-up icon_item cursor" @click="operateM('screen')" /> -->
          </div>
        </div>
      </div>
    </zle-form>
  </div>
</template>
<script>
export default {
  name: 'ZlMultifunctionalSearch',
  props: {
    // 搜索条件list
    conditionList: {
      type: Array,
      default: () => []
    },
    connectList: {
      type: Array,
      default: () => []
    },
    // 搜索选项list
    optionList: {
      type: Array,
      default: () => []
    },
    // 名称
    labelName: {
      type: String,
      default: 'label'
    },
    // 唯一id
    valueKey: {
      type: String,
      default: 'value'
    }
  },
  data() {
    return {
      state: false,
      searchForm: {
        searchData: [
          { searchName1: '', searchName2: this.optionList[0][this.valueKey], searchName3: this.conditionList[0][this.valueKey], searchName4: '' },
          { searchName1: this.connectList[0][this.valueKey], searchName2: this.optionList[1][this.valueKey], searchName3: this.conditionList[0][this.valueKey], searchName4: '' }
        ]
      }
    }
  },
  methods: {
    operateM(type) {
      switch (type) {
        case 'search':
          // 搜索
          this.$emit('searchChange', this.searchForm)
          break
        case 'reset':
          // 重置
          this.searchForm = {
            searchData: [
              { searchName1: '', searchName2: this.optionList[0][this.valueKey], searchName3: this.conditionList[0][this.valueKey], searchName4: '' },
              { searchName1: this.connectList[0][this.valueKey], searchName2: this.optionList[1][this.valueKey], searchName3: this.conditionList[0][this.valueKey], searchName4: '' }
            ]
          }
          this.$emit('resetChange', this.searchForm)
          break
        // case 'screen':
        //   this.state = !this.state
        //   break
        case 'add':
        // 添加搜索条件
          if (this.optionList.length > this.searchForm.searchData.length) {
            this.searchForm.searchData.push({ searchName1: this.connectList[0][this.valueKey], searchName2: this.optionList[this.searchForm.searchData.length][this.valueKey], searchName3: this.conditionList[0][this.valueKey], searchName4: '' })
          }
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-select {
  width: 8vw;
  padding: 0 8px;
}
.my_select_input {
  width: 5vw;
  padding: 0 8px;
}
.searchForm_box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
.btn_item{
  text-align: center;
}
.icon_item{
  font-size: 30px;
  color: #0c64eb;
}
.btn_box{
  width: 54%;
  text-align: right;
}
.my-input{
  width:15vw
}
</style>

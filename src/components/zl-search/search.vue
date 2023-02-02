<template>
  <table>
    <tr>
      <td class="w_400">
        <table>
          <tr>
            <td class="text_item"><span>第一组</span></td>
            <td class="fiel_w">
              <zle-select v-model="form.searchOne" class="form-control" placeholder="请选择">
                <zle-option v-for="(item,index) in optionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="operator_w">
              <zle-select v-model="form.searchTwo" class="form-control" placeholder="请选择">
                <zle-option v-for="(item,index) in conditionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="td_item">
              <zle-input v-model="form.searchThree" class="form-control my-select" placeholder="请输入" />
            </td>
          </tr>
          <tr v-if="state">
            <td class="text_item">
              <zle-select v-model="form.searchFour" placeholder="请选择" class="my_select_search">
                <zle-option v-for="(item,index) in connectList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="fiel_w">
              <zle-select v-model="form.searchFive" class="form-control" placeholder="请选择">
                <zle-option v-for="(item,index) in optionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="operator_w">
              <zle-select v-model="form.searchSix" class="form-control " placeholder="请选择">
                <zle-option v-for="(item,index) in conditionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td>
              <zle-input v-model="form.searchSeven" class="form-control my-select" placeholder="请输入" />
            </td>
          </tr>
          <tr v-if="state">
            <td class="text_item">
              <zle-select v-model="form.searchEight" placeholder="请选择" class="my_select_search">
                <zle-option v-for="(item,index) in connectList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="fiel_w">
              <zle-select v-model="form.searchNine" class="form-control" placeholder="请选择">
                <zle-option v-for="(item,index) in optionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="operator_w">
              <zle-select v-model="form.searchTen" class="form-control " placeholder="请选择">
                <zle-option v-for="(item,index) in conditionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td>
              <zle-input v-model="form.searchEleven" class="form-control my-select" placeholder="请输入" />
            </td>
          </tr>
        </table>
      </td>
      <td class="middle_box">
        <div>
          <zle-select v-model="form.searchTwelve" class="middle_my_select" placeholder="请选择">
            <zle-option v-for="(item,index) in connectList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
          </zle-select>
        </div>
      </td>
      <td class="w_400">
        <table>
          <tr>
            <td class="text_item"><span>第二组</span></td>
            <td class="fiel_w">
              <zle-select v-model="form.searchThirteen" class="form-control" placeholder="请选择">
                <zle-option v-for="(item,index) in optionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="operator_w">
              <zle-select v-model="form.searchFourteen" class="form-control " placeholder="请选择">
                <zle-option v-for="(item,index) in conditionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="td_item">
              <zle-input v-model="form.searchFifteen" class="form-control my-select" placeholder="请输入" />
            </td>
          </tr>
          <tr v-if="state">
            <td class="text_item">
              <zle-select v-model="form.searchSixteen" placeholder="请选择" class="my_select_search">
                <zle-option v-for="(item,index) in connectList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="fiel_w">
              <zle-select v-model="form.searchSeventeen" class="form-control" placeholder="请选择">
                <zle-option v-for="(item,index) in optionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="operator_w">
              <zle-select v-model="form.searchEighteen" class="form-control " placeholder="请选择">
                <zle-option v-for="(item,index) in conditionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td>
              <zle-input v-model="form.searchNineteen" class="form-control my-select" placeholder="请输入" />
            </td>
          </tr>
          <tr v-if="state">
            <td class="text_item">
              <zle-select v-model="form.searchTwenty" placeholder="请选择" class="my_select_search">
                <zle-option v-for="(item,index) in connectList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="fiel_w">
              <zle-select v-model="form.searchTwentyOne" class="form-control" placeholder="请选择">
                <zle-option v-for="(item,index) in optionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td class="operator_w">
              <zle-select v-model="form.searchTwentyTwo" class="form-control " placeholder="请选择">
                <zle-option v-for="(item,index) in conditionList" :key="index" :label="item[labelName]" :value="item[valueKey]" />
              </zle-select>
            </td>
            <td>
              <zle-input v-model="form.searchTwentyThree" class="form-control my-select" placeholder="请输入" />
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td colspan="3">
        <div class="btn_item flex_b_center">
          <div class="btn_box">
            <zle-button type="primary" @click="operateM('search')">搜索</zle-button>
            <zle-button type="primary" @click="operateM('reset')">重置</zle-button>
          </div>
          <div>
            <i v-if="!state" class="el-icon-arrow-down icon_item cursor" @click="operateM('screen')" />
            <i v-else class="el-icon-arrow-up icon_item cursor" @click="operateM('screen')" />
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  name: 'Search',
  props: {
    // 搜索条件list
    conditionList: {
      type: Array,
      default: () => []
    },
    // 连接搜索条件list
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
      // 搜索条件
      form: {
        searchOne: '',
        searchTwo: '',
        searchThree: '',
        searchFour: '',
        searchFive: '',
        searchSix: '',
        searchSeven: '',
        searchEight: '',
        searchNine: '',
        searchTen: '',
        searchEleven: '',
        searchTwelve: '',
        searchThirteen: '',
        searchFourteen: '',
        searchFifteen: '',
        searchSixteen: '',
        searchSeventeen: '',
        searchEighteen: '',
        searchNineteen: '',
        searchTwenty: '',
        searchTwentyOne: '',
        searchTwentyTwo: '',
        searchTwentyThree: ''
      }
    }
  },
  methods: {
    operateM(type) {
      switch (type) {
        case 'search':
          // 搜索
          this.$emit('searchChange', this.form)
          break
        case 'reset':
          // 重置
          this.form = this.$options.data().form
          this.$emit('resetChange', this.form)
          break
        case 'screen':
          this.state = !this.state
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.w_400 {
  width: 33vw;
  .text_item {
    width: 110px;
    text-align: right;
  }
  .fiel_w {
    width: 140px;
  }
  .operator_w {
    width: 120px;
  }
  .form-control {
    padding: 5px 8px;
  }
  .my-select {
    width: 95%;
  }
  .my_select_search{
    padding-left: 8px;
  }
  .td_item{
    width: 48%;
  }

}
.middle_my_select{
    width: 80%;
  }
.middle_box{
    text-align: center;
}
.btn_item{
  margin-top: 20px;
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
</style>

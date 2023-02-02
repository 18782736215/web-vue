<template>
  <div class="flex_column">
    <div class="section flex_a_center">
      <span class="search_label">信息来源</span>
      <zle-input v-model.trim="searchParam.origin" size="small" class="my-search_input" placeholder="信息来源" maxlength="50" />
      <span class="search_label">发布人</span>
      <zle-input v-model.trim="searchParam.name" size="small" class="my-search_input" placeholder="发布人" maxlength="50" />
      <zle-button type="info">重置</zle-button>
      <zle-button type="primary">搜索</zle-button>
    </div>
    <div class="section flex_1_auto flex_column">
      <div class="flex_1_auto">
        <zle-table :data="tableData" height="100%">
          <zle-table-column prop="code" label="文章标题" min-width="260" show-overflow-tooltip align="center" />
          <zle-table-column prop="name" label="信息来源" width="200" align="center" />
          <zle-table-column prop="contacts" label="发布时间" width="150" align="center" />
          <zle-table-column prop="phone" label="发布人" align="center" />
          <zle-table-column prop="state" label="状态" align="center" />
          <zle-table-column label="操作" align="center">
            <zle-button type="text">查看</zle-button>
            <zle-button type="text">通过</zle-button>
            <zle-button type="text">驳回</zle-button>
          </zle-table-column>
        </zle-table>
      </div>
      <zle-pagination class="my_page" :page.sync="searchParam.current" :size.sync="searchParam.size" :total="total" @pagination="changePage" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      searchParam: {
        current: 1,
        size: 10,
        origin: '',
        name: ''
      },
      total: 100, //
      tableData: [
        {
          code: '德阳市人民政府关于印发《支持加快建设世界级清洁能源支持加快建设世界级清洁能源支持加快建设世界级清洁能源支持加快建设世界级清洁能源》',
          name: '亚度家具',
          contacts: '2022-09-15 08:15:42',
          phone: '13456678555',
          address: '中江县兴隆镇',
          type: '门店',
          settlementMethod: '货到付款',
          state: '2'
        },
        {
          code: '德阳市人民政府关于印发《支持加快建设世界级清洁能源支持加快建设世界级清洁能源支持加快建设世界级清洁能源支持加快建设世界级清洁能源》',
          name: '亚度家具',
          contacts: '2022-09-15 08:15:42',
          phone: '13456678555',
          address: '中江县兴隆镇',
          type: '门店',
          settlementMethod: '货到付款',
          state: '1'
        },
        {
          code: '德阳市人民政府关于印发《支持加快建设世界级清洁能源支持加快建设世界级清洁能源支持加快建设世界级清洁能源支持加快建设世界级清洁能源》',
          name: '全一定制',
          contacts: '2022-09-15 08:15:42',
          phone: '13456789012',
          address: '成都市武侯区',
          detailedAddress: '详细地址', // 详细地址
          type: '工厂',
          settlementMethod: '预付款',
          state: '0'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
    ])
  },
  methods: {
    changePage(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped></style>

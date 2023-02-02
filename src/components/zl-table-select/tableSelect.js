// 表格选择器配置

export default {
  pageSize: 20,						// 表格每一页条数
  parseData: function(res) {
    res.responseBody = res.responseBody || {}
    return {
      data: res,
      records: res.responseBody.records,		// 分析行数据字段结构
      total: res.responseBody.total		// 分析总数字段结构
    }
  },
  request: {
    page: 'current',					// 规定当前分页字段
    pageSize: 'size',			// 规定一页条数字段
    keyword: 'keyword'				// 规定搜索字段
  },
  props: {
    label: 'label',					// 映射label显示字段
    value: 'value'					// 映射value值字段
  }
}

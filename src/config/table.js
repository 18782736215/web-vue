const table = {
  // 表格配置
  headerCellStyle: { // 表格头部样式
    whiteSpace: 'nowrap',
    fontSize: '12px',
    color: '#333',
    fontWeight: '700',
    background: '#f5f5f5'
  },
  expandHeaderCell: { // 表格展开样式
    whiteSpace: 'nowrap',
    fontSize: '12px',
    color: '#333',
    fontWeight: '700',
    background: '#f5f5f5',
    padding: 0
  },
  pages: {
    pageSize: 10,
    size: [10, 20, 30, 40],
    layout: 'total,prev, pager, next, sizes'
  }
}

export default { ...table }

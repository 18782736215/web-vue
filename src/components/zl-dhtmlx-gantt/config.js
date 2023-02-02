import { yearScaleTemplate, monthScaleTemplate, yearScaleCss, monthScaleCss } from './utils'

export const config = {
  // 自适应甘特图的尺寸大小, 使得在不出现滚动条的情况下, 显示全部任务
  autosize: false,
  // 是否只读
  readonly: false,
  // 是否显示左侧树表格
  show_grid: true,
  // 表头高度
  scale_height: 50,
  // 自适应
  fit_tasks: false,
  // 禁用双击事件
  details_on_dblclick: false,
  // 关闭所有错误提示信息：gantt有自己的异常消息，如果不关闭可能页面会弹出异常消息
  show_errors: false,
  // 禁止拖动任务
  drag_move: false,
  // 禁止拖动任务进度
  drag_progress: false,
  // 禁止拖放添加Link
  drag_links: false,
  // 甘特图展示列表
  scales: [
    { unit: 'year', step: 1, format: yearScaleTemplate, css: yearScaleCss },
    { unit: 'month', step: 1, format: monthScaleTemplate, css: monthScaleCss }
  ],
  // 展示列
  columns: [
    {
      // 最左侧新增符号列，甘特图内置可选使用列
      name: 'add',
      label: '',
      width: '40',
      align: 'center'
    },
    {
      name: 'buttons',
      label: '选择',
      width: '40',
      template: function(task) {
        return '<input id="checkOne" type="checkbox" style="margin-top: 10px;" name="taskCheckBox" id="taskCheckBoxId" value="' + task.id + '" />'
      },
      align: 'center'
    },
    {
      name: 'no',
      label: '任务编号',
      tree: true,
      width: '120',
      align: 'center'
    },
    {
      name: 'text',
      label: '任务名称',
      // tree: true,
      width: '150',
      align: 'center'
    },
    {
      name: 'roleName',
      label: '角色',
      width: '80',
      align: 'center'
    },
    {
      name: 'ownerName',
      label: '执行人',
      width: '80',
      align: 'center'
    },
    {
      name: 'start_date',
      label: '计划开始时间',
      align: 'center',
      width: '120'
    },
    {
      name: 'end_date',
      label: '计划结束时间',
      align: 'center',
      width: '120'
    }
    // TODO 增加删除操作，当前可以实现删除，但是有报错
    // {
    //   name: 'delete',
    //   label: '删除',
    //   width: '100',
    //   align: 'center',
    //   template: function(task) {
    //     return '<button id="delButton" style="color:red;margin-top: 6px;font-size: 12px;">删除</button>'
    //   }
    // }
  ],
  // 和灯箱对应的列名称
  locale: {
    labels: {
      section_no: '任务编号',
      section_text: '任务名称',
      section_role_name: '角色',
      section_owner_name: '执行人',
      section_start_date: '计划开始时间',
      section_end_date: '计划结束时间'
    }
  },
  // 灯箱设置 https://docs.dhtmlx.com/gantt/api__gantt_lightbox_config.html
  lightbox: {
    sections: [
      { name: 'no', height: 22, map_to: 'no', type: 'textarea', focus: true },
      {
        name: 'text',
        height: 32,
        map_to: 'text',
        type: 'textarea'
      },
      {
        name: 'role_name',
        map_to: 'roleName',
        type: 'select',
        options: [
          {
            key: '管理员A',
            label: '管理员A'
          },
          {
            key: '管理员B',
            label: '管理员B'
          }
        ]
      },
      {
        name: 'owner_name',
        map_to: 'ownerName',
        type: 'select',
        options: [
          {
            key: '小王',
            label: '小王'
          },
          {
            key: '小刘',
            label: '小刘'
          }
        ]
      },
      { name: 'start_date', map_to: 'start_date', type: 'duration' },
      { name: 'end_date', map_to: 'end_date', type: 'duration' }
    ]
  },
  // 列的名称 用于tooltip
  customName: {
    no: '任务编号',
    text: 'Task',
    role: 'Role',
    roleName: 'RoleName',
    ownerName: 'Owner'
  }
}

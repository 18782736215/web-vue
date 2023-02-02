const checkType = header => {
  header = `${header}`
  const enumType = ['feat', 'fix', 'style', 'chore', 'test', 'ci', 'refactor', 'revert', 'reformat', 'docs', 'perf']
  const realType = header.split(':')[0]
  return enumType.includes(realType)
}

const checkSubject = header => {
  header = `${header}`
  const realSubject = header.split(':')[1]
  if (!realSubject) {
    return false
  }
  return realSubject.length > 0
}

module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build' // 打包
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  },
  plugins: [
    {
      rules: {
        'type-enum-rule': ({ header }) => {
          return [checkType(header), '需要包含提交类型，格式如: "feat(人员管理): 功能开发" 中的feat, ' + '可选值有: feat|fix|style|chore|test|ci|refactor|revert|reformat|docs|perf, 类型后面紧跟英文冒号分隔主题信息']
        },
        'subject-enum-rule': ({ header }) => {
          return [checkSubject(header), '需要包含提交主题, 格式如: "feat(人员管理): 功能开发" 中的 开发新功能']
        }
      }
    }
  ]
}

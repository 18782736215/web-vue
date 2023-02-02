module.exports = {
  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  singleQuote: true,
  // 每行末尾自动添加分号
  semi: false,
  // tab缩进大小,默认为2
  tabWidth: 2,
  // 使用tab缩进，默认false
  useTabs: false,
  // 对象属性最后有 ","
  // trailingComma: 'es5',
	trailingComma: 'none',
  // 对象中打印空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'avoid',
  // 换行长度，默认80
  printWidth: 2000,

  // 设置为true时,将多行JSX元素的 > 放在最后一行的末尾，而不是单独放在下一行
  // 设置为false时
  jsxBracketSameLine: true,
  // 使能每一种语言默认格式化规则
  '[html]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode'
  },
  '[css]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode'
  },
  '[scss]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode'
  },
  '[javascript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode'
  }
}

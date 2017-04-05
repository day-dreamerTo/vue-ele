module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here 配置为0时表示不允许
  'rules': {
    // allow paren-less arrow functions 允许箭头函数前面不写括号
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development 当前环境是开发环境就允许debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //允许分号
    'semi':['error','always'],
    //忽略缩进
    'indent':0,
    //data和()之间的空格忽略
    'space-before-function-paren':0
  }
}

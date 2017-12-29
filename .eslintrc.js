module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
    'standard',
    'promise'
  ],
  // add your custom rules here
  rules: {
  	/*逗号后非行尾需要加空格*/
	'comma-spacing': [1, { "before": false, "after": true }],
	/*构造函数子类中必须调用super*/
	'constructor-super': 0,
	/*局部变量访问错误*/
	'block-scoped-var': 2,
	/*缩进检测关闭关闭*/
	'indent': 0,
	 /*函数执行需要紧挨着(括号）*/
	'space-before-function-paren': 0,
	 /*{}前必须有空格*/
	'space-before-blocks': 2,
	/*行尾不留空格*/
	'no-trailing-spaces': 0,
	/*不能有多个空行,最多两行*/
	'no-multiple-empty-lines': [2, {'max': 2}],
	/*要求在非空文件末尾至少存在一行空行*/
	'eol-last': 2,
	/*{}内第一行与最后一行不允许有空行*/
	'padded-blocks': [2, 'never'],
	/*检测使用tab缩进*/
	'no-tabs': 'off',
	/*允许tab与空格混用*/
	'no-mixed-spaces-and-tabs': 0,
	/*声明变量未使用提示*/
	'no-unused-vars': 1
  },
  globals: {}
}

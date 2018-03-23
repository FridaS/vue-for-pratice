// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    "es6": true
  },
  extends: ['vue'],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'eqeqeq': 0,
    'prefer-const': 0,
    'one-var': 0,
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'new-cap': 0,
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    'no-extra-boolean-cast': 1,
    'space-before-blocks': 0,
    'no-extra-bind': 0,
    'no-lone-blocks': 0,
    'eol-last': 0,
    'space-before-function-paren': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}

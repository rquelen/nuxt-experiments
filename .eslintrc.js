module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'html',
    'jest',
  ],
  settings: {
    'html/html-extensions': ['.html'],
  },
  // add your custom rules here
  rules: {
    'semi': [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'vue/max-attributes-per-line': [0],
    'vue/require-v-for-key': [0], // most of the loops are static, so we don't enforce this rule
  },
  globals: {
    'jsdom': true,
  },
};

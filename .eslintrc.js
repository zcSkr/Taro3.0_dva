module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    'node': true,
    'commonjs': true,
  },
  'extends': ['taro/react'],
  "globals": {
    'wx': true,
    'swan': true,
    'tt': true,
    'qq': true,
    'getApp': true,
    '__wxRoute': true,
    'getCurrentPages': true,
    'requirePlugin': true
  },
  "parserOptions": {
    "ecmaVersion": 6, // 支持es6语法，但并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）
    "sourceType": "module",	// 指定来源的类型，"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true,
      "legacyDecorators": true
    },
    "ecmaVersion": 2018
  },
  "rules": {
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': [0, { optionalDependencies: true }],
    'linebreak-style': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-empty': 0,
    'no-extra-semi': 0,
    'require-yield': 0,
    'import/newline-after-import': 0,
    'import/first': 0,
    'no-shadow': 0,
    'jsx-quotes': 0,
    'react/jsx-boolean-value': 0,
    'react/no-unused-state': 0
  }
}

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier",
    "@vue/eslint-config-prettier"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021
  },
  rules: {
    "no-unused-vars": "warn",
    "vue/no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "vue/multi-word-component-names": "off", //关闭组件命名规则
    "prettier/prettier": [
      "error",
      {
        singleQuote: false, // 单引号
        tabWidth: 2, // tab 对应2空格
        indent: 2, // 缩进2空格
        semi: false, // 行末要不要加分号
        trailingComma: "none", // 对象最后一个属性后面是否要逗号
        endOfLine: "auto" // 行尾换行符
      }
    ]
  },
  globals: {
    // vue3 的 defineProps 在 setup 单文件组件中未通过 import 导入时将其置为全局属性
    defineProps: "readonly"
  }
}

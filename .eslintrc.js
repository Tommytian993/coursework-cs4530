// ESLint配置文件 - 用于代码质量检查和格式化
module.exports = {
  // 继承React应用的默认配置
  extends: ["react-app", "react-app/jest", "@typescript-eslint/recommended"],

  // 解析器配置
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  // 环境配置
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },

  // 插件配置
  plugins: ["react", "react-hooks", "@typescript-eslint"],

  // 规则配置
  rules: {
    // TypeScript规则
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",

    // React规则
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off", // 使用TypeScript替代

    // 通用规则
    "no-console": "warn",
    "no-debugger": "error",
    "prefer-const": "error",
    "no-var": "error",
  },

  // 设置配置
  settings: {
    react: {
      version: "detect",
    },
  },
};

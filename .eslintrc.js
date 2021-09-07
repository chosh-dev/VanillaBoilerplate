module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["standard", "eslint-config-prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["prettier", "@babel"],
  rules: {
    "prettier/prettier": "error",
  },
};

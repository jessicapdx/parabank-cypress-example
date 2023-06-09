module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};

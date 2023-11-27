module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "no-undef": "off",
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "off",
  },
};

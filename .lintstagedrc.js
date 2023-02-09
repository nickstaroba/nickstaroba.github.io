const eslintConfig = require("@eterna/lint-staged-config-eslint");
const prettierConfig = require("@eterna/lint-staged-config-prettier");
const stylelintConfig = require("@eterna/lint-staged-config-stylelint");

module.exports = {
  ...eslintConfig,
  ...prettierConfig,
  ...stylelintConfig,
};

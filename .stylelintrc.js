/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Configurations for Stylelint.
 * @see https://stylelint.io
 * @see https://stylelint.io/user-guide/rules
 * @see https://github.com/stylelint-scss/stylelint-config-standard-scss
 * @see https://github.com/stylelint/stylelint-config-standard
 */
module.exports = {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-prettier"],
};

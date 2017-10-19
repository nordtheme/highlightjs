/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
title      stylelint Configuration                             +
project    nord-highlightjs                                    +
repository https://github.com/arcticicestudio/nord-highlightjs +
author     Arctic Ice Studio                                   +
email      development@arcticicestudio.com                     +
copyright  Copyright (C) 2017                                  +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

/**
* Configuration for stylelint.
*
* @see https://stylelint.io
* @see https://stylelint.io/user-guide/rules
* @see https://github.com/stylelint/stylelint-config-standard
*/
module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "color-hex-case": "lower",
    "comment-empty-line-before": null,
    "selector-pseudo-element-colon-notation": "single",
    "at-rule-empty-line-before": [ "always", {
      except: [
        "blockless-after-same-name-blockless",
        "first-nested"
      ],
      ignoreAtRules: ["after-comment", "import"]
    }]
  }
}

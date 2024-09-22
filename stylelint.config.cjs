module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-clean-order'],
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-scss',
  rules: {
    'rule-empty-line-before': [
      'always-multi-line',
      {
        ignore: ['first-nested'],
      },
    ],
    'no-empty-source': true,
    'selector-type-no-unknown': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['/^v-deep/'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'declaration-block-single-line-max-declarations': 1,
    'length-zero-no-unit': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'at-root',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'extend',
          'use',
          'else',
          'error',
        ],
      },
    ],
  },
}

module.exports = {
  extends: [
    'airbnb-base',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
  ],

  plugins: [
    'unicorn',
    // 'import',
    'lodash',
    'you-dont-need-lodash-underscore',
    'eslint-comments',
  ],

  parser: 'babel-eslint',

  env: {
    node: true,
    es6: true,
    mocha: true,
    browser: true,
    jest: true,
  },

  rules: {
    semi: [2, 'never'],
    'prefer-exponentiation-operator': 2,
    'max-statements-per-line': 2,
    curly: [2, 'all'],
    'brace-style': [2, '1tbs'],
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0,
    'no-nested-ternary': 0,
    'no-extra-parens': [2, 'all', {
      enforceForArrowConditionals: false,
      enforceForNewInMemberExpressions: false,
    }],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-underscore-dangle': [2, {
      allowAfterThis: true,
    }],
    'no-plusplus': 0,
    'no-bitwise': 0,
    'no-mixed-operators': 0,
    'no-continue': 0,
    'no-await-in-loop': 0,
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    }],
    'no-console': [2, {
      allow: [
        'error',
      ],
    }],

    'func-names': 0,
    'arrow-parens': 0,
    'consistent-return': 0,

    'prefer-destructuring': [2, {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }],

    'lines-between-class-members': [2, 'always', {
      exceptAfterSingleLine: true,
    }],

    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: '*',
        next: 'function',
      },
      {
        blankLine: 'always',
        prev: 'function',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'class',
      },
      {
        blankLine: 'always',
        prev: 'class',
        next: '*',
      },
    ],

    'unicorn/better-regex': 2,
    'unicorn/catch-error-name': [2, {
      name: 'err',
    }],
    'unicorn/consistent-function-scoping': 2,
    'unicorn/custom-error-definition': 2,
    'unicorn/error-message': 2,
    // 'unicorn/filename-case': 2,
    'unicorn/import-index': 2,
    'unicorn/new-for-builtins': 2,
    'unicorn/no-abusive-eslint-disable': 2,
    'unicorn/no-array-instanceof': 2,
    'unicorn/no-for-loop': 2,
    'unicorn/no-new-buffer': 2,
    'unicorn/no-object-as-default-parameter': 2,
    'unicorn/no-zero-fractions': 2,
    'unicorn/prefer-array-find': 2,
    'unicorn/prefer-dataset': 2,
    'unicorn/prefer-date-now': 2,
    'unicorn/prefer-event-key': 2,
    'unicorn/prefer-flat-map': 2,
    'unicorn/prefer-includes': 2,
    'unicorn/prefer-modern-dom-apis': 2,
    'unicorn/prefer-negative-index': 2,
    'unicorn/prefer-number-properties': 2,
    'unicorn/prefer-optional-catch-binding': 2,
    // 'unicorn/prefer-replace-all': 2,
    'unicorn/prefer-starts-ends-with': 2,
    'unicorn/prefer-string-slice': 2,
    'unicorn/prefer-ternary': 2,
    'unicorn/prefer-text-content': 2,
    'unicorn/prefer-trim-start-end': 2,
    'unicorn/prefer-type-error': 2,
    'unicorn/throw-new-error': 2,

    'import/order': [2, {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      'newlines-between': 'always-and-inside-groups',
    }],

    'import/extensions': [2, 'always', {
      js: 'never',
      ts: 'never',
      vue: 'never',
    }],

    'lodash/import-scope': [2, 'member'],
    'lodash/chaining': [2, 'never'],
    'lodash/preferred-alias': 2,

    'you-dont-need-lodash-underscore/concat': 2,
    'you-dont-need-lodash-underscore/drop': 2,
    'you-dont-need-lodash-underscore/drop-right': 2,
    'you-dont-need-lodash-underscore/fill': 2,
    'you-dont-need-lodash-underscore/find': 2,
    'you-dont-need-lodash-underscore/find-index': 2,
    // 'you-dont-need-lodash-underscore/from-pairs': 2,
    'you-dont-need-lodash-underscore/index-of': 2,
    'you-dont-need-lodash-underscore/is-array': 2,
    // 'you-dont-need-lodash-underscore/is-array-buffer': 2,
    'you-dont-need-lodash-underscore/join': 2,
    'you-dont-need-lodash-underscore/last-index-of': 2,
    'you-dont-need-lodash-underscore/slice': 2,
    'you-dont-need-lodash-underscore/each': 2,
    'you-dont-need-lodash-underscore/every': 2,
    'you-dont-need-lodash-underscore/filter': 2,
    'you-dont-need-lodash-underscore/includes': 2,
    'you-dont-need-lodash-underscore/map': 2,
    // 'you-dont-need-lodash-underscore/pluck': 2,
    'you-dont-need-lodash-underscore/reduce': 2,
    'you-dont-need-lodash-underscore/reduce-right': 2,
    'you-dont-need-lodash-underscore/size': 2,
    'you-dont-need-lodash-underscore/some': 2,
    'you-dont-need-lodash-underscore/bind': 2,
    // 'you-dont-need-lodash-underscore/partial': 2,
    'you-dont-need-lodash-underscore/is-finite': 2,
    'you-dont-need-lodash-underscore/is-integer': 2,
    'you-dont-need-lodash-underscore/is-nan': 2,
    'you-dont-need-lodash-underscore/assign': 2,
    // 'you-dont-need-lodash-underscore/extend': 2,
    'you-dont-need-lodash-underscore/keys': 2,
    'you-dont-need-lodash-underscore/to-pairs': 2,
    'you-dont-need-lodash-underscore/values': 2,
    'you-dont-need-lodash-underscore/ends-with': 2,
    'you-dont-need-lodash-underscore/pad-start': 2,
    'you-dont-need-lodash-underscore/pad-end': 2,
    'you-dont-need-lodash-underscore/repeat': 2,
    'you-dont-need-lodash-underscore/replace': 2,
    'you-dont-need-lodash-underscore/split': 2,
    'you-dont-need-lodash-underscore/starts-with': 2,
    // 'you-dont-need-lodash-underscore/template': 2,

    'eslint-comments/no-unused-disable': 2,
    'eslint-comments/no-use': [2, {
      allow: [
        'eslint-disable',
        'eslint-disable-next-line',
      ],
    }],
  },

  globals: {
    __DEV__: true,
    __SSR__: true,
  },
}

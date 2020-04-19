module.exports = {
  extends: [
    'airbnb-base',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
  ],

  plugins: [
    // 'import',
    'unicorn',
    'lodash',
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
    curly: [2, 'all'],
    'brace-style': [2, '1tbs'],
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0,
    'no-nested-ternary': 0,
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

    'max-len': [2, {
      code: 100,
      tabWidth: 2,
      ignoreRegExpLiterals: true,
      ignoreUrls: true,
    }],

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

    'unicorn/consistent-function-scoping': 2,
    'unicorn/error-message': 2,
    'unicorn/import-index': 2,
    'unicorn/no-abusive-eslint-disable': 2,
    'unicorn/no-array-instanceof': 2,
    'unicorn/no-for-loop': 2,
    'unicorn/no-new-buffer': 2,
    'unicorn/no-zero-fractions': 2,
    'unicorn/prefer-flat-map': 2,
    'unicorn/prefer-includes': 2,
    'unicorn/prefer-modern-dom-apis': 2,
    'unicorn/prefer-negative-index': 2,
    'unicorn/prefer-starts-ends-with': 2,
    'unicorn/prefer-string-slice': 2,
    'unicorn/prefer-text-content': 2,
    'unicorn/prefer-trim-start-end': 2,
    'unicorn/prefer-type-error': 2,
    'unicorn/throw-new-error': 2,
    // 'unicorn/filename-case': 2,
    // 'unicorn/catch-error-name': [2, {
    //   name: 'err',
    // }],

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
  },

  globals: {
    __DEV__: true,
    __SSR__: true,
  },
}

module.exports = {
  extends: [
    'airbnb-base',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
  ],

  plugins: [
    // 'import',
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

    'import/order': [2, {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
    }],
  },

  globals: {
    __DEV__: true,
    __SSR__: true,
  },
}

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'plugin:unicorn/recommended',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
  ],

  plugins: [
    'sonarjs',
    'unicorn',
    'inker',
    // 'import',
    'promise',
    'lodash',
    'you-dont-need-lodash-underscore',
    'eslint-comments',
  ],

  parser: '@babel/eslint-parser',

  parserOptions: {
    requireConfigFile: false,
  },

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
    'max-params': [2, 4],
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
    'no-loss-of-precision': 2,
    'no-plusplus': 0,
    'no-bitwise': 0,
    'no-mixed-operators': 0,
    'no-continue': 0,
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
      {
        blankLine: 'always',
        prev: 'cjs-export',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'cjs-export',
      },
    ],

    // Only for ordering members
    'sort-imports': [
      2,
      {
        ignoreDeclarationSort: true,
      },
    ],

    'sonarjs/no-inverted-boolean-check': 2,
    'sonarjs/prefer-immediate-return': 2,
    'sonarjs/prefer-while': 2,

    'unicorn/catch-error-name': [2, {
      name: 'err',
    }],
    'unicorn/custom-error-definition': 2,
    'unicorn/empty-brace-spaces': 0,
    'unicorn/explicit-length-check': 0,
    'unicorn/filename-case': 0,
    'unicorn/import-style': 0,
    'unicorn/no-array-callback-reference': 0,
    'unicorn/no-array-reduce': [
      2,
      {
        allowSimpleOperations: false,
      },
    ],
    'unicorn/no-nested-ternary': 0,
    'unicorn/no-null': 0,
    'unicorn/no-process-exit': 0,
    'unicorn/no-useless-undefined': 0, // TODO: enable
    'unicorn/numeric-separators-style': 0,
    'unicorn/prefer-add-event-listener': 0, // TODO: enable
    'unicorn/prefer-module': 0,
    'unicorn/prefer-node-protocol': 0, // TODO: enable
    'unicorn/prefer-query-selector': 0,
    'unicorn/prefer-set-has': 0, // TODO: enable
    'unicorn/prefer-spread': 0, // TODO: enable
    'unicorn/prefer-switch': 0,
    'unicorn/prefer-top-level-await': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/relative-url-style': 0,

    'inker/no-object-assign-this': 2,
    'object-property-newline': 0,
    'inker/no-this-brackets': 2,
    'inker/no-true-as-default': 2,

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
      mjs: 'never',
      ts: 'never',
      jsx: 'never',
      tsx: 'never',
      vue: 'never',
    }],

    'promise/catch-or-return': 2,
    'promise/no-new-statics': 2,
    'promise/no-return-wrap': 2,
    'promise/param-names': 2,
    'promise/valid-params': 2,

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

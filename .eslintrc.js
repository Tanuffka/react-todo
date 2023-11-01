module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    // 'react-app',
  ],
  rules: {
    // eslint
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'lines-around-comment': ['error', { beforeBlockComment: true }],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-nested-ternary': 'error',
    'no-trailing-spaces': 'error',
    'prefer-object-spread': 'error',
    'no-duplicate-imports': 'warn',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'unknown',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@mui/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
    'space-before-blocks': 'error',
    'spaced-comment': ['error', 'always'],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
      },
    ],
    // tslint
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        interfaces: ['signature', 'field', 'constructor', 'method'],
        typeLiterals: ['signature', 'field', 'constructor', 'method'],
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
        extendDefaults: true,
      },
    ],
    // prettier
    'prettier/prettier': ['error', { singleQuote: true }],
    // react
    'react/jsx-sort-props': [
      1,
      {
        shorthandFirst: true,
        callbacksLast: true,
        ignoreCase: false,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    // jsx-a11y
    'jsx-a11y/media-has-caption': 0,
  },
};

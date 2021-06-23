module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: '@antfu/eslint-config',
  plugins: [
    'markdown',
  ],
  rules: {
    'no-alert': 'warn',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'vue/experimental-script-setup-vars': 2,
    'unicorn/no-null': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
        },
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/no-string-refs': 'off',
    'no-new': 'off',
    'semi': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'import/order': 'off',
    'react/no-unknown-property': 'off',
    'vue/no-deprecated-functional-template': 'off',
    'vue/one-component-per-file': 'off',
    'spaced-comment': ['error', 'always', { exceptions: ['@__PURE__'] }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'indent': 'off',
    '@typescript-eslint/indent': ["error", 2]
  },
  overrides: [
    {
      files: ['*.md', '*.vue', '*.ts', '*.tsx', 'scripts/*.ts'],
      rules: {
        'no-console': 'warn',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['*.vue'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              pascalCase: true,
            },
          },
        ],
      },
    },
  ],
};

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // Errors
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'default-param-last': 'error',
    'no-sequences': 'error',
    'no-prototype-builtins': 'error',
    'brace-style': 'error',
    'no-unused-expressions': 'error',
    'no-undef': 'error',
    'no-redeclare': 'error',
    'no-var': 'error',
    'no-empty': 'error',
    'array-callback-return': 'error',
    'constructor-super': 'error',
    'for-direction': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-constant-binary-expression': 'error',
    'no-ex-assign': 'error',
    'valid-typeof': 'error',
    'use-isnan': 'error',
    'no-use-before-define': 'error',

    // Warnings
    'no-inner-declarations': 'warn',
  },
}

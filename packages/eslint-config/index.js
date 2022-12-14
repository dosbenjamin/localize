module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:tailwindcss/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'tailwindcss'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    'sort-keys': 'warn',
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-arbitrary-value': 'warn',
  },
}

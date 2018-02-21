module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: [
    'react',
  ],
  extends: [
    'airbnb',
    // "eslint:recommended"
    //'plugin:react/recommended',
  ],
  rules: {
    'import/no-named-as-default': 0,
    //'react/jsx-indent': [1, 2], // warning & 2 spaces
    //'react/prefer-stateless-function': 0,
    //'react/jsx-filename-extension': 0,
    //'react/no-unused-state': 1,
    'no-unused-vars': 1,
    'jsx-a11y/anchor-is-valid': 1,
    quotes: [2, 'single'],
    'class-methods-use-this': 0,
    'no-console': 0,
    'no-return-assign': 1,
  },
};

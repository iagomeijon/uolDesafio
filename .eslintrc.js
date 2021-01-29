module.exports = {
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-undef': 'off', //IMPORTANTE: remover esta linha quando resolvermos as dependências do React
    'import/no-unresolved': 'off', //IMPORTANTE: remover esta linha quando resolvermos as dependências do React
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-key': 'error',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 1,
    'import/no-extraneous-dependencies': ['error', { packageDir: ['./'] }],
    'import/extensions': 'off',
    'no-unused-expressions': [
      'off',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};

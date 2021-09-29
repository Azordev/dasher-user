module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  overrides: [
    {
      files: ['src/*.{js,jsx}', 'src/**/*.{js,jsx,}'],
    },
  ],
  rules: {
    'no-use-before-define': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

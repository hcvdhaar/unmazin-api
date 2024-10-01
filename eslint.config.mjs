import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'spaced-comment': 'error',
      'prettier/prettier': 'error',
      'unused-imports/no-unused-imports': 'error',
      'newline-before-return': 'error',
    },
    plugins: {
      'unused-imports': unusedImports,
    },
  },
  eslintPluginPrettierRecommended,
];

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'spaced-comment': 'error',
      'prettier/prettier': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
    plugins: ['prettier', 'unused imports'],
  },
]

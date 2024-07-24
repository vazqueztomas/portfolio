import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'react/prop-types': 0,
      'react/no-unescaped-entities': "off",
      'no-unused-vars': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const prettierPlugin = await import('eslint-plugin-prettier');

const eslintConfig = [
  // ✅ Add ignores to handle .eslintignore deprecation
  {
    ignores: ['node_modules', '.next', 'dist'],
  },

  // 🧠 Core ESLint configs from Next.js + TypeScript
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // 🧼 Additional custom rules
  {
    plugins: {
      prettier: prettierPlugin.default,
    },
    rules: {
      'prettier/prettier': 'warn', // or 'off'
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
      'react/no-unescaped-entities': 'warn',
      '@next/next/no-img-element': 'warn',
    },
  },
];

export default eslintConfig;

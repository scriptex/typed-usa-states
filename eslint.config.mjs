import globals from 'globals';

import prettier from 'eslint-config-prettier';
import tsEsLint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
	{
		files: ['src/**/*.ts'],
		languageOptions: {
			globals: {
				...globals.node
			},
			parser: tsParser,
			parserOptions: {
				project: 'tsconfig.json',
				sourceType: 'module'
			}
		},
		plugins: {
			prettier,
			tsEsLint
		},
		ignores: ['demo/**/*'],
		rules: {
			'no-console': 'error'
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
];

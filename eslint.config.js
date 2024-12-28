import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ ignores: ['dist/'] },
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	stylistic.configs.customize({
		indent: 'tab',
		quotes: 'single',
		semi: true,
		jsx: true,
	}),
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		rules: {
			'no-explicit-any': 0,
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@typescript-eslint/no-explicit-any': 'off',
			'sort-imports': ['error', {
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: false,
			}],
		},
	},
];

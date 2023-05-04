module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		jest: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],

	settings: {
		'import/resolver': {
			typescript: {
				project: './tsconfig.json',
			},
		},
		react: {
			version: '18.x',
		},
	},
	rules: {
		semi: 'error',
		quotes: ['error', 'single'],
		'no-console': ['error', { allow: ['error'] }],
	},
};

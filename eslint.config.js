import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default [
	{
		ignores: [
			"dist/**",
			"dist-lib/**",
			"storybook-static/**",
			"node_modules/**"
		]
	},
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		plugins: {
			import: importPlugin
		},
		rules: {
			"import/order": [
				"error",
				{
					groups: [
						["builtin", "external"],
						["internal", "parent", "sibling", "index", "object", "type"]
					],
					distinctGroup: false,
					pathGroups: [
						{
							pattern: "@/**",
							group: "internal",
							position: "before"
						}
					],
					pathGroupsExcludedImportTypes: ["builtin"],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true
					}
				}
			]
		}
	}
];

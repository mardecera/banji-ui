/// <reference types="vitest/config" />

import path, { resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import tsconfigPaths from "vite-tsconfig-paths"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		libInjectCss(),
		dts({
			tsconfigPath: "./tsconfig.node.json",
			rollupTypes: true,
		}),
	],
	resolve: {
		alias: {
			"@lib": resolve(__dirname, "./lib"),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, "lib/main.ts"),
			name: "banji-ui",
			fileName: "banji-ui",
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./lib/setup.ts",
		css: true,
		projects: [
			{
				extends: true,
				test: {
					name: "unit",
				},
			},
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(__dirname, ".storybook"),
					}),
				],
				test: {
					name: "storybook",
					exclude: [],
					browser: {
						enabled: true,
						headless: true,
						provider: "playwright",
						instances: [
							{
								browser: "chromium",
							},
						],
					},
					setupFiles: [".storybook/vitest.setup.ts"],
				},
			},
		],
	},
})

/// <reference types="vitest/config" />
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import tsconfigPaths from "vite-tsconfig-paths"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	plugins: [react(), tsconfigPaths(), libInjectCss(), dts({ tsconfigPath: "./tsconfig.node.json", rollupTypes: true })],
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
	},
})

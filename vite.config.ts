import path from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
	const isLibraryMode = mode === "lib"

	return {
		plugins: [
			react(),
			tailwindcss(),
			isLibraryMode &&
				dts({
					include: ["src/lib", "src/components"],
					exclude: ["**/*.stories.*", "**/*.test.*"],
					outDir: "dist-lib",
					insertTypesEntry: true
				})
		],
		test: {
			environment: "jsdom",
			setupFiles: "./src/test-setup.ts",
			globals: true,
			include: ["src/**/*.test.{ts,tsx}"]
		},
		build: isLibraryMode
			? {
					outDir: "dist-lib",
					sourcemap: true,
					lib: {
						entry: path.resolve(rootDir, "src/lib/index.ts"),
						name: "BanjiUI",
						fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
						formats: ["es", "cjs"]
					},
					rollupOptions: {
						external: ["react", "react-dom"],
						output: {
							globals: {
								react: "React",
								"react-dom": "ReactDOM"
							}
						}
					}
				}
			: undefined,
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
				"@banji-ui": path.resolve(__dirname, "./src/lib")
			}
		}
	}
})

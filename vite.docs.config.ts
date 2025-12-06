import path, { resolve } from "node:path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

const __dirname = path.dirname(__filename)

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	build: {
		outDir: resolve(__dirname, "docs-dist"),
		emptyOutDir: true,
	},
})

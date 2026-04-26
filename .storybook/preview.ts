import type { Preview } from "@storybook/react"
import "../src/index.css"
import "../src/lib/styles.css"

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			default: "light",
			values: [
				{ name: "light", value: "#f5f5f4" },
				{ name: "dark", value: "#0f172a" }
			]
		}
	}
}

export default preview

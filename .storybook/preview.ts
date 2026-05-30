import type { Preview } from "@storybook/react";
import "../src/index.css";
import "../src/lib/styles.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			default: "dark",
			values: [
				{ name: "light", value: "#f5f5f4" },
				{ name: "dark", value: "#1b1c1d" }
			]
		}
	}
};

export default preview;

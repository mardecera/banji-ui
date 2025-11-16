import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
	stories: ["../lib/components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
	addons: ["@chromatic-com/storybook", "@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-vitest"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
}
export default config

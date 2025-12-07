import type { Meta, StoryObj } from "@storybook/react-vite"

import Button from "./Button"

const meta: Meta<typeof Button> = {
	title: "UI/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "outline", "text"],
			table: {
				defaultValue: {
					summary: "default",
				},
			},
		},
		type: {
			control: { type: "select" },
			options: ["button", "submit", "reset"],
			table: {
				defaultValue: {
					summary: "button",
				},
			},
		},
		loading: {
			control: "boolean",
			table: {
				defaultValue: {
					summary: "false",
				},
			},
		},
		iconPosition: {
			control: { type: "select" },
			options: ["left", "right"],
			table: {
				defaultValue: {
					summary: "left",
				},
			},
		},
		size: {
			control: { type: "select" },
			options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
			table: {
				defaultValue: {
					summary: "default",
				},
			},
		},
		disabled: {
			control: "boolean",
			table: {
				defaultValue: {
					summary: "false",
				},
			},
		},
		icon: {
			control: { type: "text" },
			table: {
				defaultValue: {
					summary: "null",
				},
			},
		},
		children: {
			control: { type: "text" },
			table: {
				defaultValue: {
					summary: "null",
				},
			},
		},
	},
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		children: "Text",
		disabled: false,
		variant: "default",
		icon: "",
		loading: false,
		size: "default",
		iconPosition: "left",
		type: "button",
	},
}

export const Outline: Story = {
	args: {
		children: "Text",
		variant: "outline",
	},
}

export const Text: Story = {
	args: {
		children: "Text",
		variant: "text",
	},
}

export const Link: Story = {
	args: {
		children: "Text",
		variant: "link",
	},
	decorators: [
		(Story) => (
			<div style={{ padding: 20, color: "#000000", display: "inline-block" }}>
				<Story />
			</div>
		),
	],
}

import type { Meta, StoryObj } from "@storybook/react-vite"

import Button from "./Button"

const meta: Meta<typeof Button> = {
	title: "UI/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: { type: "select" },
			options: ["primary", "secondary"],
		},
		variant: {
			control: { type: "select" },
			options: ["default", "outline", "text"],
		},
		htmlType: {
			control: { type: "select" },
			options: ["button", "submit", "reset"],
		},
		loading: {
			control: "boolean",
		},
		iconPosition: {
			control: { type: "select" },
			options: ["left", "right"],
		},
	},
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		children: "Default Button",
	},
}

export const Primary: Story = {
	args: {
		children: "Primary Button",
		type: "primary",
	},
}

export const Secondary: Story = {
	args: {
		children: "Secondary Button",
		type: "secondary",
	},
}

export const WithIcon: Story = {
	args: {
		children: "With Icon",
		icon: "⭐",
	},
}

export const Loading: Story = {
	args: {
		children: "Loading...",
		loading: true,
	},
}

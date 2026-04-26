import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	args: {
		label: "Action",
		variant: "solid"
	}
}

export default meta
type Story = StoryObj<typeof Button>

export const Solid: Story = {}

export const Ghost: Story = {
	args: {
		label: "Secondary",
		variant: "ghost"
	}
}

export const ExternalLink: Story = {
	args: {
		label: "Open Docs",
		variant: "ghost",
		href: "https://storybook.js.org",
		target: "_blank",
		rel: "noreferrer"
	}
}

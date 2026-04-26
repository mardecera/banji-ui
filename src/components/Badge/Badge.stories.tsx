import type { Meta, StoryObj } from "@storybook/react"
import Badge from "./Badge"

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	args: {
		label: "Nuevo",
		tone: "neutral"
	}
}

export default meta
type Story = StoryObj<typeof Badge>

export const Neutral: Story = {}

export const Success: Story = {
	args: {
		label: "Activo",
		tone: "success"
	}
}

export const Warning: Story = {
	args: {
		label: "Pendiente",
		tone: "warning"
	}
}

export const Danger: Story = {
	args: {
		label: "Error",
		tone: "danger"
	}
}

import Badge from "./Badge";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	argTypes: {
		label: { control: "text" },
		tone: {
			control: "select",
			options: ["neutral", "success", "warning", "danger"]
		}
	}
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {
	args: {
		label: "Nuevo",
		tone: "neutral"
	}
};

export const Success: Story = {
	args: {
		label: "Activo",
		tone: "success"
	}
};

export const Warning: Story = {
	args: {
		label: "Pendiente",
		tone: "warning"
	}
};

export const Danger: Story = {
	args: {
		label: "Error",
		tone: "danger"
	}
};

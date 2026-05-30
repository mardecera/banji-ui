import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	argTypes: {
		children: { control: "text" },
		variant: {
			control: "select",
			options: [
				"default",
				"outline",
				"secondary",
				"ghost",
				"destructive",
				"link"
			]
		},
		size: {
			control: "select",
			options: [
				"xs",
				"sm",
				"default",
				"lg",
				"icon-xs",
				"icon-sm",
				"icon",
				"icon-lg"
			]
		}
	}
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Button",
		variant: "default",
		size: "default"
	}
};

export const Secondary: Story = {
	args: {
		children: "Button",
		variant: "secondary",
		size: "default"
	}
};

export const Outline: Story = {
	args: {
		children: "Button",
		variant: "outline",
		size: "default"
	}
};

export const Destructive: Story = {
	args: {
		children: "Button",
		variant: "destructive",
		size: "default"
	}
};

export const Icon: Story = {
	args: {
		children: "💀",
		variant: "default",
		size: "icon"
	}
};

export const Link: Story = {
	argTypes: {
		target: { control: "text" },
		rel: { control: "text" }
	},
	args: {
		children: "Open Docs",
		variant: "link",
		href: "https://storybook.js.org",
		rel: "noopener noreferrer",
		target: "_blank",
		size: "default",
		className: "text-white"
	}
};

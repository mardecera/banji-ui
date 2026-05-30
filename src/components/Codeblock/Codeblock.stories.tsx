import CodeBlock from "./Codeblock";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CodeBlock> = {
	title: "Components/Codeblock",
	component: CodeBlock,
	argTypes: {
		code: { control: "text" },
		language: {
			control: "select",
			options: ["tsx", "jsx", "js", "ts", "json", "html", "css"]
		},
		withNumbers: { control: "boolean" }
	}
};

export default meta;

type Story = StoryObj<typeof CodeBlock>;

const code = `
import React from "react"

const App = () => {
	return <div>Hello World!</div>
}

export default App`;

export const Default: Story = {
	args: {
		code,
		language: "tsx",
		withNumbers: true
	}
};

import type { Meta, StoryObj } from "@storybook/react"
import CodeBlock from "./Codeblock"

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
}

export default meta

type Story = StoryObj<typeof CodeBlock>

const code = `
import React from "react"

const App = () => {
	return (
		<div>hello</div>
	)
}`

export const Default: Story = {
	args: {
		code,
		language: "tsx",
		withNumbers: true
	}
}

import type { Meta, StoryObj } from "@storybook/react-vite"

import Spin from "./Spin"

const meta: Meta<typeof Spin> = {
	title: "UI/Spin",
	component: Spin,
	tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Spin>

export const Default: Story = {
	decorators: [
		(Story) => (
			<div style={{ padding: 20, display: "inline-block" }}>
				<Story />
			</div>
		),
	],
}

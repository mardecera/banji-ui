import type { Meta, StoryObj } from "@storybook/react"
import Sidebar from "./Sidebar"
import Button from "../Button/Button"

const meta: Meta<typeof Sidebar> = {
	title: "Components/Sidebar",
	component: Sidebar,
	argTypes: {
		children: { control: "object" }
	}
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Example: Story = {
	args: {
		children: (
			<>
				<Sidebar.Header>BANJI UI</Sidebar.Header>
				<Sidebar.Content>
					<Sidebar.Item>Introducción</Sidebar.Item>
					<Sidebar.Group title="Componentes">
						<Sidebar.Item>Button</Sidebar.Item>
						<Sidebar.Item>Badge</Sidebar.Item>
						<Sidebar.Item>Sidebar</Sidebar.Item>
					</Sidebar.Group>
				</Sidebar.Content>
				<Sidebar.Footer className="p-0">
					<Button className="w-full justify-start" size="sm">
						Logout
					</Button>
				</Sidebar.Footer>
			</>
		)
	}
}

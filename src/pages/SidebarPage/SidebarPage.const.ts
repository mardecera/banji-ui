export const code = `
import { Sidebar, SidebarItemProps } from 'banji-ui';

const components: SidebarItemProps[] = [
	{
		id: "button",
		children: "Button",
		href: "/docs/button"
	},
	{
		id: "badge",
		children: "Badge",
		href: "/docs/badge"
	},
	{
		id: "sidebar",
		children: "Sidebar",
		href: "/docs/sidebar"
	}
]

const Page = () => {
	return (
		<Sidebar>
			<Sidebar.Header>BANJI UI</Sidebar.Header>
			<Sidebar.Content>
				<Sidebar.Item href="" isActive={true}>
					Introducción
				</Sidebar.Item>
				<Sidebar.Group title="Componentes">
					{components.map((component) => (
						<Sidebar.Item key={component.id} href={component.href}>
							{component.children}
						</Sidebar.Item>
					))}
				</Sidebar.Group>
			</Sidebar.Content>
			<Sidebar.Footer className="p-0">
				<Button className="w-full justify-start" size="sm">
					Logout
				</Button>
			</Sidebar.Footer>
		</Sidebar>
	)
}`

export const components = [
	{
		id: "button",
		children: "Button",
		href: "/docs/button"
	},
	{
		id: "badge",
		children: "Badge",
		href: "/docs/badge"
	},
	{
		id: "sidebar",
		children: "Sidebar",
		href: "/docs/sidebar"
	}
]

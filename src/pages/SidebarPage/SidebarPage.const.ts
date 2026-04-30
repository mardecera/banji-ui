import type { SidebarItemProps } from "@banji-ui"

export const code = `
import { Sidebar, SidebarItemProps } from '@banji-ui';

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

const SidebarPage = () => {
	return (
		<Sidebar>
			<Sidebar.Content>
				<Sidebar.Item href="/" isActive={true}>
					Introducción
				</Sidebar.Item>
				<Sidebar.Group title="Componentes">
					{components.map((component) => (
						<Sidebar.Item
							key={component.id}
							href={component.href}
							isActive={component.href === pathname}
						>
							{component.children}
						</Sidebar.Item>
				))}
			</Sidebar.Content>
		</Sidebar>
	)
}`

export const components: SidebarItemProps[] = [
	{
		id: "button",
		children: "Button",
		href: ""
	},
	{
		id: "badge",
		children: "Badge",
		href: ""
	},
	{
		id: "sidebar",
		children: "Sidebar",
		href: ""
	}
]

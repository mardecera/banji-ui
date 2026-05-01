import { Outlet, useLocation } from "react-router-dom"
import { components } from "./DocsLayout.const"
import { Sidebar } from "@/lib"

const DocsLayout = () => {
	const { pathname } = useLocation()

	return (
		<div>
			<div className="flex gap-4 max-w-245">
				<Sidebar>
					<Sidebar.Content>
						<Sidebar.Item href="/docs" isActive={pathname === "/docs"}>
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
						</Sidebar.Group>
					</Sidebar.Content>
				</Sidebar>
				<div className="bg-white py-10 px-10 rounded-3xl flex-1">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default DocsLayout

import { Sandbox, Sidebar, Typography } from "@/lib"
import { code, components } from "./SidebarPage.const"

const SidebarPage = () => {
	return (
		<section className="w-full max-w-245 space-y-5">
			<Typography.Title>Sidebar</Typography.Title>
			<Sandbox>
				<Sandbox.Component>
					<Sidebar>
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
					</Sidebar>
				</Sandbox.Component>
				<Sandbox.Code code={code} />
			</Sandbox>
		</section>
	)
}

export default SidebarPage

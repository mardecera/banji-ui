import { Button, Sandbox, Sidebar, Typography } from "@/lib"
import { code, components } from "./SidebarPage.const"
import { useRouteLoaderData } from "react-router-dom"

const SidebarPage = () => {
	const data = useRouteLoaderData("root")
	const { sidebarStoryUrl } = data

	return (
		<section className="w-full max-w-245 space-y-5">
			<Typography.Title>Sidebar</Typography.Title>
			<Button variant="link" size="sm" href={sidebarStoryUrl}>
				ver storybook
			</Button>
			<Sandbox>
				<Sandbox.Component>
					<Sidebar>
						<Sidebar.Header>BANJI UI</Sidebar.Header>
						<Sidebar.Content>
							<Sidebar.Item isActive={true}>Introducción</Sidebar.Item>
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
				</Sandbox.Component>
				<Sandbox.Code code={code} />
			</Sandbox>
		</section>
	)
}

export default SidebarPage

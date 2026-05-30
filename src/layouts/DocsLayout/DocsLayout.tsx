import { Sidebar } from "banji-ui";
import { Link, Outlet, useLocation } from "react-router-dom";

import { components } from "./DocsLayout.const";

const DocsLayout = () => {
	const { pathname } = useLocation();

	return (
		<div>
			<div className="flex gap-4 max-w-245">
				<Sidebar>
					<Sidebar.Content>
						<Sidebar.Item isActive={pathname === "/docs"} asChild>
							<Link to="/docs" className="flex">
								Introducción
							</Link>
						</Sidebar.Item>
						<Sidebar.Group title="Componentes">
							{components.map((component) => (
								<Sidebar.Item
									key={component.id}
									isActive={component.href === pathname}
									asChild
								>
									<Link to={component.href}>{component.children}</Link>
									<Link to={component.href}>{component.children}</Link>
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
	);
};

export default DocsLayout;

import { Button, Sandbox, Typography } from "banji-ui";
import { useRouteLoaderData } from "react-router-dom";

import useFileToString from "@/hooks/useFileToString";
import SidebarExample from "./Sidebar.example";

const SidebarPage = () => {
	const data = useRouteLoaderData("root");
	const { sidebarStoryUrl } = data;
	const code = useFileToString("./src/pages/SidebarPage/Sidebar.example.tsx");

	return (
		<section className="w-full max-w-245 space-y-5">
			<Typography.Title>Sidebar</Typography.Title>
			<Button variant="link" size="sm" href={sidebarStoryUrl}>
				ver storybook
			</Button>
			<Sandbox>
				<Sandbox.Component>
					<SidebarExample />
				</Sandbox.Component>
				<Sandbox.Code code={code} />
			</Sandbox>
		</section>
	);
};

export default SidebarPage;

import { Button, Sandbox, Typography } from "banji-ui";
import { useRouteLoaderData } from "react-router-dom";

import useFileToString from "@/hooks/useFileToString";
import Example from "./Modal.example";

const ModalPage = () => {
	const { sidebarStoryUrl } = useRouteLoaderData("root");
	const code = useFileToString("./src/pages/ModalPage/Modal.example.tsx");

	return (
		<section className="w-full max-w-245 space-y-5">
			<Typography.Title>Modal</Typography.Title>
			<Button variant="link" size="sm" href={sidebarStoryUrl}>
				ver storybook
			</Button>
			<Sandbox>
				<Sandbox.Component>
					<Example />
				</Sandbox.Component>
				<Sandbox.Code code={code} />
			</Sandbox>
		</section>
	);
};

export default ModalPage;

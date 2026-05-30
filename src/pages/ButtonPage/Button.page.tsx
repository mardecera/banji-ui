import { Button, Sandbox, Typography } from "banji-ui";
import { useRouteLoaderData } from "react-router-dom";

import useFileToString from "@/hooks/useFileToString";
import ButtonExample from "./Button.example";

const ButtonPage = () => {
	const data = useRouteLoaderData("root");
	const { buttonStoryUrl } = data;
	const code = useFileToString("./src/pages/ButtonPage/Button.example.tsx");

	return (
		<section className="w-full max-w-245 space-y-5">
			<Typography.Title>Button</Typography.Title>
			<Button variant="link" size="sm" href={buttonStoryUrl}>
				ver storybook
			</Button>
			<Sandbox>
				<Sandbox.Component>
					<ButtonExample />
				</Sandbox.Component>
				<Sandbox.Code code={code} />
			</Sandbox>
		</section>
	);
};

export default ButtonPage;

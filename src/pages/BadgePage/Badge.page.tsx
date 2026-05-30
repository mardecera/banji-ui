import { Button, Sandbox, Typography } from "banji-ui";
import { useRouteLoaderData } from "react-router-dom";

import useFileToString from "@/hooks/useFileToString";
import BadgeExample from "./Badge.example";

const BadgePage = () => {
	const { badgeStoryUrl } = useRouteLoaderData("root");
	const code = useFileToString("./src/pages/BadgePage/Badge.example.tsx");

	return (
		<section className="w-full max-w-245 space-y-5">
			<Typography.Title>Badge</Typography.Title>
			<Button variant="link" size="sm" href={badgeStoryUrl}>
				ver storybook
			</Button>
			<Sandbox>
				<Sandbox.Component>
					<BadgeExample />
				</Sandbox.Component>
				<Sandbox.Code code={code} />
			</Sandbox>
		</section>
	);
};

export default BadgePage;

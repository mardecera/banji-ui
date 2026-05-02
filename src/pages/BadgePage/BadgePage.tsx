import { Badge, Button, Sandbox, Typography } from "@/lib"
import { code } from "./BadgePage.const"
import { useRouteLoaderData } from "react-router-dom"

const BadgePage = () => {
	const data = useRouteLoaderData("root")
	const { badgeStoryUrl } = data

	return (
		<section className="w-full max-w-245 space-y-5">
			<Typography.Title>Badge</Typography.Title>
			<Button variant="link" size="sm" href={badgeStoryUrl}>
				ver storybook
			</Button>
			<Sandbox>
				<Sandbox.Component>
					<Badge label="Beta" />
				</Sandbox.Component>
				<Sandbox.Code code={code} />
			</Sandbox>
		</section>
	)
}

export default BadgePage

import { Button, Sandbox, Typography } from "@/lib"
import { code } from "./ButtonPage.const"
import { useRouteLoaderData } from "react-router-dom"

const ButtonPage = () => {
	const data = useRouteLoaderData("root")
	const { buttonStoryUrl } = data

	return (
		<section className="w-full max-w-245 space-y-5">
			<Typography.Title>Button</Typography.Title>
			<Button variant="link" size="sm" href={buttonStoryUrl}>
				ver storybook
			</Button>
			<Sandbox>
				<Sandbox.Component>
					<Button>Action</Button>
				</Sandbox.Component>
				<Sandbox.Code code={code} />
			</Sandbox>
		</section>
	)
}

export default ButtonPage

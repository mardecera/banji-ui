import { Button, Sandbox, Typography } from "@/lib"
import { code } from "./ButtonPage.const"

const ButtonPage = () => {
	return (
		<section className="w-full max-w-245 space-y-5">
			<Typography.Title>Button</Typography.Title>
			<Sandbox>
				<Sandbox.Component>
					<Button label="Action" />
				</Sandbox.Component>
				<Sandbox.Code code={code} />
			</Sandbox>
		</section>
	)
}

export default ButtonPage

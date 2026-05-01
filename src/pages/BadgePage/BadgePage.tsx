import { Badge, Sandbox, Typography } from "@/lib"
import { code } from "./BadgePage.const"

const BadgePage = () => {
	return (
		<section className="w-full max-w-245 space-y-5">
			<Typography.Title>Badge</Typography.Title>
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

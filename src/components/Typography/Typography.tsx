import Title from "./Title/Title"
import type { TypographyProps as Props } from "./Typography.types"

const TypographyRoot = (props: Props) => {
	const { children } = props

	return <>{children}</>
}

const Typography = Object.assign(TypographyRoot, {
	Title
})

export default Typography

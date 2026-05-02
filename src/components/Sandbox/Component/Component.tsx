import type { ComponentProps as Props } from "./Component.types"

const Component = (props: Props) => {
	const { children } = props

	return (
		<div className="flex items-center justify-center py-10 px-5 bg-gray-200">
			{children}
		</div>
	)
}

export default Component

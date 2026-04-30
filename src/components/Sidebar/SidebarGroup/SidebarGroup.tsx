import type { GroupProps as Props } from "./SidebarGroup.types"

const SidebarGroup = (props: Props) => {
	const { title, children } = props

	return (
		<div className="space-y-1">
			{title && (
				<p className="py-2 px-4 text-xs text-gray-500 uppercase">{title}</p>
			)}
			<div className="flex flex-col gap-1">{children}</div>
		</div>
	)
}

export default SidebarGroup

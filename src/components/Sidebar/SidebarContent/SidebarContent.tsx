import type { SidebarContentProps as Props } from "./SidebarContent.types"

const SidebarContent = (props: Props) => {
	const { children } = props

	return <nav className="flex flex-col gap-1">{children}</nav>
}

export default SidebarContent

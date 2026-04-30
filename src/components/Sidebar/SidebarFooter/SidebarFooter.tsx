import type { SidebarFooterProps as Props } from "./SidebarFooter.types"

const SidebarFooter = (props: Props) => {
	const { children } = props

	return <div className="p-4 mt-auto">{children}</div>
}

export default SidebarFooter

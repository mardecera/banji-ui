import { cn } from "@/utils/tailwind.utils"
import type { SidebarFooterProps as Props } from "./SidebarFooter.types"

const SidebarFooter = (props: Props) => {
	const { children, className } = props

	return <div className={cn("p-4 mt-auto", className)}>{children}</div>
}

export default SidebarFooter

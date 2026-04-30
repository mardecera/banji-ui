import { cn } from "../../../utils/tailwind.utils"
import { checkActiveStyle } from "./SidebarItem.helpers"
import type { SidebarItemProps as Props } from "./SidebarItem.types"

const SidebarItem = (props: Props) => {
	const { href, children, className, activeClassName, isActive } = props

	return (
		<a
			href={href}
			className={cn(
				"hover:bg-gray-100 py-2 px-4 rounded-xl text-[14px]",
				className,
				checkActiveStyle({ active: isActive }),
				isActive && activeClassName
			)}
		>
			{children}
		</a>
	)
}

export default SidebarItem

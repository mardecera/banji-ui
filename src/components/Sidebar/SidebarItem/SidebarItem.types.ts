export type SidebarItem = {
	id?: string
	children: React.ReactNode
	className?: string
	activeClassName?: string
	isActive?: boolean
	asChild?: boolean
	href?: string
}

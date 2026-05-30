import { SidebarContext } from "./Sidebar.context";
import type { SidebarProps as Props } from "./Sidebar.types";
import Content from "./SidebarContent/SidebarContent";
import Footer from "./SidebarFooter/SidebarFooter";
import Group from "./SidebarGroup/SidebarGroup";
import Header from "./SidebarHeader/SidebarHeader";
import Item from "./SidebarItem/SidebarItem";
import { cn } from "../../utils/tailwind.utils";

const SidebarRoot = (props: Props) => {
	const { children, className } = props;

	return (
		<SidebarContext.Provider value={undefined}>
			<aside
				className={cn(
					"bg-white w-fit p-2 rounded-2xl h-fit space-y-2",
					className
				)}
			>
				{children}
			</aside>
		</SidebarContext.Provider>
	);
};

const Sidebar = Object.assign(SidebarRoot, {
	Header,
	Content,
	Footer,
	Group,
	Item
});

export default Sidebar;

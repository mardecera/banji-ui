import type { SidebarHeaderProps as Props } from "./SidebarHeader.types";

const SidebarHeader = (props: Props) => {
	const { children } = props;

	return (
		<div className="p-4 font-semibold border-b border-gray-100">{children}</div>
	);
};

export default SidebarHeader;

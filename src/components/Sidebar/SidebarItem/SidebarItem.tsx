import React from "react";

import { checkActiveStyle } from "./SidebarItem.helpers";
import type { SidebarItem as Props } from "./SidebarItem.types";
import { cn } from "../../../utils/tailwind.utils";

const SidebarItem = (props: Props) => {
	const { href, children, className, activeClassName, isActive } = props;
	const { asChild = false } = props;

	if (asChild) {
		return React.cloneElement(children as React.ReactElement, {
			className: cn(
				"hover:bg-gray-100 py-2 px-4 rounded-xl text-[14px] cursor-pointer",
				className,
				checkActiveStyle({ active: isActive }),
				isActive && activeClassName
			)
		});
	}

	return (
		<a
			href={href}
			className={cn(
				"hover:bg-gray-100 py-2 px-4 rounded-xl text-[14px] cursor-pointer",
				className,
				checkActiveStyle({ active: isActive }),
				isActive && activeClassName
			)}
		>
			{children}
		</a>
	);
};

export default SidebarItem;

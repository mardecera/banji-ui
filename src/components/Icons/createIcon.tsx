import React from "react";

export type IconMode = "outline" | "fill";

export type IconNode = [
	tag: keyof JSX.IntrinsicElements,
	attrs: Record<string, unknown>
][];

export type IconProps = React.SVGProps<SVGSVGElement> & {
	size?: number | string;
	color?: string;
	strokeWidth?: number;
};

export const createIcon = (
	name: string,
	iconNode: IconNode,
	mode: IconMode
) => {
	const Component = React.forwardRef<SVGSVGElement, IconProps>(
		(
			{ size = 24, color = "currentColor", strokeWidth = 2, children, ...rest },
			ref
		) => {
			return (
				<svg
					ref={ref}
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					viewBox="0 0 24 24"
					fill={mode === "fill" ? color : "none"}
					stroke={mode === "outline" ? color : "none"}
					strokeWidth={mode === "fill" ? 0 : strokeWidth}
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
					focusable="false"
					{...rest}
				>
					{iconNode.map(([tag, attrs], i) =>
						React.createElement(tag, { key: i, ...attrs })
					)}
					{children}
				</svg>
			);
		}
	);

	Component.displayName = name;

	return Component;
};

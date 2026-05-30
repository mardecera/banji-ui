import React from "react";

import { checkIsExternalURL } from "@/utils/router.utils";
import { getButtonStyles } from "./Button.helper";
import type { ButtonAsButtonProps } from "./Button.types";
import type { ButtonAsLinkProps } from "./Button.types";
import type { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
	const { children, variant = "default", size = "default" } = props;
	const { asChild } = props;

	if (asChild) {
		return React.cloneElement(children as React.ReactElement, {
			className: getButtonStyles({ size, variant, class: props.className })
		});
	}

	const className = getButtonStyles({ size, variant, class: props.className });

	if ("href" in props && typeof props.href === "string") {
		const linkProps = props as ButtonAsLinkProps;
		const isExternal = checkIsExternalURL(props.href);
		const target = linkProps.target;
		const rel = linkProps.rel;

		const externalProps = {
			target: isExternal && !target ? "_blank" : target,
			rel: isExternal && !rel ? "noopener noreferrer" : rel
		};

		return (
			<a {...linkProps} {...externalProps} className={className}>
				{children}
			</a>
		);
	}

	const buttonProps = props as ButtonAsButtonProps;

	return (
		<button {...buttonProps} className={className}>
			{children}
		</button>
	);
};

export default Button;

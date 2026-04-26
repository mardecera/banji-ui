import type { ButtonAsButtonProps } from "./Button.types"
import type { ButtonAsLinkProps } from "./Button.types"
import type { ButtonProps } from "./Button.types"
import { getButtonStyles } from "./Button.helper"

const Button = (props: ButtonProps) => {
	const { label, variant = "solid" } = props
	const className = getButtonStyles({ variant, class: props.className })

	if ("href" in props && typeof props.href === "string") {
		const linkProps = props as ButtonAsLinkProps

		return (
			<a {...linkProps} className={className}>
				{label}
			</a>
		)
	}

	const buttonProps = props as ButtonAsButtonProps

	return (
		<button {...buttonProps} className={className}>
			{label}
		</button>
	)
}

export default Button

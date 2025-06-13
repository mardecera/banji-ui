import clsx from "clsx"
import styles from "./Button.module.css"

export interface ButtonProps {
	variant?: "banji-btn--primary" | "banji-btn--secondary"
	backgroundColor?: string
	size?: "small" | "medium" | "large"
	children: React.ReactNode
	onClick?: () => void
	disabled?: boolean
}

export const Button = ({
	variant = "banji-btn--primary",
	size = "medium",
	backgroundColor,
	children,
	disabled,
	...props
}: ButtonProps) => {
	return (
		<button
			type="button"
			className={clsx(styles["banji-btn"], styles[`banji-btn--${size}`], styles[variant])}
			style={{ backgroundColor }}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	)
}

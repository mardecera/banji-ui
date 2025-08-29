import type { ButtonHTMLAttributes } from "react"

export type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
	type?: "primary" | "secondary"
	variant?: "default" | "outline" | "text"
	htmlType?: "submit" | "reset" | "button"
	icon?: React.ReactNode
	iconPosition?: "left" | "right"
	loading?: boolean
}

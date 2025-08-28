import type { ButtonHTMLAttributes } from "react"

export type ButtonVariantProps = "primary" | "secondary" | "tertiary"

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariantProps
}

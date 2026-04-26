import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

export type ButtonVariant = "solid" | "ghost"

type BaseButtonProps = {
	label: string
	variant?: ButtonVariant
}

export type ButtonAsButtonProps = BaseButtonProps &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		href?: undefined
	}

export type ButtonAsLinkProps = BaseButtonProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		href: string
	}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

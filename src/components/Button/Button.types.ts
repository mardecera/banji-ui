import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

export type ButtonVariant =
	| "default"
	| "outline"
	| "secondary"
	| "ghost"
	| "destructive"
	| "link"

export type ButtonSize =
	| "xs"
	| "sm"
	| "default"
	| "lg"
	| "icon-xs"
	| "icon-sm"
	| "icon"
	| "icon-lg"

type BaseButtonProps = {
	children: React.ReactNode
	variant?: ButtonVariant
	size?: ButtonSize
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

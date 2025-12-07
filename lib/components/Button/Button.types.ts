import type GLOBAL from "@lib/constants/global"
import type { ButtonHTMLAttributes } from "react"

type ReactButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
type Variant = (typeof GLOBAL.BUTTON.VARIANT)[keyof typeof GLOBAL.BUTTON.VARIANT]
type IconPosition = (typeof GLOBAL.BUTTON.POSITION)[keyof typeof GLOBAL.BUTTON.POSITION]
type Size = (typeof GLOBAL.BUTTON.SIZE)[keyof typeof GLOBAL.BUTTON.SIZE]

export type ButtonProps = ReactButtonProps & {
	variant?: Variant
	size?: Size
	icon?: React.ReactNode
	iconPosition?: IconPosition
	loading?: boolean
}

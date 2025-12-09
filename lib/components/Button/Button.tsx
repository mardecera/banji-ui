import GLOBAL from "@lib/constants/global"
import { cc } from "@lib/utils/cleanClass"
import type { ButtonProps } from "./Button.types"

import "./Button.css"
import "../../styles/global.css"
import Spin from "../Spin/Spin"

const Button = (props: ButtonProps) => {
	const {
		icon,
		children,
		className,
		type = "button",
		size = GLOBAL.DEFAULT,
		variant = GLOBAL.DEFAULT,
		iconPosition = GLOBAL.BUTTON.POSITION.LEFT,
		loading = false,
		noStyles = false,
		...rest
	} = props

	const classButton = `${GLOBAL.LIBRARY_NAME}-button`
	const classVariant = `${GLOBAL.LIBRARY_NAME}-button__${variant}`
	const classSize = `${GLOBAL.LIBRARY_NAME}-button__size-${size}`
	const classNameButton = `${classButton} ${classVariant} ${classSize}`

	const hasIconLeft = iconPosition === GLOBAL.BUTTON.POSITION.LEFT && icon && !loading
	const hasIconRight = iconPosition === GLOBAL.BUTTON.POSITION.RIGHT && icon

	return (
		<button {...rest} type={type} className={cc(!noStyles && classNameButton, className)}>
			{hasIconLeft && <span className="icon">{icon}</span>}
			{loading && <Spin />}
			{children}
			{hasIconRight && <span className="icon">{icon}</span>}
		</button>
	)
}

Button.displayName = "Button"
export default Button

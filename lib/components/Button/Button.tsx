import { LIBRARY_NAME } from "@lib/constants/global"
import { cleanClass } from "@lib/utils/cleanClass"
import type { Props } from "./Button.types"

import "./Button.css"

const Button = ({ children, variant = "primary", className, ...props }: Props) => {
	const COMPONENT_NAME = `${LIBRARY_NAME}-button`
	const COMPONENT_VARIANT_NAME = `${COMPONENT_NAME}__${variant}`
	const COMPONENT_CLASS_NAME = cleanClass(COMPONENT_NAME, COMPONENT_VARIANT_NAME, className)

	return (
		<button {...props} className={COMPONENT_CLASS_NAME}>
			{children}
		</button>
	)
}

export default Button

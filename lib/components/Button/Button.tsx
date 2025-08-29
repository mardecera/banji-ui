import { LIBRARY_NAME } from "@lib/constants/global"
import { cleanClass } from "@lib/utils/cleanClass"
import type { Props } from "./Button.types"

import "./Button.css"
import Spin from "../Spin/Spin"

const Button = ({
	children,
	className,
	icon,
	type = "primary",
	variant = "default",
	htmlType = "button",
	loading = false,
	iconPosition = "left",
	...props
}: Props) => {
	return (
		<button
			{...props}
			className={cleanClass(`${LIBRARY_NAME}-button`, `${LIBRARY_NAME}-button__${type}-${variant}`, `${className}`)}
			type={htmlType}
		>
			{icon && iconPosition === "left" && !loading && icon}
			{loading && <Spin />}
			{children}
			{icon && iconPosition === "right" && icon}
		</button>
	)
}

export default Button

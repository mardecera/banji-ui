import { tv } from "tailwind-variants"

export const checkActiveStyle = tv({
	variants: {
		active: {
			true: "bg-gray-100",
			false: "bg-transparent"
		}
	},
	defaultVariants: {
		active: false
	}
})

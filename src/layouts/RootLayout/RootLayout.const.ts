import { tv } from "tailwind-variants"

export const activeStyle = tv({
	base: "rounded-full px-3.5 py-2 text-sm font-semibold no-underline transition-colors",
	variants: {
		active: {
			true: "bg-teal-700 text-slate-50",
			false: "text-slate-700 hover:bg-slate-200"
		}
	},
	defaultVariants: {
		active: false
	}
})

import { tv } from "tailwind-variants"

export const getBadgeStyles = tv({
	base: "inline-flex items-center rounded-full border px-2.5 py-1 text-xs leading-none font-bold tracking-[0.01em]",
	variants: {
		tone: {
			neutral: "bg-slate-200 text-slate-700 border-transparent",
			success: "bg-green-100 text-green-800 border-green-300",
			warning: "bg-amber-100 text-amber-800 border-amber-300",
			danger: "bg-red-100 text-red-800 border-red-300"
		}
	},
	defaultVariants: {
		tone: "neutral"
	}
})

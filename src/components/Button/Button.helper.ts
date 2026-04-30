import { tv } from "tailwind-variants"

export const getButtonStyles = tv({
	base: "inline-flex items-center justify-center rounded-xl px-5 py-3 text-[0.95rem] font-semibold cursor-pointer transition-[transform,box-shadow,background-color] duration-150 ease-in-out hover:-translate-y-px active:translate-y-0 no-underline",
	variants: {
		variant: {
			solid:
				"bg-teal-700 text-slate-50 shadow-[0_8px_24px_rgba(15,118,110,0.35)] hover:bg-teal-800",
			ghost:
				"bg-transparent text-teal-700 border border-teal-700 hover:bg-teal-100"
		}
	},
	defaultVariants: {
		variant: "solid"
	}
})

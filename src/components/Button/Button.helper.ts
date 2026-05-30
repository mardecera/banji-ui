import { tv } from "tailwind-variants";

export const getButtonStyles = tv({
	base: "inline-flex items-center justify-center rounded-[10px] text-[0.95rem] font-semibold cursor-pointer transition-[transform,box-shadow,background-color] duration-150 ease-in-out hover:-translate-y-px active:translate-y-0 no-underline w-fit",
	variants: {
		size: {
			xs: "h-8 px-3 text-xs",
			sm: "h-9 px-4 text-sm",
			default: "h-10 px-5 text-base",
			lg: "h-11 px-6 text-lg",
			"icon-xs": "h-7 w-7",
			"icon-sm": "h-8 w-8",
			icon: "h-9 w-9",
			"icon-lg": "h-10 w-10"
		},
		variant: {
			default: "bg-teal-700 text-slate-50 hover:bg-teal-800",
			outline:
				"bg-transparent text-teal-700 border border-teal-700 hover:bg-teal-100",
			secondary: "bg-teal-400 text-slate-50 hover:bg-teal-600",
			ghost: "bg-transparent text-teal-700 hover:bg-teal-100",
			destructive: "text-red-700 bg-red-100 hover:bg-red-200",
			link: "bg-transparent underline px-0 py-0 p-0 h-auto"
		}
	},
	defaultVariants: {
		size: "default",
		variant: "default"
	}
});

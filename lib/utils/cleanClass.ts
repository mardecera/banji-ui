type ArgType = string | object | undefined | boolean | number | null

export const cleanClass = (...args: ArgType[]) => {
	return args.filter(Boolean).join(" ")
}

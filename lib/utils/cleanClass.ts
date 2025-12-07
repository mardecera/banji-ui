type ArgType = string | object | undefined | boolean | number | null

export const cc = (...args: ArgType[]) => {
	return args.filter(Boolean).join(" ")
}

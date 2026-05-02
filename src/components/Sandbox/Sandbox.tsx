import Code from "./Code/Code"
import Component from "./Component/Component"
import type { SandboxProps as Props } from "./Sandbox.types"

const SandboxRoot = (props: Props) => {
	const { children } = props

	return (
		<div className="bg-gray-200 rounded-2xl overflow-hidden w-full">
			{children}
		</div>
	)
}

const Sandbox = Object.assign(SandboxRoot, {
	Code,
	Component
})

export default Sandbox

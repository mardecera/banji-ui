import CodeBlock from "@/components/Codeblock/Codeblock"
import type { CodeProps as Props } from "./Code.types"

const Code = (props: Props) => {
	const { code } = props

	return (
		<pre className="">
			<code>
				<CodeBlock code={code} />
			</code>
		</pre>
	)
}

export default Code

import { Highlight } from "prism-react-renderer"
import { themes } from "prism-react-renderer"
import type { CodeBlockProps as Props } from "./CodeBlock.types"
import { cn } from "@/utils/tailwind.utils"

const theme = themes.oneDark

const CodeBlock = ({ code, language = "tsx" }: Props) => {
	return (
		<Highlight theme={theme} code={code.trim()} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={cn(className, "")}
					style={{
						...style,
						padding: "16px",
						overflowX: "auto"
					}}
				>
					{tokens.map((line, i) => (
						<div key={`${i}-${line.length}`} {...getLineProps({ line })}>
							{line.map((token, key) => (
								<span key={key.toString()} {...getTokenProps({ token })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}

export default CodeBlock

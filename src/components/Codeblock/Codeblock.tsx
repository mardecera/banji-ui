import { Highlight } from "prism-react-renderer";
import { useState } from "react";

import { copyToClipboard } from "@/utils/clipboard.utils";
import { cn } from "@/utils/tailwind.utils";
import { minimunDark } from "./Codeblock.themes";
import type { CodeBlockProps as Props } from "./CodeBlock.types";
import Check from "../Icons/Check/Check";
import Copy from "../Icons/Copy/Copy";

const theme = minimunDark;

const CodeBlock = (props: Props) => {
	const { code, language = "tsx", withNumbers = false } = props;

	const [copied, setCopied] = useState(false);

	const handleCopy = async (code: string) => {
		const ok = await copyToClipboard(code);

		if (ok) {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		}
	};

	return (
		<div className="relative font-medium">
			<button
				onClick={() => handleCopy(code)}
				type="button"
				className="w-10 h-10 hover:bg-gray-200/10 rounded-full flex items-center justify-center absolute top-2 right-2 z-10 cursor-pointer"
			>
				{copied ? (
					<Check className="text-white w-5 h-5" />
				) : (
					<Copy className="text-white w-5 h-5" />
				)}
			</button>
			<Highlight theme={theme} code={code.trim()} language={language}>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre
						className={cn(
							className,
							"no-scrollbar min-w-0 overflow-x-auto overflow-y-auto overscroll-x-contain overscroll-y-auto text-[14px] p-4"
						)}
						style={{
							...style
						}}
					>
						<code className="grid overflow-x-auto">
							{tokens.map((line, i) => (
								<div
									key={`${i}-${line.length}`}
									{...getLineProps({ line })}
									className="flex"
								>
									{withNumbers ? (
										<span className="table-cell text-right pr-4 text-[0.8rem] opacity-50 select-none">
											{i + 1}
										</span>
									) : null}
									<span style={{ display: "table-cell" }}>
										{line.map((token, key) => (
											<span
												key={key.toString()}
												{...getTokenProps({ token })}
											/>
										))}
									</span>
								</div>
							))}
						</code>
					</pre>
				)}
			</Highlight>
		</div>
	);
};

export default CodeBlock;

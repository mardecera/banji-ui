import CodeBlock from "@/components/Codeblock/Codeblock";
import type { CodeProps as Props } from "./Code.types";

const Code = (props: Props) => {
	const { code } = props;

	return (
		<div className="overflow-scroll w-full">
			<CodeBlock code={code} withNumbers />
		</div>
	);
};

export default Code;

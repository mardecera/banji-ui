import type { Language } from "prism-react-renderer";

export type CodeBlockProps = {
	code: string;
	language?: Language;
	withNumbers?: boolean;
};

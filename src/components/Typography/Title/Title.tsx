import type { TitleProps as Props } from "./Title.types";

const Title = (props: Props) => {
	const { children } = props;

	return <h1 className="text-2xl font-semibold">{children}</h1>;
};

export default Title;

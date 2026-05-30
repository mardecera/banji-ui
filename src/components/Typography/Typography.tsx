import H2 from "./H2/H2";
import Title from "./Title/Title";
import type { TypographyProps as Props } from "./Typography.types";

const TypographyRoot = (props: Props) => {
	const { children } = props;

	return <>{children}</>;
};

const Typography = Object.assign(TypographyRoot, {
	Title,
	H2
});

export default Typography;

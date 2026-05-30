import { createPortal } from "react-dom";

import { insertPortalElement } from "@/utils/html.utils";
import type { PortalProps } from "./Portal.types";

const Portal = (props: PortalProps) => {
	const { children } = props;

	const portal = insertPortalElement();

	return createPortal(children, portal);
};

export default Portal;

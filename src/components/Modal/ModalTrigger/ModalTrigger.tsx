import { cloneElement, isValidElement } from "react";

import type { ModalTriggerProps } from "./ModalTrigger.types";
import { useModal } from "../ModalProvider/ModalContext";

const ModalTrigger = (props: ModalTriggerProps) => {
	const { children } = props;
	const { open } = useModal();

	if (!isValidElement(children)) {
		return null;
	}

	return cloneElement(children, {
		...children.props,
		onClick: (event: React.MouseEvent) => {
			children.props.onClick?.(event);
			if (!event.defaultPrevented) {
				open();
			}
		}
	});
};

export default ModalTrigger;

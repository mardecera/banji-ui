import { cloneElement, isValidElement } from "react";

import Close from "@/components/Icons/Close/Close";
import type { ModalBackdropProps } from "./ModalBackdrop.types";
import { useModal } from "../ModalProvider/ModalContext";

const ModalBackdrop = (props: ModalBackdropProps) => {
	const { close } = useModal();
	const { asChild = false, children } = props;

	if (children && asChild && isValidElement(children)) {
		return cloneElement(children, {
			...children.props,
			onClick: (event: React.MouseEvent) => {
				children.props.onClick?.(event);
				if (!event.defaultPrevented) {
					close();
				}
			}
		});
	}

	if (children) {
		return <>{children}</>;
	}

	return (
		<button
			type="button"
			className="cursor-pointer absolute h-8 w-8 top-2 right-2 bg-white hover:bg-gray-100 flex items-center justify-center rounded-lg"
			aria-label="Close modal"
			onClick={close}
		>
			<Close />
		</button>
	);
};

export default ModalBackdrop;

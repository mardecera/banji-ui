import type { ModalProps as Props } from "./Modal.types";
import ModalBackdrop from "./ModalBackdrop/ModalBackdrop";
import ModalContent from "./ModalContent/ModalContent";
import ModalProvider from "./ModalProvider/ModalProvider";
import ModalTrigger from "./ModalTrigger/ModalTrigger";

const ModalRoot = (props: Props) => {
	const { children } = props;

	return <ModalProvider>{children}</ModalProvider>;
};

const Modal = Object.assign(ModalRoot, {
	Trigger: ModalTrigger,
	Content: ModalContent,
	Backdrop: ModalBackdrop
});

export default Modal;

import { useCallback, useMemo, useState } from "react";

import { ModalContext } from "./ModalContext";

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);
	const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

	const value = useMemo(
		() => ({
			isOpen,
			open,
			close,
			toggle
		}),
		[close, isOpen, open, toggle]
	);

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
};

export default ModalProvider;

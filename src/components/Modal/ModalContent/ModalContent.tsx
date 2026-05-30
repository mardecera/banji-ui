import { useEffect, useState } from "react";

import { cn } from "@/utils/tailwind.utils";
import type { ModalContentProps } from "./ModalContent.types";
import ModalLayer from "../ModalLayer/ModalLayer";
import { useModal } from "../ModalProvider/ModalContext";

const ModalContent = (props: ModalContentProps) => {
	const { children, className } = props;
	const { isOpen } = useModal();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsVisible(false);
			let frameId = 0;
			let nestedFrameId = 0;

			frameId = window.requestAnimationFrame(() => {
				nestedFrameId = window.requestAnimationFrame(() => {
					setIsVisible(true);
				});
			});

			return () => {
				window.cancelAnimationFrame(frameId);
				window.cancelAnimationFrame(nestedFrameId);
			};
		}

		setIsVisible(false);
	}, [isOpen]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				event.preventDefault();
				event.stopPropagation();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<ModalLayer>
			<div
				className={cn(
					"relative bg-white rounded-xl p-7 max-w-[50dvw] w-full max-h-[90dvh] overflow-y-auto transition-transform duration-300 ease-out",
					isVisible ? "translate-y-0" : "translate-y-[100dvh]",
					className
				)}
			>
				{children}
			</div>
		</ModalLayer>
	);
};

export default ModalContent;

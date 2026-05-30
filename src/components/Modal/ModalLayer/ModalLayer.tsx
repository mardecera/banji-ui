import { useEffect, useState } from "react";

import Portal from "@/components/Portal/Portal";
import type { ModalLayerProps } from "./ModalLayer.types";
import { useModal } from "../ModalProvider/ModalContext";

const ModalLayer = (props: ModalLayerProps) => {
	const { children } = props;
	const { isOpen, close } = useModal();
	const [shouldRender, setShouldRender] = useState(isOpen);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setShouldRender(true);
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

		const exitTimeout = window.setTimeout(() => {
			setShouldRender(false);
		}, 300);

		return () => {
			window.clearTimeout(exitTimeout);
		};
	}, [isOpen]);

	if (!shouldRender) {
		return null;
	}

	return (
		<Portal>
			<div
				className={`modal fixed inset-0 w-full z-500 flex items-center justify-center p-5 transition-opacity duration-300 ${
					isVisible ? "bg-black/50 opacity-100" : "bg-black/50 opacity-0"
				}`}
				data-state={isOpen ? "open" : "closed"}
				onMouseDown={(event) => {
					if (event.target === event.currentTarget) {
						close();
					}
				}}
			>
				{children}
			</div>
		</Portal>
	);
};

export default ModalLayer;

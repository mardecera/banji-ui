/**
 * @description Inserta un div con id "portal" en el body
 * @returns {HTMLDivElement}
 */
export const insertPortalElement = (): HTMLDivElement => {
	const existingPortalElement = document.getElementById("portal");

	if (existingPortalElement instanceof HTMLDivElement) {
		return existingPortalElement;
	}

	const portalElement = document.createElement("div");
	portalElement.id = "portal";
	document.body.appendChild(portalElement);
	return portalElement;
};

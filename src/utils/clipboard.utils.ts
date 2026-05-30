export const copyToClipboard = async (text: string): Promise<boolean> => {
	// 1. Usar API de portapapeles
	if (navigator.clipboard && window.isSecureContext) {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch (error) {
			console.error("Error al copiar al portapapeles", error);
			return false;
		}
	}

	// 2. Fallback clásico (funciona en más casos, incluso mobile)
	try {
		const textarea = document.createElement("textarea");
		textarea.value = text;

		// Evitar scroll jump en mobile
		textarea.style.position = "fixed";
		textarea.style.top = "0";
		textarea.style.left = "0";
		textarea.style.opacity = "0";

		document.body.appendChild(textarea);
		textarea.focus();
		textarea.select();

		const successful = document.execCommand("copy");
		document.body.removeChild(textarea);

		return successful;
	} catch (error) {
		console.error("Error al copiar al portapapeles", error);
		return false;
	}
};

/**
 * Lee un archivo como texto desde `/src` o mediante `fetch`.
 *
 * @param path Ruta local de `/src` o recurso publico.
 * @returns Contenido del archivo.
 * @throws Error si `fetch` no responde correctamente.
 */
export const getFileAsString = async (path: string): Promise<string> => {
	const sourcePath = normalizeSourcePath(path);
	const sourceFiles = import.meta.glob("/src/**/*", {
		query: "?raw",
		import: "default"
	}) as Record<string, () => Promise<string>>;

	const loadSourceFile = sourceFiles[sourcePath];
	if (loadSourceFile) {
		return loadSourceFile();
	}

	const response = await fetch(path);
	if (!response.ok) {
		throw new Error(`No se pudo leer el archivo en "${path}".`);
	}
	return response.text();
};

/**
 * Convierte rutas `./src` al formato `/src`.
 *
 * @param path Ruta a normalizar.
 */
const normalizeSourcePath = (path: string): string => {
	if (path.startsWith("/src/")) {
		return path;
	}

	if (path.startsWith("./src/")) {
		return path.slice(1);
	}

	return path;
};

import { useEffect, useState } from "react";

import { getFileAsString } from "@/utils/file.utils";

/**
 * Hook para obtener el contenido de un archivo como string
 * @param path Ruta del archivo
 */
const useFileToString = (path: string) => {
	const [file, setFile] = useState<string>("");

	useEffect(() => {
		void (async () => {
			const file = await getFileAsString(path);
			setFile(file);
		})();
	}, [path]);

	return file;
};

export default useFileToString;

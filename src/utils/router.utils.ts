export const checkIsExternalURL = (url: string): boolean => {
	return url.startsWith("http://") || url.startsWith("https://");
};

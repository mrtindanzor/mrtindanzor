export const trimToLowerCase = (text: string) => {
	if (!text) return ""
	return text.toLowerCase().trim()
}

export const toCapitalized = (text: string) => {
	if (!text) return ""
	return text
		.trim()
		.split(" ")
		.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
		.join(" ")
}
export const formatToUrlSlug = (text: string) => {
	if (!text || typeof text !== "string") return ""
	return text.trim().replaceAll(" ", "-")
}

export const formatFromUrlSpaces = (text: string) => {
	if (!text || typeof text !== "string") return ""
	return text.trim().replaceAll("%20", " ")
}

export const formatFromUrlSlug = (text: string) => {
	if (!text || typeof text !== "string") return ""
	return text.trim().replaceAll("-", " ")
}

export const formatFromUrlSlugCapitalize = (text: string) => {
	if (!text || typeof text !== "string") return ""
	return formatFromUrlSlug(text)
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ")
}

export const renderText = (
	separator: string,
	...words: (number | string | undefined | null)[]
) => {
	return words.filter(Boolean).join(separator)
}

import { BRANDING } from "@/shared/constants/branding"
import { toCapitalized } from "./textFormat"

export function pageTitle(title: string) {
	return `${title} ~ ${toCapitalized(BRANDING)}`
}

export function pageDescription(description: string) {
	const descWithBranding = `${toCapitalized(BRANDING)} ~ ${description}`
	return descWithBranding.length > 160
		? `${description.slice(0, 160 - (BRANDING.length + 2))}... ~ ${toCapitalized(BRANDING)}`
		: descWithBranding
}

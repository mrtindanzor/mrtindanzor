import { BRANDING } from "@/shared/constants/branding"
import { toCapitalized } from "./textFormat"

export function pageTitle(title: string) {
	return `${title} | ${toCapitalized(BRANDING)}`
}

export function pageDescription(description: string) {
	const descWithBranding = `${toCapitalized(BRANDING)} - ${description}`
	return descWithBranding.length > 160
		? `${descWithBranding.slice(0, 160)}...`
		: descWithBranding
}

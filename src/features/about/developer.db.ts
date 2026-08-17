import { socials } from "@/config/socials"
import type { AboutDeveloperType } from "./about.contract.types"

export const DEVELOPER: AboutDeveloperType = Object.freeze({
	avatar: "/images/mrtindanzor/avatar-main.png",
	avatar2: "/images/mrtindanzor/avatar-secondary.png",
	name: "Mr. Tindanzor Simon",
	nick: "Mr. Tindanzor",
	lastName: "Tindanzor",
	firstName: "Simon",
	resume: socials.resume,
	email: socials.email,
	phone: socials.phone,
	socials: {
		github: socials.github,
		linkedin: socials.linkedin,
		tiktok: socials.tiktok,
		whatsapp: socials.whatsapp,
		instagram: socials.instagram,
		facebook: socials.facebook,
	},
})

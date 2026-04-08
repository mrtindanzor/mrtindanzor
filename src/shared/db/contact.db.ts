import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { SiFacebook, SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si"
import type { SocailMediaProps } from "./contact.db.types"
import { DEVELOPER } from "./developer.db"

export const CONTACT_LINKS: SocailMediaProps[] = [
	{
		title: "Github",
		link: DEVELOPER.socials.github,
		color: "text-green-600",
		icon: SiGithub,
	},
	{
		title: "Email",
		link: `mailto:${DEVELOPER.email}`,
		color: "text-red-600",
		icon: EnvelopeIcon,
	},
	{
		title: "LinkedIn",
		link: DEVELOPER.socials.linkedin,
		color: "text-blue-600",
		icon: SiLinkedin,
	},
	{
		title: "Whatsapp",
		link: DEVELOPER.socials.whatsapp,
		color: "text-green-600",
		icon: SiWhatsapp,
	},
	{
		title: "Facebook",
		link: DEVELOPER.socials.facebook,
		color: "text-sky-600",
		icon: SiFacebook,
	},
]

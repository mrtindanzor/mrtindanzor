import { getEnv } from "./utils/getEnv"

const resume = getEnv({ name: "VITE_RESUME_LINK" })
const github = getEnv({ name: "VITE_GITHUB_LINK" })
const linkedin = getEnv({ name: "VITE_LINKEDIN_LINK" })
const facebook = getEnv({ name: "VITE_FACEBOOK_LINK" })
const whatsapp = getEnv({ name: "VITE_WHATSAPP_LINK" })
const tiktok = getEnv({ name: "VITE_TIKTOK_LINK" })
const instagram = getEnv({ name: "VITE_INSTAGRAM_LINK" })
const email = getEnv({ name: "VITE_EMAIL_ADDRESS" })
const phone = getEnv({ name: "VITE_PHONE_NUMBER" })

export const socials = {
	resume,
	github,
	linkedin,
	facebook,
	whatsapp,
	tiktok,
	instagram,
	email,
	phone,
}

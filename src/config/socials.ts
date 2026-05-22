const resume = import.meta.env.VITE_RESUME_LINK
const github = import.meta.env.VITE_GITHUB_LINK
const linkedin = import.meta.env.VITE_LINKEDIN_LINK
const facebook = import.meta.env.VITE_FACEBOOK_LINK
const whatsapp = import.meta.env.VITE_WHATSAPP_LINK
const tiktok = import.meta.env.VITE_TIKTOK_LINK
const instagram = import.meta.env.VITE_INSTAGRAM_LINK
const email = import.meta.env.VITE_EMAIL_ADDRESS
const phone = import.meta.env.VITE_PHONE_NUMBER

if (!resume) throw Error("Resume link not defined")
if (!github) throw Error("Github link not defined")
if (!linkedin) throw Error("Linkedin link not defined")
if (!facebook) throw Error("Facebook link not defined")
if (!whatsapp) throw Error("Whatsapp link not defined")
if (!tiktok) throw Error("Tiktok link not defined")
if (!instagram) throw Error("Instagram link not defined")
if (!email) throw Error("Email not defined")
if (!phone) throw Error("Phone number not defined")

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

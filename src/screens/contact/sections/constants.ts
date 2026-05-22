import { motionVariants } from "@/shared/ui/Framer"

export const formSectionVariants = motionVariants({
	hidden: { opacity: 0, y: 10 },
})

export const formButtonVariants = motionVariants({
	hidden: { opacity: 0, y: 10 },
	show: { transition: { delay: 0.15 } },
})

export const socialMediaLinkVariants = motionVariants({
	hidden: { opacity: 0 },
	show: { opacity: 1 },
})

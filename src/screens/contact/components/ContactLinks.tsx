import { motion } from "framer-motion"
import type { ComponentProps } from "react"
import { CONTACT_LINKS } from "@/shared/db"
import { motionVariants } from "@/shared/ui/Framer"
import { cn } from "@/shared/utils/cn"
import { SocialMediaCard } from "./SocialMediaLink"

const linkVariants = motionVariants({
	hidden: { x: 40 },
	show: { transition: { staggerChildren: 0.1 } },
})
export function ContactLinks({ className, ...props }: ComponentProps<"div">) {
	return (
		<div {...props} className={cn(className, "grid gap-6")}>
			<h2 className="text-lg font-bold text-neutral">
				Contact or follow me on my social media channels!
			</h2>
			<SocialMediaLinks />
		</div>
	)
}

function SocialMediaLinks() {
	return (
		<motion.ul
			className="w-full"
			variants={linkVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
		>
			{CONTACT_LINKS.map((link) => (
				<SocialMediaCard key={link.link} {...link} />
			))}
		</motion.ul>
	)
}

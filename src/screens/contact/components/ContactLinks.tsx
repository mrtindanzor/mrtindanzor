"use client"
import { motion } from "framer-motion"
import type { ComponentProps } from "react"
import { motionVariants } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { CONTACT_LINKS } from "@/shared/db"
import { Heading } from "@/shared/ui/Heading"
import { SocialMediaCard } from "@/shared/ui/SocialMediaLink"

const linkVariants = motionVariants({
	hidden: { x: 40 },
	show: { transition: { staggerChildren: 0.1 } },
})

export function ContactLinks({ className, ...props }: ComponentProps<"div">) {
	return (
		<div {...props} className={cn(className, "grid gap-4")}>
			<Heading tag="h2" size="xs" className="px-0">
				Contact or follow me on my social media channels!
			</Heading>
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

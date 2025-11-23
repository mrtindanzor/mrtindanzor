"use client"
import { motion } from "framer-motion"
import type { ComponentProps } from "react"
import { Heading } from "@/components/common/Heading"
import { SocialMediaCard } from "@/components/common/SocialMediaLink"
import { socialMediaLinks } from "@/lib/db"
import { motionVariants } from "@/lib/motion"
import { cn } from "@/lib/utils"

const linkVariants = motionVariants({
	hidden: { x: 40 },
	show: { transition: { staggerChildren: 0.1 } },
})

export default function Contactlinks({
	className,
	...props
}: ComponentProps<"div">) {
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
			{socialMediaLinks.map((link) => (
				<SocialMediaCard key={link.link} {...link} />
			))}
		</motion.ul>
	)
}

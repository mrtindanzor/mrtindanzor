import { motion } from "framer-motion"
import type { ComponentProps } from "react"
import { CONTACT_LINKS } from "@/shared/db"
import { useTyping } from "@/shared/hooks/useTyping"
import { motionVariants } from "@/shared/ui/Framer"
import { cn } from "@/shared/utils/cn"
import { SocialMediaCard } from "./SocialMediaLink"

export function ContactLinks({ className, ...props }: ComponentProps<"div">) {
	const { ref, output: content } = useTyping({
		text: "Contact or follow me on my social media channels!",
		whileInView: true,
		speedInSeconds: 0.3,
	})

	return (
		<div
			{...props}
			ref={ref}
			className={cn(className, "grid w-screen max-w-sm h-fit gap-6")}
		>
			<h2 className="text-xl tracking-wide">{content}</h2>
			<SocialMediaLinks />
		</div>
	)
}

function SocialMediaLinks() {
	return (
		<motion.ul
			className="w-full grid grid-cols-[repeat(auto-fill,minmax(3.5rem,1fr))] gap-4"
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

const linkVariants = motionVariants({
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { staggerChildren: 0.1 } },
})

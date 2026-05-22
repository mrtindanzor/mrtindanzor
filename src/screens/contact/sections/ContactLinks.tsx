import type { ComponentProps } from "react"
import { CONTACT_LINKS, type SocailMediaProps } from "@/shared/db"
import { useTyping } from "@/shared/hooks/useTyping"
import { FramerAnimatePosition } from "@/shared/ui/Framer"
import { StyledLink } from "@/shared/ui/primitive/Button"
import { cn } from "@/shared/utils/cn"
import { socialMediaLinkVariants } from "./constants"

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
			className={cn(className, "grid w-full md:w-screen max-w-sm h-fit gap-6")}
		>
			<h2 className="text-xl tracking-wide">{content}</h2>
			<SocialMediaLinks />
		</div>
	)
}

function SocialMediaLinks() {
	return (
		<FramerAnimatePosition variants={socialMediaLinkVariants} animate="show">
			<ul className="w-full grid grid-cols-[repeat(auto-fill,minmax(3.5rem,1fr))] gap-4">
				{CONTACT_LINKS.map((link) => (
					<SocialMediaCard key={link.link} {...link} />
				))}
			</ul>
		</FramerAnimatePosition>
	)
}

type SocailMediaCardProps = ComponentProps<"div"> & SocailMediaProps

function SocialMediaCard({
	title,
	link,
	icon: Icon,
	color,
	className,
	...props
}: SocailMediaCardProps) {
	return (
		<div
			{...props}
			className={cn(
				"group relative flex items-center border border-muted-secondary bg-muted-secondary/30 flex-place-center aspect-square rounded-2xl hover:bg-background-secondary transition-all",
				className,
			)}
		>
			<StyledLink
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className={cn(
					"font-semibold static link text-neutral-secondary group-hover:text-neutral",
					"p-2.5 rounded-xl text-neutral",
					color,
				)}
				title={title}
			>
				<Icon className="size-5" />
			</StyledLink>
		</div>
	)
}

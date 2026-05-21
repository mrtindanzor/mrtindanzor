import { AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { type ComponentProps, useState } from "react"
import { SiGithub } from "react-icons/si"
import type { ProjectProps } from "../db"
import { FramerAnimatePosition } from "./Framer"
import { Button, StyledLink } from "./primitive/Button"
import { Pill } from "./primitive/Button/components/Pill"
import { MImage } from "./primitive/Image"

export type ProjectCardProps = ComponentProps<"div"> & ProjectProps

export function ProjectCard({
	imgSrc,
	tags,
	title,
	description,
	link,
	repo,
	featured: _f,
}: ProjectCardProps) {
	return (
		<div className="group card-surface grid transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
			<MImage
				url={imgSrc}
				alt={title}
				className="min-h-64 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
			/>

			<div className="flex flex-col p-6 md:p-8 gap-6">
				<div className="flex flex-col gap-2">
					<h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
						{title}
					</h3>
					<p className="text-muted leading-relaxed line-clamp-4">
						{description}
					</p>
				</div>

				<Tags tags={tags} />
				<Links className="mt-auto pt-6" link={link} repo={repo} />
			</div>
		</div>
	)
}

function Links({
	link,
	repo,
	className,
	...props
}: Pick<ProjectCardProps, "repo" | "link"> & ComponentProps<"div">) {
	return (
		<div className="px-6  flex justify-end items-center gap-3" {...props}>
			{repo && (
				<StyledLink href={repo} target="_blank" className="link-ring">
					<SiGithub /> Repo
				</StyledLink>
			)}

			{link && (
				<StyledLink href={link} target="_blank" className="group link-ring">
					Preview
					<ArrowUp className="rotate-45 size-4 group-hover:animate-bounce" />
				</StyledLink>
			)}
		</div>
	)
}

function Tags({ tags }: Pick<ProjectCardProps, "tags">) {
	const [show, setShow] = useState(false)

	return (
		<div className="relative flex justify-end">
			<Button onClick={() => setShow((s) => !s)} variant="outline">
				View Toolings
			</Button>

			{show ? "simon" : "method"}

			<AnimatePresence>
				{show && (
					<FramerAnimatePosition
						variants={{
							show: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: -10 },
						}}
						animate="show"
						exit="hidden"
					>
						<ul
							className="flex absolute z-2000 top-full right-0 bg-background-secondary rounded-xl p-3 flex-wrap gap-2"
							aria-label="Framework, libraries and toolings used"
						>
							{tags.map((tag) => (
								<li key={tag}>
									<Pill>{tag}</Pill>
								</li>
							))}
						</ul>
					</FramerAnimatePosition>
				)}
			</AnimatePresence>
		</div>
	)
}

import { LucideExternalLink } from "lucide-react"
import type { ComponentProps } from "react"
import { SiGithub } from "react-icons/si"
import type { ProjectType } from "@/features/projects"
import { cn } from "../utils/cn"
import { Link } from "./primitive/Button"
import { Pill } from "./primitive/Button/components/Pill"
import { Image } from "./primitive/Image"

export type ProjectCardProps = ComponentProps<"div"> & ProjectType

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
		<div className="group card-surface bg-muted grid transition-all  hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
			<div className="overflow-hidden h-50 w-full rounded-t-2xl">
				<Image
					url={imgSrc}
					alt={title}
					className="*:object-cover *:object-top size-full transition-transform duration-500 group-hover:scale-[1.02]"
				/>
			</div>

			<div className="grid grid-rows-[auto_auto_1fr_auto] px-4 pt-4 pb-4">
				<h3 className="text-lg tracking-tight font-semibold mb-3">{title}</h3>
				<p className="text-neutral-secondary text-sm leading-relaxed line-clamp-2 mb-1">
					{description}
				</p>

				<Tags tags={tags} />

				<Links
					className="mt-4 border-t border-t-neutral-secondary/10"
					link={link}
					repo={repo}
				/>
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
		<div
			className={cn(
				"px-2 flex pt-4 text-[14px] tracking-wide items-center gap-3",
				className,
			)}
			{...props}
		>
			{repo && (
				<Link
					href={repo}
					target="_blank"
					pad="none"
					rad="none"
					y="center"
					className="outline-none  flex gap-x-1.5"
				>
					<SiGithub className="size-4" /> Repo
				</Link>
			)}

			{link && (
				<Link
					href={link}
					target="_blank"
					pad="none"
					rad="none"
					variant="success-light"
					y="center"
					className="group outline-none bg-transparent  flex gap-x-1.5"
				>
					<LucideExternalLink className="size-4" /> Live
				</Link>
			)}
		</div>
	)
}

function Tags({ tags }: Pick<ProjectCardProps, "tags">) {
	const hasMore = tags.length > 4
	const remaining = tags.length - 4

	return (
		<ul
			className="flex flex-wrap  gap-2"
			aria-label="Framework, libraries and toolings used"
		>
			{tags.slice(0, 4).map((tag) => (
				<li key={tag}>
					<Pill
						pad="sm"
						variant="ghost-light"
						rad="xs"
						className="opacity-50 text-xs cursor-auto hover:opacity-100 white-nowrap"
					>
						{tag}
					</Pill>
				</li>
			))}

			{hasMore && (
				<li>
					<Pill
						pad="sm"
						variant="ghost-light"
						rad="xs"
						className="opacity-50 text-[9px] cursor-auto whitespace-nowrap"
					>
						+{remaining}
					</Pill>
				</li>
			)}
		</ul>
	)
}

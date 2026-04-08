import { FEATURED_PROJECTS } from "@/shared/db"
import { routes } from "@/shared/routes"
import { ProjectCard } from "@/shared/ui/ProjectCard"
import { StyledDotLink } from "@/shared/ui/primitive/Button"
import { Heading } from "@/shared/ui/primitive/Heading"
import { Section } from "@/shared/ui/primitive/Section"

export function FeatureProjects() {
	return (
		<div className="bg-linear-to-b from-slate-900 via-zinc-700 to-slate-950">
			<Section className="">
				<Heading tag="h2" size="md" className="bg-linear-to-br">
					Featured projects
				</Heading>

				<div className="@container">
					<ul className="grid gap-x-4 md:gap-x-6 gap-y-10">
						{FEATURED_PROJECTS.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</ul>
				</div>

				<StyledDotLink
					href={routes.projects}
					className="mx-auto"
					variant="outline"
				>
					View More
				</StyledDotLink>
			</Section>
		</div>
	)
}

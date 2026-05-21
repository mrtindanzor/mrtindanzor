import { FEATURED_PROJECTS } from "@/shared/db"
import { routes } from "@/shared/routes"
import { ProjectCard } from "@/shared/ui/ProjectCard"
import { StyledDotLink } from "@/shared/ui/primitive/Button"

export function FeatureProjects() {
	return (
		<div className="bg-background-secondary relative border-y border-border-subtle">
			<section className="section space-y-4">
				<h2 className="text-3xl md:text-4xl mb-12 text-gradient">
					Featured Projects
				</h2>

				<div className="@container">
					<ul className="grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-10">
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
			</section>
		</div>
	)
}

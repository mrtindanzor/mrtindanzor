import { StyledArrowButton } from "@/components/common/ArrowLink"
import { Heading } from "@/components/common/Heading"
import { ProjectCard } from "@/components/common/ProjectCard"
import { Section } from "@/components/common/Section"
import { projects } from "@/lib/db"

export function FeatureProjects() {
	return (
		<div className="bg-linear-to-b from-slate-900 via-zinc-700 to-slate-950">
			<Section className="">
				<Heading tag="h2" size="md" className="bg-linear-to-br">
					Featured projects
				</Heading>

				<div className="@container">
					<ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-x-4 md:gap-x-6 gap-y-10">
						{projects.slice(0, 3).map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</ul>
				</div>

				<StyledArrowButton href="/projects" className="mx-auto" variant="black">
					View More
				</StyledArrowButton>
			</Section>
		</div>
	)
}

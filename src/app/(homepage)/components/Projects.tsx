import { Heading } from "@/components/common/Heading";
import { StyledDotLink } from "@/components/common/IconLink";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Section } from "@/components/common/Section";
import { PROJECTS } from "@/lib/db";

export function FeatureProjects() {
  return (
    <div className="bg-linear-to-b from-slate-900 via-zinc-700 to-slate-950">
      <Section className="">
        <Heading tag="h2" size="md" className="bg-linear-to-br">
          Featured projects
        </Heading>

        <div className="@container">
          <ul className="grid gap-x-4 md:gap-x-6 gap-y-10">
            {PROJECTS.slice(0, 2).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </ul>
        </div>

        <StyledDotLink href="/projects" className="mx-auto" variant="black">
          View More
        </StyledDotLink>
      </Section>
    </div>
  );
}

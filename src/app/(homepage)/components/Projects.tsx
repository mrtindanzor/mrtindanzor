import { ArrowLink } from "@/components/common/ArrowLink";
import { Heading } from "@/components/common/Heading";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Section } from "@/components/common/Section";
import { projects } from "@/lib/db";

export function FeatureProjects() {
  return (
    <div className="">
      <Section className="">
        <Heading tag="h3" size="lg" className="bg-linear-to-br">
          Featured projects
        </Heading>

        <div className="@container">
          <ul className="grid grid-cols-1 @sm:grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-x-4 md:gap-x-6 gap-y-10">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </ul>
        </div>

        <ArrowLink
          href="/projects"
          className="gap-4 border-2 w-fit py-2.5 mx-auto px-8 rounded-3xl *:first:size-5 bg-white text-gray-800"
        >
          View More
        </ArrowLink>
      </Section>
    </div>
  );
}

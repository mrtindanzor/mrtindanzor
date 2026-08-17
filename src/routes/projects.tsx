import { createFileRoute } from "@tanstack/react-router"
import { generateMetaData } from "@/libs/tanstack"
import { ProjectsPage } from "@/screens/projects"
import { opengraphs } from "@/shared/routes"

export const Route = createFileRoute("/projects")({
	component: ProjectsPage,
	head: () => ({
		meta: generateMetaData({
			title: "Things I've Built",
			description: `A collection of projects I've designed and developed, showcasing my experience building modern web applications, backend systems, APIs, and scalable digital solutions.`,
			path: "projects",
			images: opengraphs.select("projects"),
		}),
	}),
})

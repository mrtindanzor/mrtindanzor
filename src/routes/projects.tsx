import { createFileRoute } from "@tanstack/react-router"
import { generateMetaData } from "@/libs/tanstack"
import { ProjectsPage } from "@/screens/projects"
import { opengraphs } from "@/shared/routes"

export const Route = createFileRoute("/projects")({
	component: ProjectsPage,
	head: () => ({
		meta: generateMetaData({
			title:
				"Where Design Meets Development: Projects I've Brought to Life",
			description: `These projects showcase my work in designing and building web
      applications that solve real-world problems. From educational
      platforms to e-commerce solutions, each project highlights the
      technologies I use, my problem-solving approach, and the impact
      achieved.`,
			path: "projects",
			images: opengraphs.select("projects"),
		}),
	}),
})

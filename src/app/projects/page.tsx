import type { Metadata } from "next"
import { ProjectsPage } from "@/screens/projects"

export const metadata: Metadata = {
	title:
		"Where Design Meets Development: Projects I've Brought to Life - Mr. Tindanzor",
	description: `These projects showcase my work in designing and building web
            applications that solve real-world problems. From educational
            platforms to e-commerce solutions, each project highlights the
            technologies I use, my problem-solving approach, and the impact
            achieved.`,
}

export default function Page() {
	return <ProjectsPage />
}

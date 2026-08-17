import { createFileRoute } from "@tanstack/react-router"
import { generateMetaData } from "@/libs/tanstack"
import { AboutPage } from "@/screens/about"
import { opengraphs } from "@/shared/routes"
export const Route = createFileRoute("/about")({
	component: AboutPage,
	head: () => ({
		meta: generateMetaData({
			title: `About`,
			description:
				"I'm a Full-Stack and DevOps developer passionate about building innovative, scalable, and user-focused applications.",
			path: "about",
			images: opengraphs.select("about"),
		}),
	}),
})

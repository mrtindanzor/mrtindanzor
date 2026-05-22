import { createFileRoute } from "@tanstack/react-router"
import { generateMetaData } from "@/libs/tanstack"
import { AboutPage } from "@/screens/about"
import { DEVELOPER } from "@/shared/db"
import { opengraphs } from "@/shared/routes"

export const Route = createFileRoute("/about")({
	component: AboutPage,
	head: () => ({
		meta: generateMetaData({
			title: `About - ${DEVELOPER.name}`,
			description:
				"I'm a Full-Stack and DevOps developer passionate about building innovative, scalable, and user-focused applications.",
			path: "about",
			images: opengraphs.select("about"),
		}),
	}),
})

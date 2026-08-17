import { createFileRoute } from "@tanstack/react-router"
import { generateMetaData } from "@/libs/tanstack"
import { AboutPage } from "@/screens/about"
import { opengraphs } from "@/shared/routes"
export const Route = createFileRoute("/about")({
	component: AboutPage,
	head: () => ({
		meta: generateMetaData({
			title: `My Journey in Tech`,
			description:
				"I'm a Full-Stack Web Developer & DevOps Engineer passionate about turning ideas into reliable, scalable, and meaningful digital products. I work across the stack—from crafting intuitive user experiences to building robust backend systems and deploying applications to the cloud.",
			path: "about",
			images: opengraphs.select("about"),
		}),
	}),
})

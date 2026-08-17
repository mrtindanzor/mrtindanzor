import { createFileRoute } from "@tanstack/react-router"
import { generateMetaData } from "@/libs/tanstack"
import { HomePage } from "@/screens/home"

export const Route = createFileRoute("/")({
	component: HomePage,
	head: () => ({
		meta: generateMetaData({
			title: `Building Reliable Digital Experiences`,
			description: `I'm a Full-Stack Web Developer & DevOps Engineer focused on building scalable, reliable, and user-friendly digital products—from intuitive frontends to robust backend systems and cloud infrastructure.`,
			path: ``,
		}),
	}),
})

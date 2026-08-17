import { createFileRoute } from "@tanstack/react-router"
import { generateMetaData } from "@/libs/tanstack"
import { ContactPage } from "@/screens/contact"
import { opengraphs } from "@/shared/routes"

export const Route = createFileRoute("/contact")({
	component: ContactPage,
	head: () => ({
		meta: generateMetaData({
			title: "Let's Build Something Together",
			description:
				"Have an idea, a project, or an opportunity in mind? I'd love to hear about it. Let's talk about how we can turn it into something useful and impactful.",
			path: "contact",
			images: opengraphs.select("contact"),
		}),
	}),
})

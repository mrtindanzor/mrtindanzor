import { createFileRoute } from "@tanstack/react-router"
import { generateMetaData } from "@/libs/tanstack"
import { ContactPage } from "@/screens/contact"
import { opengraphs } from "@/shared/routes"

export const Route = createFileRoute("/contact")({
	component: ContactPage,
	head: () => ({
		meta: generateMetaData({
			title: "Contact - Mr. Tindanzor",
			description:
				"Get in touch with me for collaboration, inquiries, or just to say hi.",
			path: "contact",
			images: opengraphs.select("contact"),
		}),
	}),
})

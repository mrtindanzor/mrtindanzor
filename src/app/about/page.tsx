import type { Metadata } from "next"
import { AboutPage } from "@/screens/about"

export const metadata: Metadata = {
	title: "About - Mr. Tindanzor",
	description:
		"I'm a Full-Stack and DevOps developer passionate about building innovative, scalable, and user-focused applications.",
}

export default function Page() {
	return <AboutPage />
}

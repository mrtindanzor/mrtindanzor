import type { Metadata } from "next"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/Hero"
import { Mission } from "./components/Mission"
import { FeatureProjects } from "./components/Projects"

export const metadata: Metadata = {
	title: "Full-Stack Web Developer & Devops Engineer - Mr. Tindanzor ",
}

export default function Homepage() {
	return (
		<main>
			<HeroSection />
			<Mission />
			<FeatureProjects />
			<Footer />
		</main>
	)
}

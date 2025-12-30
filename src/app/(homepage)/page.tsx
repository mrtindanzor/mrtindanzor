import type { Metadata } from "next"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/Hero"
import { JourneyPreview } from "./components/Journey"
import { Mission } from "./components/Mission"
import { FeatureProjects } from "./components/Projects"
import { SkillsPreview } from "./components/Skills"

export const metadata: Metadata = {
	title: "Full-Stack Web Developer & Devops Engineer - Mr. Tindanzor ",
}

export default function Homepage() {
	return (
		<main>
			<HeroSection />
			<Mission />
			<JourneyPreview />
			<FeatureProjects />
			<SkillsPreview />
			<Footer />
		</main>
	)
}

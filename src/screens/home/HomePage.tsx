import { Footer } from "./components/Footer"
import { HeroSection } from "./components/Hero"
import { JourneyPreview } from "./components/Journey"
import { Mission } from "./components/Mission"
import { FeatureProjects } from "./components/Projects"
import { SkillsPreview } from "./components/Skills"

export function HomePage() {
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

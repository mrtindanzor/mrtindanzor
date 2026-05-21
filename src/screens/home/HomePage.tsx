import { Footer } from "./sections/Footer"
import { HeroSection } from "./sections/Hero"
import { JourneyPreview } from "./sections/Journey"
import { Mission } from "./sections/Mission"
import { FeatureProjects } from "./sections/Projects"
import { SkillsPreview } from "./sections/Skills"

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

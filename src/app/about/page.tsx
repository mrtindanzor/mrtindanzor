import type { Metadata } from "next"
import { HeroSection } from "./_components/Hero"
import { Journey } from "./_components/Journey"
import { Skills } from "./_components/Skills"

export const metadata: Metadata = {
	title: "About - Mr. Tindanzor",
	description:
		"I'm a Full-Stack and DevOps developer passionate about building innovative, scalable, and user-focused applications.",
}

export default function AboutPage() {
	return (
		<main>
			<HeroSection />
			<Journey />
			<Skills />
		</main>
	)
}

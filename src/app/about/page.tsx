import type { Metadata } from "next"
import AnimationProvider from "@/components/common/RouteAnimation"
import { motionVariants } from "@/lib/motion"
import { HeroSection } from "./_components/Hero"
import { Journey } from "./_components/Journey"
import { Skills } from "./_components/Skills"

export const metadata: Metadata = {
	title: "About | Mr. Tindanzor Simon",
	description:
		"I'm a Full-Stack and DevOps developer passionate about building innovative, scalable, and user-focused applications.",
}

const variants = motionVariants({
	hidden: { y: 50 },
	show: { transition: { ease: "easeIn" } },
})

export default function AboutPage() {
	return (
		<AnimationProvider variants={variants}>
			<main>
				<HeroSection />
				<Journey />
				<Skills />
			</main>
		</AnimationProvider>
	)
}

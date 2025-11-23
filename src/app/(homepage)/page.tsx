import type { Metadata } from "next"
import AnimationProvider from "@/components/common/RouteAnimation"
import { motionVariants } from "@/lib/motion"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/Hero"
import { Mission } from "./components/Mission"
import { FeatureProjects } from "./components/Projects"

export const metadata: Metadata = {
	title: "Mr. Tindanzor | Full-Stack and Devop Web developer",
}

const variants = motionVariants({
	hidden: { scale: 0.8 },
	show: { scale: 1, transition: { stiffness: 50 } },
})

export default function Homepage() {
	return (
		<AnimationProvider variants={variants}>
			<main>
				<HeroSection />
				<Mission />
				<FeatureProjects />
				<Footer />
			</main>
		</AnimationProvider>
	)
}

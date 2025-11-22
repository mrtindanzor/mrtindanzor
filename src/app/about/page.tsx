import AnimationProvider from "@/components/common/RouteAnimation"
import { motionVariants } from "@/lib/motion"

export default function AboutPage() {
	const variants = motionVariants({
		hidden: { y: "50vh" },
		show: {
			transition: {
				ease: "easeIn",
			},
		},
	})
	return (
		<AnimationProvider variants={variants}>
			<main className="min-h-screen"></main>
		</AnimationProvider>
	)
}

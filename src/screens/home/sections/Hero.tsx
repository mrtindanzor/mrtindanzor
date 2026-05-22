import { DEVELOPER } from "@/shared/db"
import { useTyping } from "@/shared/hooks/useTyping"
import { ConnectButton } from "@/shared/ui/ConnectButton"
import { FramerAnimatePosition, motionVariants } from "@/shared/ui/Framer"
import { AccentText } from "@/shared/ui/primitive/AccentText"
import { Pill } from "@/shared/ui/primitive/Button"
import { MImage } from "@/shared/ui/primitive/Image"

export function HeroSection() {
	const { output: description, ref } = useTyping({
		whileInView: true,
		speedInSeconds: 0.2,
		text: `Software developer focused on building fast, scalable, and
			modern web applications. I specialize in React, TypeScript,
			Node.js, and full-stack architecture, with a strong focus on
			clean UI, performance, and real-world products.`,
	})
	return (
		<div className="overflow-hidden bg-muted">
			<Pill
				variant="accent-light"
				pad="xs"
				className="font-medium font-finlainca block w-fit mx-auto px-4 my-4 tracking-wide uppercase text-xs md:text-sm animate-pulse"
			>
				Modern Web Engineering
			</Pill>
			<section className="section grid gap-y-4 grid-rows-2 md:grid-rows-1 md:grid-cols-2 min-h-app-height relative z-1">
				<div className="h-fit">
					<h1 className="text-7xl font-finlainca tracking-tighter leading-[0.9] mb-4 max-w-lg">
						Full-<AccentText>Stack</AccentText> Develop
						<AccentText>er</AccentText>
					</h1>

					<p className="text-neutral-secondary max-w-md" ref={ref}>
						{description}
					</p>

					<ConnectButton className="w-fit mt-8" />
				</div>

				<div className="relative h-fit group">
					<div className="absolute inset-0 bg-accent/10 blur-[140px] rounded-full scale-150 opacity-50"></div>
					<FramerAnimatePosition
						whileInView="show"
						viewport={{ once: true }}
						className="border-b-4 border-b-accent overflow-y-hidden max-w-100 mx-auto"
						variants={imageVariants}
					>
						<div className="py-4">
							<MImage
								alt="Mr. Tindanzor Simon image"
								url={DEVELOPER.avatar}
								className="relative z-10 h-100 w-full mx-auto bg-text p-1 transition-transform duration-500  "
								imageClassName="rounded-full transition-all duration-500"
							/>
						</div>
					</FramerAnimatePosition>
				</div>
			</section>
		</div>
	)
}

const imageVariants = motionVariants({
	hidden: {
		height: 0,
		opacity: 0,
	},
	show: {
		height: "fit-content",
		opacity: 1,
		transition: {
			ease: "linear",
			duration: 0.5,
			stiffness: 35,
		},
	},
})

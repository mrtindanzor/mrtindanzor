import { DEVELOPER } from "@/shared/db"
import { MImage } from "@/shared/ui/primitive/Image"

export function HeroSection() {
	return (
		<div className="overflow-hidden bg-linear-to-b from-background-primary to-background-secondary">
			<section className="section flex flex-col items-center text-center justify-center min-h-app-height relative z-1">
				<span className="text-primary font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-xs md:text-sm mb-6 animate-pulse">
					Modern Web Engineering
				</span>

				<h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12 text-gradient max-w-4xl">
					Full-Stack Web <br /> Developer
				</h1>

				<div className="relative group mt-4">
					<div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-150 opacity-50"></div>
					<MImage
						alt="Mr. Tindanzor Simon image"
						url={DEVELOPER.avatar}
						className="relative z-10 size-48 md:size-64 rounded-full border-2 border-border-subtle p-1 bg-background-secondary shadow-2xl transition-transform duration-500 group-hover:scale-105"
						imageClassName="rounded-full grayscale hover:grayscale-0 transition-all duration-500"
					/>
				</div>
			</section>
		</div>
	)
}

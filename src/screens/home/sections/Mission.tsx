import { AccentText } from "@/shared/ui/primitive/AccentText"

export function Mission() {
	return (
		<div className="bg-muted">
			<section className="section text-center">
				<h2 className="section-title">
					What <AccentText as="span">I Can</AccentText> Build For You
				</h2>

				<p className="max-w-3xl mx-auto text-neutral-secondary leading-relaxed">
					I build modern, fast, and scalable web applications that help
					businesses, brands, and ideas grow online. From responsive frontend
					interfaces to full-stack systems and deployment infrastructure, I
					focus on creating solutions that are clean, reliable, and built for
					real users. Whether you need a modern website, a custom web
					application, or a complete product experience, I turn ideas into
					functional digital products with strong performance, intuitive design,
					and maintainable architecture.
				</p>
			</section>
		</div>
	)
}

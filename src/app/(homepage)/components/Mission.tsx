import { Heading } from "@/components/common/Heading"
import { Section } from "@/components/common/Section"
import { Typography } from "@/components/common/Typography"

export function Mission() {
	return (
		<div className="bg-linear-to-b  from-slate-950 to-slate-900">
			<Section className="border-t border-y-sky-50/20">
				<Heading tag="h2" size="lg" weight="bolder">
					Mission
				</Heading>

				<Typography className="leading-loose text-gray-400">
					My mission is to turn ideas into meaningful digital products by
					merging creativity with technical precision. I believe every project
					should solve a real problem, communicate clearly, and feel intuitive
					at every interaction point. Through careful planning, clean coding,
					and consistent refinement, I work to deliver experiences that inspire
					confidence, support growth, and create lasting impact.
				</Typography>
			</Section>
		</div>
	)
}

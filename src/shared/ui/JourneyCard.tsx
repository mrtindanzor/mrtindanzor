import { Briefcase, Dot } from "lucide-react"
import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"
import type { ProfessionalJourneyType } from "../db"
import { useTyping } from "../hooks/useTyping"
import { AccentText } from "./primitive/AccentText"
import { Pill } from "./primitive/Button/components/Pill"
import { MImage } from "./primitive/Image"

type WithEl<T extends React.ElementType, P> = ComponentProps<T> & P

export type ProfessionalJourneyCardProps = WithEl<
	"div",
	ProfessionalJourneyType
>

export type ProfessionalJourneyCardHeaderProps = WithEl<
	"header",
	Pick<
		ProfessionalJourneyType,
		"organization" | "role" | "period" | "locationType" | "logo"
	>
>

export type ProfessionalJourneyCardContentProps = WithEl<
	"div",
	Pick<ProfessionalJourneyType, "achievements">
>

export function JourneyCard({
	organization,
	role,
	period,
	achievements,
	className,
	locationType,
	cardId: _,
	featured: _f,
	logo,
	...props
}: ProfessionalJourneyCardProps) {
	return (
		<div
			{...props}
			className={cn(
				"relative bg-muted/60 backgrop-blur-sm p-6 flex flex-col gap-6",
				className,
			)}
		>
			<JourneyCardHeader
				organization={organization}
				role={role}
				period={period}
				locationType={locationType}
				logo={logo}
			/>

			<JourneyCardContent achievements={achievements} />
		</div>
	)
}

function JourneyCardHeader({
	organization,
	role,
	logo,
	period,
	className,
	locationType,
	...props
}: ProfessionalJourneyCardHeaderProps) {
	return (
		<header
			{...props}
			className={cn(
				"flex flex-col sm:grid sm:grid-cols-[auto_1fr_auto] items-start gap-4 ",
				className,
			)}
		>
			<div className="mx-auto sm:mx-[unset]">
				{logo && (
					<MImage url={logo} alt={organization} className="size-10 m-auto" />
				)}
				{!logo && <Briefcase className="size-10 m-auto" />}
			</div>
			<div className="flex flex-col gap-2 mx-auto sm:mx-[unset]">
				<h3 className="font-bold text-neutral">
					<AccentText>{role}</AccentText>
				</h3>
				<div className="flex gap-x-2 mx-auto sm:mx-[unset]">
					<h4 className="text-sm text-neutral-secondary text-center">
						{organization}
					</h4>
					<Dot className="size-4 my-auto" />

					<span className="text-sm text-neutral-secondary">{locationType}</span>
				</div>
			</div>
			<Pill className="bg-muted mx-auto sm:mx-[unset] sm:my-auto border border-muted-secondary text-xs whitespace-nowrap">
				{period.start} — {period.end}
			</Pill>
		</header>
	)
}

function JourneyCardContent({
	achievements,
	className,
	...props
}: ProfessionalJourneyCardContentProps) {
	const { ref, output: content } = useTyping({
		text: achievements.join(" "),
		whileInView: true,
		speedInSeconds: 0.1,
	})
	return (
		<div
			{...props}
			ref={ref}
			title={content}
			className={cn("line-clamp-3 text-sm text-neutral-secondary", className)}
		>
			{content}
		</div>
	)
}

import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"
import type { ProfessionalJourneyType } from "../db"
import { Pill } from "./primitive/Button/components/Pill"

type WithEl<T extends React.ElementType, P> = ComponentProps<T> & P

export type ProfessionalJourneyCardProps = WithEl<
	"div",
	ProfessionalJourneyType
>

export type ProfessionalJourneyCardHeaderProps = WithEl<
	"header",
	Pick<
		ProfessionalJourneyType,
		"organization" | "role" | "period" | "locationType"
	>
>

export type ProfessionalJourneyCardContentProps = WithEl<
	"ul",
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
	...props
}: ProfessionalJourneyCardProps) {
	return (
		<div
			{...props}
			className={cn(
				"bg-background-secondary/60 border border-border-subtle rounded-2xl @container backgrop-blur-sm p-6 flex flex-col gap-6",
				className,
			)}
		>
			<JourneyCardHeader
				organization={organization}
				role={role}
				period={period}
				locationType={locationType}
			/>

			<JourneyCardContent achievements={achievements} />
		</div>
	)
}

function JourneyCardHeader({
	organization,
	role,
	period,
	className,
	locationType,
	...props
}: ProfessionalJourneyCardHeaderProps) {
	return (
		<header
			{...props}
			className={cn(
				"flex flex-col @sm:flex-row justify-between items-start gap-4 border-b border-border-subtle pb-6",
				className,
			)}
		>
			<div className="flex flex-col gap-2">
				<h3 className="text-xl font-bold text-neutral">{organization}</h3>
				<div className="flex flex-col gap-1">
					<span className="text-sm text-muted">
						<b className="text-neutral font-semibold">ROLE:</b> {role}
					</span>
					<span className="text-sm text-muted">
						<b className="text-neutral font-semibold">LOCATION:</b>{" "}
						{locationType}
					</span>
				</div>
			</div>
			<Pill className="bg-background-primary border-border-subtle text-xs whitespace-nowrap">
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
	return (
		<ul {...props} className={cn("flex flex-col gap-3", className)}>
			{achievements.map((content) => (
				<li key={content} className="flex gap-3 text-sm text-muted">
					<span className="text-primary font-bold">•</span>
					<p className="flex-1 leading-relaxed">{content}</p>
				</li>
			))}
		</ul>
	)
}

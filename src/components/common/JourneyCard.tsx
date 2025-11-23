import { cn } from "@/lib/utils"
import type {
	ProfessionalJourneyCardContentProps,
	ProfessionalJourneyCardHeaderProps,
	ProfessionalJourneyCardProps,
} from "@/types/types"
import { Heading } from "./Heading"
import { Pill } from "./Pill"
import { Typography } from "./Typography"

export function JourneyCard({
	organization,
	role,
	period,
	achievements,
	className,
	cardId: _,
	...props
}: ProfessionalJourneyCardProps) {
	return (
		<div
			{...props}
			className={cn(
				"border border-gray-600/40 px-4 py-4 rounded-2xl",
				className,
			)}
		>
			<JourneyCardHeader
				organization={organization}
				role={role}
				period={period}
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
	...props
}: ProfessionalJourneyCardHeaderProps) {
	return (
		<header
			{...props}
			className={cn(
				"grid grid-cols-[1fr_auto] grid-rows-2 border-b border-b-gray-600/40",
				className,
			)}
		>
			<Heading tag="h3" className="col-start-1 row-start-1" size="sm">
				{organization}
			</Heading>
			<Typography className="col-start-1 row-start-2">{role}</Typography>
			<Pill className="col-start-2 row-start-1 row-span-2 h-fit my-auto">
				{period.start} to {period.end}
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
		<ul {...props} className={cn("", className)}>
			{achievements.map((content) => (
				<li
					key={content}
					className="grid grid-cols-[auto_1fr] gap-1 pl-4 items-center"
				>
					- <Typography> {content}</Typography>
				</li>
			))}
		</ul>
	)
}

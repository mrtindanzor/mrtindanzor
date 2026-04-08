import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"
import type { ProfessionalJourneyType } from "../db"
import { Pill } from "./primitive/Button/components/Pill"
import { Heading } from "./primitive/Heading"
import { Typography } from "./primitive/Typography"

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
				"border border-gray-600/40 px-4 py-4 rounded-2xl",
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
		<div className="@container">
			<header
				{...props}
				className={cn(
					"grid grid-cols-[1fr_auto] grid-rows-[1fr_auto_auto] border-b border-b-gray-600/40 ",
					className,
				)}
			>
				<Heading
					tag="h3"
					className="text-center @sm:text-left mx-auto @sm:mx-0 col-span-full @xs:col-span-1 @sm:col-start-1 @sm:row-start-1"
					size="sm"
				>
					{organization}
				</Heading>
				<Typography className="text-center @sm:text-left mx-auto @sm:mx-0 col-span-full @sm:col-span-1 @sm:col-start-1 @sm:row-start-2">
					<b>ROLE:</b> {role}
				</Typography>
				<Typography className="text-center @sm:text-left mx-auto @sm:mx-0 col-span-full @sm:col-span-1 @sm:col-start-1 @sm:row-start-3">
					<b>LOCATION: </b>
					{locationType}
				</Typography>
				<Pill className="mx-auto mb-2 @sm:mb-0 @sm:my-auto col-span-full @sm:col-span-1 @sm:col-start-2 @sm:row-start-1 @sm:row-span-full text-center h-fit ">
					{period.start} to {period.end}
				</Pill>
			</header>
		</div>
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

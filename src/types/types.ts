import type { MotionProps } from "framer-motion"
import type { LinkProps } from "next/link"
import type { ComponentProps, ComponentPropsWithRef } from "react"
import type { IconType } from "react-icons"
import type { headingVariants } from "@/components/common/Heading"
import type { StyledIconLinkVariants } from "@/components/common/IconLink"
import type { pillVariants } from "@/components/common/Pill"
import type { typographyVariants } from "@/components/common/Typography"
import type { ExtractVariantsTypes } from "./library"

type HeadingVariants = ExtractVariantsTypes<typeof headingVariants>
export type HeadingProps = {
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
} & HeadingVariants &
	React.HTMLAttributes<HTMLHeadingElement>

type TypographyVariants = ExtractVariantsTypes<typeof typographyVariants>
export type TypographyProps<Tag extends React.ElementType = "span"> =
	TypographyVariants &
		ComponentPropsWithRef<Tag> & {
			tag?: Tag
		}

export type ProjectProps = {
	imgSrc: string
	title: string
	description: string
	tags: string[]
	link?: string
	repo?: string
}

export type ProjectCardProps = ComponentProps<"div"> & ProjectProps

type PillVariants = ExtractVariantsTypes<typeof pillVariants>

export type PillProps<Tag extends "p" | "span" = "span"> =
	TypographyProps<Tag> & PillVariants

export type IconLinkProps = LinkProps &
	ComponentProps<"a"> & {
		icon: IconType
		iconClassName?: string
	}

type StyledIconVariants = ExtractVariantsTypes<typeof StyledIconLinkVariants>

export type StyledIconLinkProps = IconLinkProps & StyledIconVariants

export type ProfessionalJourneyType = {
	cardId: number
	organization: string
	role: string
	locationType: "Remote" | "Hybrid" | "On site"
	period: {
		start: number | string
		end: number | string
	}
	achievements: string[]
}

export type ProfessionalJourneyCardProps = ComponentProps<"div"> &
	ProfessionalJourneyType

export type ProfessionalJourneyCardHeaderProps = ComponentProps<"header"> &
	Pick<
		ProfessionalJourneyType,
		"organization" | "role" | "period" | "locationType"
	>

export type ProfessionalJourneyCardContentProps = ComponentProps<"ul"> &
	Pick<ProfessionalJourneyType, "achievements">

export type SkillItemsProps = {
	title: string
	icon: IconType
	color: string
	description: string
}
export type SkillProps = {
	category: string
	items: SkillItemsProps[]
}

export type SkillCardProps = ComponentProps<"div"> & SkillItemsProps

export type SkillsContainerCardProps = MotionProps &
	ComponentProps<"section"> &
	SkillProps

export type TextAreaProps = { title: string } & ComponentProps<"textarea">
export type TextFieldProps = {
	title: string
	icon: IconType
} & ComponentProps<"input">

export type SocailMediaProps = {
	title: string
	link: string
	icon: IconType
	color: string
}

export type SocailMediaCardProps = ComponentProps<"div"> & SocailMediaProps

export type ContactData = {
	name: string
	contact: string | number
	message: string
	honeypot?: string
}

export type MarkdownProps = ComponentProps<"div"> & {
	content: string
}

export type MImageProps = {
	alt: string
	url: string
	imageClassName?: string
} & ComponentProps<"div">

export type BackropProps = ComponentProps<"div">

export type MobileNavbarProps = {
	setActive: React.Dispatch<React.SetStateAction<boolean>>
} & MotionProps &
	ComponentProps<"ul">

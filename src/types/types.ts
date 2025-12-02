import type { VariantProps } from "class-variance-authority"
import type { MotionProps } from "framer-motion"
import type { LinkProps } from "next/link"
import type { ComponentProps, ComponentPropsWithRef } from "react"
import type { IconType } from "react-icons"
import type { headingVariants } from "@/components/common/Heading"
import type { StyledIconLinkVariants } from "@/components/common/IconLink"
import type { pillVariants } from "@/components/common/Pill"
import type { typographyVariants } from "@/components/common/Typography"

type HeadingSizeType = NonNullable<VariantProps<typeof headingVariants>["size"]>
type HeadingWeightType = NonNullable<
	VariantProps<typeof headingVariants>["weight"]
>
export type HeadingProps = {
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	weight?: HeadingWeightType
	size?: HeadingSizeType
} & React.HTMLAttributes<HTMLHeadingElement>

type typographyVariantType = NonNullable<
	VariantProps<typeof typographyVariants>["size"]
>
type typographyWeightType = NonNullable<
	VariantProps<typeof typographyVariants>["weight"]
>

export type TypographyProps<Tag extends React.ElementType = "span"> =
	ComponentPropsWithRef<Tag> & {
		tag?: Tag
		size?: typographyVariantType
		weight?: typographyWeightType
	}

export type ProjectProps = {
	imgSrc: string
	title: string
	description: string
	tags: string[]
	link: string
}

export type ProjectCardProps = ComponentProps<"div"> & ProjectProps

type PillVariantTypes = NonNullable<
	VariantProps<typeof pillVariants>["variant"]
>
export type PillProps<Tag extends "p" | "span" = "span"> =
	TypographyProps<Tag> & {
		variant?: PillVariantTypes
	}

export type IconLinkProps = LinkProps &
	ComponentProps<"a"> & {
		icon: IconType
		iconClassName?: string
	}

type StyledIconLinkType = NonNullable<
	VariantProps<typeof StyledIconLinkVariants>["variant"]
>
type StyledIconLinkAnimationType = NonNullable<
	VariantProps<typeof StyledIconLinkVariants>["animation"]
>
export type StyledIconLinkProps = IconLinkProps & {
	variant?: StyledIconLinkType
	animation?: StyledIconLinkAnimationType
}

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

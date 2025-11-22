import type { styleArrowButtonVariants } from "@/components/common/ArrowLink"
import type { headingVariants } from "@/components/common/Heading"
import type { pillVariants } from "@/components/common/Pill"
import type { typographyVariants } from "@/components/common/Typography"
import type { VariantProps } from "class-variance-authority"
import type { LinkProps } from "next/link"
import type { ComponentProps } from "react"

export type ContactData = {
	name: string
	email: string
	phone: number
	message: string
	honeypot?: string
}

type HeadingSizeType = NonNullable<VariantProps<typeof headingVariants>["size"]>
export type HeadingProps = {
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	weight?: "black" | "bolder" | "bold" | "semibold" | "meduim"
	size?: HeadingSizeType
} & React.HTMLAttributes<HTMLHeadingElement>

type typographyVariantType = NonNullable<
	VariantProps<typeof typographyVariants>["size"]
>
export type TypographyProps = {
	tag?: "span" | "p"
	size?: typographyVariantType
} & React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>

export type ProjectCardProps = ComponentProps<"div"> & {
	imgSrc: string
	title: string
	description: string
	tags: string[]
	link: string
}

type PillVariantTypes = NonNullable<
	VariantProps<typeof pillVariants>["variant"]
>
export type PillProps = TypographyProps & {
	variant?: PillVariantTypes
}

export type ArrowLinkProps = LinkProps & ComponentProps<"a">
export type FollowLinkProps = ArrowLinkProps

type StyledArrowVariantsType = NonNullable<
	VariantProps<typeof styleArrowButtonVariants>["variant"]
>
type StyledArrowAnimationsType = NonNullable<
	VariantProps<typeof styleArrowButtonVariants>["animation"]
>
export type StyledArrowProps = ArrowLinkProps & {
	variant?: StyledArrowVariantsType
	animation?: StyledArrowAnimationsType
}

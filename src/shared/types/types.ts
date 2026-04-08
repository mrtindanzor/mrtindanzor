import type { MotionProps } from "framer-motion"
import type { ComponentProps, ComponentPropsWithRef } from "react"
import type { IconType } from "react-icons"
import type { headingVariants } from "@/shared/ui/Heading"
import type { pillVariants } from "@/shared/ui/Pill"
import type { typographyVariants } from "@/shared/ui/Typography"
import type { ExtractVariantsTypes } from "./utils/library"

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

type PillVariants = ExtractVariantsTypes<typeof pillVariants>

export type PillProps<Tag extends "p" | "span" = "span"> =
	TypographyProps<Tag> & PillVariants

export type TextAreaProps = { title: string } & ComponentProps<"textarea">
export type TextFieldProps = {
	title: string
	icon: IconType
} & ComponentProps<"input">

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

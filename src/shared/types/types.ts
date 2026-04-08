import type { ComponentProps, ComponentPropsWithRef } from "react"
import type { headingVariants } from "@/shared/ui/primitive/Heading"
import type { typographyVariants } from "@/shared/ui/primitive/Typography"
import type { ExtractVariantsTypes } from "./utils/ExtractVariants"

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

export type MImageProps = {
	alt: string
	url: string
	imageClassName?: string
} & ComponentProps<"div">

export type BackropProps = ComponentProps<"div">

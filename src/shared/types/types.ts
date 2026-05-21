import type { ComponentProps } from "react"

export type MImageProps = {
	alt: string
	url: string
	imageClassName?: string
} & ComponentProps<"div">

export type BackropProps = ComponentProps<"div">

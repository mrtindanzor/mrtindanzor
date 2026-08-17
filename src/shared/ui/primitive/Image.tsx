import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"

export type ImageProps = {
	alt: string
	url: string
	imageClassName?: string
} & ComponentProps<"div">

export function Image({
	alt,
	url,
	className,
	imageClassName,
	children,
	...props
}: ImageProps) {
	return (
		<div
			{...props}
			className={cn("relative size-full overflow-hidden", className)}
		>
			<img
				src={url}
				alt={alt}
				sizes="100%"
				loading="lazy"
				className={cn(
					"object-contain size-full absolute inset-0",
					imageClassName,
				)}
			/>
			{children}
		</div>
	)
}

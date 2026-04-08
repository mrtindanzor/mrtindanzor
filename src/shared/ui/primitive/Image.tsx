import Image from "next/image"
import type { MImageProps } from "@/shared/types/types"
import { cn } from "@/shared/utils/cn"

export function MImage({
	alt,
	url,
	className,
	imageClassName,
	children,
	...props
}: MImageProps) {
	return (
		<div
			{...props}
			className={cn("relative size-full overflow-hidden", className)}
		>
			<Image
				src={url}
				alt={alt}
				fill
				sizes="100%"
				className={cn("object-contain", imageClassName)}
			/>
			{children}
		</div>
	)
}

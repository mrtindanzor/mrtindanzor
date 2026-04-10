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
			<img
				src={url}
				alt={alt}
				sizes="100%"
				className={cn(
					"object-contain size-full absolute inset-0",
					imageClassName,
				)}
			/>
			{children}
		</div>
	)
}

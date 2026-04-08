import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"
import { Spinner, type SpinnerVariantProps } from "./Spinner"

type LoadingSwapProps = {
	children: React.ReactNode
	isLoading: boolean
} & ComponentProps<"span">

export function LoadingSwap({
	children,
	isLoading,
	className,
	...props
}: LoadingSwapProps & SpinnerVariantProps) {
	return (
		<>
			{isLoading && (
				<span className="flex-place-center *:aspect-square border-0! outline-none! size-full! *:flex-0">
					<Spinner {...props} className={cn("size-6", className)} />
				</span>
			)}
			{!isLoading && children}
		</>
	)
}

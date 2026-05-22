import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"

export function Input({ className, ...props }: ComponentProps<"input">) {
	return (
		<input
			{...props}
			className={cn("py-2 flex w-full border rounded-md px-4", className)}
		/>
	)
}

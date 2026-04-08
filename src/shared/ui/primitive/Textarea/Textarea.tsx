import type { ComponentProps } from "react"
import { cn } from "@/shared/utils/cn"

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
	return (
		<textarea
			{...props}
			className={cn("py-1 flex w-full border rounded-md px-2", className)}
		/>
	)
}

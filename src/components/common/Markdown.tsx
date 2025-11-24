import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import gfm from "remark-gfm"
import { cn } from "@/lib/utils"
import type { MarkdownProps } from "@/types/types"

export default function Markdown({
	content,
	className,
	...props
}: MarkdownProps) {
	return (
		<div {...props} className={cn("h-fit min-h-fit", className)}>
			<ReactMarkdown
				remarkPlugins={[gfm]}
				rehypePlugins={[rehypeRaw, rehypeHighlight]}
			>
				{content}
			</ReactMarkdown>
		</div>
	)
}

import { ArrowDown } from "lucide-react"
import { type PROJECTS_FILTER, projectService } from "@/features/projects"
import { useSearchParams } from "@/shared/hooks/useNavigation"
import { routes } from "@/shared/routes"
import { Link } from "@/shared/ui/primitive/Button"
import { cn } from "@/shared/utils/cn"

export type CategoryFilter = "All" | NonNullable<PROJECTS_FILTER["category"]>

const filters = ["All", ...projectService.getCategoryFilters()] as const

export function FilterBar() {
	const { category: activeFilter = "All" } = useSearchParams<{
		category: CategoryFilter
	}>()

	return (
		<nav className="sticky top-18 z-40 mb-8 bg-muted/10 backdrop-blur-sm border-y border-neutral-secondary/4">
			<div className="mx-auto grid grid-cols-[1fr_auto] items-center justify-between gap-8">
				<ul className="flex gap-x-1.5 py-4 scrollbar-hide overflow-x-auto uppercase">
					{filters.map((filter) => (
						<li key={filter}>
							<Link
								rad="none"
								href={routes.projects({ category: filter })}
								className={cn(
									activeFilter === filter
										? "text-accent border-b border-accent"
										: "text-neutral-secondary hover:text-accent transition-colors",
									"whitespace-nowrap text-xs tracking-tight font-semibold",
								)}
							>
								{filter}
							</Link>
						</li>
					))}
				</ul>

				<div className="hidden lg:flex items-center gap-4 text-on-surface-variant font-label-mono text-[10px]">
					<span>SCROLL TO EXPLORE</span>
					<ArrowDown className="animate-bounce" />
				</div>
			</div>
		</nav>
	)
}

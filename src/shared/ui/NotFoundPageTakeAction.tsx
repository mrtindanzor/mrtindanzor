import { ArrowLeft, Home } from "lucide-react"
import { useNavigate } from "../hooks/useNavigate"
import { routes } from "../routes"
import { Button } from "./primitive/Button/components/Button"
import { IconLink } from "./primitive/Button/components/IconLink"

export function TakeAction() {
	const router = useNavigate()

	return (
		<div className="@container w-full">
			<div className="grid w-full @sm:grid-cols-2 gap-2 mt-4 *:hover:bg-gray-100/5">
				<IconLink
					icon={Home}
					href={routes.home}
					className="py-3 gap-2"
					iconClassName="size-4"
					variant="light"
					hover="ghost-light"
				>
					Return to start
				</IconLink>

				<Button
					variant="none"
					className="flex-place-center size-full  rounded-3xl gap-2"
					title="Go back"
					onClick={() => router.back()}
				>
					<ArrowLeft className="size-4" />
					Bring Me Back
				</Button>
			</div>
		</div>
	)
}

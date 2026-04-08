"use client"

import { ArrowLeft, Home } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./primitive/Button/Button"
import { IconLink } from "./primitive/Button/IconLink"

export function TakeAction() {
	const router = useRouter()
	const goBack = () => router.back()

	return (
		<div className="@container">
			<div className=" grid @sm:grid-cols-2 gap-2 mt-4 *:hover:bg-gray-100/5">
				<IconLink
					icon={Home}
					href="/"
					className="py-3 gap-2"
					iconClassName="size-4"
				>
					Return to start
				</IconLink>
				<Button
					variant="none"
					className="flex-place-center size-full  rounded-3xl gap-2"
					title="Go back"
					onClick={goBack}
				>
					<ArrowLeft className="size-4" />
					Bring Me Back
				</Button>
			</div>
		</div>
	)
}

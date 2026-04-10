import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "@/screens/home"

export const Route = createFileRoute("/")({
	component: HomePage,
})

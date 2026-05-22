import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router"
import { AppLayout } from "@/Layout"
import { generateMetaData } from "@/libs/tanstack"
import { DataProviders } from "@/providers/BaseProvider"
import { DEVELOPER } from "@/shared/db"
import { opengraphs } from "@/shared/routes"
import { NotFoundPage } from "@/shared/ui/NotFoundPage"
import appCss from "./globals.css?url"

export const Route = createRootRoute({
	component: RootLayout,
	notFoundComponent: NotFoundPage,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "apple-mobile-web-app-title", content: "Mr. Tindanzor" },
			...generateMetaData({
				title: DEVELOPER.name,
				description: `${DEVELOPER.name} - Full-Stack Web Developer`,
				path: "",
				images: opengraphs.select("home"),
			}),
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
})

function RootLayout() {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>

			<body className="font-sensation bg-muted text-neutral">
				<DataProviders>
					<AppLayout>
						<Outlet />
					</AppLayout>
				</DataProviders>
				<Scripts />
			</body>
		</html>
	)
}

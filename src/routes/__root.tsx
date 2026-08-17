import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router"
import { AppLayout } from "@/Layout"
import { generateMetaData } from "@/libs/tanstack"
import { DataProviders } from "@/providers/BaseProvider"
import { opengraphs } from "@/shared/routes"
import { NotFoundPage } from "@/shared/ui/NotFoundPage"
import appCss from "./globals.css?url"

export const Route = createRootRoute({
	component: RootLayout,
	notFoundComponent: NotFoundPage,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ name: "apple-mobile-web-app-title", content: "MrTindanzor" },
			...generateMetaData({
				title: "",
				description: `Full-Stack Web Developer`,
				path: "",
				images: opengraphs.select("home"),
			}),
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "icon",
				type: "image/png",
				href: `/favicon/favicon-96x96.png`,
				sizes: "96x96",
			},
			{ rel: "icon", type: "image/svg+xml", href: `/favicon/favicon.svg` },
			{ rel: "shortcut icon", href: `/favicon/favicon.ico` },
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: `/favicon/apple-touch-icon.png`,
			},
			{ rel: "manifest", href: `/favicon/site.webmanifest` },
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

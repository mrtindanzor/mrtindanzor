import { TakeAction } from "./NotFoundPageTakeAction"

export function NotFoundPage() {
	return (
		<main className="h-app-height flex-place-center bg-background-primary text-center">
			<section className="flex flex-col items-center gap-4 max-w-md px-6">
				<h1 className="text-4xl md:text-6xl text-gradient">Eerr mm...</h1>
				<p className="text-xl md:text-2xl font-bold">
					Congratulations, you broke the internet!
				</p>
				<p className="text-muted leading-relaxed">
					The page you&apos;re looking for can&apos;t be found or may have been
					moved. Let&apos;s take you back safely.
				</p>
				<TakeAction />
			</section>
		</main>
	)
}

import { TakeAction } from "./NotFoundPageTakeAction"

export function NotFoundPage() {
	return (
		<main className="h-app-height flex-place-center bg-background-primary text-center">
			<section className="flex flex-col items-center gap-4 max-w-md w-full px-6">
				<h1 className="text-2xl md:text-4xl font-bold">
					Hmm… we couldn&apos;t find that page.
				</h1>
				<p className="text-neutral-secondary leading-relaxed ">
					The page you&apos;re looking for can&apos;t be found or may have been
					moved. Let&apos;s take you back safely.
				</p>
				<TakeAction />
			</section>
		</main>
	)
}

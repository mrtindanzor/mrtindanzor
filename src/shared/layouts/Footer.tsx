import { useMemo } from "react"

export default function Footer() {
	const year = useMemo(() => {
		return new Date().getFullYear()
	}, [])

	return (
		<footer className="py-12 flex flex-col items-center border-t border-border-subtle bg-background-primary">
			<p className="text-sm font-medium tracking-wide">
				&copy; {year} Mr. Tindanzor. All Rights Reserved.
			</p>
		</footer>
	)
}

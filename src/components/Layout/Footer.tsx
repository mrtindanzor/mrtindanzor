"use client"
import { useMemo } from "react"
import { Typography } from "../common/Typography"

export default function Footer() {
	const year = useMemo(() => {
		return new Date().getFullYear()
	}, [])

	return (
		<footer className="py-10 flex justify-between items-center border-t border-t-sky-50/10">
			<Typography className="mx-auto w-fit">
				&copy; {year} Mr. Tindanzor. All Rights Reserved.
			</Typography>
		</footer>
	)
}

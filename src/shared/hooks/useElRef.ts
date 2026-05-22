import { useCallback, useRef, useState } from "react"

export function useElRef(el?: HTMLElement | null) {
	const [, forceRender] = useState(0)
	const ref = useRef<HTMLElement>(el || null)

	const captureRef = useCallback(<T>(el: T | null) => {
		if (!(el instanceof HTMLElement)) return
		if (!ref) forceRender(1)
		ref.current = el
	}, [])

	return { refObject: ref, ref: captureRef }
}

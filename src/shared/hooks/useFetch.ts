import {
	type FormEvent,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react"
import { fe } from "../utils/fe"
import { tryCatch } from "../utils/tryCatch"

type UpdateProps = {
	message: unknown
	error?: boolean | undefined
	success?: boolean | undefined
}

export function useFetch<T>({
	data,
}: {
	data?: T | undefined | Partial<T>
} = {}) {
	const formdataRef = useRef(data)
	const [error, setError] = useState(false)
	const [message, setMessage] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)
	const containerRef = useRef<HTMLElement>(null)

	const msgCtnRef = useCallback(<Ref>(ref: Ref) => {
		if (ref instanceof HTMLElement) containerRef.current = ref
	}, [])

	const setResponse = useCallback(
		({ message, error, success }: UpdateProps) => {
			setMessage(fe(message))
			setError(!!error)
			setSuccess(!!success)

			const ctn = containerRef.current
			if (!(ctn instanceof HTMLElement)) return

			ctn.classList.add("scroll-mt-120")
			ctn.scrollIntoView({ behavior: "smooth" })
			setIsLoading(false)
		},
		[],
	)

	const clearFormState = useCallback(() => {
		setError(false)
		setSuccess(false)
		setMessage("")
	}, [])

	const autoClearFormState = useCallback(
		(delayInSecs = 7) => {
			const timeoutId = timeoutRef.current
			if (timeoutId) clearTimeout(timeoutId)

			timeoutRef.current = setTimeout(clearFormState, delayInSecs * 1000)
		},
		[clearFormState],
	)

	const submitRequest = useCallback(
		(callback: (data: T) => Promise<void>) => {
			return async (e?: FormEvent) => {
				e?.preventDefault()
				clearFormState()
				setIsLoading(true)

				const result = await tryCatch(
					callback(formdataRef.current as unknown as T),
				)
				if (!result.success) {
					setResponse({ error: true, message: result.error })
				} else {
					setSuccess(true)
				}

				setIsLoading(false)
			}
		},
		[clearFormState, setResponse],
	)

	useEffect(() => {
		return () => {
			const timeoutId = timeoutRef.current
			if (timeoutId) clearTimeout(timeoutId)
		}
	}, [])

	useLayoutEffect(() => {
		formdataRef.current = data
	}, [data])

	return {
		error,
		message,
		isLoading,
		success,
		setResponse,
		msgCtnRef,
		submitRequest,
		autoClearFormState,
		clearFormState,
	}
}

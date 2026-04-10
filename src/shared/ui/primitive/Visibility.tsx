type VisibilityProps = {
	show: boolean
	children: React.ReactNode
}

export function Visibility({ show, children }: VisibilityProps) {
	return <>{!!show && children}</>
}

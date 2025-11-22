import type { TargetAndTransition, Transition } from "framer-motion"

const transitionDefaults: Transition = {
	when: "beforeChildren",
	ease: "easeOut",
	type: "spring",
	stiffness: 80,
}

export const motionVariants = ({
	hidden = {},
	show = {},
	exit = {},
}: {
	hidden?: TargetAndTransition
	show?: TargetAndTransition
	exit?: TargetAndTransition
} = {}) => {
	return {
		hidden: { opacity: 0, ...hidden },
		show: {
			opacity: 1,
			x: 0,
			y: 0,
			...show,
			transition: { ...transitionDefaults, ...show.transition },
		},
		exit,
	}
}

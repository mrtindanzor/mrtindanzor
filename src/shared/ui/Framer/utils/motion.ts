import type { Transition } from "framer-motion"
import type { FramerOptionsProps } from "../framer.types"

const transitionDefaults: Transition = {
	when: "beforeChildren",
	ease: "easeOut",
	type: "spring",
	stiffness: 60,
}

export const motionVariants = ({
	hidden = {},
	show = {},
	exit = {},
}: FramerOptionsProps = {}) => {
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

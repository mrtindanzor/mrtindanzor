import type { LinkProps } from "next/link"
import type { ComponentProps } from "react"
import type { IconType } from "react-icons"
import type { ExtractVariantsTypes } from "@/shared/types/utils/library"
import type { buttonVariants } from "./Button"

export type ButtonVariants = ExtractVariantsTypes<typeof buttonVariants>
export type ButtonProps = ButtonVariants & ComponentProps<"button">
export type StyledIconLinkProps = IconLinkProps

export type IconLinkProps = LinkProps &
	ComponentProps<"a"> & {
		icon: IconType
		iconClassName?: string
	} & ButtonVariants

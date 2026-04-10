import type { LinkProps } from "@tanstack/react-router"
import type { ComponentProps } from "react"
import type { IconType } from "react-icons"
import type { ExtractVariantsTypes } from "@/shared/types/utils/ExtractVariants"
import type { buttonVariants } from "./components/Button"

export type ButtonVariants = ExtractVariantsTypes<typeof buttonVariants>
export type ButtonProps = ButtonVariants & ComponentProps<"button">
export type StyledLinkProps = ButtonVariants &
	ComponentProps<"a"> &
	Omit<LinkProps, "to" | "search">
export type StyledIconLinkProps = IconLinkProps

export type IconLinkProps = StyledLinkProps & {
	icon: IconType
	iconClassName?: string
}

import type { LinkProps as TanstackLinkProps } from "@tanstack/react-router"
import type { ComponentProps } from "react"
import type { IconType } from "react-icons"
import type { ExtractVariantsTypes } from "@/shared/types/utils/ExtractVariants"
import type { buttonVariants } from "./components/Button"

export type ButtonVariants = ExtractVariantsTypes<typeof buttonVariants>
export type ButtonProps = ButtonVariants & ComponentProps<"button">
export type LinkProps = ButtonVariants &
	ComponentProps<"a"> &
	Omit<TanstackLinkProps, "to" | "search">
export type StyledIconLinkProps = IconLinkProps

export type IconLinkProps = LinkProps & {
	icon: IconType
	iconClassName?: string
}

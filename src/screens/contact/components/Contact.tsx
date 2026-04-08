"use client"

import { Dot } from "lucide-react"
import type { ComponentProps } from "react"
import { useContact } from "@/features/contact"
import { motionVariants } from "@/shared/ui/Framer"
import { Button } from "@/shared/ui/primitive/Button"
import { ErrorCard } from "@/shared/ui/primitive/ErrorCard"
import { Heading } from "@/shared/ui/primitive/Heading"
import { Input } from "@/shared/ui/primitive/Input"
import { Label } from "@/shared/ui/primitive/Label"
import { LoadingSwap } from "@/shared/ui/primitive/LoadingSwap"
import { Section } from "@/shared/ui/primitive/Section"
import { cn } from "@/shared/utils/cn"

const formVariants = motionVariants({
	hidden: { x: -40 },
	show: { transition: { staggerChildren: 0.1 } },
})

export function ContactSection({
	className,
	...props
}: ComponentProps<"form">) {
	const {
		formState: { errors, isSubmitting },
		handleMessage,
		handleSubmit,
		register,
	} = useContact()

	return (
		<form
			className={cn("w-full py-0", className)}
			{...props}
			onSubmit={handleSubmit(handleMessage)}
		>
			<Section
				className="w-full py-0 px-0 lg:px-4"
				variants={formVariants}
				initial="hidden"
				whileInView="show"
			>
				<Heading tag="h3" size="sm" className="px-0">
					Send a direct message
				</Heading>

				{errors.root?.message && (
					<ErrorCard error>{errors.root.message}</ErrorCard>
				)}

				<div>
					<Label.Wrapper>
						<Label.Title>Name</Label.Title>
						<Input {...register("name")} placeholder="Enter your name" />
					</Label.Wrapper>

					{errors.name?.message && (
						<ErrorCard error>{errors.name.message}</ErrorCard>
					)}
				</div>

				<div>
					<Label.Wrapper>
						<Label.Title>Email / Phone number</Label.Title>
						<Input
							{...register("contact")}
							placeholder="Enter your email address / phone number"
						/>
					</Label.Wrapper>

					{errors.contact?.message && (
						<ErrorCard error>errors.contact.message</ErrorCard>
					)}
				</div>

				<div>
					<Label.Wrapper>
						<Label.Title>Message</Label.Title>
						<Input {...register("message")} placeholder="Your message" />
					</Label.Wrapper>

					{errors.message?.message && (
						<ErrorCard error>{errors.message.message}</ErrorCard>
					)}
				</div>

				<Input hidden {...register("honeypot")} autoComplete="off" />

				<Button type="submit" disabled={isSubmitting}>
					<LoadingSwap isLoading={isSubmitting}>
						<Dot className="bg-white size-2 group-hover:bg-sky-600 group-hover:animate-pulse rounded-full" />
						Send Message
					</LoadingSwap>
				</Button>
			</Section>
		</form>
	)
}

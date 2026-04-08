"use client"

import { EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/solid"
import { Dot } from "lucide-react"
import { type ComponentProps, useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { sendMessage } from "@/features/contact/actions/sendMessage"
import { motionVariants } from "@/lib/motion"
import { cn } from "@/lib/utils"
import type { ContactData } from "@/shared/types/types"
import { Heading } from "@/shared/ui/Heading"
import { Section } from "@/shared/ui/Section"
import { TextArea } from "@/shared/ui/TextArea"
import { TextField } from "@/shared/ui/TextField"
import { Typography } from "@/shared/ui/Typography"
import WarningText from "@/shared/ui/WarningText"

const formVariants = motionVariants({
	hidden: { x: -40 },
	show: { transition: { staggerChildren: 0.1 } },
})

export function ContactSection({
	className,
	...props
}: ComponentProps<"form">) {
	const [success, setSuccess] = useState(false)
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactData>()

	const handleMessage = useCallback(
		async (payload: ContactData) => {
			setSuccess(false)
			const { name, contact, message, honeypot } = payload

			if (honeypot)
				return setError("root", {
					message: "Message could not be sent at the moment, try again later.",
				})

			if (!name) return setError("name", { message: "Please add your name" })

			if (!contact) {
				setError("contact", {
					message: "Please an email address or phone number",
				})
				return
			}

			if (!message || message.length < 2)
				return setError("message", {
					message: "Message must have a min-length of 2 chars",
				})

			const res = await sendMessage(payload)
			if (res.status === 201) {
				setSuccess(true)
				reset()
				window.scrollTo({ top: 0, behavior: "smooth" })
			}
			setError("root", { message: res.message })
		},
		[setError, reset],
	)

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
					<WarningText message={errors.root.message} success={success} />
				)}

				<TextField
					title="Name"
					id="name"
					{...register("name")}
					icon={UserIcon}
					placeholder="Enter your name"
				>
					{errors.name?.message && (
						<WarningText message={errors.name.message} success={success} />
					)}
				</TextField>

				<TextField
					title="Email / Phone number"
					{...register("contact")}
					icon={EnvelopeIcon}
					placeholder="Enter your email address / phone number"
				>
					{errors.contact?.message && (
						<WarningText message={errors.contact.message} success={success} />
					)}
				</TextField>

				<TextField
					title="pot"
					id="pot"
					{...register("honeypot")}
					autoComplete="off"
					className="!hidden"
					icon={PhoneIcon}
				/>
				<TextArea
					title="Message"
					id="message"
					{...register("message")}
					placeholder="Your message"
				>
					{errors.message?.message && (
						<WarningText message={errors.message.message} success={success} />
					)}
				</TextArea>
				<button
					type="submit"
					disabled={isSubmitting}
					className="rounded-xl border py-2 group border-gray-600/90 hover:bg-gray-100/5"
				>
					<Typography
						size="md"
						className="text-white tracking-wider flex-place-center gap-2"
					>
						<Dot className="bg-white size-2 group-hover:bg-sky-600 group-hover:animate-pulse rounded-full" />
						Send Message
					</Typography>
				</button>
			</Section>
		</form>
	)
}

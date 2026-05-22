import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import type { ComponentProps } from "react"
import { useContact } from "@/features/contact"
import { useTyping } from "@/shared/hooks/useTyping"
import { FramerAnimatePosition } from "@/shared/ui/Framer"
import { AccentText } from "@/shared/ui/primitive/AccentText"
import { Button } from "@/shared/ui/primitive/Button"
import { ErrorCard } from "@/shared/ui/primitive/ErrorCard"
import { Input } from "@/shared/ui/primitive/Input"
import { Label } from "@/shared/ui/primitive/Label"
import { LoadingSwap } from "@/shared/ui/primitive/LoadingSwap"
import { Textarea } from "@/shared/ui/primitive/Textarea"
import { cn } from "@/shared/utils/cn"
import { formButtonVariants, formSectionVariants } from "./constants"

export function ContactSection({
	className,
	...props
}: ComponentProps<"form">) {
	const { ref: refHead, output: contentHead } = useTyping({
		text: "Send a direct",
		whileInView: true,
		speedInSeconds: 0.4,
	})
	const { ref: refTail, output: contentTail } = useTyping({
		text: " message",
		whileInView: true,
		speedInSeconds: 0.65,
	})
	const {
		formState: { error, submitting, success, message },
		onSubmit,
		register,
	} = useContact()

	return (
		<form
			className={cn("w-full h-fit py-0", className)}
			{...props}
			onSubmit={onSubmit}
		>
			<section className="w-full py-0 px-0 flex flex-col gap-8">
				<h3
					ref={(ref) => {
						refHead(ref)
						refTail(ref)
					}}
					className="text-2xl h-10 font-bold text-neutral"
					title="Send a direct message"
				>
					<AccentText as="span">{contentHead}</AccentText> {contentTail}
				</h3>

				{message && (
					<ErrorCard error={error} success={success}>
						{message}
					</ErrorCard>
				)}

				<FramerAnimatePosition
					animate="show"
					variants={formSectionVariants}
					className="flex flex-col gap-6"
				>
					<Label.Wrapper>
						<Label.Title className="text-neutral-secondary text-sm tracking-tight">
							Name
						</Label.Title>
						<Input {...register("name")} placeholder="Enter your name" />
					</Label.Wrapper>

					<Label.Wrapper>
						<Label.Title className="text-neutral-secondary text-sm tracking-tight">
							Email / Phone number
						</Label.Title>
						<Input
							{...register("contact")}
							placeholder="Enter your email address / phone number"
						/>
					</Label.Wrapper>

					<Label.Wrapper>
						<Label.Title className="text-neutral-secondary text-sm tracking-tight">
							Message
						</Label.Title>
						<Textarea
							{...register("message")}
							className="h-25 resize-none"
							placeholder="Your message"
						/>
					</Label.Wrapper>

					<Input hidden {...register("honeypot")} autoComplete="off" />
				</FramerAnimatePosition>

				<FramerAnimatePosition animate="show" variants={formButtonVariants}>
					<Button
						type="submit"
						disabled={submitting}
						y="center"
						x="center"
						w="full"
						pad="lg"
						variant="accent"
						className="flex group gap-x-1.5 font-semibold"
					>
						<LoadingSwap isLoading={submitting}>
							Send Message
							<PaperAirplaneIcon className="size-4" />
						</LoadingSwap>
					</Button>
				</FramerAnimatePosition>
			</section>
		</form>
	)
}

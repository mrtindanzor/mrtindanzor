import { Dot } from "lucide-react"
import type { ComponentProps } from "react"
import { useContact } from "@/features/contact"
import { Button } from "@/shared/ui/primitive/Button"
import { ErrorCard } from "@/shared/ui/primitive/ErrorCard"
import { Input } from "@/shared/ui/primitive/Input"
import { Label } from "@/shared/ui/primitive/Label"
import { LoadingSwap } from "@/shared/ui/primitive/LoadingSwap"
import { cn } from "@/shared/utils/cn"

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
			<section className="w-full py-0 px-0 flex flex-col gap-8">
				<h3 className="text-2xl font-bold text-neutral">
					Send a direct message
				</h3>

				{errors.root?.message && (
					<ErrorCard error>{errors.root.message}</ErrorCard>
				)}

				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<Label.Wrapper>
							<Label.Title className="text-muted text-sm font-semibold uppercase tracking-wider">
								Name
							</Label.Title>
							<Input {...register("name")} placeholder="Enter your name" />
						</Label.Wrapper>

						{errors.name?.message && (
							<ErrorCard error>{errors.name.message}</ErrorCard>
						)}
					</div>

					<div className="flex flex-col gap-2">
						<Label.Wrapper>
							<Label.Title className="text-muted text-sm font-semibold uppercase tracking-wider">
								Email / Phone number
							</Label.Title>
							<Input
								{...register("contact")}
								placeholder="Enter your email address / phone number"
							/>
						</Label.Wrapper>

						{errors.contact?.message && (
							<ErrorCard error>errors.contact.message</ErrorCard>
						)}
					</div>

					<div className="flex flex-col gap-2">
						<Label.Wrapper>
							<Label.Title className="text-muted text-sm font-semibold uppercase tracking-wider">
								Message
							</Label.Title>
							<Input {...register("message")} placeholder="Your message" />
						</Label.Wrapper>

						{errors.message?.message && (
							<ErrorCard error>{errors.message.message}</ErrorCard>
						)}
					</div>
				</div>

				<Input hidden {...register("honeypot")} autoComplete="off" />

				<Button 
					type="submit" 
					disabled={isSubmitting}
					variant="primary-light"
					size="lg"
					className="w-fit"
				>
					<LoadingSwap isLoading={isSubmitting}>
						<Dot className="bg-white size-2 group-hover:bg-sky-600 group-hover:animate-pulse rounded-full" />
						Send Message
					</LoadingSwap>
				</Button>
			</section>
		</form>
	)
}

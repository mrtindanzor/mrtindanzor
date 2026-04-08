import { z } from "zod"

export const contactValidator = z.object({
	name: z.string().min(2, "Name must be at least 2 characters long"),
	contact: z.string().min(2, "Contact must be at least 2 characters long"),
	message: z.string().min(2, "Message must be at least 2 characters long"),
	honeypot: z
		.string()
		.refine(
			(value) => !value,
			"Message could not be sent at the moment, try again later.",
		)
		.nullish(),
})

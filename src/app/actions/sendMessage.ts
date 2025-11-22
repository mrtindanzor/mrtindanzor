"use server"

import axios from "axios"
import { errorR, successR, tryCatch } from "@/lib/utils"
import type { ContactData } from "@/types/types"

export const sendMessage = async (payload: ContactData) => {
	const { name, email, phone, message, honeypot } = payload
	if (honeypot)
		return errorR("Message could not be sent at the moment, try again later.")
	if (!name) return errorR("Please add your name")
	if (!email && !phone) return errorR("Please an email address or phone number")

	if (phone && String(phone).length < 9)
		return errorR("Enter a vaild phone number")

	if (!message || message.length < 10) return errorR("Enter a valid message")

	const getMessage = formatMessage(payload)

	const res = await SendToTelegram(getMessage)
	if (res !== 201)
		return errorR(
			"Encountered an error while trying to deliver the message, please try again in a moment.",
		)

	return successR({
		status: res,
		message: "Thanks! Your message was received. I'll be in touch soon.",
	})
}

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
const telegramBotChatId = process.env.TELEGRAM_BOT_CHAT_ID

if (!telegramBotChatId || !telegramBotToken)
	throw Error("Telegram Bot token and Telegram bot chat id not defined")

async function SendToTelegram(message: string) {
	if (!message) return null

	const url = `https://api.telegram.org/bot${telegramBotToken}/sendmessage`

	const [, error] = await tryCatch(
		axios.post(url, { chat_id: telegramBotChatId, text: message }),
	)
	if (error) return null

	return 201
}

function formatMessage({
	message,
	name,
	phone,
	email,
}: Omit<ContactData, "honeypot">) {
	return `

Hi Mr. Tindanzor,

 You received a message from ${name
		.trim()
		.toLowerCase()
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ")}.

 ${message}

 His/her contact details are as follows 
 ${phone ? String(phone).padStart(10, "0") : ""} 
 ${email ? `Email ${email}` : ""}

 Bye.
  `
}

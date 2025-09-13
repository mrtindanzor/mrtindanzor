"use server"

import axios from "axios"

type ContactData = {
  name: string
  email: string
  phone: number
  message: string
  honeypot?: string
}

export const sendMessage = async (payload: ContactData) => {
  "use server"

  const { name, email, phone, message, honeypot } = payload
  if (honeypot)
    return {
      status: 403,
      message: "Message could not be sent at the moment, try again later.",
    }
  if (!name) return { status: 403, message: "Please add your name" }
  if (!email && !phone)
    return { status: 403, message: "Please an email address or phone number" }

  if (phone && String(phone).length < 9)
    return { status: 403, message: "Enter a vaild phone number" }

  if (!message || message.length < 10)
    return { status: 403, message: "Enter a valid message" }

  const getMessage = formatMessage(payload)

  const res = await SendToTelegram(getMessage)
  if (res !== 201)
    return {
      status: 500,
      message:
        "Encountered an error while trying to deliver the message, please try again in a moment.",
    }

  return {
    status: 201,
    message: "Message sent successfully",
  }
}

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
const telegramBotChatId = process.env.TELEGRAM_BOT_CHAT_ID

if (!telegramBotChatId || !telegramBotToken)
  throw Error("Telegram Bot token and Telegram bot chat id not defined")

async function SendToTelegram(message: string) {
  if (!message) return null

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendmessage`
  await axios.post(url, { chat_id: telegramBotChatId, text: message })

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
 ${phone ? "Phone 0" + phone : ""} 
 ${email ? "Email " + email : ""}

 Bye.

  `
}

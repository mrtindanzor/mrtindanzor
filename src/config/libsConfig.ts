import type { ITelegram } from "@/libs/telegram"
import { getEnv } from "./utils/getEnv"

const telegramBotToken = getEnv({ name: "TELEGRAM_BOT_TOKEN", isStatic: false })
const telegramBotChatId = getEnv({
	name: "TELEGRAM_BOT_CHAT_ID",
	isStatic: false,
})

const telegram: ITelegram = {
	chatId: telegramBotChatId,
	botToken: telegramBotToken,
}

export const libsConfig = {
	telegram,
}

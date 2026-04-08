const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
const telegramBotChatId = process.env.TELEGRAM_BOT_CHAT_ID

if (!telegramBotChatId) throw Error("Telegram Bot chat id not defined")

if (!telegramBotToken) throw Error("Telegram Bot token not defined")

const telegram = {
	chatId: telegramBotChatId,
	token: telegramBotToken,
}

export const libsConfig = {
	telegram,
}

export type ITelegram = {
	botToken: string
	chatId: string
}

export async function createTelegramMessagePayload(
	message: string,
	telegram: ITelegram,
) {
	return {
		chatId: telegram.chatId,
		text: message,
		url: `https://api.telegram.org/bot${telegram.botToken}/sendmessage`,
	}
}

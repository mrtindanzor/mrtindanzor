import { libsConfig } from "@/config/libsConfig"

export async function createTelegramMessagePayload(message: string) {
	return {
		chatId: libsConfig.telegram.chatId,
		text: message,
		url: `https://api.telegram.org/bot${libsConfig.telegram.token}/sendmessage`,
	}
}

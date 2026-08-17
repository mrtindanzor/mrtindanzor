import { getEnv } from "./utils/getEnv"

const serverUri = getEnv({ name: "VITE_SERVER_URI" })
const appUrl = getEnv({ name: "VITE_APP_URL" })

export const publicUrls = {
	serverUri,
	appUrl,
}

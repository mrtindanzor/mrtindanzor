const serverUri = process.env.VITE_SERVER_URI
const appUrl = process.env.VITE_APP_URL

if (!serverUri) throw Error("Server URI not defined")
if (!appUrl) throw Error("App URL not defined")

export const publicUrls = {
	serverUri,
	appUrl,
}

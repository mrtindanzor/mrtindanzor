const serverUri = import.meta.env.VITE_SERVER_URI
const appUrl = import.meta.env.VITE_APP_URL

if (!serverUri) throw Error("Server URI not defined")
if (!appUrl) throw Error("App URL not defined")

export const publicUrls = {
	serverUri,
	appUrl,
}

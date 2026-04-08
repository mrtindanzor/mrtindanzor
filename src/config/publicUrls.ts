const serverUri = process.env.NEXT_PUBLIC_SERVER_URI

if (!serverUri) throw Error("Server URI not defined")

export const publicUrls = {
	serverUri,
}

import axios, { type AxiosInstance } from "axios"
import { publicUrls } from "@/config/publicUrls"

type HeadersProps = {
	accessToken: string | null | undefined
}

export function axiosInstance({ accessToken }: HeadersProps): AxiosInstance {
	return axios.create({
		baseURL: publicUrls.serverUri,
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		proxy: false,
		withCredentials: true,
	})
}

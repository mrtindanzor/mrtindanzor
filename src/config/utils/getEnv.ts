type GetEnvProps = {
	name: string
	description?: string
	required?: boolean
}

export function getEnv(props: {
	name: string
	required?: true
	description?: string
}): string
export function getEnv(props: {
	name: string
	required: false
	description?: string
}): string | undefined

export function getEnv({ name, required, description = "" }: GetEnvProps) {
	const value = process.env[name.trim()]

	if (required !== false && !value)
		throw Error(
			`"${name} ${description}" : is a required environment variable but not defined!`,
		)

	return value
}

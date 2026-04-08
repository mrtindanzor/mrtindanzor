export async function tryCatch<T, E = Error>(
	promise: Promise<T>,
): Promise<{ success: false; error: E } | { success: true; data: T }> {
	try {
		return { success: true, data: await promise }
	} catch (error) {
		return { success: false, error: error as E }
	}
}

export function syncTryCatch<T, E = Error>(
	callback: () => T,
): { success: false; error: E } | { success: true; data: T } {
	try {
		return { success: true, data: callback() as T }
	} catch (error) {
		return { success: false, error: error as E }
	}
}

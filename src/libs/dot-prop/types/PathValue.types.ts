/** biome-ignore-all lint/suspicious/noExplicitAny: Plucked from a library */

import type {
	AnyIsEqual,
	ArrayKey,
	BrowserNativeObject,
	IsTuple,
	Path,
	Primitive,
	TupleKeys,
} from "./Paths.types"

export type PathValue<T, P extends Path<T> | ArrayPath<T>> = PathValueImpl<T, P>

export type PathValueImpl<T, P extends string> = T extends any
	? P extends `${infer K}.${infer R}`
		? K extends keyof T
			? PathValueImpl<T[K], R>
			: K extends `${ArrayKey}`
				? T extends ReadonlyArray<infer V>
					? PathValueImpl<V, R>
					: never
				: never
		: P extends keyof T
			? T[P]
			: P extends `${ArrayKey}`
				? T extends ReadonlyArray<infer V>
					? V
					: never
				: never
	: never

export type ArrayPath<T> = T extends any ? ArrayPathInternal<T> : never

type ArrayPathInternal<T, TraversedTypes = T> = T extends ReadonlyArray<infer V>
	? IsTuple<T> extends true
		? {
				[K in TupleKeys<T>]-?: ArrayPathImpl<K & string, T[K], TraversedTypes>
			}[TupleKeys<T>]
		: ArrayPathImpl<ArrayKey, V, TraversedTypes>
	: {
			[K in keyof T]-?: ArrayPathImpl<K & string, T[K], TraversedTypes>
		}[keyof T]

type ArrayPathImpl<K extends string | number, V, TraversedTypes> = V extends
	| Primitive
	| BrowserNativeObject
	? IsAny<V> extends true
		? string
		: never
	: V extends ReadonlyArray<infer U>
		? U extends Primitive | BrowserNativeObject
			? IsAny<V> extends true
				? string
				: never
			: true extends AnyIsEqual<TraversedTypes, V>
				? never
				: `${K}` | `${K}.${ArrayPathInternal<V, TraversedTypes | V>}`
		: true extends AnyIsEqual<TraversedTypes, V>
			? never
			: `${K}.${ArrayPathInternal<V, TraversedTypes | V>}`

export type IsAny<T> = 0 extends 1 & T ? true : false

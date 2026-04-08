export const routes = Object.freeze({
	home: "/",
	about: "/about",
	projects: "/projects",
	contact: "/contact",
})

export type Routes = (typeof routes)[keyof typeof routes]

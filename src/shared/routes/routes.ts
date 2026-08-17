export const routes = Object.freeze({
	home: "/",
	about: {
		home: "/about",
		professionalJourney: "/about#professioanaljourney",
		skills: "/about#skills",
	},
	projects: "/projects",
	contact: "/contact",
})

export type Routes = (typeof routes)[keyof typeof routes]

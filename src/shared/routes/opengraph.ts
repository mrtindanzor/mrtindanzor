const graphs = Object.freeze({
	home: "/home.png",
	about: "/about.png",
	contact: "/contact.png",
	projects: "/projects.png",
})

type Opengraphs = typeof graphs

export const opengraphs = {
	select: <T extends keyof Opengraphs>(graph: T) =>
		`/images/opengraphs${graphs[graph]}` as const,
} as const

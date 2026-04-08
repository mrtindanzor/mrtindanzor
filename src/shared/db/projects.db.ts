import type { ProjectProps } from "./projects.db.types"

const projectsMeta = Object.freeze({
	myghmart: {
		image: "/assets/images/projects/myghmart.png",
		name: "MyGhmart",
		repo: "",
		link: "https://myghmart.com",
	},
	successfield: {
		image: "/assets/images/projects/successfield.png",
		name: "Successfield College",
		repo: "",
		link: "https://successfieldcollege.com",
	},
	lpm: {
		image: "/assets/images/projects/lpm.png",
		name: "LPM (Local Package Manager)",
		repo: "https://github.com/mrtindanzor/lpm",
		link: "",
	},
	consensus: {
		image: "/assets/images/projects/consensus.png",
		name: "Consensus",
		repo: "https://github.com/mrtindanzor/alx-project-nexus",
		link: "https://polls.tindanzorsolutions.com",
	},
})

export const PROJECTS: ProjectProps[] = [
	{
		featured: true,
		imgSrc: projectsMeta.myghmart.image,
		title: projectsMeta.myghmart.name,
		link: projectsMeta.myghmart.link,
		description:
			"A modern e-commerce platform designed to simplify shopping in Ghana, featuring smooth navigation, clean UI, and a reliable experience for browsing and purchasing products.",
		tags: [
			"Websockets",
			"Redis",
			"Docker",
			"Github Actions",
			"JWT",
			"Express Js",
			"Apollo GraphQl",
			"Next Js",
			"React Js",
			"CSS 3",
			"Tailwind CSS",
			"Tanstack Query",
			"Framer Motion",
		],
	},
	{
		featured: true,
		imgSrc: projectsMeta.successfield.image,
		title: projectsMeta.successfield.name,
		description:
			"An academic support app designed for Successfield College, helping students access resources, stay organized, and improve their learning experience. The app integrates research, user insights, and structured planning to provide clear tools for managing tasks, tracking goals, and enhancing student productivity.",
		tags: [
			"TypeScript",
			"JWT",
			"Next Js",
			"Apollo GraphQl",
			"React Js",
			"Express Js",
			"CSS 3",
			"Tailwind CSS",
			"Tanstack Query",
			"Framer Motion",
		],
		link: projectsMeta.successfield.link,
	},

	{
		imgSrc: projectsMeta.consensus.image,
		title: projectsMeta.consensus.name,
		link: projectsMeta.consensus.link,
		repo: projectsMeta.consensus.repo,
		description:
			"A polling platform designed to simplify the process of creating and participating in polls. It features a modern UI, clean navigation, and a reliable experience for creating and voting on polls.",
		tags: [
			"Websockets",
			"Github Actions",
			"Express Js",
			"Apollo GraphQl",
			"Next Js",
			"React Js",
			"CSS 3",
			"Tailwind CSS",
			"Tanstack Query",
			"Framer Motion",
		],
	},
	{
		imgSrc: projectsMeta.lpm.image,
		title: projectsMeta.lpm.name,
		repo: projectsMeta.lpm.repo,
		description:
			"LPM is a lightweight tool designed to streamline code reuse across projects. It eliminates the repetitive tasks of copying components, fixing imports, and navigating between projects. With LPM, developers can easily manage, share, and integrate reusable modules locally, improving productivity and maintaining consistency in codebases.",
		tags: ["Typescript", "Node Js", "NeDb", "Ts Morph", "Clack Prompts"],
	},
]

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured)

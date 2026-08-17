import type { ProjectType } from "./projects.contracts.types"

const projectsMeta = Object.freeze({
	myghmart: {
		image: "/images/projects/myghmart.png",
		name: "MyGhmart",
		repo: "",
		link: "https://myghmart.com",
	},
	successfield: {
		image: "/images/projects/successfield.png",
		name: "Successfield College & Medical Services",
		repo: "",
		link: "https://successfieldcollege.com",
	},
	lpm: {
		image: "/images/projects/lpm.png",
		name: "LPM (Local Package Manager)",
		repo: "https://github.com/mrtindanzor/lpm",
		link: "",
	},
	consensus: {
		image: "/images/projects/consensus.png",
		name: "Consensus",
		repo: "https://github.com/mrtindanzor/alx-project-nexus",
		link: "https://polls.tindanzorsolutions.com",
	},
	fbci: {
		image: "/images/projects/fbci.png",
		name: "FBCI (Fundamental Baptist Church International)",
		repo: "https://github.com/mrtindanzor/fbci-kumasi",
		link: "https://fbci.tindanzorsolutions.com",
	},
	"arise-foundation": {
		image: "/images/projects/arise-foundation.png",
		name: "Arise (Advocacy for Resilience and Inclusive Sustainable Environment Arise Foundation)",
		link: "https://arise.tindanzorsolutions.com",
	},
})

export const PROJECTS: ProjectType[] = [
	{
		featured: false,
		imgSrc: "/images/projects/twitter-video-downloader-shortcut-ios.jpeg",
		title: "Twitter Video Downloader Shortcut iOS",
		description:
			"A tool that allows you to easily download videos from Twitter. It provides a simple and user-friendly shortcut for downloading videos from Twitter. The app is only compatible with iOS devices.",
		tags: ["Shortcuts", "Async Api Calls"],
		link: "https://www.icloud.com/shortcuts/6d41437281f4431eacc8831dfb29c148",
	},
	{
		featured: true,
		imgSrc: projectsMeta["arise-foundation"].image,
		title: projectsMeta["arise-foundation"].name,
		link: projectsMeta["arise-foundation"].link,
		description:
			"Founded on the principles of ecological stewardship, Arise Foundation bridges the gap between environmental awareness and tangible action. We believe that lasting change begins in the heart of local communities",
		tags: [
			"Cloudflare Workers",
			"Github Actions",
			"HTML5",
			"CSS 3",
			"Tailwind CSS",
		],
	},
	{
		featured: true,
		imgSrc: projectsMeta.fbci.image,
		title: projectsMeta.fbci.name,
		link: projectsMeta.fbci.link,
		description: `Developed a comprehensive digital platform for a global church community.
            Integrated Cloudflare R2 for scalable storage of images, documents, and other media assets.
            Engineered with a modern tech stack for speed, reliability, and accessibility.`,
		tags: [
			"Tanstack Start",
			"Redis",
			"Github Actions",
			"Cloudflare R2",
			"JWT",
			"NestJs",
			"React Js",
			"CSS 3",
			"Tailwind CSS",
			"Tanstack Query",
			"Framer Motion",
		],
	},
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
			"Tanstack Start (Migrated from Next Js)",
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
		featured: false,
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
		featured: false,
		imgSrc: projectsMeta.lpm.image,
		title: projectsMeta.lpm.name,
		repo: projectsMeta.lpm.repo,
		description:
			"LPM is a lightweight tool designed to streamline code reuse across projects. It eliminates the repetitive tasks of copying components, fixing imports, and navigating between projects. With LPM, developers can easily manage, share, and integrate reusable modules locally, improving productivity and maintaining consistency in codebases.",
		tags: ["Typescript", "Node Js", "NeDb", "Ts Morph", "Clack Prompts"],
	},
]

import { BiLogoVisualStudio } from "react-icons/bi"
import { DiMongodb } from "react-icons/di"
import {
	SiCss3,
	SiDocker,
	SiExpress,
	SiGit,
	SiGithub,
	SiGraphql,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiPnpm,
	SiPostman,
	SiReact,
	SiRedis,
	SiSocketdotio,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si"
import { TanstackLogo } from "@/assets/svgs/tanstack"
import type { SkillProps } from "./skills.db.types"

export const SKILLS: SkillProps[] = [
	{
		featured: true,
		category: "Languages",
		items: [
			{
				title: "JavaScript",
				icon: SiJavascript,
				color: "text-yellow-400",
				description:
					"The core language for building interactive and dynamic applications across the stack.",
			},
			{
				title: "TypeScript",
				icon: SiTypescript,
				color: "text-sky-600",
				description:
					"A strongly typed superset of JavaScript used across both frontend and backend.",
			},
		],
	},
	{
		featured: true,
		category: "Frontend",
		items: [
			{
				title: "React JS",
				icon: SiReact,
				color: "text-sky-400",
				description:
					"A JavaScript library for building interactive and dynamic user interfaces.",
			},
			{
				title: "Next JS",
				icon: SiNextdotjs,
				color: "text-white",
				description:
					"A React framework for server-side rendering and static site generation.",
			},
			{
				title: "Tanstack Start",
				icon: TanstackLogo,
				color: "text-white",
				description:
					"Full-stack Framework powered by TanStack Router for React.",
			},
			{
				title: "Tailwind CSS",
				icon: SiTailwindcss,
				color: "text-sky-600",
				description:
					"A utility-first CSS framework for rapid, responsive UI development.",
			},
			{
				title: "CSS3",
				icon: SiCss3,
				color: "text-sky-700",
				description:
					"Standard styling language for creating visually appealing web pages.",
			},
			{
				title: "HTML5",
				icon: SiHtml5,
				color: "text-orange-400",
				description: "The core markup language for structuring web content.",
			},
		],
	},
	{
		featured: true,
		category: "Backend",
		items: [
			{
				title: "Node JS",
				icon: SiNodedotjs,
				color: "text-green-600",
				description:
					"JavaScript runtime for building scalable server-side applications.",
			},
			{
				title: "Express JS",
				icon: SiExpress,
				color: "text-yellow-400",
				description:
					"A minimal and flexible Node.js web application framework.",
			},
			{
				title: "GraphQL",
				icon: SiGraphql,
				color: "text-[#E10098]",
				description:
					"A query language for APIs that enables precise data fetching.",
			},
			{
				title: "WebSocket",
				icon: SiSocketdotio,
				color: "text-yellow-400",
				description:
					"Enables real-time, bidirectional communication between client and server.",
			},
		],
	},
	{
		category: "Databases",
		items: [
			{
				title: "MongoDB",
				icon: DiMongodb,
				color: "text-green-600",
				description:
					"A NoSQL database for storing and querying JSON-like documents.",
			},
			{
				title: "Redis",
				icon: SiRedis,
				color: "text-red-600",
				description:
					"In-memory key-value store for caching and fast data retrieval.",
			},
		],
	},
	{
		category: "DevOps & Deployment",
		items: [
			{
				title: "Docker",
				icon: SiDocker,
				color: "text-white",
				description:
					"Containerization platform for deploying applications consistently across environments.",
			},
			{
				title: "NPM",
				icon: SiNpm,
				color: "text-red-600",
				description:
					"Node package manager for managing dependencies and scripts.",
			},
			{
				title: "PNPM",
				icon: SiPnpm,
				color: "text-blue-600",
				description:
					"Alternative package manager for efficient dependency management.",
			},
		],
	},
	{
		category: "Version Control",
		items: [
			{
				title: "Git",
				icon: SiGit,
				color: "text-red-400",
				description:
					"Distributed version control system to track changes in code.",
			},
			{
				title: "GitHub",
				icon: SiGithub,
				color: "text-white",
				description:
					"Platform for hosting Git repositories and collaborating with developers.",
			},
		],
	},
	{
		category: "Other Tools",
		items: [
			{
				title: "Postman",
				icon: SiPostman,
				color: "text-orange-500",
				description: "Tool for testing APIs and automating API workflows.",
			},
			{
				title: "VS Code",
				icon: BiLogoVisualStudio,
				color: "text-blue-500",
				description:
					"A powerful and popular code editor for all programming needs.",
			},
		],
	},
]

export const FEATURED_SKILLS = SKILLS.filter((skill) => skill.featured)

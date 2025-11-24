import { BiLogoVisualStudio } from "react-icons/bi"
import { DiMongodb } from "react-icons/di"
import { FaTiktok } from "react-icons/fa"
import {
	SiCss3,
	SiDocker,
	SiExpress,
	SiFacebook,
	SiGit,
	SiGithub,
	SiGraphql,
	SiHtml5,
	SiInstagram,
	SiJavascript,
	SiLinkedin,
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
	SiWhatsapp,
} from "react-icons/si"

export const skillsJs = [
	{
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
			{
				title: "JavaScript",
				icon: SiJavascript,
				color: "text-yellow-400",
				description:
					"The core language of the web for interactive and dynamic web functionality.",
			},
			{
				title: "TypeScript",
				icon: SiTypescript,
				color: "text-sky-600",
				description:
					"A typed superset of JavaScript that improves code quality and scalability.",
			},
		],
	},
	{
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

export const projects = [
	{
		imgSrc: "/assets/images/projects/myghmart.png",
		title: "MyGhmart",
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
		link: "https://myghmart.com",
	},
	{
		imgSrc: "/assets/images/projects/successfield.png",
		title: "Successfield College ",
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
		link: "https://successfieldcollege.com",
	},
]

export const professionalJourneyTimeline = [
	{
		cardId: 1,
		organization: "Successfield College",
		role: "Full-Stack Web Developer",
		period: {
			start: 2024,
			end: "Present",
		},
		achievements: [
			"Developed responsive web applications with React, Next.js, and Tailwind CSS.",
			"Built and maintained backend services using Express and MongoDB.",
			"Implemented GraphQL APIs for efficient and flexible data retrieval.",
			"Optimized app performance, improving load times and user experience.",
			"Integrated authentication and authorization workflows for secure access.",
			"Collaborated with cross-functional teams to deliver high-quality features.",
			"Streamlined development processes through modular code and reusable components.",
			"Performed regular testing and debugging to ensure stable and reliable applications.",
		],
	},
	{
		cardId: 2,
		organization: "Myghmart",
		role: "Full-Stack & DevOps Engineer",
		period: {
			start: 2025,
			end: "Present",
		},
		achievements: [
			"Designed and deployed scalable web applications using Docker containers.",
			"Automated CI/CD pipelines to streamline deployments and reduce downtime.",
			"Implemented Redis caching to significantly improve app performance.",
			"Developed full-stack solutions using React, Next.js, Tailwind CSS, Express, GraphQL, and TypeScript.",
			"Monitored and maintained server infrastructure for high availability and reliability.",
			"Optimized database queries and structure for faster data retrieval.",
			"Ensured security best practices across applications and deployment environments.",
			"Collaborated with teams to design user-centric solutions and intuitive interfaces.",
			"Troubleshot complex issues in production and development environments efficiently.",
		],
	},
]

export const socialMediaLinks = [
	{
		title: "Github",
		link: "https://github.com/mrtindanzor",
		color: "text-green-600",
		icon: SiGithub,
	},
	{
		title: "LinkedIn",
		link: "www.linkedin.com/in/mrtindanzor",
		color: "text-blue-600",
		icon: SiLinkedin,
	},
	{
		title: "Whatsapp",
		link: "https://wa.me/+233546087679",
		color: "text-green-600",
		icon: SiWhatsapp,
	},
	{
		title: "Instagram",
		link: "https://www.instagram.com/mrtindanzor",
		color: "text-red-600",
		icon: SiInstagram,
	},
	{
		title: "Tiktok",
		link: "http://www.tiktok.com/@mrtindanzor",
		color: "text-black",
		icon: FaTiktok,
	},
	{
		title: "Facebook",
		link: "https://web.facebook.com/mrtindanzor",
		color: "text-sky-600",
		icon: SiFacebook,
	},
]

export const resumeLink =
	"https://drive.google.com/file/d/1xyDC-rJoePiiBxt-UnqPe8IWkhzYwzSn/view?usp=drive_link"

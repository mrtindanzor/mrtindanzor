import type { ProfessionalJourneyType } from "./professional-journey.db.types"

export const PROFESSIONAL_TIMELIINE: ProfessionalJourneyType[] = [
	{
		cardId: 1,
		organization: "Successfield College",
		role: "Full-Stack Web Developer",
		locationType: "Remote",
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
		locationType: "Remote",
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

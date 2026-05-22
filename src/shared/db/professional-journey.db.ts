import type { ProfessionalJourneyType } from "./professional-journey.db.types"

export const PROFESSIONAL_TIMELIINE: ProfessionalJourneyType[] = [
	{
		cardId: 1,
		featured: true,
		organization: "Successfield College & Medical Services",
		role: "Full-Stack Web Developer",
		locationType: "Remote",
		logo: "/images/projects/branding/successfield-college-and-medical-services.png",
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
		featured: true,
		organization: "MyGhMart",
		logo: "/images/projects/branding/myghmart.png",
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
	{
		cardId: 3,
		organization: "ALX Africa",
		logo: "/images/projects/branding/alx.png",
		role: "Professional Foundations Learner",
		locationType: "Online",
		period: {
			start: "June 2025",
			end: "September 2025",
		},
		achievements: [
			"Built strong professional communication and collaboration skills",
			"Developed problem-solving and critical thinking abilities",
			"Learned effective teamwork and project management practices",
			"Strengthened leadership, time management, and accountability",
		],
	},
	{
		cardId: 4,
		featured: true,
		organization: "ALX Africa",
		logo: "/images/projects/branding/alx.png",
		role: "Frontend Pro Development Learner",
		locationType: "Online",
		period: {
			start: "September 2025",
			end: "Feb 2026",
		},
		achievements: [
			"Built responsive and modern web applications using React and TypeScript",
			"Improved frontend architecture and reusable component design skills",
			"Worked with APIs, state management, and modern development workflows",
			"Focused on creating clean UI/UX experiences and scalable applications",
		],
	},
]

export const FEATURED_PROFESSIONAL_TIMELINE = PROFESSIONAL_TIMELIINE.filter(
	(journey) => journey.featured,
)

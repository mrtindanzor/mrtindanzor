import { aboutService } from "@/features/about"
import { DEVELOPER } from "@/features/about/developer.db"
import { contactService } from "@/features/contact"
import { Link } from "@/shared/ui/primitive/Button"
import { useCurrentYear } from "../hooks/useCurrentYear"
import { routes } from "../routes"
import { Image } from "../ui/primitive/Image"
import { cn } from "../utils/cn"

export function Footer() {
	const developer = aboutService.getDeveloper()
	const currentYear = useCurrentYear()

	return (
		<footer className="w-full pt-8 sm:pt-12 md:pt-24 pb-12 px-8 lg:px-12 relative border-t border-neutral/20">
			<div className="max-w-max-width mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
					<div className="lg:col-span-4 flex flex-col items-start">
						<div className="flex items-center gap-3 mb-6">
							<div className="w-8 h-8 bg-neutral/20 border border-neutral/30 flex items-center justify-center transform -rotate-12 transition-transform hover:rotate-0">
								<div className="font-label-mono text-accent font-bold text-sm">
									<Image
										url={developer.avatar2}
										alt={developer.name}
										className="size-10 rounded-full border-muted-secondary border p-0.5"
									/>
								</div>
							</div>
							<span className="font-display text-accent font-bold text-headline-md tracking-tighter">
								[{developer.nick}]
							</span>
						</div>
						<p className="font-body-md text-neutral-secondary max-w-sm mb-6 leading-relaxed">
							Full-Stack Web Developer &amp; DevOps Engineer building meaningful
							digital products. Let's build something great together.
						</p>

						<SocialLinks />
					</div>

					<Navigations />

					<Services />
					<Resources />
				</div>
				<div className="pt-8 border-t border-neutral/20 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-2">
						<code className="font-label-mono text-caption text-neutral-secondary">
							SYS.STATUS:
						</code>
						<code className="text-accent flex items-center gap-1">
							<code className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></code>
							OPERATIONAL
						</code>
					</div>
					<p className="font-body-md text-neutral-secondary">
						&copy; {currentYear} {developer.nick}. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

function SocialLinks() {
	const socials = contactService.socials()

	return (
		<ul className="flex items-center gap-4 mt-auto">
			{socials.map(({ title, icon: Icon, link, color }) => (
				<li key={title}>
					<Link
						className={cn(
							color,
							"size-12 flex items-center justify-center bg-neutral-secondary/5 border border-neutral/20 hover:border-current",
						)}
						aria-label={title}
						href={link}
						target="_blank"
					>
						<Icon className={cn("size-6", color)} />
					</Link>
				</li>
			))}
		</ul>
	)
}

const NAVIGATIONS = [
	{ title: "Home", path: routes.home },
	{ title: "About", path: routes.about.home },
	{ title: "Projects", path: routes.projects },
	{ title: "Contact", path: routes.contact },
] as const
function Navigations() {
	return (
		<div className="lg:col-span-2 lg:col-start-6 flex flex-col">
			<h4 className="font-bold uppercase tracking-widest text-neutral mb-6">
				Navigation
			</h4>
			<ul className="grid h-fit gap-2.5 font-body-md text-neutral-secondary">
				{NAVIGATIONS.map((navigation) => (
					<li key={navigation.title}>
						<Link
							pad="none"
							className="hover:text-accent hover:underline underline-offset-4 decoration-border-subtle transition-all "
							href={navigation.path}
						>
							{navigation.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

const RESOURCES = [
	{ title: "Resume", path: DEVELOPER.resume },
	{ title: "Engineering Toolkit", path: routes.about.skills },
	{ title: "Professional Journey", path: routes.about.professionalJourney },
	{ title: "Projects", path: routes.projects },
] as const

function Resources() {
	return (
		<div className="lg:col-span-2 flex flex-col">
			<h4 className="font-bold uppercase tracking-widest text-neutral mb-6">
				Resources
			</h4>
			<ul className="grid h-fit gap-2.5  font-body-md text-neutral-secondary">
				{RESOURCES.map((resource) => (
					<li key={resource.title}>
						<Link
							pad="none"
							className="hover:text-white hover:underline underline-offset-4 decoration-border-subtle transition-all"
							target={resource.path === DEVELOPER.resume ? "_blank" : "_self"}
							href={resource.path}
						>
							{resource.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

const SERVICES = [
	"Full-Stack Development",
	"Frontend Engineering",
	"Backend Architecture",
	"API Development",
	"DevOps Deployment",
] as const
function Services() {
	return (
		<div className="lg:col-span-3 flex flex-col">
			<h4 className="font-bold uppercase tracking-widest text-neutral mb-6">
				Services
			</h4>
			<ul className="grid h-fit gap-2.5 font-body-md text-neutral-secondary">
				{SERVICES.map((service) => (
					<li key={service} className="flex items-center">
						<span>{service}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

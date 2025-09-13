import Image, { StaticImageData } from "next/image"
import avatar from "@/assets/images/mrtindanzor.png"
import aboutImage from "@/assets/images/mtindanzor2.webp"
import Link from "next/link"
import { skillJs } from "@/lib/skills"
import { ChevronDown } from "lucide-react"
import Contact from "@/components/Contact"
import Contactlinks from "@/components/ContactLinks"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Bio />
      <Skills />
      <About />
      <Contactlinks className="justify-center" />
      <Contact />
    </main>
  )
}

function Hero() {
  return (
    <section className="items-center text-center overflow-hidden grid sm:grid-cols-[2fr_1fr] sm:*:!pt-16">
      <div className=" grid gap-4 h-120 sm:h-full bg-stone-900 z-1 shadow-lg shadow-stone-900 items-center justify-center">
        <div className="mx-auto flex gap-2 text-left px-5 flex-col max-w-9/10 sm:max-w-100 sm:mr-16 md:mr-24 lg:max-w-lg lg:mr-40">
          <h1 className="text-3xl text-yellow-500 sm:text-4xl font-black">
            Simon Tindanzor
          </h1>
          <p className="text-base sm:text-base md:text-lg lg:text-xl text-gray-300">
            <code className="font-bold font-mono text-gray-100">
              Web Developer
            </code>{" "}
            & Founder of{" "}
            <b className="text-gray-100">Tindanzor Software Solutions</b>.
            <br />
            <br />
            Turning ideas into modern web apps and impactful tech solutions.
          </p>
        </div>
      </div>

      <div className="relative bg-yellow-500 shadow-2xl h-95 items-center shadow-yellow-500 sm:h-full w-full grid bg justify-center">
        <div className="relative z-1 bg-white/5 -rotate-10 backdrop-blur-3xl rounded-md  -translate-y-30 sm:translate-y-10 md:-translate-x-1/2 sm:-translate-x-1/4">
          <Image
            src={avatar}
            height={400}
            width={400}
            alt="Mr. Tindanzor Simon"
            className="object-contain z-1 w-full rotate-10"
          />
        </div>
      </div>
    </section>
  )
}

function Bio() {
  return (
    <section className="py-20 px-5 sm:px-10 gap-10 bg-stone-800 grid sm:grid-cols-[2fr_1fr] justify-center sm:grid-rows-[auto_1fr]">
      <h2 className="text-white text-2xl w-fit before:content-[''] relative before:absolute before:w-2/3 before:top-full before:border-1 before:border-yellow-400 before:rounded font-black">
        Who is Simon Tindanzor
      </h2>
      <p className="text-gray-300 sm:col-start-1 sm:row-start-2">
        Simon Tindanzor is a software engineer and aspiring tech entrepreneur,
        currently building an online marketplace app designed for Ghana. He
        previously developed and launched a functional web app for Successfield
        College, which is live online and in use. His long term goal is to
        create a vast collection of applications from marketplaces to online
        food systems and beyond that solve real problems and make digital access
        easier for communities. He stands out for combining strong technical
        skills with a vision for scalable, impactful digital solutions.
      </p>
      <div className="hidden sm:flex text-6xl text-yellow-500 font-black sm:col-start-2 sm:row-span-full items-start px-10">
        <span className="scale-400">?</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="sm:min-h-dvh h-fit w-screen bg-stone-900 grid gap-y-10 gap-x-5 py-20 sm:grid-cols-2">
      <div className="sm:items-center justify-center flex w-full h-full">
        <div className="relative h-90 w-9/10 sm:w-8/10 border-8 border-yellow-400">
          <Image
            src={aboutImage}
            fill
            alt="Mr.Tindanzor"
            className="sm:border-8 object-cover object-top border-stone-600 z-1 sm:-translate-y-5 md:-translate-y-10 sm:translate-x-5 md:translate-x-10"
          />
        </div>
      </div>

      <div className="py-5 px-5 h-100 flex flex-col gap-y-8 justify-center">
        <h2 className="relative w-fit before:content-[''] before:w-1/2 before:h-1 py-2 before:absolute before:top-full before:bg-yellow-400 text-white font-black text-4xl">
          About Me
        </h2>
        <p className="text-gray-100 sm:text-lg leading-relaxed">
          Founder of{" "}
          <Link
            target="black"
            href="https://myghmart.com"
            className="text-yellow-300 underline underline-offset-4"
          >
            MyGHMart
          </Link>{" "}
          and the developer behind{" "}
          <Link
            target="black"
            href="https://successfieldcollege.com"
            className="text-yellow-300 underline underline-offset-4"
          >
            Successfield
          </Link>
          . I build and maintain full-stack solutions, optimizing performance,
          images, and cloud storage to deliver fast, reliable experiences.
          Passionate about using technology to solve real-world problems and
          make life easier for users.
        </p>
        <button className="bg-yellow-400 relative w-fit py-2 px-4 rounded sm:font-semibold sm:text-lg">
          <Link
            target="black"
            className="before:absolute before:inset-0 before:content-['']"
            href="https://drive.google.com/file/d/1xyDC-rJoePiiBxt-UnqPe8IWkhzYwzSn/view?usp=sharing"
          >
            See Resume
          </Link>
        </button>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <div className="h-50 sm:h-60 max-w-screen z-10 bg-orange-600/5 backdrop-blur-3xl sm:py-4 flex flex-col overflow-hidden">
      <div className="flex flex-col items-center">
        <p className="font-bold text-lg">My Development Stack</p>
        <ChevronDown className="size-10 stroke-2" />
      </div>
      <ul className="flex animate-scroll py-2 w-max hover:![animation-play-state:_paused] ">
        {skillJs.map((skill, i) => (
          <SkillCard key={i} title={skill.title} image={skill.image} />
        ))}
        {skillJs.map((skill, i) => (
          <SkillCard key={i} title={skill.title} image={skill.image} />
        ))}
      </ul>
    </div>
  )
}

function SkillCard({
  title,
  image,
}: {
  title: string
  image: StaticImageData
}) {
  return (
    <li className="flex justify-between w-35 gap-2 px-2 py-1 flex-col text-center">
      <div className="relative h-20">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100%"
          className="object-contain"
        />
      </div>
      <span className="sm:text-lg">{title}</span>
    </li>
  )
}

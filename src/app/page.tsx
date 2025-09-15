import Image from "next/image"
import aboutImage from "@/assets/images/mtindanzor2.webp"
import Link from "next/link"
import Hero from "./(homepage)/_components/Hero"
import Bio from "./(homepage)/_components/Bio"
import Skills from "./(homepage)/_components/Skills"

export default function Home() {
  return (
    <main
      className="overflow-x-hidden bg-slate-950 @container w-screen"
      style={{
        scrollbarWidth: "thin",
      }}
    >
      <Hero />
      <Bio />
      <Skills />
    </main>
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

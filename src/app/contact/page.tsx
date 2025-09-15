import Contact from "@/components/Contact"
import Contactlinks from "@/components/ContactLinks"

export default function ContactPage() {
  return (
    <main className="grid lg:grid-cols-[1fr_2fr] lg:grid-rows-[auto_1fr] gap-y-4 lg:gap-x-4 lg:gap-y-10 py-25 lg*:not-first:row-start-2 max-w-5xl mx-auto">
      <h2 className="text-whte text-4xl text-sky-600 px-3 sm:px-5 font-sans font-bold  col-span-full">
        Get in touch with me!
      </h2>
      <Contactlinks />
      <Contact />
    </main>
  )
}

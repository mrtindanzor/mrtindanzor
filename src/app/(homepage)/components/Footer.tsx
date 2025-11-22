import { ArrowLink } from "@/components/common/ArrowLink";
import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/common/Section";

export function Footer() {
  return (
    <Section>
      <Heading tag="h4" className="mx-auto" size="lg">
        Let&apos;s Connect!
      </Heading>

      <ArrowLink
        href="/contact"
        className="gap-4 border-2 w-fit py-2.5 mx-auto px-8 rounded-3xl *:first:size-5 bg-sky-600 text-gray-300"
      >
        Contact
      </ArrowLink>
    </Section>
  );
}

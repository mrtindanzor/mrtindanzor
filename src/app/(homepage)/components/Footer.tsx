import { Heading } from "@/components/common/Heading";
import { StyledDotLink } from "@/components/common/IconLink";
import { Section } from "@/components/common/Section";

export function Footer() {
  return (
    <Section>
      <Heading tag="h4" className="mx-auto" size="lg">
        Let&apos;s Connect!
      </Heading>

      <StyledDotLink href="/contact" variant="sky" className="mx-auto">
        Contact
      </StyledDotLink>
    </Section>
  );
}

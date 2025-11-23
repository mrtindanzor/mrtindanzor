import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/common/Section";
import { SkillsContainerCard } from "@/components/common/SkillsContainerCard";
import { skillsJs } from "@/lib/db";

export function Skills() {
  return (
    <div className="bg-linear-to-b from-slate-900 via-slate-950 to-slate-950">
      <Section>
        <Heading tag="h2">Engineering Toolkit</Heading>

        <ul className="grid sm:grid-cols-2 gap-4">
          {skillsJs.map((skill) => (
            <li key={skill.category}>
              <SkillsContainerCard {...skill} />
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

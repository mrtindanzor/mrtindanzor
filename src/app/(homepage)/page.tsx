import type { Metadata } from "next";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/Hero";
import { Mission } from "./components/Mission";
import { FeatureProjects } from "./components/Projects";

export const metadata: Metadata = {
  title: "Mr. Tindanzor Simon | Full-Stack and Devop Web developer",
};

export default function Homepage() {
  return (
    <main>
      <HeroSection />
      <Mission />
      <FeatureProjects />
      <Footer />
    </main>
  );
}

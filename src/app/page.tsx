import Contact from "@/components/Home/Contact";
import HeroSection from "@/components/Home/HeroSection";
import Projects from "@/components/Home/Projects";
import TechStack from "@/components/Home/TechStack";

export default function Page() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
}

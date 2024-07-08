"use client";
import CatchLine from "@/components/Home/CatchLine";
import Contact from "@/components/Home/Contact";
import HeroSection from "@/components/Home/HeroSection";
import Projects from "@/components/Home/Projects";
import TechStack from "@/components/Home/TechStack";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const lenis = new Lenis();

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Page() {
  useGSAP(() => {
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
      lenis.options.syncTouch = false;
    });

    gsap.ticker.lagSmoothing(0);
  });
  return (
    <>
      <HeroSection />
      <CatchLine />
      <Projects />
      <Contact />
    </>
  );
}

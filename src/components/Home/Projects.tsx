"use client";
import React, { useRef, useEffect, useState, ReactNode } from "react";
import { ExternalLink, Plus, X } from "react-feather";
import Overlay from "../common/Overlay";

export default function Projects() {
  // Horizontal scroll logic Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyParentRef = useRef<HTMLDivElement>(null);
  const stickyChildRef = useRef<HTMLDivElement>(null);

  // State for horizontal scroll
  const [horizontalWidth, setHorizontalWidth] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const [overlayContent, setOverlayContent] = useState<ReactNode>(null);

  // Overlay logic Refs
  const overlayContentRef = useRef<HTMLDivElement>(null);
  const overlayInnerContentRef = useRef<HTMLDivElement>(null);

  function calculateContentWidth() {
    const contentWidth = stickyChildRef.current?.scrollWidth || 0;
    const vw = window.innerWidth / 100;
    const contentWidthInVW = contentWidth / vw;
    return contentWidthInVW;
  }

  function calculateOffset() {
    const parentTopOffset = stickyParentRef.current?.offsetTop || 0;
    const parentHeight = containerRef.current?.offsetHeight || 0;
    const offsetFactor = parentTopOffset / parentHeight;

    const calculatedOffset =
      offsetFactor * (stickyChildRef.current?.offsetWidth || 0);

    return calculatedOffset;
  } // calculate the offset of the sticky child

  useEffect(() => {
    setHorizontalWidth(calculateContentWidth());

    window.addEventListener("load", () => {
      setHorizontalWidth(calculateContentWidth());
      setScrollOffset(calculateOffset());
    }); // initial load if the page is already scrolled

    window.addEventListener("scroll", () => {
      setScrollOffset(calculateOffset());
    }); // on scroll

    window.addEventListener("resize", () => {
      setHorizontalWidth(calculateContentWidth());
      setScrollOffset(calculateOffset());
    }); // on resize
  }, []);

  function ProjectGroup({
    title,
    image,
    keyTechnologies,
    description,
    link,
  }: {
    title: string;
    image: string;
    keyTechnologies: string[];
    description: string;
    link: string;
  }) {
    return (
      <div className="flex flex-col items-center justify-center h-full max-w-[100vw]">
        <div className="flex flex-col items-center gap-8">
          <img
            src={image}
            alt={title}
            className="max-w-[90vw] max-h-[60vh] rounded"
          />

          <h1 className="text-3xl">{title}</h1>
          <p className="glass-box px-4 py-1 rounded-lg font-light">
            {keyTechnologies.join(" • ")}
          </p>
          <button
            onClick={() => {
              handleInfoButton({ title, description, link }); // open overlay
            }}
            className="flex items-center gap-2 text-xl font-bold"
          >
            Know more
            <div className="w-8 h-8 rounded-full glass-box p-1">
              <Plus className="stroke-2" />
            </div>
          </button>
        </div>
      </div>
    );
  }

  function OverlayContent({
    title,
    description,
    link,
  }: {
    title: string;
    description: string;
    link: string;
  }) {
    return (
      <>
        <h1 className="text-3xl font-semibold text-secondary-200">{title}</h1>
        <p className="text-lg max-w-4xl text-center">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="bg-white text-black font-semibold px-6 py-2 rounded-lg flex gap-1 items-center hover:scale-105 active:scale-95 transition"
        >
          View project
          <ExternalLink className="h-5" />
        </a>
      </>
    );
  }

  function handleInfoButton({
    title,
    description,
    link,
  }: {
    title: string;
    description: string;
    link: string;
  }) {
    setOverlayContent(
      <div
        ref={overlayContentRef}
        className="backdrop-blur-none h-full w-full flex items-center bg-white/5 transition-all duration-300 py-8 px-2 overflow-y-scroll"
      >
        <div
          ref={overlayInnerContentRef}
          className="max-w-6xl m-auto w-full min-h-[70%] relative flex flex-col justify-between items-center gap-10 p-8 py-16 rounded-3xl border border-white/10 bg-background translate-y-[100%] transition duration-700"
        >
          <button
            className="absolute top-4 right-4 bg-white/10 p-2 rounded-full active:scale-95 transition"
            onClick={() => {
              setOverlayIsOpen(false);
              document.body.style.overflow = "auto";
            }}
          >
            <X className="stroke-2" />
          </button>
          {/* close button */}
          <OverlayContent title={title} description={description} link={link} />
        </div>
      </div>
    );

    setOverlayIsOpen(true);

    setTimeout(() => {
      overlayContentRef.current?.classList.remove("backdrop-blur-none");
      overlayContentRef.current?.classList.add("backdrop-blur-md");

      overlayInnerContentRef.current?.classList.remove("translate-y-[100%]");

      document.body.style.overflow = "hidden";
    }, 0); // 0ms delay to make sure the classes are added after the element is rendered

    setOverlayIsOpen(true);
  }

  const projects: {
    title: string;
    image: string;
    keyTechnologies: string[];
    description: string;
    link: string;
  }[] = [
    {
      title: "CV Maker",
      image: "/cv_maker_ss.jpeg",
      keyTechnologies: ["React", "TailwindCSS"],
      description: `A simple CV maker app built with React and TailwindCSS.
      This was built as a solution to a problem in The Odin Project's curriculum.
      The app allows users to create a CV by filling out a form.
      The app is responsive and has a dark mode. The template for the CV is designed by  Ekaterina Pavlova.
      There is sample data that can be loaded into the form to see how the CV looks with data.`,
      link: "https://cvmake.vercel.app/",
    },
    {
      title: "Todo Dump",
      image: "/todo_dump_ss.png",
      keyTechnologies: ["✨ Pure JavaScript"],
      description: `A todo app built only with pure vanilla JavaScript.
      This app does not use any framework.
      The app allows users to add, delete, and mark todos as completed.
      The app allows users to create multiple projects and add todos to them.
      There is also todo categorization based on due date.
      The app uses local storage to save the todos and projects.`,
      link: "https://tododump.vercel.app/",
    },
    {
      title: "Weatheeer App",
      image: "/weatheeer_ss.jpeg",
      keyTechnologies: ["Webpack", "JavaScript"],
      description: `A simple weather app built with Webpack and JavaScript.
      The app fetches weather data from the OpenWeather API and displays it to the user.
      It has dynamic backgrounds based on the weather condition.
      There is also search functionality and imperial conversion toggle.`,
      link: "https://weatheeer.vercel.app/",
    },
  ]; // project data

  function ScrollContent() {
    return (
      <>
        <div className="sm:min-w-[100vw] box-border w-auto p-4 flex items-center justify-center">
          <h1
            className="font-black text-9xl absolute -z-10 bg-clip-text text-transparent leading-tight opacity-30"
            style={{
              backgroundImage: `linear-gradient(90deg, #E3B261 0%, #EF652A 14%, #FF0000 29%, #B924FF 50.5%, #264DE4 71%, #2965F1 100%)`,
            }}
          >
            Projects
          </h1>

          <h1
            className="font-black text-9xl text-transparent leading-tight bg-clip-text"
            style={{
              WebkitTextStroke: "1px #ffffff40",
              backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 100%)`,
            }}
          >
            Projects
          </h1>
        </div>
        <div className="flex items-center gap-16 xl:gap-48 ">
          {projects.map((project, index) => (
            <ProjectGroup key={index} {...project} />
          ))}
        </div>
      </>
    );
  }

  return (
    <section>
      <div
        ref={containerRef}
        className="absolute left-0"
        style={{ height: `${horizontalWidth}vh` }}
      >
        <div
          ref={stickyParentRef}
          className="sticky top-0 h-screen w-screen overflow-hidden"
        >
          <div
            ref={stickyChildRef}
            style={{
              left: -scrollOffset,
              top: 0,
              width: `${horizontalWidth}vw`,
            }}
            className="h-full flex items-center relative"
          >
            <ScrollContent />
          </div>
        </div>
      </div>
      <div style={{ height: `${horizontalWidth}vh` }}></div>
      <Overlay isOpen={overlayIsOpen}>{overlayContent}</Overlay>
    </section>
  );
}

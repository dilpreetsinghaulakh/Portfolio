"use client";
import { Plus, X, XCircle } from "react-feather";
import Overlay from "../common/Overlay";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function OverlayContent({
  overlayInnerContentRef,
  overlayContentRef,
  setOverlayIsOpen,
  iconAssets,
  icons,
  title,
  info,
  learningStatus,
  learningSourceIcon,
}: {
  overlayInnerContentRef: React.RefObject<HTMLDivElement>;
  overlayContentRef: React.RefObject<HTMLDivElement>;
  setOverlayIsOpen: (value: boolean) => void;
  iconAssets: { [key: string]: { src: string; alt: string } };
  icons: string[];
  title: string;
  info: string;
  learningStatus: string;
  learningSourceIcon: string;
}) {
  useEffect(() => {
    if (overlayInnerContentRef.current) {
      gsap.fromTo(
        overlayInnerContentRef.current,
        { y: overlayInnerContentRef.current.clientHeight },
        { y: 0, duration: 0.6, ease: "power2.inOut" }
      );
    }

    if (overlayContentRef.current) {
      overlayContentRef.current.classList.remove("backdrop-blur-none");
      overlayContentRef.current.classList.add("backdrop-blur-xl");
      document.body.style.overflow = "hidden";
    }

    return () => {
      // Clean up when the component is unmounted
      document.body.style.overflow = "auto";
    };
  }, [overlayInnerContentRef, overlayContentRef]);

  function handleOverlayClose() {
    if (overlayInnerContentRef.current) {
      gsap.to(overlayInnerContentRef.current, {
        y: overlayInnerContentRef.current.clientHeight,
        opacity: 0,
        filter: "blur(50px)",
        duration: 0.7,
        ease: "power2.in",
      });
    }
    if (overlayContentRef.current) {
      overlayContentRef.current.classList.remove("backdrop-blur-xl");
      overlayContentRef.current.classList.add("duration-1000");
      overlayContentRef.current.classList.add("backdrop-blur-none");
      overlayContentRef.current.classList.add("opacity-0");

      setTimeout(() => {
        setOverlayIsOpen(false);
      }, 700);
    }
  }

  return (
    <div
      ref={overlayContentRef}
      className="backdrop-blur-none h-full w-full flex items-center transition-all duration-700 py-8 px-2 overflow-y-scroll"
    >
      <div
        ref={overlayInnerContentRef}
        className="max-w-6xl m-auto w-full min-h-[70%] relative flex flex-col justify-between items-center gap-10 p-8 py-16 rounded-3xl border border-white/10 bg-background" // transition-opacity duration-500" // translate-y-full transition duration-700"
      >
        <button
          className="absolute top-4 right-4 bg-white/10 p-2 rounded-full active:scale-95 transition"
          onClick={() => handleOverlayClose()}
        >
          <X className="stroke-2" />
        </button>
        {/* close button */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {icons.map((icon, index) => (
              <img
                key={index}
                className="w-12 h-12 xl:w-16 xl:h-16"
                src={iconAssets[icon].src}
                alt={iconAssets[icon].alt}
              />
            ))}
          </div>
          <h1 className="text-2xl font-semibold text-secondary-200 text-center">
            {title}
          </h1>
        </div>
        <p
          className="text-lg max-w-4xl text-center"
          dangerouslySetInnerHTML={{ __html: info }}
        ></p>
        <div className="flex flex-col items-center gap-4">
          <p className="font-semibold text-secondary-200">{learningStatus}</p>
          <img
            src={iconAssets[learningSourceIcon].src}
            alt={iconAssets[learningSourceIcon].alt}
            className="h-12"
          />
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const [overlayContentState, setOverlayContentState] =
    useState<ReactNode>(null);
  const overlayContentRef = useRef<HTMLDivElement>(null);
  const overlayInnerContentRef = useRef<HTMLDivElement>(null);

  function TechGroup({
    icons,
    name,
    title,
    info,
    learningStatus,
    learningSourceIcon,
  }: {
    icons: string[];
    name: string;
    title: string;
    info: string;
    learningStatus: string;
    learningSourceIcon: string;
  }) {
    return (
      <div className="flex flex-col items-center">
        <div className="flex gap-8 xl:gap-12 p-6 xl:p-8 rounded-3xl glass-box">
          {icons.map((icon, index) => (
            <div key={index} className="w-12 h-12 xl:w-16 xl:h-16">
              <img
                src={iconAssets[icon].src}
                alt={iconAssets[icon].alt}
                className="absolute w-12 h-12 xl:w-16 xl:h-16 -z-10 blur-xl opacity-75"
              />{" "}
              {/* glow effect */}
              <img
                className="h-full w-full"
                src={iconAssets[icon].src}
                alt={iconAssets[icon].alt}
              />
            </div>
          ))}
        </div>
        <button
          className="flex items-center justify-center gap-2 mt-4 active:scale-95 transition"
          onClick={() => {
            handleInfoButton({
              iconAssets,
              icons,
              title,
              info,
              learningStatus,
              learningSourceIcon,
            });
          }}
        >
          <p className="text-xl font-semibold">{name}</p>
          <div className="w-8 h-8 rounded-full glass-box p-1">
            <Plus className="stroke-2" />
          </div>
        </button>
      </div>
    );
  }

  function handleInfoButton({
    iconAssets,
    icons,
    title,
    info,
    learningStatus,
    learningSourceIcon,
  }: {
    iconAssets: { [key: string]: { src: string; alt: string } };
    icons: string[];
    title: string;
    info: string;
    learningStatus: string;
    learningSourceIcon: string;
  }) {
    setOverlayContentState(
      <OverlayContent
        overlayContentRef={overlayContentRef}
        overlayInnerContentRef={overlayInnerContentRef}
        setOverlayIsOpen={setOverlayIsOpen}
        iconAssets={iconAssets}
        icons={icons}
        title={title}
        info={info}
        learningStatus={learningStatus}
        learningSourceIcon={learningSourceIcon}
      />
    );
    setOverlayIsOpen(true);
  }

  const iconAssets: { [key: string]: { src: string; alt: string } } = {
    html5: { src: "LanguageIcons/HTML5_Logo.svg", alt: "HTML5 Logo" },
    css3: { src: "LanguageIcons/CSS3_Logo.svg", alt: "CSS3 Logo" },
    javascript: {
      src: "LanguageIcons/JavaScript_Logo.svg",
      alt: "JavaScript Logo",
    },
    reactJS: { src: "LanguageIcons/React_Logo.svg", alt: "React Logo" },
    nodeJS: { src: "LanguageIcons/Node_Js_Logo.svg", alt: "NodeJS Logo" },
    mongoDB: { src: "LanguageIcons/Mongo_Db_Logo.svg", alt: "MongoDB Logo" },
    expressJS: {
      src: "LanguageIcons/Express_Js_Logo.svg",
      alt: "ExpressJS Logo",
    },
    xcode: { src: "LanguageIcons/Xcode_Logo.png", alt: "Xcode Logo" },
    theOdinProject: {
      src: "LearningSourcesIcons/The_Odin_Project.svg",
      alt: "The Odin Project Logo",
    },
    NA: { src: "LearningSourcesIcons/NA.svg", alt: "N/A" },
  };

  const techSkillSets = [
    {
      name: "Proficient in",
      icons: ["html5", "css3", "javascript", "reactJS"],
      title: "HTML, CSS, JavaScript and ReactJS",
      info: `These are the technologies with which I am most familiar with.<br />
       I have built many projects using these technologies like CV Make, Todo Dump, AI Path Generator.`,
      learningStatus: "Learn't from",
      learningSourceIcon: "theOdinProject",
    },
    {
      name: "Currently Learning",
      icons: ["nodeJS", "mongoDB", "expressJS"],
      title: "NodeJS, MongoDB and ExpressJS",
      info: `These are the technologies with which I am currently learning.
      I am working on or going to work with these in projects soon.`,
      learningStatus: "Learning from",
      learningSourceIcon: "theOdinProject",
    },
    {
      name: "Going to learn",
      icons: ["xcode"],
      title: "iOS App Development",
      info: `iOS app development is on my list for a long a time. 
      After doing full stack web development I am going to get into the realm of
      mobile app development starting with native iOS development.`,
      learningStatus: "Going to learn from",
      learningSourceIcon: "NA",
    },
  ];

  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Tech Stack</h1>
      <div className="flex flex-col gap-10">
        {techSkillSets.map((group, index) => (
          <TechGroup
            key={index}
            name={group.name}
            icons={group.icons}
            title={group.title}
            info={group.info}
            learningSourceIcon={group.learningSourceIcon}
            learningStatus={group.learningStatus}
          />
        ))}
      </div>
      <Overlay isOpen={overlayIsOpen}>{overlayContentState}</Overlay>
    </section>
  );
}

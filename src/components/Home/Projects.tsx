"use client";
import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "react-feather";
import MacbookMockup from "../common/MackbookMockup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function StickyScroll({
  dataArray,
}: {
  dataArray: {
    title: string;
    image: string;
    keyTechnologies: string[];
    description: string;
    link: string;
  }[];
}) {
  const mockupContainer = useRef<HTMLDivElement>(null);
  const mockupGridContainer = useRef<HTMLDivElement>(null);
  const mockupContent = useRef<HTMLDivElement>(null);
  const outerContentContainer = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const [imgSrc, setImgSrc] = useState<string>("/projects_text.svg");
  const [isSafari, setIsSafari] = useState<boolean>(false);

  function IsSafari() {
    let userAgentString = navigator.userAgent;
    // Detect Chrome
    let chromeAgent = userAgentString.indexOf("Chrome") > -1;
    // Detect Safari
    let safariAgent = userAgentString.indexOf("Safari") > -1;

    // Discard Safari since it also matches Chrome
    if (chromeAgent && safariAgent) safariAgent = false;
    return safariAgent;
  }

  useEffect(() => {
    setIsSafari(IsSafari());
  }, []);

  useGSAP(() => {
    const animations = gsap.matchMedia();

    animations.add("(min-width: 640px)", () => {
      gsap.set(mockupContainer.current, {
        y: "10vw",
      });
      gsap.fromTo(
        mockupContainer.current,
        {
          willChange: "transform",
          width: "100%",
          y: "10vw",
        },
        {
          scrollTrigger: {
            trigger: mockupContainer.current,
            start: "0% center",
            end: "50% center",
            scrub: true,
            toggleActions: "play none none reverse",
          },
          willChange: "transform",
          width: "50%",
          y: "0",
          height: "50%",
          ease: "power1.inOut",
        }
      );
    });

    animations.add("(max-width: 640px)", () => {
      gsap.to(mockupContainer.current, {
        scrollTrigger: {
          trigger: mockupContainer.current,
          start: "0% center",
          end: "100% center",
          scrub: true,
          toggleActions: "play none none reverse",
        },
        willChange: "transform",
        scale: 0.8,
        top: "-2rem",
        height: "100vh",
        ease: "power1.inOut",
      });
    });
  }, [mockupContainer.current]);

  useGSAP(() => {
    if (!outerContentContainer.current) return;

    if (isSafari) {
      const imgSrcArray: string[] = [
        "/projects_text.svg",
        ...dataArray.map((project) => project.image),
      ];
      gsap.utils.toArray(outerContentContainer.current?.children).forEach(
        (child, index) => {
          if (child === outerContentContainer.current?.lastChild) return;
          ScrollTrigger.create({
            trigger: child as Element,
            start: "40% bottom",
            end: "40% bottom",
            toggleActions: "play none none reverse",
            onEnter: () => {
              setImgSrc(imgSrcArray[index + 1]);
            },
            onEnterBack: () => {
              setImgSrc(imgSrcArray[index]);
            },
          });
        },
        [outerContentContainer.current]
      );
    }

    gsap.utils
      .toArray(outerContentContainer.current?.children)
      .forEach((child, index) => {
        if (child === outerContentContainer.current?.lastChild) return;

        gsap.fromTo(
          mockupContent.current?.children[index + 1] as Element,
          {
            y: "100%",
            willChange: "transform",
          },
          {
            scrollTrigger: {
              trigger: child as Element,
              start: "10% bottom",
              end: "70% bottom",
              scrub: true,
              toggleActions: "play none none reverse",
            },
            y: 0,
            duration: 0.5,
            ease: "power1.inOut",
          }
        );

        if (index > 0) {
          gsap.fromTo(
            outerContentContainer.current?.children[index - 1] as Element,
            {
              opacity: 1,
              willChange: "opacity",
            },
            {
              scrollTrigger: {
                trigger: child as Element,
                start: "10% bottom",
                end: "70% bottom",
                scrub: true,
                toggleActions: "play none none reverse",
              },
              opacity: 0,
              duration: 0.5,
              ease: "power1.inOut",
            }
          );
        }
      });
  }, [outerContentContainer.current]);

  return (
    <>
      <div ref={mockupContainer} className="sticky mt-16 top-12 z-20">
        <div
          ref={mockupGridContainer}
          className="w-full h-[90vh] grid sm:grid-rows-2 sm:items-center"
        >
          <div className="h-fit w-full ">
            <MacbookMockup>
              <div
                ref={mockupContent}
                className={
                  "h-full w-full bg-white flex items-center justify-center overflow-hidden" +
                  (isSafari ? null : " relative")
                }
              >
                {isSafari ? (
                  <Image
                    src={imgSrc}
                    alt="Project Image"
                    width={967}
                    height={628}
                    className="w-full h-auto"
                  />
                ) : (
                  <>
                    <h1
                      className="font-black text-center text-[15rem] w-fit bg-clip-text text-transparent leading-tight"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%),
                linear-gradient(90deg, #E3B2614D 0%, #EF652A4D 14%, #FF00004D 29%, #B924FF4D 50.5%, #264DE44D 71%, #2965F14D 100%)`,
                        WebkitTextStroke: "1px #0000004d",
                      }}
                    >
                      Projects
                    </h1>

                    {dataArray.map((project, index) => (
                      <Image
                        ref={(el) => (imgRefs.current[index] = el!)}
                        key={index}
                        src={project.image}
                        alt={project.title}
                        width={967}
                        height={628}
                        className="w-full h-auto absolute"
                      />
                    ))}
                  </>
                )}
              </div>
            </MacbookMockup>
          </div>
          <div></div>
        </div>
      </div>

      <div ref={outerContentContainer} className="-mt-[100%] md:-mt-[30%]">
        {dataArray.map((project, index) => (
          <div
            key={index}
            className="sticky top-12 mt-32 grid pt-[30vw] sm:pt-0 sm:grid-cols-2 sm:grid-rows-2 h-[90vh] gap-2 bg-background"
          >
            <div></div>
            <div className="pl-2 flex flex-col gap-2 justify-center items-center">
              <h2 className="text-4xl">{project.title}</h2>
              <p className="px-4 py-1 rounded-full bg-primary text-opposite">
                {project.keyTechnologies.join(" • ")}
              </p>
            </div>
            <div className=" flex items-center text-center">
              <p>{project.description}</p>
            </div>

            <div className="flex items-center justify-center relative">
              <a
                className="px-8 p-4 absolute bg-primary text-opposite font-semibold rounded-full flex items-center gap-1 hover:gap-4 active:gap-2 transition-all"
                href={project.link}
                target="_blank"
              >
                Visit <ArrowUpRight />
              </a>
            </div>
          </div>
        ))}

        <div className="h-80"></div>
      </div>
    </>
  );
}

export default function Projects() {
  const projects: {
    title: string;
    image: string;
    keyTechnologies: string[];
    description: string;
    link: string;
  }[] = [
    {
      title: "CV Maker",
      image: "/cv_maker_ss.webp",
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
      image: "/todo_dump_ss.webp",
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
      image: "/weatheeer_ss.webp",
      keyTechnologies: ["Webpack", "JavaScript"],
      description: `A simple weather app built with Webpack and JavaScript.
      The app fetches weather data from the OpenWeather API and displays it to the user.
      It has dynamic backgrounds based on the weather condition.
      There is also search functionality and imperial conversion toggle.`,
      link: "https://weatheeer.vercel.app/",
    },
  ]; // project data

  return (
    <section>
      <StickyScroll dataArray={projects} />
    </section>
  );
}

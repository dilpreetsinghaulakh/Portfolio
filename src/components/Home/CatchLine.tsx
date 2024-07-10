"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function CatchLine() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [textLeftValue, setTextLeftValue] = useState(0);

  useGSAP(() => {
    function getTextLeftValue() {
      return textRef.current
        ? -textRef.current?.offsetWidth +
            window.innerWidth -
            (window.innerWidth < 768 ? 8 : 16) * // don't know why this is needed but it works ¯\_(ツ)_/¯
              parseFloat(getComputedStyle(document.documentElement).fontSize)
        : 0;
    }
    if (textRef.current) {
      setTextLeftValue(getTextLeftValue());

      window.addEventListener("resize", () => {
        setTextLeftValue(getTextLeftValue());
        ScrollTrigger.refresh();
      });

      gsap.fromTo(
        textRef.current,
        {
          x: 0,
        },
        {
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "bottom 15%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
          x: textLeftValue,
          duration: 2,
          ease: "power2.inOut",
        }
      );

      gsap.fromTo(
        textRef.current.children,
        {
          y: "50%",
          opacity: 0,
          willChange: "transform opacity",
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: textRef.current,
            toggleActions: "play none none reverse",
            scrub: 1,
            start: "top 90%",
            end: "bottom 40%",
          },
        }
      );
    }
  }, [textRef, textLeftValue]);

  return (
    <>
      <div className="bg-black w-screen overflow-hidden absolute left-0 text-white p-8 md:p-16">
        <div className="w-fit">
          <div
            ref={textRef}
            className="text-4xl md:text-6xl xl:text-8xl whitespace-nowrap flex items-center gap-4"
          >
            <Image
              ref={imgRef}
              src={"/star.svg"}
              width={40}
              height={40}
              alt="star"
              className="invert aspect-square w-10 md:w-16 xl:w-24"
            />
            <span>I</span> <span>know</span> <span>a</span> <span>thing</span>{" "}
            <span>or</span> <span>two</span> <span>about</span>{" "}
            <span className="bg-blue-300 text-black p-2 rounded-xl">
              Web Dev
            </span>{" "}
            <span>and</span>{" "}
            <span className="bg-amber-300 text-black p-2 rounded-xl">
              design.
            </span>
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="p-8 md:p-16 w-full text-4xl md:text-6xl xl:text-8xl"
      >
        <p className="p-2">Hi there</p>
      </div>
      {/* Just to fill the space */}
    </>
  );
}

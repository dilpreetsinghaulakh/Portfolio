"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useState } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        "#background",
        {
          opacity: 0,
          willChange: "opacity",
        },
        {
          opacity: 1,
          duration: 1.5,
        }
      );

      gsap.utils.toArray("#anim-appear-top").forEach((element: any, index) => {
        gsap.fromTo(
          element,
          {
            y: "50%",
            opacity: 0,
            willChange: "transform opacity",
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 1 + index * 0.5,
          }
        );
      });

      gsap.fromTo(
        "#anim-appear",
        {
          opacity: 0,
          willChange: "opacity",
        },
        {
          opacity: 1,
          duration: 1,
          delay: 2,
          stagger: 0.2,
        }
      );
    }
  }, [isVisible]);

  const Background = () => {
    return isVisible ? (
      <>
        {/* Desktop Background */}
        <svg
          className="w-full h-full overflow-visible hidden xl:block max-w-7xl"
          id="background"
          viewBox="0 0 1512 958"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_205_6)">
            <path
              d="M110.5 842L1 958H428L321 831L299.5 735L321 606.5L291.5 529.5L236 512L254.5 575.5L168 735L110.5 842Z"
              fill="#FFE920"
            />
            <path
              d="M322 840L272.5 957.5H455L430 885V815L479.5 803L526 744H391.5V669.5L455 603H391.5L354.5 642L241.5 654.5L229 733L322 840Z"
              fill="#FF5E3B"
            />
            <path
              d="M367 781.5L432 959.5H665.5L594.5 849.5L684 803V710L540.5 631.5L684 565L764.5 489L522 526L443 507.5L460 565L367 781.5Z"
              fill="#35F4F4"
            />
            <path
              d="M566 837.5L665 960H1035V932L867.5 807L1001 692.5V582.5L895.5 497.5L770.5 460L721 482L762.5 523.5L566 593.5L646.5 768L566 837.5Z"
              fill="#B924FF"
            />
            <path
              d="M961 723L1053.5 955.5H1386.5L1346 816L1401.5 701.5L1477.5 574.5L1323 527L1230 454L1053.5 500.5L961 723Z"
              fill="#00F0FF"
            />
            <path
              d="M720 957.5H548.5L468 737.5L548.5 611L720 703.5L636.5 833.5L720 957.5Z"
              fill="#FF0000"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_205_6"
              x="-453"
              y="0"
              width="2384.5"
              height="1414"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="auto"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="227"
                result="effect1_foregroundBlur_205_6"
              />
            </filter>
          </defs>
        </svg>

        {/* Mobile Background */}
        <svg
          className="w-full h-full overflow-visible xl:hidden max-w-2xl max-h-screen"
          id="background"
          viewBox="0 0 393 849"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_246_43)">
            <path
              d="M-76 774.5L-9 848.5H78.5L84.5 820L70 739.5V682.5L40 656L2 588L-16 656L-76 774.5Z"
              fill="#F7DF1E"
            />
            <path
              d="M50.2944 795.017L58.9894 849H148.706V821.639V758.042L107.207 701.471L174 643.79L127.759 556.16L79.5411 497L25 585.37L38.0424 643.79L66.4987 729.571L50.2944 795.017Z"
              fill="#EF652A"
            />
            <path
              d="M158 661.472V848H324V781.889L271.144 661.472L324 598.903V424.181L243.065 338L158 512.722V661.472Z"
              fill="#B924FF"
            />
            <path
              d="M113 694.191L140.945 849H189.928L197.464 793.733L189.928 716.8L205 630.132L197.464 576.749L173.915 551L152.563 566.073L113 694.191Z"
              fill="#FF0000"
            />
            <path
              d="M421 849H262L330 651.293L241 478.16L289 383.216L384 300L455 315.079L421 451.91L496 674.191L421 849Z"
              fill="#61DAFB"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_246_43"
              x="-376"
              y="0"
              width="1172"
              height="1149"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="auto"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_246_43"
              />
            </filter>
          </defs>
        </svg>
      </>
    ) : null;
  }; // Returns SVGs for Desktop and Mobile Background with predefined classes

  const Heading = () => {
    return (
      <div className="text-lg font-bold flex flex-col gap-4">
        <h3 id="anim-appear-top" className="text-secondary-100">
          Hey, I'm
        </h3>
        <h1 id="anim-appear-top" className="text-6xl xl:text-8xl">
          Dilpreet Singh
        </h1>
        <p className="text-secondary-200">
          <p id="anim-appear" className="inline">
            a{" "}
          </p>
          <span
            id="anim-appear"
            className="text-4xl text-white ml-2 inline-block"
          >
            Web Dev
          </span>
          <span id="anim-appear" className="text-3xl mx-2">
            +
          </span>
          <span id="anim-appear" className="text-4xl text-white">
            Student
          </span>
        </p>
      </div>
    );
  };

  const Subheading = () => {
    return (
      <p id="anim-appear" className="text-secondary-100 xl:text-lg">
        An undergraduate student passionate about web development and UI/UX
        design, eager to create something extraordinary.
      </p>
    );
  };

  const Text = () => {
    return isVisible ? (
      <>
        <Heading />
        <Subheading />
      </>
    ) : null;
  }; // Returns Heading and Subheading with predefined classes

  return (
    <section className="h-[calc(100vh-6rem)] xl:h-[calc(100vh-9rem)] flex items-center ">
      <div className="absolute -z-10 bottom-0 left-0 w-screen flex justify-center overflow-hidden">
        <Background />
      </div>
      <div className="flex flex-col gap-8 xl:-mt-20">
        <Text />
      </div>
    </section>
  );
}

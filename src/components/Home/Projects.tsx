"use client";
import React, { useRef, useEffect, useState } from "react";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyParentRef = useRef<HTMLDivElement>(null);
  const stickyChildRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const horizontalWidth = 500; // width of the sticky child

  function calculateOffset() {
    const parentTopOffset = stickyParentRef.current?.offsetTop || 0;
    const parentHeight = containerRef.current?.offsetHeight || 0;
    const offsetFactor = parentTopOffset / parentHeight;

    const calculatedOffset =
      offsetFactor * (stickyChildRef.current?.offsetWidth || 0);

    return calculatedOffset;
  } // calculate the offset of the sticky child

  useEffect(() => {
    window.addEventListener("load", () => {
      setScrollOffset(calculateOffset());
    }); // initial load if the page is already scrolled

    window.addEventListener("scroll", () => {
      setScrollOffset(calculateOffset());
    }); // on scroll
  }, []);

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
            className="h-full w-[500vw] flex items-center justify-around relative text-8xl"
          >
            <p>one</p>
            <p>two</p>
            <p>three</p>
            <p>four</p>
            <p>five</p>
            {/* Just example elements */}
          </div>
        </div>
      </div>
      <div style={{ height: `${horizontalWidth}vh` }}></div>

      <p className="mb-[100vh]">Hello</p>
    </section>
  );
}

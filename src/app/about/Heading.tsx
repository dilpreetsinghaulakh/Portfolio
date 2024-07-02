import { useEffect, useRef } from "react";

export default function Heading({ aboutWho }: { aboutWho: string }) {
    const aboutWhoTextRef = useRef<HTMLParagraphElement>(null);
    const isInitialMount = useRef(true);
  
    useEffect(() => {
      if (isInitialMount.current) {
        // Skip the first render
        isInitialMount.current = false;
        console.log("Initial render");
        return;
      } else if (aboutWhoTextRef.current) {
        aboutWhoTextRef.current.style.filter = "blur(1px)";
  
        setTimeout(() => {
          aboutWhoTextRef.current
            ? (aboutWhoTextRef.current.style.filter = "none")
            : null;
        }, 150);
      }
    }, [aboutWho]);
  
    return (
      <h1 className="text-3xl font-light flex flex-wrap gap-4 max-w-full items-center justify-center">
        About{" "}
        <span
          className={
            " py-1 px-4 rounded-lg block whitespace-nowrap overflow-hidden transition-all " +
            (aboutWho == "Me"
              ? "bg-amber-300 text-amber-950"
              : "bg-emerald-300 text-emerald-950")
          }
          style={{
            width: `calc(${aboutWho == "Me" ? "43.7" : "170.2"}px + 2rem)`, // 43.7px or 170.2px
            // NOTE: This is a hacky way to animate the width of the span element
            // This is hardcoded and should be avoided but it's a quick way to animate the width
            // There are only two values so it's not a big deal but it's not a good practice
          }}
        >
          <p ref={aboutWhoTextRef}>{aboutWho}</p>
        </span>
      </h1>
    );
  }
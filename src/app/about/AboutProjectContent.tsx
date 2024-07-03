import { useRef } from "react";
import { ArrowUpRight, Clipboard } from "react-feather";

export default function AboutProjectContent() {
  const copiedAlertRef = useRef<HTMLDivElement>(null);

  // Don't Look 🫠
  function handleCopyToClipboard(color: string) {
    navigator.clipboard.writeText(color);
    if (copiedAlertRef.current) {
      copiedAlertRef.current.classList.remove("hidden");
      copiedAlertRef.current.classList.add("flex");
      setTimeout(() => {
        copiedAlertRef.current!.classList.remove("opacity-0");
        copiedAlertRef.current!.classList.add("opacity-100");
      }, 1);
      setTimeout(() => {
        copiedAlertRef.current!.classList.remove("opacity-100");
        copiedAlertRef.current!.classList.add("opacity-0");
      }, 1500);
      setTimeout(() => {
        copiedAlertRef.current!.classList.add("hidden");
        copiedAlertRef.current!.classList.remove("flex");
      }, 1700);
    }
  } // This function is used to copy the color code to the clipboard and show a copied alert

  return (
    <div className="flex flex-col gap-12 mt-4 text-lg text-secondary-100">
      <div>
        <p>
          This project is a personal portfolio website built using Next.js,
          Tailwind CSS, and TypeScript. It is a static site hosted on Vercel.
          <br /> The project is open source and available on{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/5 w-fit px-2 py-1 rounded-lg hover:bg-white/5"
          >
            GitHub
            <ArrowUpRight className="inline w-5 mb-1 " />
          </a>
          . Feel free to check out the source code and suggest improvements or
          learn something new.
        </p>
        <p className="mt-6">
          This is a blank canvas for me to experiment with new technologies and
          design styles. I have kept the design fairly unique but not too out
          world. But I will keep on updating it with new features and design
          styles.
        </p>
      </div>
      <div>
        <h1 className="text-4xl font-thin text-secondary-200 mb-2">Documentation</h1>
        <h2 className="text-3xl font-light text-secondary-100 mb-2">Basics</h2>
        <div>
          <h3 className="text-xl mb-2">External Resources</h3>
          <p>
            <span className="font-bold text-secondary-200">Font </span>
            <a
              href="https://fonts.google.com/specimen/Space+Grotesk"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Space Grotesk
            </a>
            (Yup, only one font, Google Fonts)
          </p>
          <p>
            <span className="font-bold text-secondary-200">Icons </span>
            <a
              href="https://feathericons.com/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feather Icons
            </a>
          </p>
          <p>
            <span className="font-bold text-secondary-200">Contact Form </span>
            <a
              href="https://formspree.io/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formspree
            </a>
          </p>
        </div>
        {/* This section contains the basic information about the project */}
        <div>
          <h3 className="text-xl mt-4 mb-2">Colors</h3>
          <div className="flex">
            <div className="flex gap-4">
              <button
                className="flex flex-col gap-2 items-center"
                onClick={() => handleCopyToClipboard("#D1D5E7")}
              >
                <div className="h-8 w-8 xl:h-10 xl:w-10 rounded-full ring ring-secondary-100/40 bg-secondary-100" />
                <p className="text-xs">#D1D5E7</p>
              </button>
              <button
                className="flex flex-col gap-2 items-center"
                onClick={() => handleCopyToClipboard("#D4DDFF")}
              >
                <div className="h-8 w-8 xl:h-10 xl:w-10 rounded-full ring ring-secondary-200/40 bg-secondary-200" />
                <p className="text-xs">#D4DDFF</p>
              </button>
              <button
                className="flex flex-col gap-2 items-center"
                onClick={() => handleCopyToClipboard("#262F58")}
              >
                <div className="h-8 w-8 xl:h-10 xl:w-10 rounded-full ring ring-tertiary/40 bg-tertiary" />
                <p className="text-xs">#262F58</p>
              </button>
              <button
                className="flex flex-col gap-2 items-center"
                onClick={() => handleCopyToClipboard("#04081A")}
              >
                <div className="h-8 w-8 xl:h-10 xl:w-10 rounded-full ring ring-tertiary/50 border-2 border-tertiary bg-background" />
                <p className="text-xs">#04081A</p>
              </button>
              <div
                ref={copiedAlertRef}
                className="hidden opacity-0 absolute left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black text-sm items-center gap-2 p-2 rounded transition-all duration-300"
              >
                <Clipboard className="w-4 h-4" /> Copied to clipboard
              </div>
            </div>
          </div>
          <p className="mt-1">
            and other colors are the default ones in Tailwind CSS.
          </p>
        </div>
        {/* This section contains the color codes used in the project */}
        <div>
          <h2 className="text-xl mt-4 mb-2">Technologies</h2>
          <ul className="list-disc list-inside">
            <li>NextJS</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
          </ul>
        </div>
        {/* This section contains the technologies used in the project */}
      </div>
    </div>
  );
}

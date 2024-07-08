"use client";
import CodeSnippet from "@/components/common/CodeBlock";
import SmallCodeSnippet from "@/components/common/SmallCodeBlock";
import Image from "next/image";
import { useRef } from "react";
import { Clipboard } from "react-feather";

function ImageWithCaption({
  src,
  height,
  width,
  caption,
}: {
  src: string;
  height: number;
  width: number;
  caption: string;
}) {
  return (
    <>
      <Image
        className="rounded-lg xl:rounded-xl w-full"
        src={src}
        width={width}
        height={height}
        alt={caption}
      />
      <p className="text-sm text-center mt-1">{caption}</p>
    </>
  );
}

export default function Documentation() {
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

  function ExternalResources() {
    return (
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
    );
  }

  function Colors() {
    return (
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
              className="hidden opacity-0 absolute left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-opposite text-sm items-center gap-2 p-2 rounded transition-all duration-300"
            >
              <Clipboard className="w-4 h-4" /> Copied to clipboard
            </div>
          </div>
        </div>
        <p className="mt-1">
          and other colors are the default ones in Tailwind CSS.
        </p>
      </div>
    );
  }

  function Technologies() {
    return (
      <div>
        <h2 className="text-xl mt-4 mb-2">Technologies</h2>
        <ul className="list-disc list-inside">
          <li>NextJS</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
        </ul>
      </div>
    );
  }

  function Header() {
    return (
      <div>
        <h3 className="text-2xl mb-2">Header</h3>
        <ImageWithCaption
          src="/Documentation/header.svg"
          height={156}
          width={1512}
          caption="Header Component representation"
        />
        <p>Structure</p>
        <CodeSnippet code={headerCodeStructure} language="tsx" lineNumbers />
        <p className="mt-2">
          The header contains two elements visible only on desktop: the URL path
          indicator and the city. The URL path indicator is not displayed on the
          home page. A menu button is used to open the overlay.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li> The logo serves as a link to the home page.</li>
          <li>
            The overlay, managed by the OverlayControl component, handles
            opening and closing actions.
          </li>
          <li> This overlay includes the menu items and a close button.</li>
          <li> Menu items are links to their respective pages.</li>
          <li>
            By default, the overlay is hidden and becomes visible when the menu
            button is clicked.
          </li>
          <li>
            The overlay is a separate component, imported and integrated within
            the header.
          </li>
        </ul>
      </div>
    );
  }

  function Footer() {
    return (
      <div>
        <h3 className="text-2xl mb-2 mt-4">Footer</h3>
        <ImageWithCaption
          src="/Documentation/footer.svg"
          height={156}
          width={1512}
          caption="Footer Component representation"
        />
        <p>Structure</p>
        <CodeSnippet code={footerCodeStructure} language="tsx" lineNumbers />
        <p className="mt-2">
          The footer is a very simple component with a body rounded effect and
          two paragraphs. The first paragraph displays the copyright with
          dynamic year and the second paragraph displays just the name.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            The dynamic year is achieved by new{" "}
            <SmallCodeSnippet code="Date().getFullYear()" language="JS" />{" "}
            method
          </li>
          <li>
            There is a div placed above the footer absolutely to give a body
            rounded effect to the footer.
          </li>
          <li>
            The name is styled with a gradient text effect using the
            <SmallCodeSnippet
              code="bg-clip-text text-transparent bg-gradient-to-b from-primary/80 to-primary/20"
              language="HTML"
            />{" "}
            classes.
          </li>
          <li>
            The name is also placed absolutely at the bottom of the footer.
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-thin text-secondary-200 mb-2">
        Documentation
      </h1>
      <h2 className="text-3xl font-light text-secondary-100 mb-2">Basics</h2>
      <ExternalResources />
      <Colors />
      <Technologies />

      <h2 className="text-3xl font-light text-secondary-100 mt-6 mb-2">
        Common Components
      </h2>
      <Header />
      <Footer />
    </div>
  );
}

const headerCodeStructure = `
import ...

function MenuContent({...}) {...}

function OverlayControl({...}) {...}

export default function Header() {
  return (
    <header >
      <div>
        <a> <Logo /> </a>

        { /* Show the current page name except home */}
        { /* Shows only on desktop */ }
        {usePathname() !== "/" ? (
          <h1> {usePathname()} </h1>
        ) : null}
      </div>
     
      <div>
        { /* Shows only on desktop */ }
        <div>
          <p>City</p>
        </div>

        <button onClick={...} >
            <MenuIcon />
            <p>Menu</p>
        </button>
      </div>
      <OverlayControl {...} />
    </header>
  );
}
`;

const footerCodeStructure = `
export default function Footer() {
  return (
    <>
      <footer>
        <div></div> { /* Body rounded effect */ }
        <p>© ...</p>
        <p>...</p>
      </footer>
    </>
  );
}
`;

"use client";
import { use, useEffect, useRef, useState } from "react";
import Logo from "../../../public/logo.svg";
import Overlay from "./Overlay";
import { X } from "react-feather";
import { usePathname } from "next/navigation";

function MenuContent({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (value: boolean) => void;
}) {
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      content.current?.classList.remove("h-0");
      content.current?.classList.add("h-full");
    }, 1);
  }, []);

  function Link({
    href,
    delay,
    children,
  }: {
    href: string;
    delay: number;
    children: string;
  }) {
    const linkRef = useRef<HTMLAnchorElement>(null);

    setTimeout(() => {
      linkRef.current?.classList.remove("opacity-0");
    }, 100 + delay);
    return (
      <a
        ref={linkRef}
        href={href}
        className="text-6xl opacity-0 transition-opacity duration-700"
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      ref={content}
      className="flex flex-col items-center justify-center gap-8 bg-black w-full h-0 transition-all duration-700"
    >
      <button
        className="absolute top-0 right-0 flex items-center justify-center gap-2 h-24 xl:h-36 px-8 xl:px-20 border-b border-l bg-black border-neutral-700 font-bold text-2xl"
        onClick={() => {
          content.current?.classList.remove("h-full");
          content.current?.classList.add("opacity-0");
          content.current?.classList.add("h-0");
          content.current?.classList.add("overflow-hidden");
          setTimeout(() => {
            setIsMenuOpen(false);
          }, 700);
        }}
      >
        <X className="w-8 h-8 xl:w-14 xl:h-12 stroke-[1.5px]" />
        Close
      </button>
      <Link href="/" delay={0}>
        Home
      </Link>
      <Link href="/contact" delay={300}>
        Contact
      </Link>
    </div>
  );
}

function OverlayControl({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) {
  return (
    <Overlay isOpen={isMenuOpen}>
      <MenuContent setIsMenuOpen={setIsMenuOpen} />
    </Overlay>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuIcon = (
    <svg className="w-8 h-8 xl:w-12 xl:h-12" viewBox="0 0 50 50">
      <line
        x1="5"
        y1="15.5"
        x2="45"
        y2="15.5"
        stroke="currentcolor"
        strokeWidth="3"
      />
      <line
        x1="5"
        y1="31.5"
        x2="45"
        y2="31.5"
        stroke="currentcolor"
        strokeWidth="3"
      />
    </svg>
  );
  return (
    <>
      <header className="border-b border-tertiary w-full h-24 xl:h-36 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="/"
            aria-label="Home page link"
            className="w-14 h-14 xl:w-20 xl:h-20 ml-8 xl:ml-14 block text-secondary-100"
          >
            <Logo />
          </a>
          {usePathname() !== "/" ? (
            <h1 className="hidden sm:block text-lg font-light text-primary-100 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              {usePathname()}
            </h1>
          ) : null}
        </div>

        <div className="flex justify-end h-full font-bold text-xl xl:text-2xl">
          <div className="hidden h-full xl:flex items-center space-x-4 px-20 border-l border-tertiary">
            <p>Amritsar, IN</p>
          </div>

          <button
            className="h-full flex items-center space-x-4 px-8 xl:px-20 border-l border-tertiary"
            onClick={() => {
              setIsMenuOpen(true);
            }}
          >
            {MenuIcon}
            <p>Menu</p>
          </button>
        </div>
        <OverlayControl isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>
    </>
  );
}

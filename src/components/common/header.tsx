"use client";
import Logo from "../../../public/logo.svg";

export default function Header() {
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
      <header className="border-b border-tirtiaty w-full h-24 xl:h-36 flex items-center justify-between">
        <a
          href="/"
          className="w-14 h-14 xl:w-20 xl:h-20 ml-8 xl:ml-14 block text-secondary-100"
        >
          <Logo />
        </a>

        <div className="flex justify-end h-full font-bold text-xl xl:text-2xl">
          <div className="hidden h-full xl:flex items-center space-x-4 px-20 border-l border-tirtiaty">
            <p>Amritsar, IN</p>
          </div>

          <button
            className="h-full flex items-center space-x-4 px-8 xl:px-20 border-l border-tirtiaty"
            onClick={() => {
              // Open the menu
            }}
          >
            {MenuIcon}
            <p>Menu</p>
          </button>
        </div>
      </header>
    </>
  );
}

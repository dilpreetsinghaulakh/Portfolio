import { Globe, User } from "react-feather";

export default function ToggleButton({
  aboutWho,
  setAboutWho,
}: {
  aboutWho: string;
  setAboutWho: Function;
}) {
  const toggleButtonCommonClasses =
    "w-12 h-12 p-2 xl:w-14 xl:h-14 xl:p-4 rounded-full flex items-center justify-center transition-colors duration-200 ";

  return (
    <button
      aria-label="Toggle between 'Me' and 'This Project'"
      onClick={() => {
        setAboutWho(aboutWho === "Me" ? "This Project" : "Me");
      }}
      className="p-4 border border-tertiary rounded-full flex gap-4 items-center text-sm xl:text-base"
    >
      <div
        className={
          toggleButtonCommonClasses +
          (aboutWho === "Me"
            ? "bg-amber-300 text-amber-900"
            : "bg-amber-100 text-amber-500")
        }
      >
        <User />
      </div>
      <div className="w-[2px] h-8 xl:h-10 rounded-full bg-tertiary"></div>{" "}
      {/* Divider */}
      <div
        className={
          toggleButtonCommonClasses +
          (aboutWho === "This Project"
            ? "bg-emerald-300 text-emerald-900"
            : "bg-emerald-100 text-emerald-500")
        }
      >
        <Globe />
      </div>
    </button>
  );
}

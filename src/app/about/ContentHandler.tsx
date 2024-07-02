import AboutMeContent from "./AboutMeContent";
import AboutProjectContent from "./AboutProjectContent";

export default function Content({ aboutWho }: { aboutWho: string }) {
  return (
    <div className="flex flex-col gap-4 items-center min-h-[50vh] transition-all duration-300">
      {aboutWho === "Me" ? <AboutMeContent /> : <AboutProjectContent />}
    </div>
  );
}

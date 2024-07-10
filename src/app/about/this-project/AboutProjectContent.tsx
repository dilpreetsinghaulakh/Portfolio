import { ArrowUpRight } from "react-feather";

export default function AboutProjectContent() {
  return (
    <div className="flex flex-col justify-center gap-12 mt-4 text-secondary-100 min-h-[40vh]">
      <div className="text-lg">
        <p>
          This project is a personal portfolio website built using Next.js,
          Tailwind CSS, and TypeScript. It is a static site hosted on Vercel.
          <br /> The project is open source and available on{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/5 w-fit px-2 py-1 rounded-lg hover:bg-primary/5"
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
    </div>
  );
}

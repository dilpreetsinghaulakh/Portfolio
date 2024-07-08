import { Download } from "react-feather";

export default function AboutMeContent() {
  return (
    <div className="flex flex-col gap-12 mt-4 text-lg text-secondary-100">
      <p>
        I am currently pursuing a{" "}
        <span className="text-lime-400">Bachelor's</span> degree in Technology
        with a passion for coding and continuous learning. My journey in
        programming began as a self-taught developer, where I have{" "}
        <span className="text-indigo-300">independently </span>
        acquired skills in web development and iOS development. My curiosity
        drives me to explore new technologies and enhance my expertise in
        creating dynamic and responsive web applications.
      </p>
      <p>
        I am meticulous about the{" "}
        <span className="text-amber-400">small details </span>in my projects,
        always striving to elevate both design and functionality. For example, I
        paid close attention to the toggle on this page, refining its design and
        functionality to include a smooth transition and a subtle blur effect on
        the “about who?” section. My goal is to create{" "}
        <span className="text-teal-400">unique and distinct </span>
        solutions that stand out from the ordinary, consistently pushing the
        boundaries to make every project not only better but also more visually
        appealing and user-friendly.
      </p>

      <a
        href="https://drive.google.com/file/d/1SlFyDWMCtnfKcYG-WobBlo39wVB6US-O/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="flex gap-2 items-center border border-primary/5 w-fit p-2 rounded-lg hover:bg-primary/5"
      >
        <Download /> Resume
      </a>
    </div>
  );
}

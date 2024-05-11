import Form from "@/components/form";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | D Singh</title>
        <meta
          name="Home page of the portfolio"
          content="This is my portfolio and blog page. I am D Singh and I am stuff out of Ordinary"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className=" mx-[calc(5vw+2rem)]">
        <div className="max-w-5xl mx-auto pt-[4.5rem]">
          <div className="h-[80vh] flex justify-center flex-col">
            <p className="font-light text-lg font-jetBrain">
              Hey, I'm Dilpreet Singh
            </p>
            <h1 className="font-lexendDeca text-9xl max-sm:text-6xl">
              Creating out of{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-500 via-purple-500 bg-[length:300%_auto] bg-clip-text text-transparent animation-gradient">
                Ordinary
              </span>
            </h1>
          </div>
          <h1 className="text-4xl font-semibold m-8">Projects</h1>
          <div className="border border-black/20 bg-white rounded-xl p-4 mb-16">
            <Image
              src="/todo_screenshot.png"
              width={1920}
              height={1080}
              alt=" "
            />
            <h3 className="text-2xl font-semibold mt-4">
              Todo Dump | A Simple Todo app
            </h3>
            <p className=" text-base font-jetBrain text-neutral-600 font-light mt-2">
              A simple todo app built with plane JavaScript and Tailwind CSS. It
              uses local storage to store the todos. I took inspiration from
              various sources and built this UI from scratch. It is a simple app
              with a simple yet elegant UI.
            </p>
            <span className="flex gap-4">
              <a
                href="https://tododump.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline mt-2"
              >
                Live
              </a>
              <a
                href="https://github.com/dilpreetsinghaulakh/todo-list"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline mt-2"
              >
                Github
              </a>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

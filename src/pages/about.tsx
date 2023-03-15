import Form from "@/components/form";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | D Singh</title>
        <meta
          name="About me"
          content="This page contains information about me. I am D Singh and I am stuff out of Ordinary"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className=" mx-[calc(5vw+2rem)] ">
        <div className="max-w-5xl mx-auto pt-[4.5rem]">
          <h1 className="font-bold text-8xl mb-6 bg-gradient-to-r from-orange-500 to-orange-500 via-amber-500  bg-[length:300%_auto] bg-clip-text text-transparent animation-gradient">
            About
          </h1>
          <div className="br"></div>
          <div className="h-[80vh] flex items-center">
            <p className="font-jetBrain text-xl text-center mb-4 w-full">
              I am Dilpreet Singh and just developing cool projects.
              <br /> That's it!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

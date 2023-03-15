import Form from "@/components/form";
import Head from "next/head";

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
            <p className="font-light text-lg font-jetBrain">Hey, I'm D Singh</p>
            <h1 className="font-lexendDeca text-9xl max-sm:text-6xl">
              Creating out of{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-500 via-purple-500 bg-[length:300%_auto] bg-clip-text text-transparent animation-gradient">
                Ordinary
              </span>
            </h1>
          </div>
          <div className="border border-black bg-gradient-to-r from-slate-300 to-slate-300 via-slate-100 bg-[length:300%_auto] animation-gradient rounded-2xl py-4 px-6 mb-16">
            <h1 className="text-4xl sm:text-6xl mb-4">Project comming soon</h1>
            <p className="font-jetBrain sm:text-xl">Other projects are still under development and not yet deployed. So you may want to come back soon to check them out. Anyways you can check some those on my github.</p>
          </div>
        </div>
      </main>
    </>
  );
}

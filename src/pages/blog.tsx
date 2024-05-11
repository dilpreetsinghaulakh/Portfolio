import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blogs | D Singh</title>
        <meta
          name="Blogs"
          content="This is blog page. I am D Singh and I am stuff out of Ordinary"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className=" mx-[calc(5vw+2rem)] ">
        <div className="max-w-5xl mx-auto pt-[4.5rem]">
          <h1 className="pb-6 font-bold text-8xl  bg-gradient-to-r from-green-500  to-green-500 via-lime-500 bg-[length:300%_auto] bg-clip-text text-transparent animation-gradient">
            Blog
          </h1>
          <div className="br"></div>
          <div className="border mt-24 border-black bg-gradient-to-r from-zinc-300 to-zinc-300 via-zinc-100 bg-[length:300%_auto] animation-gradient rounded-2xl py-4 px-6 mb-16">
            <h1 className="text-4xl sm:text-6xl mb-4">Blogs comming soon</h1>
            <p className="font-jetBrain sm:text-xl">
              Blogs on this site are still under development and not yet
              deployed. So you may want to come back soon to check them out.
              Anyways you can see old ones on the previous site.
            </p>
          </div>
          <div className="flex my-32">
            <a target="_blank" className="bg-green-500 hover:scale-110 border border-black flex items-center justify-center font-jetBrain font-bold w-2/3 text-center py-3 rounded-xl text-xl mx-auto" href="https://old-dsingh.vercel.app/blog"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" mr-4 feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg> Old Blogs</a>
          </div>
        </div>
      </main>
    </>
  );
}

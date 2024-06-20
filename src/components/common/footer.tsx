export default function Footer() {
  return (
    <>
      <footer className="mt-6 w-[90%]  mx-[5vw] px-8 rounded-2xl mb-4 bg-slate-900 px text-white">
        <div className="mx-auto max-w-5xl py-3 flex">
          <div className="my-auto w-1/2 sm:p-8 pl-0">
            <object
              title="ds. Logo"
              data="/logo.svg"
              className="invert select-none w-full sm:max-h-[40vh] aspect-square"
            ></object>
          </div>
          <div className="w-full h-auto">
            <div className="h-3/4 grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none">
              <div className="w-full flex justify-end content-center h-full">
                <a
                  href="/contact"
                  className=" my-auto h-fit border-[#f2eee9] bg-gradient-to-r from-[#e3ffe7] to-[#e3ffe7] via-[#d9e7ff] text-black bg-[length:300%_auto] animation-gradient border hover:scale-110 transition-transform  px-6 py-2 text-xl rounded-2xl"
                >
                  Contact
                </a>
              </div>
              <div className=" w-full font-light h-full text-2xl flex flex-col justify-center gap-2 items-end ">
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
              </div>
            </div>
            <h3 className="h-1/4 text-right font-jetBrain text-slate-400 font-light  w-full m-0 p-0 left-0 pb-4 invisible sm:visible">
              2024 Dilpreet Singh
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}

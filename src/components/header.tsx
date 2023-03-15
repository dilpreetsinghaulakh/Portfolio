export default function Header() {
  return (
    <>
      <header className=" z-10 fixed text-2xl w-[90vw] mx-[5vw] mt-3 px-8 rounded-2xl outline-black outline-[1px] outline backdrop-blur-2xl backdrop-opacity-[98%]">
        <div className="flex justify-between max-w-5xl py-3 mx-auto">
          <div>
            <a href="/" className=" font-bold">ds.</a>
          </div>
          <div className="r font-light text-[.75em]">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
          </div>
        </div>
      </header>
    </>
  );
}

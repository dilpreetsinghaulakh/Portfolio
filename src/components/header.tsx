export default function Header() {
  return (
    <>
      <header className="bg-white/70 z-10 fixed text-2xl w-[90vw] mx-[5vw] mt-3 px-8 rounded-2xl outline-black bg- outline-[1px] outline backdrop-blur-sm">
        <div className="flex justify-between max-w-5xl py-3 mx-auto">
          <div>
            <a href="/" className=" font-bold">ds.</a>
          </div>
          <div className="r font-light text-[.75em]">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-blue-400 relative flex flex-col items-center text-black overflow-hidden">
        <div className="w-full absolute top-0 bg-background h-12 rounded-b-3xl"></div>
        <p className="mt-20 mb-[calc(8vw+1rem)] max-w-6xl text-center text-sm font-light z-10">
          © {new Date().getFullYear()} Dilpreet Singh. All rights reserved.
        </p>

        <p
          className="absolute -bottom-[8vw] text-[14.5vw] select-none font-black bg-clip-text text-transparent bg-gradient-to-b from-white/80 to-white/20"
          style={{ WebkitTextStroke: "1px #ffffff" }}
        >
          Dilpreet Singh
        </p>
      </footer>
    </>
  );
}

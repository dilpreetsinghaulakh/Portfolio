"use client";

import Head from "next/head";
import { useState } from "react";
import { Globe, User } from "react-feather";

const ToggleButton = ({
  aboutWho,
  setAboutWho,
}: {
  aboutWho: string;
  setAboutWho: Function;
}) => {
  const toggleButtonCommonClasses =
    "w-12 h-12 p-2 xl:w-14 xl:h-14 xl:p-4 rounded-full flex items-center justify-center ring-white transition-all ";

  return (
    <button
      onClick={() => {
        setAboutWho(aboutWho === "Me" ? "This Project" : "Me");
      }}
      className="p-4 border border-tertiary rounded-full flex gap-4 items-center text-sm xl:text-base"
    >
      <div
        className={
          toggleButtonCommonClasses +
          "bg-amber-300 text-amber-900 border-amber-900 " +
          (aboutWho === "Me" ? "ring" : "ring-0")
        }
      >
        <User />
      </div>
      <div className="w-[2px] h-8 rounded-full bg-tertiary"></div>

      <div
        className={
          toggleButtonCommonClasses +
          "bg-emerald-300 text-emerald-900 border-emerald-900 " +
          (aboutWho === "This Project" ? "ring" : "ring-0")
        }
      >
        <Globe />
      </div>
    </button>
  );
};

export default function About() {
  const [aboutWho, setAboutWho] = useState("Me"); // Me or This Project

  return (
    <>
      <Head>
        <title>About {aboutWho} | Dilpreet Singh</title>
        <meta name="description" content={`About ${aboutWho}`} />
      </Head>
      <main className="flex flex-col gap-8 items-center min-h-[calc(100vh-6rem)] xl:min-h-[calc(100vh-9rem)] py-8">
        <ToggleButton aboutWho={aboutWho} setAboutWho={setAboutWho} />
        <h1 className="text-3xl font-light">About {aboutWho}</h1>
      </main>
    </>
  );
}

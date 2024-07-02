"use client";
import Head from "next/head";
import { useState } from "react";
import ToggleButton from "./ToggleBtn";
import Heading from "./Heading";

export default function About() {
  const [aboutWho, setAboutWho] = useState("Me"); // Me or This Project

  return (
    <>
      <Head>
        <title>About {aboutWho} | Dilpreet Singh</title>
        <meta name="description" content={`About ${aboutWho}`} />
      </Head>
      <main className="flex flex-col gap-8 items-center py-8">
        <ToggleButton aboutWho={aboutWho} setAboutWho={setAboutWho} />
        <Heading aboutWho={aboutWho} />
      </main>
    </>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JetBrains_Mono } from "next/font/google";
import { Lexend_Deca } from "next/font/google";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${lexendDeca.style.fontFamily};
        }
        .font-jetBrain {
          font-family: ${mono.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

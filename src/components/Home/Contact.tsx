"use client";
import { ArrowRight, GitHub, Linkedin, Mail } from "react-feather";

export default function Contact() {
  return (
    <section className="pt-16">
      <h1 className="text-4xl font-bold text-center mb-12">Get in touch</h1>
      <div className="flex flex-col items-center gap-6">
        <p className="text-lg max-w-4xl text-center">
          If you have any questions or would like to work together, feel free to
          send me a message!
        </p>
        <a
          href="/contact"
          className="px-8 p-4 bg-primary text-opposite font-semibold rounded-full flex items-center gap-1 hover:gap-4 active:gap-2 transition-all"
        >
          Contact Form <ArrowRight />
        </a>

        <div className="flex gap-4">
          <a
            href="mailto:dilpreetsinghaulakh@icloud.com"
            aria-label="Email"
            className="p-4 bg-primary/5 border border-primary/10 rounded-full hover:bg-primary/10 transition-all"
          >
            <Mail />
          </a>
          <a
            href="https://www.linkedin.com/in/dilpreetsinghaulakh/"
            target="_blank"
            aria-label="LinkedIn"
            className="p-4 bg-primary/5 border border-primary/10 rounded-full hover:bg-primary/10 transition-all"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/dilpreetsinghaulakh"
            target="_blank"
            aria-label="Github"
            className="p-4 bg-primary/5 border border-primary/10 rounded-full hover:bg-primary/10 transition-all"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </section>
  );
}

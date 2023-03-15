import Form from "@/components/form";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | D Singh</title>
        <meta
          name="Contact me"
          content="You can contact me here. I am D Singh and I am stuff out of Ordinary"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className=" mx-[calc(5vw+2rem)] ">
        <div className="max-w-5xl mx-auto pt-[4.5rem]">
          <h1 className="font-bold text-8xl mb-6 bg-gradient-to-r from-[#6b95e5] to-[#6b95e5] via-[#20bde8] bg-[length:300%_auto] bg-clip-text text-transparent animation-gradient">
            Contact
          </h1>
          <div className="br"></div>
          <p className="font-jetBrain text-lg mb-4">
            If you want to contact me, you can do it here using the "TypeForm"
            form.
          </p>
          <div className="h-[80vh]">
            <Form />
          </div>
        </div>
      </main>
    </>
  );
}

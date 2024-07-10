"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import ToggleButton from "./ToggleBtn";
import Heading from "./Heading";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [aboutWho, setAboutWho] = useState<string | null>(null);

  // Initialize state from URL on first render
  useEffect(() => {
    const who = pathname.split("/").pop();
    if (who === "this-project" || who === "me") {
      setAboutWho(who === "this-project" ? "This Project" : "Me");
    } else {
      router.replace("/about/me");
    }
  }, [pathname, router]);

  // Update URL when state changes
  useEffect(() => {
    if (aboutWho) {
      const expectedPath = `/about/${
        aboutWho === "This Project" ? "this-project" : "me"
      }`;
      if (pathname !== expectedPath) {
        router.push(expectedPath);
      }
    }
  }, [aboutWho, pathname, router]);

  if (!aboutWho) return null; // Prevent rendering until state is initialized

  return (
    <>
      <main className="flex flex-col gap-8 items-center py-8">
        <ToggleButton aboutWho={aboutWho} setAboutWho={setAboutWho} />
        <Heading aboutWho={aboutWho} />
        {children}
      </main>
    </>
  );
}

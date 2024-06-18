import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Dilpreet Singh",
  description: "Personal website of Dilpreet Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="w-main-content max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

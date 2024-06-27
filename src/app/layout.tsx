import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

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
        <Footer />
      </body>
    </html>
  );
}

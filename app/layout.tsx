import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kelvin Andak",
  description: "Aspiring frontend developer and tech enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased min-h-screen bg-linear-to-b from-black  to-blue-950 bg-no-repeat bg-cover`}
      >
        <NavBar />
        <main className="py-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

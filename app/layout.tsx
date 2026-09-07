import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "ManoCity",
  description:
    "Learn Python, build ManoBot and bring code to life through real-world robotics missions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0B1F3A] antialiased">

        {/* GLOBAL NAVIGATION */}
        <Navbar />

        {/* ALL PAGES */}
        {children}

      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./lib/Provider";
import Link from "next/link";

import { Header } from "./component/Header";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAS IT Solutions",
  description: "Quality Software Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Link rel="icon" href="/favicon.ico" />
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}

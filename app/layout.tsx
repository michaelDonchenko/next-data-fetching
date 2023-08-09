import Search from "@/components/Search";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{maxWidth: "900px", margin: "0 auto", padding: "15px 0"}}
      >
        <h1>Data fetching in Nextjs</h1>
        <Search />
        {children}
      </body>
    </html>
  );
}

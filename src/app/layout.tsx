import type { Metadata } from "next";
import "./globals.css";
import { syne } from './fonts'
import { dm_sans } from './fonts'
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dm_sans.variable}`} >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}

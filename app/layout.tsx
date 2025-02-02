import type { Metadata } from "next";
import { Rubik} from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rubiks = Rubik({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VividCraft",
  description: "VividCraft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${rubiks.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

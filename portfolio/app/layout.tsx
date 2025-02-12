import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Philip White Portfolio",
  description:
    "I'm a Game Programmer Graduate from Falmouth University with proficient experience in game engines such as Unreal Engine and Unity using languages such as C++ and C#. I am an aspiring Gameplay Programmer looking for a challenging role to express my skills. In my personal projects, I tinker with web development (backend) node.js such as this site which is deployed on my Raspberry Pi using PM2 and Nginx. I also have experience with javascript game engines such as Phaser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

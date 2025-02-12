import { Providers } from "./providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Philip White Portfolio",
  description:
    "I'm a Game Programmer Graduate from Falmouth University with proficient experience in game engines such as Unreal Engine and Unity using languages such as C++ and C#. I am an aspiring Gameplay Programmer looking for a challenging role to express my skills. In my personal projects, I tinker with web development (backend) node.js such as this site which is deployed on my Raspberry Pi using PM2 and Nginx. I also have experience with javascript game engines such as Phaser.",
  openGraph: {
    type: "website",
    url: "https://philipwhite.dev",
    title: "Philip White Portfolio",
    description:
      "I'm a Game Programmer Graduate from Falmouth University with proficient experience in game engines such as Unreal Engine and Unity using languages such as C++ and C#. I am an aspiring Gameplay Programmer looking for a challenging role to express my skills. In my personal projects, I tinker with web development (backend) node.js such as this site which is deployed on my Raspberry Pi using PM2 and Nginx. I also have experience with javascript game engines such as Phaser.",
    images: [
      {
        url: "https://philipwhite.dev/OGImage.png",
        alt: "Philip White Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

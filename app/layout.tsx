import { Providers } from "./providers";
import type { Metadata } from "next";
import "./globals.css";
import NavbarMain from "./components/NavbarMain";

export const metadata: Metadata = {
  title: "Philip White | Portfolio",
  authors: { name: "Philip White" },
  description:
    "I'm a Web & Game Developer with proficient experience in game engines such as Unreal Engine and Unity using languages such as C++ and C# as well as Web Technologies such as Node.js, Next.js, React, Docker, PM2 and Nginx. I strive to create visually compelling, sophisticated, and efficient software. I'm always learning new methods to optimize and produce more efficient code.",
  keywords: [
    "Portfolio",
    "Philip White",
    "Game Programmer",
    "Gameplay Programmer",
    "Game Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Frontend",
    "Backend",
    "Full Stack",
    "Unreal Engine",
    "Unity",
    "C++",
    "CPP",
    "C#",
    "CSharp",
    "Javascript",
    "Typescript",
    "Node.js",
    "Next.js",
    "React",
    "Docker",
    "PM2",
    "CI/CD",
    "Continuous Integration",
    "Continuous Deployment",
    "Nginx",
    "Phaser",
  ],
  openGraph: {
    type: "website",
    url: "https://philipwhite.dev",
    title: "Philip White | Portfolio",
    description:
      "I'm a Web & Game Developer with proficient experience in game engines such as Unreal Engine and Unity using languages such as C++ and C# as well as Web Technologies such as Node.js, Next.js, React, Docker, PM2 and Nginx. I strive to create visually compelling, sophisticated, and efficient software. I'm always learning new methods to optimize and produce more efficient code.",
    images: [
      {
        url: "https://test.philipwhite.dev/OGImage.png",
        alt: "Philip White Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <NavbarMain />
          {children}
        </Providers>
      </body>
    </html>
  );
}

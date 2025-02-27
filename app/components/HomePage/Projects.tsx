import React from "react";
import Particles from "../ReactBits/Particles";
import FadeContent from "../ReactBits/FadeContent";
import ProjectsFilter from "./components/ProjectsFilter";
import ProjectCard from "./components/ProjectCard";
import { CppSVG, JavaScriptSVG, NodejsSVG, UnrealEngineSVG } from "../SVGs";

interface ProjectTag {
  name: string;
  colour: "primary" | "secondary" | "success" | "danger" | "warning";
  icon: React.ReactNode;
}
interface Project {
  image: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  href?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      image: "/endlessvendetta/EndlessVendettaCardTitle.webp",
      title: "Endless Vendetta",
      description:
        "A 3rd year Uni Group Project, co-lead programmer, focusing on AI, Spatial Inventories, and Dialog Systems.",
      tags: [
        { name: "UE", colour: "primary", icon: <UnrealEngineSVG /> },
        { name: "C++", colour: "secondary", icon: <CppSVG /> },
      ],
    },
    {
      image: "/azureabyss/cover_page.png",
      title: "Azure Abyss",
      description:
        "A 2nd year Uni Group Project, lead programmer, focusing on AI, Turn-Based Combat, and Quest Systems.",
      tags: [
        { name: "UE", colour: "primary", icon: <UnrealEngineSVG /> },
        { name: "C++", colour: "secondary", icon: <CppSVG /> },
      ],
    },
    {
      image: "/kraken/title.png",
      title: "The Kraken Summer Splash",
      description:
        "A commissioned project for Kraken Rum, focusing on secure score transmission and global leaderboards.",
      tags: [
        { name: "Phaser 3", colour: "primary", icon: <p>🔫</p> },
        { name: "Node.js", colour: "primary", icon: <NodejsSVG /> },
        { name: "JS", colour: "secondary", icon: <JavaScriptSVG /> },
      ],
    },
    {
      image: "/fatjohnslifter/CoverArtBanner.webp",
      title: "Fat John's Lifter",
      description: `Apart Global Game Jam 2024, as the programmer in a team of 5 with the theme "Make Me Laugh" focusing on AI, UI and UX.`,
      tags: [
        { name: "UE", colour: "primary", icon: <UnrealEngineSVG /> },
        { name: "C++", colour: "secondary", icon: <CppSVG /> },
      ],
    },
    {
      image: "/corruptedmemory/corruptedmemory_cover.png",
      title: "Corrupted Memory",
      description: `A Uni Solo Project, focusing on networking, webservers, websockets, RPCs, lobby systems and dedicated servers.`,
      tags: [
        { name: "UE", colour: "primary", icon: <UnrealEngineSVG /> },
        { name: "Node.js", colour: "primary", icon: <NodejsSVG /> },
        { name: "C++", colour: "secondary", icon: <CppSVG /> },
        { name: "JS", colour: "secondary", icon: <JavaScriptSVG /> },
      ],
    },
    {
      image: "/goapai/actionPlan.png",
      title: "GOAP AI",
      description: `A Uni Project for a Turn-Based Combat AI implementing GOAP intended for the project Azure Abyss.`,
      tags: [
        { name: "UE", colour: "primary", icon: <UnrealEngineSVG /> },
        { name: "C++", colour: "secondary", icon: <CppSVG /> },
      ],
    },
  ];

  return (
    <div id="Projects" className="sm:h-[110svh] h-[230svh]">
      <div className="relative h-full w-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={100}
          alphaParticles={true}
          sizeRandomness={2}
        />
        <div className="absolute inset-0 flex flex-col px-4 pt-20">
          <FadeContent
            className="h-fit"
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <h1 className="sm:text-6xl text-4xl text-center">Projects</h1>
          </FadeContent>
          <FadeContent
            blur={true}
            duration={1000}
            delay={500}
            easing="ease-out"
            initialOpacity={0}
          >
            <ProjectsFilter />
          </FadeContent>
          <div className="flex flex-wrap content-center sm:justify-normal justify-center pt-4 gap-4">
            {projects.map((project, index) => (
              <FadeContent
                key={project.title}
                blur={false}
                duration={1000}
                delay={1000 + index * 100}
                easing="ease-out"
                initialOpacity={0}
              >
                <ProjectCard {...project} />
              </FadeContent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
export type { ProjectTag };

import React from "react";
import Particles from "../ReactBits/Particles";
import FadeContent from "../ReactBits/FadeContent";
import ProjectsFilter from "./components/ProjectsFilter";
import ProjectCard from "./components/ProjectCard";
import { CppSVG, UnrealEngineSVG } from "../SVGs";

const Projects = () => {
  return (
    <div className="sm:h-svh h-[230svh]">
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
          <ProjectsFilter />
          <div className="flex flex-wrap content-center pt-4 gap-2">
            <ProjectCard
              image={"/endlessvendetta/EndlessVendettaCardTitle.webp"}
              title={"Endless Vendetta"}
              description={
                "A 3rd year University Group Project, as the co-lead programmer, focusing on AI, Spatial Inventories and Complex Dialog Systems."
              }
              tags={[
                { name: "UE5", colour: "primary", icon: <UnrealEngineSVG /> },
                { name: "C++", colour: "secondary", icon: <CppSVG /> },
              ]}
            />
            <ProjectCard
              image={"/azureabyss/cover_page.png"}
              title={"Azure Abyss"}
              description={
                "A 2nd year University Group Project, as the lead programmer, focusing on AI, Turn-Based Combat Systems and Quest Systems."
              }
              tags={[
                { name: "UE5", colour: "primary", icon: <UnrealEngineSVG /> },
                { name: "C++", colour: "secondary", icon: <CppSVG /> },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

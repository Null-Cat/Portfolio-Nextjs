import React from "react";
import Particles from "../ReactBits/Particles";
import FadeContent from "../ReactBits/FadeContent";
import ProjectsFilter from "./ProjectsFilter";

const Projects = () => {
  return (
    <div className="sm:h-svh h-[230svh]">
      <div className="relative h-full w-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={11}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          cameraDistance={20}
          particleHoverFactor={0.5}
          sizeRandomness={2}
        />
        <div className="absolute inset-0 flex flex-col px-4 pt-20 pointer-events-none">
          <FadeContent
            className="h-fit"
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <h1 className="sm:text-6xl text-4xl text-center pointer-events-auto">
              Projects
            </h1>
          </FadeContent>
          <ProjectsFilter />
        </div>
      </div>
    </div>
  );
};

export default Projects;

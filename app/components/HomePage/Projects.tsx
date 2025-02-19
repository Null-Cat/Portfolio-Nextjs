import React from "react";
import Particles from "../ReactBits/Particles";

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
      </div>
    </div>
  );
};

export default Projects;

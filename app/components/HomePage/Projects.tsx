import Particles from "../ReactBits/Particles";
import FadeContent from "../ReactBits/FadeContent";
import FilteredProjects from "./components/FilteredProjects";

interface VisibleProjectTag {
  name: string;
  colour: "primary" | "secondary" | "success" | "danger" | "warning";
  icon: React.ReactNode;
  filterKey: string;
}

const Projects = () => {
  return (
    <div id="Projects" className="sm:h-[111svh] h-[300svh]">
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
          <FilteredProjects />
        </div>
      </div>
    </div>
  );
};

export default Projects;
export type { VisibleProjectTag };

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
    <div id="Projects" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={70}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={100}
          alphaParticles={true}
          sizeRandomness={2}
        />
      </div>
      <div className="relative z-10 flex flex-col px-4 pt-20 pb-16">
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
  );
};

export default Projects;
export type { VisibleProjectTag };

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
    <div id="Projects" className="sm:h-[120svh] h-[200svh]">
      <div className="relative h-full w-full">
        <div className="flex h-full w-full flex-col px-4 pt-20">
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

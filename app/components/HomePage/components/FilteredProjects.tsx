"use client";
import ProjectsFilter from "./ProjectsFilter";
import ProjectCard from "./ProjectCard";
import FadeContent from "../../ReactBits/FadeContent";
import { useState } from "react";
import { SharedSelection } from "@heroui/react";
import { VisibleProjectTag } from "../Projects";
import { CppSVG, JavaScriptSVG, NodejsSVG, UnrealEngineSVG } from "../../SVGs";

interface Project {
  image: string;
  title: string;
  description: string;
  tags: VisibleProjectTag[];
  hiddenTags?: string[];
  href?: string;
}

const FilteredProjects = () => {
  const projects: Project[] = [
    {
      image: "/endlessvendetta/EndlessVendettaCardTitle.webp",
      title: "Endless Vendetta",
      description:
        "A 3rd year Uni Group Project, co-lead programmer, focusing on AI, Spatial Inventories, and Dialog Systems.",
      tags: [
        {
          name: "UE",
          colour: "primary",
          icon: <UnrealEngineSVG />,
          filterKey: "Unreal Engine",
        },
        {
          name: "C++",
          colour: "secondary",
          icon: <CppSVG />,
          filterKey: "C++",
        },
      ],
      hiddenTags: ["Game"],
    },
    {
      image: "/azureabyss/cover_page.png",
      title: "Azure Abyss",
      description:
        "A 2nd year Uni Group Project, lead programmer, focusing on AI, Turn-Based Combat, and Quest Systems.",
      tags: [
        {
          name: "UE",
          colour: "primary",
          icon: <UnrealEngineSVG />,
          filterKey: "Unreal Engine",
        },
        {
          name: "C++",
          colour: "secondary",
          icon: <CppSVG />,
          filterKey: "C++",
        },
      ],
      hiddenTags: ["Game"],
    },
    {
      image: "/kraken/title.png",
      title: "The Kraken Summer Splash",
      description:
        "A commissioned project for Kraken Rum, focusing on secure score transmission and global leaderboards.",
      tags: [
        {
          name: "Phaser 3",
          colour: "primary",
          icon: <p>🔫</p>,
          filterKey: "Phaser 3",
        },
        {
          name: "Node.js",
          colour: "primary",
          icon: <NodejsSVG />,
          filterKey: "Node.js",
        },
        {
          name: "JS",
          colour: "secondary",
          icon: <JavaScriptSVG />,
          filterKey: "JavaScript",
        },
      ],
      hiddenTags: ["Web", "Game"],
    },
    {
      image: "/fatjohnslifter/CoverArtBanner.webp",
      title: "Fat John's Lifter",
      description: `Apart Global Game Jam 2024, as the programmer in a team of 5 with the theme "Make Me Laugh" focusing on AI, UI and UX.`,
      tags: [
        {
          name: "UE",
          colour: "primary",
          icon: <UnrealEngineSVG />,
          filterKey: "Unreal Engine",
        },
        {
          name: "C++",
          colour: "secondary",
          icon: <CppSVG />,
          filterKey: "C++",
        },
      ],
      hiddenTags: ["Game"],
    },
    {
      image: "/corruptedmemory/corruptedmemory_cover.png",
      title: "Corrupted Memory",
      description: `A Uni Solo Project, focusing on networking, webservers, websockets, RPCs, lobby systems and dedicated servers.`,
      tags: [
        {
          name: "UE",
          colour: "primary",
          icon: <UnrealEngineSVG />,
          filterKey: "Unreal Engine",
        },
        {
          name: "Node.js",
          colour: "primary",
          icon: <NodejsSVG />,
          filterKey: "Node.js",
        },
        {
          name: "C++",
          colour: "secondary",
          icon: <CppSVG />,
          filterKey: "C++",
        },
        {
          name: "JS",
          colour: "secondary",
          icon: <JavaScriptSVG />,
          filterKey: "JavaScript",
        },
      ],
      hiddenTags: ["Web", "Game"],
    },
    {
      image: "/goapai/actionPlan.png",
      title: "GOAP AI",
      description: `A Uni Project for a Turn-Based Combat AI implementing GOAP intended for the project Azure Abyss.`,
      tags: [
        {
          name: "UE",
          colour: "primary",
          icon: <UnrealEngineSVG />,
          filterKey: "Unreal Engine",
        },
        {
          name: "C++",
          colour: "secondary",
          icon: <CppSVG />,
          filterKey: "C++",
        },
      ],
      hiddenTags: ["Game"],
    },
  ];

  const [sortBy, setSortBy] = useState<SharedSelection>(new Set(["Relevance"]));
  const [selectedTagKeys, setSelectedTagKeys] = useState<SharedSelection>(
    new Set()
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  let projectResults = projects;

  if (searchQuery) {
    projectResults = projectResults.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (Array.from(selectedTagKeys).length > 0) {
    projectResults = projectResults.filter(
      (project) =>
        project.tags.some((tag) =>
          Array.from(selectedTagKeys).includes(tag.filterKey)
        ) ||
        project.hiddenTags?.some((tag) =>
          Array.from(selectedTagKeys).includes(tag)
        )
    );
  }

  return (
    <>
      <FadeContent
        blur={true}
        duration={1000}
        delay={500}
        easing="ease-out"
        initialOpacity={0}
      >
        <ProjectsFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedTagKeys={selectedTagKeys}
          setSelectedTagKeys={setSelectedTagKeys}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </FadeContent>
      <div className="flex flex-wrap content-center sm:justify-normal justify-center pt-4 gap-4">
        {projectResults.map((project, index) => (
          <FadeContent
            key={project.title}
            blur={false}
            duration={1000}
            delay={600 + index * 100}
            easing="ease-out"
            initialOpacity={0}
          >
            <ProjectCard {...project} />
          </FadeContent>
        ))}
      </div>
    </>
  );
};

export default FilteredProjects;

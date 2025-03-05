"use client";
import ProjectsFilter from "./ProjectsFilter";
import ProjectCard from "./ProjectCard";
import FadeContent from "../../ReactBits/FadeContent";
import { useState } from "react";
import { SharedSelection } from "@heroui/react";
import { VisibleProjectTag } from "../Projects";
import {
  CppSVG,
  CSharpSVG,
  JavaScriptSVG,
  NodejsSVG,
  UnitySVG,
  UnrealEngineSVG,
} from "../../SVGs";

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
        "A 3rd year uni group project, co-lead programmer, focusing on AI, spatial inventories, and dialog systems.",
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
      hiddenTags: ["Completed", "Game"],
      href: "/project/endlessvendetta",
    },
    {
      image: "/azureabyss/cover_page.png",
      title: "Azure Abyss",
      description:
        "A 2nd year uni group project, lead programmer, focusing on AI, turn-based combat, and quest systems.",
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
      hiddenTags: ["Completed", "Game"],
      href: "/project/azureabyss",
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
      hiddenTags: ["Completed", "Web", "Game"],
      href: "/project/thekrakensummersplash",
    },
    {
      image: "/fatjohnslifter/CoverArtBanner.webp",
      title: "Fat John's Lifter",
      description: `A Global Game Jam 2024 project, as the programmer in a team of 5 with the theme "Make Me Laugh" focusing on AI, UI and UX.`,
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
      hiddenTags: ["Completed", "Game"],
      href: "/project/fatjohnslifter",
    },
    {
      image: "/corruptedmemory/corruptedmemory_cover.png",
      title: "Corrupted Memory",
      description: `A uni solo project, focusing on networking, webservers, websockets, RPCs, lobby systems and dedicated UE5 servers.`,
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
      hiddenTags: ["Completed", "Web", "Game"],
      href: "/project/corruptedmemory",
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
      hiddenTags: ["Completed", "Game"],
      href: "/project/goapai",
    },
    {
      image: "/pastyprotector/titleScreen.png",
      title: "Pasty Protector",
      description: `A 1st year Uni Project for a 2D arcade shooter game focusing on global leaderboards and SQL Databases.`,
      tags: [
        {
          name: "Unity",
          colour: "primary",
          icon: <UnitySVG />,
          filterKey: "Unity",
        },
        {
          name: "C#",
          colour: "secondary",
          icon: <CSharpSVG />,
          filterKey: "C#",
        },
      ],
      hiddenTags: ["Completed", "Game"],
      href: "/project/pastyprotector",
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
        delay={200}
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
      <div className="flex flex-wrap justify-center pt-4 gap-4 overflow-y-scroll scrollbar">
        {projectResults.map((project, index) => (
          <FadeContent
            key={`${project.title}-${index}`}
            blur={false}
            duration={1000}
            delay={index * 100}
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

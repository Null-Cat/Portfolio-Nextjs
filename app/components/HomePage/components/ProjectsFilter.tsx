"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCircle,
  faCircleHalfStroke,
  faGamepad,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  SharedSelection,
} from "@heroui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  CppSVG,
  CSharpSVG,
  JavaScriptSVG,
  NodejsSVG,
  ReactSVG,
  TypeScriptSVG,
  UnitySVG,
  UnrealEngineSVG,
} from "../../SVGs";
import { Key } from "@react-types/shared";

interface ProjectTag {
  name: string;
  icon: ReactNode;
}

interface ProjectsFilterProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  selectedTagKeys: SharedSelection;
  setSelectedTagKeys: Dispatch<SetStateAction<SharedSelection>>;
  sortBy: SharedSelection;
  setSortBy: Dispatch<SetStateAction<SharedSelection>>;
}

const ProjectsFilter = ({
  searchQuery,
  setSearchQuery,
  selectedTagKeys,
  setSelectedTagKeys,
  sortBy,
  setSortBy,
}: ProjectsFilterProps) => {
  const projectTypeTags: ProjectTag[] = [
    {
      name: "Web",
      icon: <FontAwesomeIcon style={{ width: "14px" }} icon={faGlobe} />,
    },
    {
      name: "Game",
      icon: <FontAwesomeIcon style={{ width: "14px" }} icon={faGamepad} />,
    },
  ];
  const projectTechTags: ProjectTag[] = [
    {
      name: "React",
      icon: <ReactSVG />,
    },
    {
      name: "Node.js",
      icon: <NodejsSVG />,
    },
    {
      name: "Unreal Engine",
      icon: <UnrealEngineSVG />,
    },
    {
      name: "Unity",
      icon: <UnitySVG />,
    },
  ];
  const projectLanguageTags: ProjectTag[] = [
    { name: "JavaScript", icon: <JavaScriptSVG /> },
    { name: "TypeScript", icon: <TypeScriptSVG /> },
    { name: "C++", icon: <CppSVG /> },
    { name: "C#", icon: <CSharpSVG /> },
  ];
  const projectStatusTags: ProjectTag[] = [
    {
      name: "Completed",
      icon: <FontAwesomeIcon style={{ width: "14px" }} icon={faCircle} />,
    },
    {
      name: "In Progress",
      icon: (
        <FontAwesomeIcon style={{ width: "14px" }} icon={faCircleHalfStroke} />
      ),
    },
  ];

  const handleRemoveTagFilter = (key: Key) => {
    setSelectedTagKeys((prev) => {
      const newSet = new Set(prev);
      newSet.delete(key);
      return newSet;
    });
  };

  return (
    <div className="flex flex-col items-center flex-wrap gap-2 pt-8 pointer-events-auto">
      <div className="flex flex-wrap w-full gap-1">
        <Input
          className="md:w-1/3 lg:w-2/12 sm:pb-0 w-full pb-2 pr-1"
          isClearable
          size="sm"
          placeholder="Search Titles"
          startContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          type="search"
          variant="bordered"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClear={() => setSearchQuery("")}
          maxLength={25}
        />
        <Dropdown shouldBlockScroll={false}>
          <DropdownTrigger>
            <Button
              className="capitalize"
              variant="bordered"
              size="sm"
              endContent={<FontAwesomeIcon icon={faChevronDown} />}
            >
              Status
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Filter by Project Status"
            closeOnSelect={false}
            selectedKeys={selectedTagKeys}
            selectionMode="multiple"
            variant="flat"
            onSelectionChange={setSelectedTagKeys}
          >
            {projectStatusTags.map(({ name, icon }) => (
              <DropdownItem key={name} startContent={icon}>
                {name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown shouldBlockScroll={false}>
          <DropdownTrigger>
            <Button
              className="capitalize"
              variant="bordered"
              size="sm"
              endContent={<FontAwesomeIcon icon={faChevronDown} />}
            >
              Type
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Filter by Project Type"
            closeOnSelect={false}
            selectedKeys={selectedTagKeys}
            selectionMode="multiple"
            variant="flat"
            onSelectionChange={setSelectedTagKeys}
          >
            {projectTypeTags.map(({ name, icon }) => (
              <DropdownItem key={name} startContent={icon}>
                {name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown shouldBlockScroll={false}>
          <DropdownTrigger>
            <Button
              className="capitalize"
              variant="bordered"
              size="sm"
              endContent={<FontAwesomeIcon icon={faChevronDown} />}
            >
              Technology
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Filter by Project Technology"
            closeOnSelect={false}
            selectedKeys={selectedTagKeys}
            selectionMode="multiple"
            variant="flat"
            onSelectionChange={setSelectedTagKeys}
          >
            {projectTechTags.map(({ name, icon }) => (
              <DropdownItem key={name} startContent={icon}>
                {name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown shouldBlockScroll={false}>
          <DropdownTrigger>
            <Button
              className="capitalize"
              variant="bordered"
              size="sm"
              endContent={<FontAwesomeIcon icon={faChevronDown} />}
            >
              Language
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Filter by Project Language"
            closeOnSelect={false}
            selectedKeys={selectedTagKeys}
            selectionMode="multiple"
            variant="flat"
            onSelectionChange={setSelectedTagKeys}
          >
            {projectLanguageTags.map(({ name, icon }) => (
              <DropdownItem key={name} startContent={icon}>
                {name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="flex flex-wrap self-start gap-2 min-h-7">
        {selectedTagKeys &&
          Array.from(selectedTagKeys).map((key) => (
            <Chip
              color="primary"
              key={key}
              variant="flat"
              onClose={() => handleRemoveTagFilter(key)}
            >
              {key}
            </Chip>
          ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;

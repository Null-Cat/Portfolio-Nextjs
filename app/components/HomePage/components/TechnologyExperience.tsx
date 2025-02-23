"use client";

import { Divider, Image } from "@heroui/react";
import { RefObject } from "react";
interface TechnologyExperienceProps {
  altText: string;
  src: string;
  text: string;
  subText: string;
}

const TechnologyExperience = ({
  altText,
  src,
  text,
  subText,
}: TechnologyExperienceProps) => {
  return (
    <div
      className=
        "overflow-y-hidden flex flex-wrap items-center border border-default-100 p-4 rounded-lg overflow-hidden w-fit space-x-4 backdrop-blur"
    >
      <Image
        alt={altText}
        className="pointer-events-auto"
        src={src}
        width={60}
      />
      <Divider className="h-10" orientation="vertical" />
      <div className="flex flex-col">
        <h2 className="sm:text-3xl text-base font-bold pointer-events-auto">
          {text}
        </h2>
        <p className="sm:text-lg text-sm text-default-500 pointer-events-auto">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default TechnologyExperience;

"use client";
import { useEffect, useRef, useState } from "react";
import FadeContent from "../ReactBits/FadeContent";
import Squares from "../ReactBits/Squares";
import { Divider, Image, Tooltip } from "@heroui/react";
import TechnologyExperience from "./TechnologyExperience";
import OtherTechnologyExperience from "./OtherTechnologyExperience";

const Experience = () => {
  const [falmouthUniversityHasFadedIn, setFalmouthUniversityHasFadedIn] =
    useState(false);
  const falmouthUniversityDivRef = useRef<HTMLDivElement | null>(null);
  const falmouthUniversityDivParent = useRef<HTMLElement | null>(null);
  useEffect(() => {
    falmouthUniversityDivParent.current =
      falmouthUniversityDivRef.current?.parentElement || null;
  }, []);
  useEffect(() => {
    const falmouthUniversityOpacityCheckInterval = setInterval(() => {
      if (
        falmouthUniversityDivParent.current &&
        window.getComputedStyle(falmouthUniversityDivParent.current).opacity ===
          "1"
      ) {
        setFalmouthUniversityHasFadedIn(true);
        clearInterval(falmouthUniversityOpacityCheckInterval);
      }
    }, 100);

    return () => clearInterval(falmouthUniversityOpacityCheckInterval);
  }, []);

  return (
    <div className="sm:h-svh h-[230svh]">
      <div className="relative h-full w-full">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="#333"
          hoverFillColor="#222"
        />
        <div className="absolute inset-0 flex flex-col items-center px-4 pt-20 pointer-events-none">
          <FadeContent
            className="h-fit"
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <h1 className="sm:text-6xl text-4xl font-bold pointer-events-auto">
              My Experience
            </h1>
          </FadeContent>
          <div className="flex flex-col items-center justify-center w-full grow">
            <FadeContent
              className="h-fit w-full flex items-center justify-center"
              blur={true}
              duration={1000}
              delay={500}
              easing="ease-out"
              initialOpacity={0}
            >
              <div
                ref={falmouthUniversityDivRef}
                className={
                  "overflow-y-hidden flex items-center border border-default-100 px-2 py-4 rounded-lg overflow-hidden" +
                  (falmouthUniversityHasFadedIn == true ? " backdrop-blur" : "")
                }
              >
                <div className="flex items-center space-x-4 px-1">
                  <Image
                    alt="Falmouth University Logo"
                    className="pointer-events-auto"
                    src="/FalmouthUniversityLogo.png"
                    width={60}
                  />
                  <Divider className="h-10" orientation="vertical" />
                  <div className="flex flex-col">
                    <h2 className="sm:text-3xl text-base font-bold pointer-events-auto">
                      Falmouth University
                    </h2>
                    <p className="sm:text-lg text-sm text-default-500 pointer-events-auto">
                      2021 - 2024
                    </p>
                  </div>
                  <Divider className="h-10" orientation="vertical" />
                  <div className="flex flex-col">
                    <h2 className="sm:text-2xl text-base font-bold pointer-events-auto">
                      BA(Hons)
                    </h2>
                    <p className="sm:text-lg text-sm text-default-500 pointer-events-auto">
                      Game Development: Programming
                    </p>
                  </div>
                </div>
              </div>
            </FadeContent>
            <FadeContent
              className="h-fit pt-16 w-full flex flex-wrap items-center justify-center gap-1"
              blur={true}
              duration={1000}
              delay={700}
              easing="ease-out"
              initialOpacity={0}
            >
              <TechnologyExperience
                transitionRef={falmouthUniversityDivRef}
                hasFadedInCheck={falmouthUniversityHasFadedIn}
                altText="Next js Logo"
                src="https://skillicons.dev/icons?i=nextjs"
                text="Next.js"
                subText="1+ Years"
              />
              <TechnologyExperience
                transitionRef={falmouthUniversityDivRef}
                hasFadedInCheck={falmouthUniversityHasFadedIn}
                altText="React Logo"
                src="https://skillicons.dev/icons?i=react"
                text="React"
                subText="1+ Years"
              />
              <TechnologyExperience
                transitionRef={falmouthUniversityDivRef}
                hasFadedInCheck={falmouthUniversityHasFadedIn}
                altText="Node js Logo"
                src="https://skillicons.dev/icons?i=nodejs"
                text="Node.js"
                subText="5+ Years"
              />
              <TechnologyExperience
                transitionRef={falmouthUniversityDivRef}
                hasFadedInCheck={falmouthUniversityHasFadedIn}
                altText="Unreal Engine Logo"
                src="https://skillicons.dev/icons?i=unreal"
                text="Unreal Engine"
                subText="3+ Years"
              />
              <TechnologyExperience
                transitionRef={falmouthUniversityDivRef}
                hasFadedInCheck={falmouthUniversityHasFadedIn}
                altText="Unity Logo"
                src="https://skillicons.dev/icons?i=unity"
                text="Unity"
                subText="2+ Years"
              />
            </FadeContent>
            <FadeContent
              className="h-fit pt-3 w-full flex flex-wrap items-center justify-center gap-1"
              blur={true}
              duration={1000}
              delay={900}
              easing="ease-out"
              initialOpacity={0}
            >
              <TechnologyExperience
                transitionRef={falmouthUniversityDivRef}
                hasFadedInCheck={falmouthUniversityHasFadedIn}
                altText="Java Script Logo"
                src="https://skillicons.dev/icons?i=js"
                text="JavaScript"
                subText="5+ Years"
              />
              <TechnologyExperience
                transitionRef={falmouthUniversityDivRef}
                hasFadedInCheck={falmouthUniversityHasFadedIn}
                altText="Type Script Logo"
                src="https://skillicons.dev/icons?i=ts"
                text="TypeScript"
                subText="2+ Years"
              />
              <TechnologyExperience
                transitionRef={falmouthUniversityDivRef}
                hasFadedInCheck={falmouthUniversityHasFadedIn}
                altText="C Plus Plus Logo"
                src="https://skillicons.dev/icons?i=cpp"
                text="C++"
                subText="3+ Years"
              />
              <TechnologyExperience
                transitionRef={falmouthUniversityDivRef}
                hasFadedInCheck={falmouthUniversityHasFadedIn}
                altText="C Sharp Logo"
                src="https://skillicons.dev/icons?i=cs"
                text="C#"
                subText="2+ Years"
              />
            </FadeContent>
            <FadeContent
              className="h-fit pt-3 w-full flex flex-wrap items-center justify-center gap-1"
              blur={true}
              duration={1000}
              delay={1100}
              easing="ease-out"
              initialOpacity={0}
            >
              <div
                ref={falmouthUniversityDivRef}
                className={
                  "overflow-y-hidden flex items-center border border-default-100 px-2 py-4 rounded-lg overflow-hidden" +
                  (falmouthUniversityHasFadedIn == true ? " backdrop-blur" : "")
                }
              >
                <div className="flex flex-wrap items-center justify-center gap-1 px-1">
                  <OtherTechnologyExperience
                    toolTipText="Python"
                    altText="Python Logo"
                    src="https://skillicons.dev/icons?i=py"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Java"
                    altText="Java Logo"
                    src="https://skillicons.dev/icons?i=java"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Lua"
                    altText="Lua Logo"
                    src="https://skillicons.dev/icons?i=lua"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Docker"
                    altText="Docker Logo"
                    src="https://skillicons.dev/icons?i=docker"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Postgres"
                    altText="Postgres Logo"
                    src="https://skillicons.dev/icons?i=postgres"
                  />
                  <OtherTechnologyExperience
                    toolTipText="MySQL"
                    altText="My SQL Logo"
                    src="https://skillicons.dev/icons?i=mysql"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Express.js"
                    altText="Express js Logo"
                    src="https://skillicons.dev/icons?i=express"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Tailwind CSS"
                    altText="Tailwind CSS Logo"
                    src="https://skillicons.dev/icons?i=tailwind"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Bootstrap"
                    altText="Bootstrap Logo"
                    src="https://skillicons.dev/icons?i=bootstrap"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Git"
                    altText="Git Logo"
                    src="https://skillicons.dev/icons?i=git"
                  />
                  <OtherTechnologyExperience
                    toolTipText="GitHub"
                    altText="Git Hub Logo"
                    src="https://skillicons.dev/icons?i=github"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Photoshop"
                    altText="Photoshop Logo"
                    src="https://skillicons.dev/icons?i=photoshop"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Blender"
                    altText="Blender Logo"
                    src="https://skillicons.dev/icons?i=blender"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Visual Studio"
                    altText="Visual Studio Logo"
                    src="https://skillicons.dev/icons?i=visualstudio"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Visual Studio Code"
                    altText="Visual Studio Code Logo"
                    src="https://skillicons.dev/icons?i=vscode"
                  />
                  <OtherTechnologyExperience
                    toolTipText="JetBrains Rider"
                    altText="Jet Brains Logo"
                    src="https://skillicons.dev/icons?i=rider"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Raspberry Pi"
                    altText="Raspberry Pi Logo"
                    src="https://skillicons.dev/icons?i=raspberrypi"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Arduino"
                    altText="Arduino Logo"
                    src="https://skillicons.dev/icons?i=arduino"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Heroku"
                    altText="Heroku Logo"
                    src="https://skillicons.dev/icons?i=heroku"
                  />
                  <OtherTechnologyExperience
                    toolTipText="Nginx"
                    altText="Nginx Logo"
                    src="https://skillicons.dev/icons?i=nginx"
                  />
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

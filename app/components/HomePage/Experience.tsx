"use client";
import { useEffect, useRef, useState } from "react";
import FadeContent from "../ReactBits/FadeContent";
import Squares from "../ReactBits/Squares";
import { Divider, Image } from "@heroui/react";

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
    <div style={{ height: "100vh" }}>
      <div className="relative h-full w-full">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="#333"
          hoverFillColor="#222"
        />
        <div className="absolute inset-0 flex flex-col flex-wrap px-4 pt-20 pointer-events-none">
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
          <FadeContent
            className="h-fit pt-8 w-full flex items-center justify-center"
            blur={true}
            duration={1000}
            delay={500}
            easing="ease-out"
            initialOpacity={0}
          >
            <div
              ref={falmouthUniversityDivRef}
              className={
                "overflow-y-hidden flex items-center border border-default-100 px-2 py-4 rounded-lg overflow-hidden w-fit" +
                (falmouthUniversityHasFadedIn == true ? " backdrop-blur" : "")
              }
            >
              <div className="flex items-center space-x-4 h-fit px-1">
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
        </div>
      </div>
    </div>
  );
};

export default Experience;

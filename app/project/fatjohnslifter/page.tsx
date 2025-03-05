import ProjectCarousel from "@/app/components/ProjectCarousel";
import {
  CppSVG,
  GiteaSVG,
  UnrealEngineSVG,
  WindowsSVG,
} from "@/app/components/SVGs";
import { Chip, Image, Link, Spacer } from "@heroui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Fat John's Lifter",
  description:
    'Fat John is hungry, and he can\'t move so.... get em. Apart of GGJ2024 "Make Me Laugh"',
  openGraph: {
    type: "website",
    url: "https://philipwhite.dev/fatjohnslifter",
    title: "Project | Fat John's Lifter",
    description:
      'Fat John is hungry, and he can\'t move so.... get em. Apart of GGJ2024 "Make Me Laugh"',
    images: [
      {
        url: "https://philipwhite.dev/fatjohnslifter/CoverArtBanner.webp",
        alt: "Project | Fat John's Lifter",
      },
    ],
  },
};

const FatJohnsLifterProject = () => {
  return (
    <>
      <h1 className="flex justify-center sm:text-5xl text-4xl text-center pt-20 pb-4">
        Fat John&apos;s Lifter
      </h1>

      <ProjectCarousel
        images={[
          {
            image: "/fatjohnslifter/CoverArtBanner.webp",
            alt: "Promotional Banner",
          },
          {
            image: "/fatjohnslifter/fatjohnslifter0.png",
            alt: "The Outside Street",
          },
          {
            image: "/fatjohnslifter/fatjohnslifter1.png",
            alt: "The Mart",
          },
          {
            image: "/fatjohnslifter/fatjohnslifter2.png",
            alt: "Getting Damaged",
          },
          {
            image: "/fatjohnslifter/fatjohnslifter3.png",
            alt: "Getting Chased",
          },
          {
            image: "/fatjohnslifter/fatjohnslifter6.png",
            alt: "Fat John",
          },
          {
            image: "/fatjohnslifter/fatjohnslifter7.png",
            alt: "Getting Chased 2",
          },
          {
            image: "/fatjohnslifter/fatjohnslifter5.png",
            alt: "Start Screen",
          },
          {
            image: "/fatjohnslifter/fatjohnslifter4.png",
            alt: "Lose Screen",
          },
        ]}
      />

      <div className="flex sm:justify-center flex-wrap gap-8 p-4">
        <div>
          <h2 className="sm:text-4xl text-3xl sm:text-right">
            Project Features
          </h2>
          <div className="flex flex-wrap justify-end gap-1 py-3">
            <Chip
              size="sm"
              radius="sm"
              variant="shadow"
              className="flex gap-1"
              color={"primary"}
              startContent={<UnrealEngineSVG />}
            >
              Unreal Engine 5.1
            </Chip>
            <Chip
              size="sm"
              radius="sm"
              variant="shadow"
              className="flex gap-1"
              color={"secondary"}
              startContent={<CppSVG />}
            >
              C++
            </Chip>
            <Chip
              size="sm"
              radius="sm"
              variant="shadow"
              className="flex gap-1"
              color={"default"}
              startContent={<WindowsSVG />}
            >
              Windows
            </Chip>
          </div>
          <ul className="sm:text-right">
            <li>3D</li>
            <li>Top-Down</li>
            <li>Collectables</li>
            <li>Enemies</li>
            <li>Obstacles</li>
          </ul>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl">Description</h2>
          <p className="max-w-prose">
            <br />
            Fat John is hungry, and he can&apos;t move so.... get em
            <br />
            <br />
            This project was created for the Global Game Jam 2024. The theme was
            &quot;Make Me Laugh&quot;. I was working along side a team of 4
            other people. This was my first game jam and I was the only
            programmer on the team. The game was created in 48 hours and was
            created using Unreal Engine 5. All animations were sourced from
            Mixamo. The game was created to be a top-down 3D game where the
            player must collect food and avoid obstacles and enemies. My
            contributions to the project were the simple enemy AI, player
            movement, and the collectable food. The game was created to be a fun
            and light-hearted somewhat challenging game that is replay-able.
          </p>
        </div>
      </div>

      <div className="flex flex-col place-items-center gap-4 p-4">
        <Link
          isExternal
          showAnchorIcon
          underline="always"
          href="https://gitea.philipwhite.dev/Philip/FatJohnsLifter"
        >
          <GiteaSVG /> <Spacer />
          Game Project Files
        </Link>
        <Link
          isExternal
          showAnchorIcon
          underline="always"
          href="https://globalgamejam.org/games/2024/fat-johns-lifter-2"
        >
          Global Game Jam Submission
        </Link>
      </div>
    </>
  );
};

export default FatJohnsLifterProject;

import ProjectCarousel from "@/app/components/ProjectCarousel";
import {
  CppSVG,
  CSharpSVG,
  GiteaSVG,
  UnitySVG,
  UnrealEngineSVG,
  WindowsSVG,
} from "@/app/components/SVGs";
import { Chip, Link, Spacer } from "@heroui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Pasty Protector",
  description:
    "Protect the pasty supply of Pendennis Castle at all costs! Man the cannons and shoot the approaching pirate ships to prevent the piliferous plunderers from stealing all your delicious loot aye! Shoot ye captured loot to reclaim it from their crummy hands before it sleeps with the fishes. Don't hit the friendly fishing boats though, as the locals would not appreciate that very much now would they?",
  openGraph: {
    type: "website",
    url: "https://philipwhite.dev/pastyprotector",
    title: "Project | Pasty Protector",
    description:
      "Protect the pasty supply of Pendennis Castle at all costs! Man the cannons and shoot the approaching pirate ships to prevent the piliferous plunderers from stealing all your delicious loot aye! Shoot ye captured loot to reclaim it from their crummy hands before it sleeps with the fishes. Don't hit the friendly fishing boats though, as the locals would not appreciate that very much now would they?",
    images: [
      {
        url: "https://philipwhite.dev/pastyprotector/Screen1.png",
        alt: "Project | Pasty Protector",
      },
    ],
  },
};

const PastyProtectorProject = () => {
  return (
    <>
      <h1 className="flex justify-center sm:text-5xl text-4xl text-center pt-20 pb-4">
        Pasty Protector
      </h1>

      <ProjectCarousel
        images={[
          {
            image: "/pastyprotector/Screen1.png",
            alt: "Main Menu",
          },
          {
            image: "/pastyprotector/Screen2.png",
            alt: "Gameplay",
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
              startContent={<UnitySVG />}
            >
              Unity 2020.3.12
            </Chip>
            <Chip
              size="sm"
              radius="sm"
              variant="shadow"
              className="flex gap-1"
              color={"secondary"}
              startContent={<CSharpSVG />}
            >
              C#
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
            <li>2D</li>
            <li>Difficulty Scaling</li>
            <li>Special Drops</li>
            <li>Global Leaderboard</li>
          </ul>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl">Description</h2>
          <p className="max-w-prose">
            <br />
            Protect the pasty supply of Pendennis Castle at all costs! Man the
            cannons and shoot the approaching pirate ships to prevent the
            piliferous plunderers from stealing all your delicious loot aye!
            Shoot ye captured loot to reclaim it from their crummy hands before
            it sleeps with the fishes. Don&apos;t hit the friendly fishing boats
            though, as the locals would not appreciate that very much now would
            they?
          </p>
        </div>
      </div>

      <div className="flex flex-col place-items-center gap-4 p-4">
        <Link
          isExternal
          showAnchorIcon
          underline="always"
          href="https://gitea.philipwhite.dev/Philip/Pasty-Protector"
        >
          <GiteaSVG /> <Spacer />
          Game Project Files
        </Link>
      </div>
    </>
  );
};

export default PastyProtectorProject;

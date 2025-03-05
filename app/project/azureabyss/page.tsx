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
  title: "Project | Azure Abyss",
  description:
    "The Azure Abyss, a large perforation inside the crust of the Earth tinted blue by the light from the moon. The blue light has mutated the cave and the creatures inside it, creating twisted monstrosities.",
  openGraph: {
    type: "website",
    url: "https://philipwhite.dev/azureabyss",
    title: "Project | Azure Abyss",
    description:
      "The Azure Abyss, a large perforation inside the crust of the Earth tinted blue by the light from the moon. The blue light has mutated the cave and the creatures inside it, creating twisted monstrosities.",
    images: [
      {
        url: "https://philipwhite.dev/azureabyss/banner.png",
        alt: "Project | Azure Abyss",
      },
    ],
  },
};

const AzureAbyssProject = () => {
  return (
    <>
      <h1 className="flex justify-center sm:text-5xl text-4xl text-center pt-20 pb-4">
        Azure Abyss
      </h1>
      <ProjectCarousel
        images={[
          {
            image: "/azureabyss/azureabyss0.png",
            alt: "Your Predecessor",
          },
          {
            image: "/azureabyss/azureabyss1.png",
            alt: "The Abyss",
          },
          {
            image: "/azureabyss/azureabyss2.png",
            alt: "Merchant Sister",
          },
          {
            image: "/azureabyss/azureabyss3.png",
            alt: "Feral Goat Cave",
          },
          {
            image: "/azureabyss/azureabyss4.png",
            alt: "Merchant Entrance",
          },
          {
            image: "/azureabyss/azureabyss5.png",
            alt: "Crystal Tunnel",
          },
          {
            image: "/azureabyss/azureabyss6.png",
            alt: "---- Entrance",
          },
          {
            image: "/azureabyss/azureabyss7.png",
            alt: "...",
          },
          {
            image: "/azureabyss/azureabyss8.png",
            alt: "Combat",
          },
          {
            image: "/azureabyss/azureabyss9.png",
            alt: "Enter",
          },
          {
            image: "/azureabyss/azureabyss12.png",
            alt: "Merchant Sister",
          },
          {
            image: "/azureabyss/azureabyss10.png",
            alt: "Merchant",
          },
          {
            image: "/azureabyss/azureabyss11.png",
            alt: "Healing Jelly",
          },
          {
            image: "/azureabyss/azureabyss13.png",
            alt: "Feral Goat Cave",
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
            <li>3D Platformer</li>
            <li>Turn Based Combat</li>
            <li>Collectables</li>
            <li>Enemies</li>
            <li>Obstacles</li>
            <li>Merchant System</li>
            <li>Destructible Walls</li>
          </ul>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl">Description</h2>
          <p className="max-w-prose">
            <br />
            The Azure Abyss, a large perforation inside the crust of the Earth
            tinted blue by the light from the moon. The blue light has mutated
            the cave and the creatures inside it, creating twisted
            monstrosities.
            <br />
            <br />
            You are Indigo Pilfer, a scientist forced down into the abyss by his
            boss to find the secrets of what lies below. Use your weapon to
            combine elements in order to defeat the monsters in the abyss, your
            wits to get around the interwoven cave systems, and your bravery to
            make it to the bottom and perhaps you&apos;ll make it out alive.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          isExternal
          showAnchorIcon
          underline="always"
          href="https://gitea.philipwhite.dev/Philip/EndlessVendetta"
        >
          <GiteaSVG /> <Spacer />
          Game Project Files
        </Link>
      </div>

      <div className="flex justify-center py-8">
        <iframe
          frameBorder="0"
          src="https://itch.io/embed/1881579?linkback=true&amp;dark=true"
          width="552"
          height="167"
        />
      </div>

      <div className="flex flex-col items-center gap-4 py-8">
        <h2 className="sm:text-4xl text-3xl">Trailer</h2>
        <iframe
          className="sm:w-[560px] sm:h-[315px] w-full h-[200px]"
          src="https://www.youtube.com/embed/X1yisHiOpvQ?si=XGrxgGdAkDRR5sg9"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="flex flex-col items-center py-8">
        <h2 className="sm:text-4xl text-3xl">My Contributions</h2>
      </div>
      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">Dialog System</h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          The dialog system was designed to be designer friendly first. The
          system conforms to this by allowing the designer to create dialogue
          trees through blueprints in any Character blueprint as long as it has
          the dialog actor component attached. This makes the system modular and
          able to be applied to any character or situation. To build the dialog
          tree within a character&apos;s blueprint the BlueprintCallable
          attribute was used on the functions that are used to build the dialog
          tree.
          <br />
          <br />
          The system also allows for the designer to create custom events that
          can be called from the dialog tree this is done by defining special
          codes hidden in the dialogue but read by the system triggering
          different events such as calling custom blueprint functions, adding
          items to the players inventory and setting quest flags.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/azureabyss/DialogueSnippet0.png"
          alt="Dialog Snippet"
        />
        <Image
          className="w-full"
          src="/azureabyss/DialogueSnippet1.png"
          alt="Dialog Snippet"
        />
      </div>

      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">Quest System</h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          The quest system was also designed to be designer friendly first. The
          system conforms to this by allowing the designer to create quests very
          quickly and easily through blueprints. The Quest class contained 3
          main variables Goals, PreConditions and Rewards. Goals are what the
          player is aiming for to complete the quest this can include quest
          flags, items, or even a combination of both. PreConditions are what
          the player needs to have done before they can start the quest, this
          can also include flags, items, or even a combination of both. Rewards
          are what the player gets for completing the quest, this can, you
          guessed it, include items, flags, or even a combination of both. All a
          designer has to do is create a new blueprint that inherits from the
          Quest class and then add or replace the values contained in the
          blueprint that are used to build the quest. This makes the system
          modular and able to be applied to any quest or situation.
          <br />
          <br />
          To check if a quest is complete the system checks the goals and
          preconditions of the quest when a new flag has been added or modified
          also the system also checks if a quests goals have been met when a new
          item has been added or modified. This is done by declaring events and
          calling the CheckConditions function on each active quest.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/azureabyss/QuestSnippet0.png"
          alt="Quest Snippet"
        />
        <Image
          className="w-full"
          src="/azureabyss/QuestSnippet0.png"
          alt="Quest Snippet"
        />
      </div>

      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">
          Status & Combat System
        </h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          The turn-based combination combat system and status system go hand in
          hand. The status system allows for the player to be affected by
          different status effects that can be applied by the player or the
          enemies in and out of combat. There was two different types of status
          effects that could be inflicted on the player, one which was
          turn-based and one that was using real time to tick down. The
          turn-based status effects could only be triggered during combat as
          they were based on the player&apos;s turn, while the real time status
          effects could be triggered at any time via the consumable jellies in
          the game. This affected combat as these status effects applied buffs
          and debuffs to the player and enemies, which could be used tactically
          by the player to optimise damage output or to survive longer in
          combat. Status effects include heal over time, thorns which damaged
          the enemy when they attacked the player, and a strength buff which
          increased the player&apos;s damage output.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/azureabyss/CombatSnippet0.png"
          alt="Combat Snippet"
        />
      </div>
    </>
  );
};

export default AzureAbyssProject;

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
  title: "Project | Endless Vendetta",
  description:
    "Crime, violence and betrayal runs rampant throughout the solar system. Take on bounties as you hunt to kill the one who murdered your family, and left you for dead.",
  openGraph: {
    type: "website",
    url: "https://philipwhite.dev/endlessvendetta",
    title: "Project | Endless Vendetta",
    description:
      "Crime, violence and betrayal runs rampant throughout the solar system. Take on bounties as you hunt to kill the one who murdered your family, and left you for dead.",
    images: [
      {
        url: "https://philipwhite.dev/endlessvendetta/EndlessVendettaFullPage.webp",
        alt: "Project | Endless Vendetta",
      },
    ],
  },
};

const EndlessVendettaProject = () => {
  return (
    <>
      <h1 className="flex justify-center sm:text-5xl text-4xl text-center pt-20 pb-4">
        Endless Vendetta
      </h1>
      <ProjectCarousel
        images={[
          {
            image: "/endlessvendetta/EndlessVendettaFullPage.webp",
            alt: "Endless Vendetta Promotional Image",
          },
          {
            image: "/endlessvendetta/Screenshot0.webp",
            alt: "Main Menu",
          },
          {
            image: "/endlessvendetta/Screenshot1.webp",
            alt: "First Mayor Interaction",
          },
          {
            image: "/endlessvendetta/Screenshot2.webp",
            alt: "Mayor Dialogue",
          },
          {
            image: "/endlessvendetta/Screenshot3.webp",
            alt: "Mayor Dialogue Choices",
          },
          {
            image: "/endlessvendetta/Screenshot4.webp",
            alt: "Waypoint",
          },
          {
            image: "/endlessvendetta/Screenshot5.webp",
            alt: "Shooting Gallery",
          },
          {
            image: "/endlessvendetta/Screenshot6.webp",
            alt: "Combat Gadget",
          },
          {
            image: "/endlessvendetta/Screenshot7.webp",
            alt: "Using Combat Gadget",
          },
          {
            image: "/endlessvendetta/Screenshot8.webp",
            alt: "Recon Gadget",
          },
          {
            image: "/endlessvendetta/Screenshot9.webp",
            alt: "Using Recon Gadget",
          },
          {
            image: "/endlessvendetta/Screenshot12.webp",
            alt: "New Miami",
          },
          {
            image: "/endlessvendetta/Screenshot10.webp",
            alt: "New Miami",
          },
          {
            image: "/endlessvendetta/Screenshot11.webp",
            alt: "New Miami",
          },
          {
            image: "/endlessvendetta/Screenshot13.webp",
            alt: "New Miami Park",
          },
          {
            image: "/endlessvendetta/Screenshot14.webp",
            alt: "Side Bounty",
          },
          {
            image: "/endlessvendetta/Screenshot15.webp",
            alt: "Weapon Attachment Workbench",
          },
          {
            image: "/endlessvendetta/Screenshot16.webp",
            alt: "Enemy Wave",
          },
          {
            image: "/endlessvendetta/Screenshot17.webp",
            alt: "Dinning Room",
          },
          {
            image: "/endlessvendetta/Screenshot18.webp",
            alt: "Getting Damaged",
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
            <li>First Person Shooter</li>
            <li>Complex Gun Play</li>
            <li>Weapon Attachments</li>
            <li>Open World</li>
            <li>Mantling System</li>
            <li>Bounties</li>
            <li>Enemy AI</li>
            <li>Spatial Inventory</li>
            <li>Dialog System</li>
            <li>Gadgets</li>
          </ul>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl">Description</h2>
          <p className="max-w-prose">
            <br />
            Crime, violence and betrayal runs rampant throughout the solar
            system. Take on bounties as you hunt to kill the one who murdered
            your family, and left you for dead.
            <br />
            <br />
            Endless Vendetta is an realistic FPS game that features both
            bounties that progress the main story and boast high payouts, or
            exploration of the world.
            <br />
            <br />
            Endless Vendetta is a 3rd year university project that was created
            by a team of 12 people with different specialties over the course of
            6 months.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          isExternal
          showAnchorIcon
          underline="always"
          href="https://gitea.philipwhite.dev/Philip/AzureAbyss"
        >
          <GiteaSVG /> <Spacer />
          Game Project Files
        </Link>
      </div>

      <div className="flex justify-center py-8">
        <iframe
          frameBorder="0"
          src="https://itch.io/embed/2695551?dark=true"
          width="552"
          height="167"
        />
      </div>

      <div className="flex flex-col items-center gap-4 py-8">
        <h2 className="sm:text-4xl text-3xl">Trailer</h2>
        <iframe
          className="sm:w-[560px] sm:h-[315px] w-full h-[200px]"
          src="https://www.youtube.com/embed/J-6rMWNq-gQ?si=za4ALm9AQ_ZrnSVx"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="flex flex-col items-center gap-4 py-8">
        <h2 className="sm:text-4xl text-3xl">Pitch</h2>
        <iframe
          className="sm:w-[960px] sm:h-[569px] w-full h-[300px]"
          src="https://docs.google.com/presentation/d/e/2PACX-1vQdyX2L3K3UizzR-If9guZ7OStsDa-fHCQeVhxYy8lLyMazTUfbzX2BDpwGDEnBR3T5ix002J7T8AoU/embed?start=false&loop=true&delayms=5000"
          frameBorder="0"
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
          trees through modifying a plugin called{" "}
          <Link isExternal href="https://github.com/jinyuliao/GenericGraph">
            Generic Graph
          </Link>{" "}
          by jinyuliao. This allows a designer to create a dialog tree through a
          graph which is immensely easier to understand and work with rather
          than programmatically entering the tree.
          <br />
          <br />
          This system allows for multiple speakers, voice overs and unlimited
          dialogue choices. Dialogue Choices can also be constrained to player
          values such as inventory items, favours, quest flags or even previous
          dialogue choices.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/endlessvendetta/Dialogue3.png"
          alt="Dialog Snippet"
        />
        <Image
          className="w-full"
          src="/endlessvendetta/Dialogue2.png"
          alt="Dialog Snippet"
        />
        <Image
          className="w-full"
          src="/endlessvendetta/Dialogue1.png"
          alt="Dialog Snippet"
        />
      </div>

      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">Enemy AI</h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          The Enemy AI uses unreal engine&apos;s behavior tree system programmed
          to have a patrol system, a restricted bounds system, stealth system
          and a combat system. The patrol system allows the enemy to move
          between points in the world and the restricted bounds system allows
          the enemy know if the player is in a restricted area and to attack the
          player if they are within a certain area. The stealth system allows
          the enemy to detect the player and alert other enemies to the
          player&apos;s presence. The combat system allows the enemy to shoot
          the player and take cover when needed using unreal engines EQS system
          to calculate the best spot possible.
          <br />
          <br />
          The AI also reacts to the player&apos;s actions such as if the player
          is shooting the AI will immediately take cover and shoot back. If the
          player is in stealth the AI will search for the player and alert other
          AI to the player&apos;s presence if they are able to sense the players
          movements.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/endlessvendetta/AI3.png"
          alt="AI Snippet"
        />
        <Image
          className="w-full"
          src="/endlessvendetta/AI2.png"
          alt="AI Snippet"
        />
        <Image
          className="w-full"
          src="/endlessvendetta/AI1.png"
          alt="AI Snippet"
        />
      </div>

      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">Spacial Inventory</h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          The Inventory system was designed to be a grid spacial inventory
          system that restricts the player from holding an indefinite amount of
          items by how much grid space it uses a.k.a. similar to Tarkov&apos;s &
          Resident Evil&apos;s inventory system.
          <br />
          <br />
          The UI exists however was cut due to time constraints. However the
          system is fully functional and in place integrated with the dialog
          system for quest items. Future plans for the system include ammunition
          and swapping weapons.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/endlessvendetta/Inventory1.png"
          alt="Inventory Snippet"
        />
        <Image
          className="w-full"
          src="/endlessvendetta/Inventory2.png"
          alt="Inventory Snippet"
        />
      </div>

      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">Movement System</h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          The movement system is using the{" "}
          <Link
            isExternal
            href="https://www.unrealengine.com/marketplace/en-US/product/advanced-locomotion-system-v1"
          >
            Advanced Locomotion System
          </Link>{" "}
          by LongmireLocomotion. This system allows for a smooth and realistic
          feel to the player&apos;s movement as well as a well tested mantling
          system. The system is modified to allow for custom animations and
          weapons to be used along side it.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/endlessvendetta/ALS2.png"
          alt="Movement Snippet"
        />
        <Image
          className="w-full"
          src="/endlessvendetta/ALS1.png"
          alt="Movement Snippet"
        />
      </div>

      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">
          First Person Animations
        </h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          Due to the lack of an animator on the team I took it upon myself to
          create the first person animations for both the pistol and the rifle.
          As these weapons were custom made and no pre-made animations would do
          the trick. The animations were created in blender and imported into
          unreal engine using the unreal engine animation system. The animations
          were created to be realistic and to give the player a sense of weight
          and power when firing the weapons.
          <br />
          <br />
          The animations are triggered in blueprints using the animation system
          and montages to trigger them on demand. The animations are also
          integrated with the ALS system allowing for the smooth movement whist
          also having custom made weapons.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/endlessvendetta/Animation2.png"
          alt="Animation Snippet"
        />
        <Image
          className="w-full"
          src="/endlessvendetta/Animation1.png"
          alt="Animation Snippet"
        />
        <Image
          className="w-full"
          src="/endlessvendetta/Animation3.png"
          alt="Animation Snippet"
        />
      </div>

      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">UI Programming</h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          I have created the final UI for the game in line with our concepts and
          the game&apos;s theme. I have made UI animations using unreal
          engine&apos;s widget sequencer to make the UI more dynamic and grabs
          the users attention when needs be.
          <br />
          <br />I have also created UI animations with images using Photoshop
          and imported them into unreal and created a material to animate them.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/endlessvendetta/UI2.png"
          alt="UI Snippet"
        />
        <Image
          className="w-full"
          src="/endlessvendetta/UI3.png"
          alt="UI Snippet"
        />
        <Image
          className="w-full"
          src="/endlessvendetta/UI1.png"
          alt="UI Snippet"
        />
      </div>
    </>
  );
};

export default EndlessVendettaProject;

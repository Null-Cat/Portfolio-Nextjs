import ProjectCarousel from "@/app/components/ProjectCarousel";
import { CppSVG, UnrealEngineSVG, WindowsSVG } from "@/app/components/SVGs";
import { Chip } from "@heroui/react";
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
        url: "https://test.philipwhite.dev/endlessvendetta/EndlessVendettaFullPage.webp",
        alt: "Project | Endless Vendetta",
      },
    ],
  },
};

const EndlessVendettaProject = () => {
  return (
    <>
      <h1 className="flex justify-center sm:text-5xl text-3xl text-center pt-20 pb-4">
        Endless Vendetta
      </h1>
      <ProjectCarousel
        images={[
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/EndlessVendettaFullPage.webp",
            alt: "Endless Vendetta Promotional Image",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot0.webp",
            alt: "Main Menu",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot1.webp",
            alt: "First Mayor Interaction",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot2.webp",
            alt: "Mayor Dialogue",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot3.webp",
            alt: "Mayor Dialogue Choices",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot4.webp",
            alt: "Waypoint",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot5.webp",
            alt: "Shooting Gallery",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot6.webp",
            alt: "Combat Gadget",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot7.webp",
            alt: "Using Combat Gadget",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot8.webp",
            alt: "Recon Gadget",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot9.webp",
            alt: "Using Recon Gadget",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot12.webp",
            alt: "New Miami",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot10.webp",
            alt: "New Miami",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot11.webp",
            alt: "New Miami",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot13.webp",
            alt: "New Miami Park",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot14.webp",
            alt: "Side Bounty",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot15.webp",
            alt: "Weapon Attachment Workbench",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot16.webp",
            alt: "Enemy Wave",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot17.webp",
            alt: "Dinning Room",
          },
          {
            image:
              "https://test.philipwhite.dev/endlessvendetta/Screenshot18.webp",
            alt: "Getting Damaged",
          },
        ]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
        <div className="sm:place-self-end">
          <h2 className="sm:text-3xl text-2xl sm:text-right">
            Project Features
          </h2>
          <div className="flex flex-wrap gap-1 py-3 w-full">
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
          <h2 className="sm:text-3xl text-2xl">Description</h2>
          <p>
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
        <div className="sm:col-span-2 col-span-1">
          <div className="flex justify-center">
            <iframe
              frameBorder="0"
              src="https://itch.io/embed/2695551?dark=true"
              width="552"
              height="167"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EndlessVendettaProject;

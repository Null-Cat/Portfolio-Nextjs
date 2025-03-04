import ProjectCarousel from "@/app/components/ProjectCarousel";
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
    </>
  );
};

export default EndlessVendettaProject;

import React from "react";
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
  return <div>EndlessVendettaProject</div>;
};

export default EndlessVendettaProject;

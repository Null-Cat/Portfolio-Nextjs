"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faItchIo,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { GiteaSVG } from "./SVGs";

const NavbarMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="fixed top-0"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarItem>
          <NavbarMenuToggle
            className="w-4 h-8"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="sm:hidden absolute inset-0 flex flex-col items-center pointer-events-none"
        justify="center"
      >
        <NavbarItem>
          <NavbarBrand>
            <Link
              href="/"
              className="text-inherit text-2xl pointer-events-auto"
              aria-label="Philip White Portfolio"
            >
              Philip White
            </Link>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden absolute inset-0 sm:flex items-center"
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="/#Home" aria-label="Home Section">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#About" aria-label="About Section">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/#Projects"
            aria-label="Projects Section"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/#Contact"
            aria-label="Contact Section"
          >
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/PhilipWhiteCV.pdf"
            aria-label="Curriculum Vitae CV"
          >
            CV
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <NavbarBrand>
            <Link
              href="/"
              className="text-inherit text-2xl pointer-events-auto"
              aria-label="Philip White Portfolio"
            >
              Philip White
            </Link>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-2" justify="end">
        <NavbarItem className="flex justify-center">
          <Link
            href="mailto:philip@philipwhite.dev"
            color="foreground"
            aria-label="Philip White's Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex justify-center">
          <Link
            href="https://www.linkedin.com/in/philip-white-dev/"
            color="foreground"
            aria-label="Philip White's LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex justify-center">
          <Link
            href="https://github.com/Null-Cat"
            color="foreground"
            aria-label="Philip White's Github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex justify-center">
          <Link
            href="https://gitea.philipwhite.dev/"
            color="foreground"
            aria-label="Philip White's Gitea"
          >
            <GiteaSVG />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex justify-center">
          <Link
            href="https://null-cat.itch.io/"
            color="foreground"
            aria-label="Philip White's Itch.io"
          >
            <FontAwesomeIcon icon={faItchIo} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem key="navbarHome">
          <Link
            className="w-full"
            color={"foreground"}
            href="/#Home"
            size="lg"
            onClickCapture={() => setIsMenuOpen(false)}
            aria-label="Home Section"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="navbarAbout">
          <Link
            className="w-full"
            color={"foreground"}
            href="/#About"
            size="lg"
            onClickCapture={() => setIsMenuOpen(false)}
            aria-label="About Section"
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="navbarProjects">
          <Link
            className="w-full"
            color={"foreground"}
            href="/#Projects"
            size="lg"
            onClickCapture={() => setIsMenuOpen(false)}
            aria-label="Projects Section"
          >
            Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="navbarContact">
          <Link
            className="w-full"
            color={"foreground"}
            href="/#Contact"
            size="lg"
            onClickCapture={() => setIsMenuOpen(false)}
            aria-label="Contact Section"
          >
            Contact
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="navbarCV">
          <Link
            className="w-full"
            color={"foreground"}
            href="https://philipwhite.dev/PhilipWhiteCV.pdf"
            size="lg"
            onClickCapture={() => setIsMenuOpen(false)}
            aria-label="Curriculum Vitae CV"
          >
            CV
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="navbarSocial">
          <div className="flex justify-start gap-4 pt-4">
            <Link
              href="mailto:philip@philipwhite.dev"
              color="foreground"
              aria-label="Philip White's Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/philip-white-dev/"
              color="foreground"
              aria-label="Philip White's LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link
              href="https://github.com/Null-Cat"
              color="foreground"
              aria-label="Philip White's Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              href="https://gitea.philipwhite.dev/"
              color="foreground"
              aria-label="Philip White's Gitea"
            >
              <GiteaSVG />
            </Link>
            <Link
              href="https://null-cat.itch.io/"
              color="foreground"
              aria-label="Philip White's Itch.io"
            >
              <FontAwesomeIcon icon={faItchIo} />
            </Link>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarMain;

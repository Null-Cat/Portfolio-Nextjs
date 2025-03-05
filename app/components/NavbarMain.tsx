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
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="sm:hidden absolute inset-0 flex flex-col items-center pointer-events-none"
        justify="center"
      >
        <NavbarBrand>
          <Link href="/" className="text-inherit text-2xl pointer-events-auto">
            Philip White
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden absolute inset-0 sm:flex items-center"
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="/#Home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#About">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#Projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#Contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/PhilipWhiteCVGame.pdf">
            CV
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href="/" className="text-inherit text-2xl pointer-events-auto">
            Philip White
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-2" justify="end">
        <NavbarItem className="flex justify-center">
          <Link href="mailto:philip@philipwhite.dev" color="foreground">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex justify-center">
          <Link
            href="https://www.linkedin.com/in/philip-white-dev/"
            color="foreground"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex justify-center">
          <Link href="https://github.com/Null-Cat" color="foreground">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex justify-center">
          <Link href="https://gitea.philipwhite.dev/" color="foreground">
            <GiteaSVG />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex justify-center">
          <Link href="https://null-cat.itch.io/" color="foreground">
            <FontAwesomeIcon icon={faItchIo} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden flex" justify="end"></NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem key="navbarHome">
          <Link
            className="w-full"
            color={"foreground"}
            href="/#Home"
            size="lg"
            onClickCapture={() => setIsMenuOpen(false)}
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
          >
            Contact
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="navbarCV">
          <Link
            className="w-full"
            color={"foreground"}
            href="https://philipwhite.dev/PhilipWhiteCVGame.pdf"
            size="lg"
            onClickCapture={() => setIsMenuOpen(false)}
          >
            CV
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="navbarSocial">
          <div className="flex justify-start gap-4 pt-4">
            <Link href="mailto:philip@philipwhite.dev" color="foreground">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/philip-white-dev/"
              color="foreground"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link href="https://github.com/Null-Cat" color="foreground">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="https://gitea.philipwhite.dev/" color="foreground">
              <GiteaSVG />
            </Link>
            <Link href="https://null-cat.itch.io/" color="foreground">
              <FontAwesomeIcon icon={faItchIo} />
            </Link>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarMain;

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

      <NavbarContent className="sm:hidden absolute inset-0 flex flex-col items-center pointer-events-none" justify="center">
        <NavbarBrand>
          <Link href="/" className="text-inherit text-xl pointer-events-auto">
            Philip White
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href="/" className="text-inherit text-xl">
            Philip White
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex pr-16" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#Home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#About">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/PhilipWhiteCVGame.pdf">
            CV
          </Link>
        </NavbarItem>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.209 4.603c-.247 0-.525.02-.84.088c-.333.07-1.28.283-2.054 1.027C-.403 7.25.035 9.685.089 10.052c.065.446.263 1.687 1.21 2.768c1.749 2.141 5.513 2.092 5.513 2.092s.462 1.103 1.168 2.119c.955 1.263 1.936 2.248 2.89 2.367c2.406 0 7.212-.004 7.212-.004s.458.004 1.08-.394c.535-.324 1.013-.893 1.013-.893s.492-.527 1.18-1.73c.21-.37.385-.729.538-1.068c0 0 2.107-4.471 2.107-8.823c-.042-1.318-.367-1.55-.443-1.627c-.156-.156-.366-.153-.366-.153s-4.475.252-6.792.306c-.508.011-1.012.023-1.512.027v4.474l-.634-.301c0-1.39-.004-4.17-.004-4.17c-1.107.016-3.405-.084-3.405-.084s-5.399-.27-5.987-.324c-.187-.011-.401-.032-.648-.032zm.354 1.832h.111s.271 2.269.6 3.597C5.549 11.147 6.22 13 6.22 13s-.996-.119-1.641-.348c-.99-.324-1.409-.714-1.409-.714s-.73-.511-1.096-1.52C1.444 8.73 2.021 7.7 2.021 7.7s.32-.859 1.47-1.145c.395-.106.863-.12 1.072-.12m8.33 2.554c.26.003.509.127.509.127l.868.422l-.529 1.075a.686.686 0 0 0-.614.359a.685.685 0 0 0 .072.756l-.939 1.924a.69.69 0 0 0-.66.527a.687.687 0 0 0 .347.763a.686.686 0 0 0 .867-.206a.688.688 0 0 0-.069-.882l.916-1.874a.667.667 0 0 0 .237-.02a.657.657 0 0 0 .271-.137a8.826 8.826 0 0 1 1.016.512a.761.761 0 0 1 .286.282c.073.21-.073.569-.073.569c-.087.29-.702 1.55-.702 1.55a.692.692 0 0 0-.676.477a.681.681 0 1 0 1.157-.252c.073-.141.141-.282.214-.431c.19-.397.515-1.16.515-1.16c.035-.066.218-.394.103-.814c-.095-.435-.48-.638-.48-.638c-.467-.301-1.116-.58-1.116-.58s0-.156-.042-.27a.688.688 0 0 0-.148-.241l.516-1.062l2.89 1.401s.48.218.583.619c.073.282-.019.534-.069.657c-.24.587-2.1 4.317-2.1 4.317s-.232.554-.748.588a1.065 1.065 0 0 1-.393-.045l-.202-.08l-4.31-2.1s-.417-.218-.49-.596c-.083-.31.104-.691.104-.691l2.073-4.272s.183-.37.466-.497a.855.855 0 0 1 .35-.077"
              />
            </svg>
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
            href="#Home"
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
            href="#About"
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
            href="#Projects"
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
            href="#Contact"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4.209 4.603c-.247 0-.525.02-.84.088c-.333.07-1.28.283-2.054 1.027C-.403 7.25.035 9.685.089 10.052c.065.446.263 1.687 1.21 2.768c1.749 2.141 5.513 2.092 5.513 2.092s.462 1.103 1.168 2.119c.955 1.263 1.936 2.248 2.89 2.367c2.406 0 7.212-.004 7.212-.004s.458.004 1.08-.394c.535-.324 1.013-.893 1.013-.893s.492-.527 1.18-1.73c.21-.37.385-.729.538-1.068c0 0 2.107-4.471 2.107-8.823c-.042-1.318-.367-1.55-.443-1.627c-.156-.156-.366-.153-.366-.153s-4.475.252-6.792.306c-.508.011-1.012.023-1.512.027v4.474l-.634-.301c0-1.39-.004-4.17-.004-4.17c-1.107.016-3.405-.084-3.405-.084s-5.399-.27-5.987-.324c-.187-.011-.401-.032-.648-.032zm.354 1.832h.111s.271 2.269.6 3.597C5.549 11.147 6.22 13 6.22 13s-.996-.119-1.641-.348c-.99-.324-1.409-.714-1.409-.714s-.73-.511-1.096-1.52C1.444 8.73 2.021 7.7 2.021 7.7s.32-.859 1.47-1.145c.395-.106.863-.12 1.072-.12m8.33 2.554c.26.003.509.127.509.127l.868.422l-.529 1.075a.686.686 0 0 0-.614.359a.685.685 0 0 0 .072.756l-.939 1.924a.69.69 0 0 0-.66.527a.687.687 0 0 0 .347.763a.686.686 0 0 0 .867-.206a.688.688 0 0 0-.069-.882l.916-1.874a.667.667 0 0 0 .237-.02a.657.657 0 0 0 .271-.137a8.826 8.826 0 0 1 1.016.512a.761.761 0 0 1 .286.282c.073.21-.073.569-.073.569c-.087.29-.702 1.55-.702 1.55a.692.692 0 0 0-.676.477a.681.681 0 1 0 1.157-.252c.073-.141.141-.282.214-.431c.19-.397.515-1.16.515-1.16c.035-.066.218-.394.103-.814c-.095-.435-.48-.638-.48-.638c-.467-.301-1.116-.58-1.116-.58s0-.156-.042-.27a.688.688 0 0 0-.148-.241l.516-1.062l2.89 1.401s.48.218.583.619c.073.282-.019.534-.069.657c-.24.587-2.1 4.317-2.1 4.317s-.232.554-.748.588a1.065 1.065 0 0 1-.393-.045l-.202-.08l-4.31-2.1s-.417-.218-.49-.596c-.083-.31.104-.691.104-.691l2.073-4.272s.183-.37.466-.497a.855.855 0 0 1 .35-.077"
                />
              </svg>
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

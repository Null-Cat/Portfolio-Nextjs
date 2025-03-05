import ProjectCarousel from "@/app/components/ProjectCarousel";
import {
  CppSVG,
  GiteaSVG,
  JavaScriptSVG,
  NodejsSVG,
  UnrealEngineSVG,
  WindowsSVG,
} from "@/app/components/SVGs";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip, Image, Link, Spacer } from "@heroui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Corrupted Memory",
  description:
    "A university solo project, focusing on networking, webservers, websockets, RPCs, lobby systems and dedicated UE5 servers.",
  openGraph: {
    type: "website",
    url: "https://philipwhite.dev/corruptedmemory",
    title: "Project | Corrupted Memory",
    description:
      "A university solo project, focusing on networking, webservers, websockets, RPCs, lobby systems and dedicated UE5 servers.",
    images: [
      {
        url: "https://philipwhite.dev/corruptedmemory/corruptedmemory0.png",
        alt: "Project | Corrupted Memory",
      },
    ],
  },
};

const CorruptedMemoryProject = () => {
  return (
    <>
      <h1 className="flex justify-center sm:text-5xl text-4xl text-center pt-20 pb-4">
        Corrupted Memory
      </h1>
      <ProjectCarousel
        images={[
          {
            image: "/corruptedmemory/corruptedmemory7.png",
            alt: "Entrance Teleporters",
          },
          {
            image: "/corruptedmemory/corruptedmemory5.png",
            alt: "Aisle",
          },
          {
            image: "/corruptedmemory/corruptedmemory6.png",
            alt: "Aisle",
          },
          {
            image: "/corruptedmemory/corruptedmemory8.png",
            alt: "Exit Teleporters",
          },
          {
            image: "/corruptedmemory/corruptedmemory0.png",
            alt: "Login",
          },
          {
            image: "/corruptedmemory/corruptedmemory1.png",
            alt: "Welcome",
          },
          {
            image: "/corruptedmemory/corruptedmemory2.png",
            alt: "Create Lobby",
          },
          {
            image: "/corruptedmemory/corruptedmemory3.png",
            alt: "Lobbies Browser",
          },
          {
            image: "/corruptedmemory/corruptedmemory4.png",
            alt: "Lobby",
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
              color={"primary"}
              startContent={<NodejsSVG />}
            >
              Node.js
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
              color={"secondary"}
              startContent={<JavaScriptSVG />}
            >
              JavaScript
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

      <div className="flex flex-col place-items-center gap-4 p-4">
        <Link
          isExternal
          showAnchorIcon
          underline="always"
          href="https://gitea.philipwhite.dev/Philip/CorruptedMemory"
        >
          <GiteaSVG /> <Spacer />
          Game Project Files
        </Link>
        <Link
          isExternal
          showAnchorIcon
          underline="always"
          href="https://github.com/Null-Cat/CorruptedMemoryLobby"
        >
          <FontAwesomeIcon icon={faGithub} /> <Spacer />
          Webserver Project Files
        </Link>
      </div>

      <div className="flex flex-col items-center py-8">
        <h2 className="sm:text-4xl text-3xl">My Contributions</h2>
      </div>
      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">Lobby System</h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          The Lobby System was created using Nodejs, Expressjs, Websockets and
          SQL. It was designed to be scalable and able to be used in any
          dedicated server based UE5 project. The system was designed to be able
          to handle multiple lobbies at once and to be able to handle up to 4
          players in each game. Using Websockets the lobby system is able to
          display real time information to the players in the lobby such as the
          current players in the lobby and their ready state.
          <br />
          <br />
          The Client communicates with the server via basic web requests and
          websockets. Web API requests are used to handle the creation of
          lobbies, joining of lobbies, leaving of lobbies, and logging in
          actions that don&apos;t particularly need to be real time. Websockets
          are used to handle the real time actions such as the updating of the
          lobby information and the ready state of the players in the lobby.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/corruptedmemory/corruptedmemory9.png"
          alt="Lobby Snippet"
        />
        <Image
          className="w-full"
          src="/corruptedmemory/corruptedmemory12.png"
          alt="Lobby Snippet"
        />
      </div>

      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">
          Authentication and Security
        </h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          For the Authentication of web requests I used JWTs (JSON Web Tokens)
          to authenticate the requests. The JWTs were created using a secret key
          that was stored on the server via .env files that are manually added
          for security. The JWTs are created when users login producing a
          session that can be verified by the server this token is then stored
          in the games instance class so that the information is retained over
          different levels. I also used Bcrypt a popular and widely tested
          algorithm to hash the passwords of the users when they are stored in
          the database. This is done to ensure that if the database is ever
          compromised the passwords are not stored in plain text.
          <br />
          <br />
          Players are assigned permissions ie. &apos;JOIN_LOBBY&apos;,
          &apos;CREATE_LOBBY&apos;, &apos;DELETE_ACCOUNT&apos; etc. These are
          used to regulate what actions the player can perform on the server.
          These permissions are stored in the database and are assigned to the
          player when they login. This is done to ensure that players can only
          perform actions that they are allowed to perform.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/corruptedmemory/corruptedmemory10.png"
          alt="Security Snippet"
        />
        <Image
          className="w-full"
          src="/corruptedmemory/corruptedmemory11.png"
          alt="Security Snippet"
        />
        <Image
          className="w-full"
          src="/corruptedmemory/corruptedmemory13.png"
          alt="Security Snippet"
        />
        <Image
          className="w-full"
          src="/corruptedmemory/corruptedmemory14.png"
          alt="Security Snippet"
        />
      </div>

      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">Database</h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          The database was created using mariadb a SQL based database and was
          designed to be able to store all the information required for the
          lobby system and normalised to do so. The database was designed to be
          able to store the users information such as their username, password,
          and permissions. The database was also designed to be able to store
          the information about the lobbies such as the lobby name, the players
          in the lobby, the players ready state, the server port, the server
          state and the creator of the lobby. The database by design is able to
          handle multiple lobbies at once and can handle up to 4 players in each
          game.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/corruptedmemory/corruptedmemoryDiagram.png"
          alt="Database Snippet"
        />
      </div>
    </>
  );
};

export default CorruptedMemoryProject;

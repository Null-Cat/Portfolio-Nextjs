import FadeContent from "../ReactBits/FadeContent";
import Squares from "../ReactBits/Squares";
import { Divider, Image } from "@heroui/react";
import TechnologyExperience from "./components/TechnologyExperience";
import OtherTechnologyExperience from "./components/OtherTechnologyExperience";

const AboutMe = () => {
  return (
    <div
      id="About"
      className="relative w-full overflow-hidden sm:min-h-screen min-h-[100svh]"
    >
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>
      <div className="relative z-10 flex w-full flex-col items-center px-4 pt-20 pb-16 pointer-events-none">
        <FadeContent
          className="h-fit"
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <h1 className="sm:text-6xl text-4xl pb-16 font-bold pointer-events-auto">
            About Me
          </h1>
        </FadeContent>
        <div className="flex w-full grow flex-col items-center justify-center gap-4">
          <FadeContent
            className="flex h-fit w-full items-center justify-center"
            blur={false}
            duration={1000}
            delay={450}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="flex items-center rounded-lg border border-default-100 px-2 py-4 backdrop-blur">
              <div className="flex items-center space-x-4 px-1">
                <Image
                  alt="Warp Design Logo"
                  className="pointer-events-auto"
                  src="/warp.jpg"
                  width={60}
                />
                <Divider className="h-10" orientation="vertical" />
                <div className="flex flex-col">
                  <h2 className="pointer-events-auto text-base font-bold md:text-2xl lg:text-3xl">
                    Warp Design
                  </h2>
                  <p className="pointer-events-auto text-sm text-default-500 md:text-base lg:text-lg">
                    2025 - Present
                  </p>
                </div>
                <Divider className="h-10" orientation="vertical" />
                <div className="flex flex-col">
                  <h2 className="pointer-events-auto text-base font-bold md:text-xl lg:text-2xl">
                    Web Developer
                  </h2>
                </div>
              </div>
            </div>
          </FadeContent>
          <FadeContent
            className="flex h-fit w-full items-center justify-center"
            blur={false}
            duration={1000}
            delay={500}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="flex items-center rounded-lg border border-default-100 px-2 py-4 backdrop-blur">
              <div className="flex items-center space-x-4 px-1">
                <Image
                  alt="Royal Yachting Association Logo"
                  className="pointer-events-auto"
                  src="/RYA.svg"
                  width={60}
                />
                <Divider className="h-10" orientation="vertical" />
                <div className="flex flex-col">
                  <h2 className="pointer-events-auto text-base font-bold md:text-2xl lg:text-3xl">
                    Royal Yachting Association
                  </h2>
                  <p className="pointer-events-auto text-sm text-default-500 md:text-base lg:text-lg">
                    2024 - 2025
                  </p>
                </div>
                <Divider className="h-10" orientation="vertical" />
                <div className="flex flex-col">
                  <h2 className="pointer-events-auto text-base font-bold md:text-xl lg:text-2xl">
                    Software Quality Assurance
                  </h2>
                </div>
              </div>
            </div>
          </FadeContent>
          <FadeContent
            className="flex h-fit w-full items-center justify-center"
            blur={false}
            duration={1000}
            delay={550}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="flex items-center rounded-lg border border-default-100 px-2 py-4 backdrop-blur">
              <div className="flex items-center space-x-4 px-1">
                <Image
                  alt="Falmouth University Logo"
                  className="pointer-events-auto"
                  src="/FalmouthUniversityLogo.png"
                  width={60}
                />
                <Divider className="h-10" orientation="vertical" />
                <div className="flex flex-col">
                  <h2 className="pointer-events-auto text-base font-bold md:text-2xl lg:text-3xl">
                    Falmouth University
                  </h2>
                  <p className="pointer-events-auto text-sm text-default-500 md:text-base lg:text-lg">
                    2021 - 2024
                  </p>
                </div>
                <Divider className="h-10" orientation="vertical" />
                <div className="flex flex-col">
                  <h2 className="pointer-events-auto text-base font-bold md:text-xl lg:text-2xl">
                    BA(Hons)
                  </h2>
                  <p className="pointer-events-auto text-sm text-default-500 md:text-base lg:text-lg">
                    Game Development: Programming
                  </p>
                </div>
              </div>
            </div>
          </FadeContent>
          <FadeContent
            className="flex h-fit w-full flex-wrap items-center justify-center gap-1 pt-16"
            blur={false}
            duration={1000}
            delay={700}
            easing="ease-out"
            initialOpacity={0}
          >
            <TechnologyExperience
              altText="Next js Logo"
              src="https://skillicons.dev/icons?i=nextjs"
              text="Next.js"
              subText="1+ Year"
            />
            <TechnologyExperience
              altText="React Logo"
              src="https://skillicons.dev/icons?i=react"
              text="React"
              subText="1+ Year"
            />
            <TechnologyExperience
              altText="Node js Logo"
              src="https://skillicons.dev/icons?i=nodejs"
              text="Node.js"
              subText="5+ Years"
            />
            <TechnologyExperience
              altText="Unreal Engine Logo"
              src="https://skillicons.dev/icons?i=unreal"
              text="Unreal Engine"
              subText="3+ Years"
            />
            <TechnologyExperience
              altText="Unity Logo"
              src="https://skillicons.dev/icons?i=unity"
              text="Unity"
              subText="2+ Years"
            />
          </FadeContent>
          <FadeContent
            className="flex h-fit w-full flex-wrap items-center justify-center gap-1 pt-3"
            blur={false}
            duration={1000}
            delay={900}
            easing="ease-out"
            initialOpacity={0}
          >
            <TechnologyExperience
              altText="Java Script Logo"
              src="https://skillicons.dev/icons?i=js"
              text="JavaScript"
              subText="5+ Years"
            />
            <TechnologyExperience
              altText="Type Script Logo"
              src="https://skillicons.dev/icons?i=ts"
              text="TypeScript"
              subText="2+ Years"
            />
            <TechnologyExperience
              altText="C Plus Plus Logo"
              src="https://skillicons.dev/icons?i=cpp"
              text="C++"
              subText="3+ Years"
            />
            <TechnologyExperience
              altText="C Sharp Logo"
              src="https://skillicons.dev/icons?i=cs"
              text="C#"
              subText="2+ Years"
            />
          </FadeContent>
          <FadeContent
            className="flex w-fit flex-wrap items-center justify-center gap-1 pt-3"
            blur={false}
            duration={1000}
            delay={1100}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="flex items-center rounded-lg border border-default-100 px-2 py-4 backdrop-blur">
              <div className="grid grid-cols-5 items-center justify-center gap-1 px-1 lg:flex">
                <OtherTechnologyExperience
                  toolTipText="Python"
                  altText="Python Logo"
                  src="https://skillicons.dev/icons?i=py"
                />
                <OtherTechnologyExperience
                  toolTipText="Java"
                  altText="Java Logo"
                  src="https://skillicons.dev/icons?i=java"
                />
                <OtherTechnologyExperience
                  toolTipText="Lua"
                  altText="Lua Logo"
                  src="https://skillicons.dev/icons?i=lua"
                />
                <OtherTechnologyExperience
                  toolTipText="Docker"
                  altText="Docker Logo"
                  src="https://skillicons.dev/icons?i=docker"
                />
                <OtherTechnologyExperience
                  toolTipText="Postgres"
                  altText="Postgres Logo"
                  src="https://skillicons.dev/icons?i=postgres"
                />
                <OtherTechnologyExperience
                  toolTipText="MySQL"
                  altText="My SQL Logo"
                  src="https://skillicons.dev/icons?i=mysql"
                />
                <OtherTechnologyExperience
                  toolTipText="Express.js"
                  altText="Express js Logo"
                  src="https://skillicons.dev/icons?i=express"
                />
                <OtherTechnologyExperience
                  toolTipText="Tailwind CSS"
                  altText="Tailwind CSS Logo"
                  src="https://skillicons.dev/icons?i=tailwind"
                />
                <OtherTechnologyExperience
                  toolTipText="Bootstrap"
                  altText="Bootstrap Logo"
                  src="https://skillicons.dev/icons?i=bootstrap"
                />
                <OtherTechnologyExperience
                  toolTipText="Git"
                  altText="Git Logo"
                  src="https://skillicons.dev/icons?i=git"
                />
                <OtherTechnologyExperience
                  toolTipText="GitHub"
                  altText="Git Hub Logo"
                  src="https://skillicons.dev/icons?i=github"
                />
                <OtherTechnologyExperience
                  toolTipText="Photoshop"
                  altText="Photoshop Logo"
                  src="https://skillicons.dev/icons?i=photoshop"
                />
                <OtherTechnologyExperience
                  toolTipText="Blender"
                  altText="Blender Logo"
                  src="https://skillicons.dev/icons?i=blender"
                />
                <OtherTechnologyExperience
                  toolTipText="Visual Studio"
                  altText="Visual Studio Logo"
                  src="https://skillicons.dev/icons?i=visualstudio"
                />
                <OtherTechnologyExperience
                  toolTipText="Visual Studio Code"
                  altText="Visual Studio Code Logo"
                  src="https://skillicons.dev/icons?i=vscode"
                />
                <OtherTechnologyExperience
                  toolTipText="JetBrains Rider"
                  altText="Jet Brains Logo"
                  src="https://skillicons.dev/icons?i=rider"
                />
                <OtherTechnologyExperience
                  toolTipText="Raspberry Pi"
                  altText="Raspberry Pi Logo"
                  src="https://skillicons.dev/icons?i=raspberrypi"
                />
                <OtherTechnologyExperience
                  toolTipText="Arduino"
                  altText="Arduino Logo"
                  src="https://skillicons.dev/icons?i=arduino"
                />
                <OtherTechnologyExperience
                  toolTipText="Heroku"
                  altText="Heroku Logo"
                  src="https://skillicons.dev/icons?i=heroku"
                />
                <OtherTechnologyExperience
                  toolTipText="Nginx"
                  altText="Nginx Logo"
                  src="https://skillicons.dev/icons?i=nginx"
                />
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import FadeContent from "../ReactBits/FadeContent";
import Squares from "../ReactBits/Squares";
import { Divider, Image } from "@/app/lib/heroui";
import TechnologyExperience from "./components/TechnologyExperience";
import OtherTechnologyExperience from "./components/OtherTechnologyExperience";

const AboutMe = () => {
  return (
    <div
      id="About"
      className="relative w-full overflow-hidden sm:min-h-screen min-h-svh"
    >
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.2}
          squareSize={50}
          direction="diagonal"
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>
      <div className="relative z-10 flex min-h-svh w-full flex-col items-center px-4 pt-20 pb-16 pointer-events-none sm:min-h-screen">
        <FadeContent
          className="h-fit shrink-0"
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <h1 className="pointer-events-auto pb-16 text-4xl font-bold sm:pb-0 sm:text-6xl">
            About Me
          </h1>
        </FadeContent>
        <div className="flex w-full min-h-0 grow flex-col items-center justify-center gap-4">
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
                  src="/WarpDesignLogo.png"
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
              src="/skillicons/nextjs.svg"
              text="Next.js"
              subText="2+ Years"
            />
            <TechnologyExperience
              altText="React Logo"
              src="/skillicons/react.svg"
              text="React"
              subText="2+ Years"
            />
            <TechnologyExperience
              altText="Node js Logo"
              src="/skillicons/nodejs.svg"
              text="Node.js"
              subText="6+ Years"
            />
            <TechnologyExperience
              altText="Unreal Engine Logo"
              src="/skillicons/unreal.svg"
              text="Unreal Engine"
              subText="4+ Years"
            />
            <TechnologyExperience
              altText="Unity Logo"
              src="/skillicons/unity.svg"
              text="Unity"
              subText="3+ Years"
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
              altText="PHP Logo"
              src="/skillicons/php.svg"
              text="PHP"
              subText="1+ Years"
            />
            <TechnologyExperience
              altText="Java Script Logo"
              src="/skillicons/js.svg"
              text="JavaScript"
              subText="6+ Years"
            />
            <TechnologyExperience
              altText="Type Script Logo"
              src="/skillicons/ts.svg"
              text="TypeScript"
              subText="3+ Years"
            />
            <TechnologyExperience
              altText="C Plus Plus Logo"
              src="/skillicons/cpp.svg"
              text="C++"
              subText="4+ Years"
            />
            <TechnologyExperience
              altText="C Sharp Logo"
              src="/skillicons/cs.svg"
              text="C#"
              subText="3+ Years"
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
                  src="/skillicons/py.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Java"
                  altText="Java Logo"
                  src="/skillicons/java.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Lua"
                  altText="Lua Logo"
                  src="/skillicons/lua.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Docker"
                  altText="Docker Logo"
                  src="/skillicons/docker.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Postgres"
                  altText="Postgres Logo"
                  src="/skillicons/postgres.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="MySQL"
                  altText="My SQL Logo"
                  src="/skillicons/mysql.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Express.js"
                  altText="Express js Logo"
                  src="/skillicons/express.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Tailwind CSS"
                  altText="Tailwind CSS Logo"
                  src="/skillicons/tailwind.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Bootstrap"
                  altText="Bootstrap Logo"
                  src="/skillicons/bootstrap.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Git"
                  altText="Git Logo"
                  src="/skillicons/git.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="GitHub"
                  altText="Git Hub Logo"
                  src="/skillicons/github.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Photoshop"
                  altText="Photoshop Logo"
                  src="/skillicons/photoshop.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Blender"
                  altText="Blender Logo"
                  src="/skillicons/blender.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Visual Studio"
                  altText="Visual Studio Logo"
                  src="/skillicons/visualstudio.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Visual Studio Code"
                  altText="Visual Studio Code Logo"
                  src="/skillicons/vscode.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="JetBrains Rider"
                  altText="Jet Brains Logo"
                  src="/skillicons/rider.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Raspberry Pi"
                  altText="Raspberry Pi Logo"
                  src="/skillicons/raspberrypi.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Arduino"
                  altText="Arduino Logo"
                  src="/skillicons/arduino.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Heroku"
                  altText="Heroku Logo"
                  src="/skillicons/heroku.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Google Cloud"
                  altText="Google Cloud Logo"
                  src="/skillicons/gcp.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Cloudflare"
                  altText="Cloudflare Logo"
                  src="/skillicons/cloudflare.svg"
                />
                <OtherTechnologyExperience
                  toolTipText="Nginx"
                  altText="Nginx Logo"
                  src="/skillicons/nginx.svg"
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

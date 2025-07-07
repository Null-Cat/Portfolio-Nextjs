import ProjectCarousel from "@/app/components/ProjectCarousel";
import { ReactSVG, TypeScriptSVG } from "@/app/components/SVGs";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip, Link, Spacer } from "@heroui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Waffle Sudoku",
  description:
    "A portfolio test submission, focusing on consistent gameplay, UI/UX, and responsive design.",
  openGraph: {
    type: "website",
    url: "https://philipwhite.dev/wafflesudoku",
    title: "Project | Waffle Sudoku",
    description:
      "A portfolio test submission, focusing on consistent gameplay, UI/UX, and responsive design.",
    images: [
      {
        url: "https://philipwhite.dev/wafflesudoku/waffle.png",
        alt: "Project | Waffle Sudoku",
      },
    ],
  },
};

const WaffleSudokuProject = () => {
  return (
    <>
      <h1 className="flex justify-center sm:text-5xl text-4xl text-center pt-20 pb-4">
        Waffle Sudoku
      </h1>

      <ProjectCarousel
        images={[
          {
            image: "/wafflesudoku/Screen1.png",
            alt: "Main Menu",
          },
          {
            image: "/wafflesudoku/Screen2.png",
            alt: "Gameplay",
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
              startContent={<ReactSVG />}
            >
              React 19
            </Chip>
            <Chip
              size="sm"
              radius="sm"
              variant="shadow"
              className="flex gap-1"
              color={"secondary"}
              startContent={<TypeScriptSVG />}
            >
              TypeScript
            </Chip>
            <Chip
              size="sm"
              radius="sm"
              variant="shadow"
              className="flex gap-1"
              color={"default"}
              startContent={
                <FontAwesomeIcon style={{ width: "14px" }} icon={faGlobe} />
              }
            >
              Web
            </Chip>
          </div>
          <ul className="sm:text-right">
            <li>2D</li>
            <li>Hints System</li>
            <li>Smart Highlighting</li>
            <li>Visual Feedback</li>
          </ul>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl">Description</h2>
          <p className="max-w-prose">
            <br />
            A sudoku game built with React and TypeScript, designed as a
            portfolio test submission. The project focuses on consistent
            gameplay, UI/UX, and responsive design. It features a hints system,
            smart highlighting, and visual feedback to enhance the user
            experience. The game is playable on any device with a web browser,
            making it accessible to a wide audience.
            <br />
            <br />
            The project showcases my ability to create engaging and
            user-friendly web applications. It demonstrates my skills in React
            and TypeScript, as well as my understanding of game design
            principles. The game is fully responsive, ensuring a seamless
            experience across different devices and screen sizes. The focus on
            UI/UX design ensures that the game is not only functional but also
            visually appealing and easy to navigate.
          </p>
        </div>
      </div>

      <div className="flex flex-col place-items-center gap-4 p-4">
        <Link
          isExternal
          showAnchorIcon
          underline="always"
          href="https://waffle.philipwhite.dev/"
        >
          Live Demo
        </Link>
        <Link
          isExternal
          showAnchorIcon
          underline="always"
          href="https://github.com/Null-Cat/Waffle-Test-FE"
        >
          <FontAwesomeIcon icon={faGithub} /> <Spacer />
          Project Files Frontend
        </Link>
        <Link
          isExternal
          showAnchorIcon
          underline="always"
          href="https://github.com/Null-Cat/Waffle-Test-BE"
        >
          <FontAwesomeIcon icon={faGithub} /> <Spacer />
          Project Files Backend
        </Link>
      </div>
    </>
  );
};

export default WaffleSudokuProject;

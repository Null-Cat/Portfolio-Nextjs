import AboutMe from "./components/HomePage/AboutMe";
import Contact from "./components/HomePage/Contact";
import Introduction from "./components/HomePage/Introduction";
import Projects from "./components/HomePage/Projects";

export default function Home() {
  return (
    <>
      <Introduction />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

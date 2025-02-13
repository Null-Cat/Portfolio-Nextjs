import { TextEffect } from "@/components/ui/text-effect";
import LetterGlitch from "./components/ReactBits/LetterGlitch";

export default function Home() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="relative h-full w-full">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={false}
            smooth={true}
            glitchColors={["#616161", "#333333", "#0a0a0a"]}
          />
          <TextEffect
            className="absolute inset-0 flex flex-col items-start justify-center h-full text-7xl font-bold p-4"
            preset="fade-in-blur"
            speedReveal={1.1}
            speedSegment={0.3}
            per="line"
          >
            {`Hi 
            I'm Philip 
            I'm a Web and Game Developer`}
          </TextEffect>
        </div>
      </div>
    </>
  );
}

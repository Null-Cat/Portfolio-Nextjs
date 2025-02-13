import { TextEffect } from "@/components/ui/text-effect";
import LetterGlitch from "./components/ReactBits/LetterGlitch";

export default function Home() {
  return (
    <>
      <div style={{ height: "92.9vh" }}>
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
            per="line"
            as="p"
            segmentWrapperClassName="overflow-hidden block"
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.5 },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                  },
                },
              },
            }}
          >
            {`Hi!\nI'm Philip\nI'm a Web and Game Programmer`}
          </TextEffect>
        </div>
      </div>
    </>
  );
}

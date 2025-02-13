import DecryptedText from "../ReactBits/DecryptedText";
import LetterGlitch from "../ReactBits/LetterGlitch";

const Introduction = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="relative h-full w-full">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
          glitchColors={["#616161", "#333333", "#0a0a0a"]}
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center h-full p-4">
          <DecryptedText
            parentClassName="font-bold sm:text-7xl text-5xl"
            text="Hi!"
            animateOn="view"
            revealDirection="start"
            sequential={true}
            speed={50}
          />
          <DecryptedText
            parentClassName="sm:text-6xl text-4xl"
            text="I'm Philip"
            animateOn="view"
            revealDirection="start"
            sequential={true}
            speed={50}
          />
          <DecryptedText
            parentClassName="sm:text-6xl text-4xl"
            text="I'm a Web & Game Developer"
            animateOn="view"
            revealDirection="start"
            sequential={true}
            speed={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;

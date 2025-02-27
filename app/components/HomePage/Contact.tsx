import FadeContent from "../ReactBits/FadeContent";
import Threads from "../ReactBits/Thread";

const Contact = () => {
  return (
    <div id="Contact" className="h-svh">
      <div className="relative h-full w-full">
        <Threads amplitude={2} distance={0.5} enableMouseInteraction={false} />
        <div className="absolute inset-0 flex flex-col px-4 pt-20">
          <FadeContent
            className="h-fit"
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <h1 className="sm:text-6xl text-4xl text-center">Contact Me</h1>
          </FadeContent>
        </div>
      </div>
    </div>
  );
};

export default Contact;

"use client";
import { LayoutGroup, motion } from "framer-motion";
import RotatingText from "../../ReactBits/RotatingText";
import DecryptedText from "../../ReactBits/DecryptedText";

const RotatingRoles = () => {
  return (
    <LayoutGroup>
      <motion.p className="flex flex-wrap center-items gap-3" layout>
        <motion.span
          className="pt-0.5 sm:pt-1 md:pt-2"
          layout
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
        >
          <DecryptedText
            parentClassName="sm:text-6xl text-4xl"
            text="I'm a"
            animateOn="view"
            revealDirection="start"
            sequential={true}
            speed={50}
          />
        </motion.span>
        <RotatingText
          texts={[
            "Frontend",
            "Gameplay",
            "Backend",
            "Multiplayer",
            "Full-Stack",
          ]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-primary overflow-hidden py-0.5 sm:py-1 md:py-2 sm:text-6xl text-4xl justify-center text-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pt-0.5 sm:pt-1 md:pt-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        <motion.span
          className="pt-0.5 sm:pt-1 md:pt-2"
          layout
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
        >
          <DecryptedText
            parentClassName="sm:text-6xl text-4xl"
            text="Developer"
            animateOn="view"
            revealDirection="start"
            sequential={true}
            speed={50}
          />
        </motion.span>
      </motion.p>
    </LayoutGroup>
  );
};

export default RotatingRoles;

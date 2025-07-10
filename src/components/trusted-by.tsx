import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "motion/react";

export default function TrustedBy() {
  return (
    <motion.div
      initial={{
        y: 50,
        filter: "blur(5px)",
      }}
      whileInView={{
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,

        type: "spring",
        damping: 10,
        stiffness: 85,
      }}
      viewport={{
        once: true,
      }}
    >
      <p className="text-center text-2xl font-primary text-zinc-400 font-semibold">
        Trusted by India's fastest-growing{" "}
        <span className="text-primary-text">D2C brands</span>
      </p>

      <InfiniteMovingCards
        items={[
          "/baccabucci.svg",
          "/bearhouse.svg",
          "/emma.svg",
          "/frido.svg",
          "/myfitness.svg",
          "/nykaa.svg",
        ]}
        direction="right"
        speed="normal"
      />
    </motion.div>
  );
}

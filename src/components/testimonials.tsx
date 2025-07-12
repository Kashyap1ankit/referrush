import { FaReadme } from "react-icons/fa6";
import Carousel from "./ui/carousel";
import { motion } from "motion/react";
import { slideData } from "@/lib/constant";

export default function Testimonials() {
  return (
    <div>
      <div className="flex items-center gap-2 bg-btn-primary  p-1 px-2 rounded-2xl w-fit mx-auto mb-6">
        <FaReadme className="text-white" />
        <p className="text-xs font-secondary font-semibold text-white">
          Testimonials
        </p>
      </div>

      <motion.p
        className="bg-linear-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent text-center font-primary font-bold text-5xl "
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
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
        Real Stories From{" "}
        <span className="text-primary-text">Real People </span>
      </motion.p>

      <motion.div
        className="relative overflow-hidden w-full h-full py-20 "
        initial={{
          y: 50,
          opacity: 0,
          filter: "blur(5px)",
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 10,
          stiffness: 85,
          delay: 0.25,
        }}
        viewport={{
          once: true,
        }}
      >
        <Carousel slides={slideData} />
      </motion.div>
    </div>
  );
}

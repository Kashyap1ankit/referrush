import { useEffect, useRef, useState } from "react";
import { FaPause, FaShopify } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { Button } from "./ui/button";
import { BsGraphUpArrow } from "react-icons/bs";
import { SiCalendly } from "react-icons/si";
import { LuBadgeDollarSign } from "react-icons/lu";
import { motion } from "motion/react";

export default function HeroSection() {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef(null);

  useEffect(() => {
    if (!playVideo) {
      vidRef.current.pause();
      return;
    }
    vidRef.current.play();
  }, [playVideo]);

  return (
    <div className="relative w-11/12 max-w-5xl mx-auto px-4 md:px-6 lg:px-0">
      {/* Badge Section */}
      <motion.div
        className="flex items-center gap-2 bg-btn-primary py-1 px-2 rounded-md border border-dashed border-btn-secondary w-fit mx-auto mb-6 opacity-95"
        initial={{ y: 50, opacity: 0, filter: "blur(5px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 10,
          stiffness: 85,
        }}
      >
        <p className="text-xs sm:text-sm font-secondary font-semibold text-white">
          Backed by
        </p>
        <img src="/wtf.png" className="w-6 sm:w-8" />
      </motion.div>

      {/* Heading */}
      <motion.p
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-primary font-bold text-center"
        initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 10,
          stiffness: 85,
          delay: 0.25,
        }}
      >
        Boost Sales with Automated, Omni Channel{" "}
        <span className="bg-linear-to-l from-btn-secondary to-green-500 text-transparent bg-clip-text">
          Referrals
        </span>
      </motion.p>

      {/* Subheading */}
      <motion.p
        className="font-secondary text-zinc-400 font-semibold text-center w-full max-w-2xl mx-auto mt-6 px-2 sm:px-4"
        initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 10,
          stiffness: 85,
          delay: 0.5,
        }}
      >
        Reward your customers for spreading the word. Referrush gives every
        shopper a personal referral link to share across WhatsApp, SMS, email &
        social, automating rewards, tracking, and discounts without any manual
        work.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center items-center mt-10 sm:mt-12"
        initial={{ y: 50, opacity: 0, filter: "blur(5px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 10,
          stiffness: 85,
          delay: 0.75,
        }}
      >
        <Button className="rounded-full bg-linear-to-t from-btn-primary to-btn-secondary text-white font-primary text-base sm:text-lg font-semibold group cursor-pointer px-8 sm:px-12 has-[>svg]:px-8">
          <p>Install on Shopify</p>
          <FaShopify className="group-hover:translate-x-2 duration-500" />
        </Button>
        <Button className="rounded-full bg-gray-500/20 font-primary text-base sm:text-lg font-semibold group cursor-pointer px-8 sm:px-12 has-[>svg]:px-8 border border-zinc-800">
          <p>Book a Demo</p>
          <SiCalendly className="group-hover:translate-x-2 duration-500 bg-white rounded-full p-1 size-5 sm:size-6 text-primary-text" />
        </Button>
      </motion.div>

      {/* Floating Icons */}
      <div className="absolute top-[20rem] sm:top-[18rem] md:top-[20rem] lg:top-[17rem] w-full">
        <div className="flex justify-between px-4  md:px-16">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <LuBadgeDollarSign className="rounded-lg bg-radial-[at_25%_25%] from-btn-secondary to-green-800 text-white size-12 sm:size-16 p-3 sm:p-4 -rotate-[24deg]" />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <BsGraphUpArrow className="rounded-lg bg-radial-[at_25%_25%] from-btn-secondary to-green-800 text-white size-12 sm:size-16 p-3 sm:p-4 rotate-[24deg]" />
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-24 relative w-full h-fit [mask-image:linear-gradient(to_top,transparent,black_20%)] border border-zinc-800 rounded">
        <video
          loop
          muted
          ref={vidRef}
          className={`w-full h-auto object-cover rounded-2xl ${
            !playVideo ? "blur-xs" : ""
          }`}
        >
          <source src="demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button */}
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none bg-btn-primary size-16 sm:size-20 flex items-center justify-center rounded-full p-4 sm:p-6 transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label={playVideo ? "Pause video" : "Play video"}
        >
          {playVideo ? (
            <FaPause className="text-white size-12 sm:size-16 drop-shadow-lg" />
          ) : (
            <FaPlay className="text-white size-12 sm:size-16 drop-shadow-lg" />
          )}
        </div>
      </div>
    </div>
  );
}

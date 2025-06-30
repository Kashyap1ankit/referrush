import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaShopify } from "react-icons/fa6";
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
    <motion.div
      className="relative"
      initial={{
        filter: "blur(10px)",
      }}
      animate={{
        filter: "blur(0px)",
      }}
    >
      <motion.p
        className="text-7xl text-white font-primary font-bold text-center text-white"
        initial={{
          filter: "blur(10px)",
          y: 30,
        }}
        animate={{
          filter: "blur(0px)",
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        Boost Sales with Automated, Omni Channel{" "}
        <span className="bg-linear-to-l  from-green-600 to-green-500 text-transparent bg-clip-text">
          Referrals
        </span>
      </motion.p>

      <motion.p
        className="font-secondary text-zinc-400 font-semibold text-center w-3/4 mx-auto mt-6"
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          y: 30,
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        Reward your customers for spreading the word. Referrush gives every
        shopper a personal referral link to share across WhatsApp, SMS, email &
        social automating rewards, tracking, and discounts without any manual
        work.
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-12 justify-center mt-12"
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          y: 30,
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Button
          className="rounded-full bg-linear-to-t from-green-900 to-green-600  text-white font-primary text-lg font-semibold group cursor-pointer px-12 has-[>svg]:px-8"
          variant={"default"}
          size={"lg"}
        >
          <p>Install on Shopify</p>
          <FaShopify className="group-hover:translate-x-2 duration-500 " />
        </Button>
        <Button
          className="rounded-full bg-gray-500/20 font-primary text-lg font-semibold group cursor-pointer px-12 has-[>svg]:px-8 border border-zinc-800"
          variant={"default"}
          size={"lg"}
        >
          <p>Book a Demo</p>
          <SiCalendly className="group-hover:translate-x-2 duration-500 bg-white rounded-full p-1 size-6 text-primary-text" />
        </Button>
      </motion.div>

      <div className="absolute top-62 w-full">
        <div className="flex justify-between px-24">
          <motion.div
            initial={{
              y: 0,
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <LuBadgeDollarSign className="rounded-lg bg-radial-[at_25%_25%] from-green-600 to-green-800  text-white size-16 p-4  -rotate-z-24" />
          </motion.div>
          <motion.div
            initial={{
              y: 0,
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <BsGraphUpArrow className="rounded-lg bg-radial-[at_25%_25%] from-green-600 to-green-800  text-white size-16 p-4 rotate-z-24" />
          </motion.div>
        </div>
      </div>

      <div className="mt-12 relative w-full">
        <video
          loop
          muted
          ref={vidRef}
          className="w-full h-auto object-cover rounded-lg"
        >
          <source src="demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Button
          onClick={() => setPlayVideo(!playVideo)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
          aria-label={playVideo ? "Pause video" : "Play video"}
        >
          {playVideo ? (
            <FaPause className="size-20 text-white drop-shadow-lg" />
          ) : (
            <FaPlay className="size-28 text-white bg-black/50 rounded-full p-6 drop-shadow-lg" />
          )}
        </Button>
      </div>

      {/* <div className="relative z-50 mt-24">
        <Safari
          url="demo.mp4"
          className="size-full shadow-2xl shadow-primary/30 dark:shadow-primary/20"
        />
      </div> */}
    </motion.div>
  );
}

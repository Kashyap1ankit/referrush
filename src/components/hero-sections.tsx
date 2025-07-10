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
    <motion.div
      className="relative"
      initial={{
        filter: "blur(10px)",
      }}
      animate={{
        filter: "blur(0px)",
      }}
    >
      <motion.div
        className="flex items-center gap-2 bg-btn-primary  p-2 rounded-md border border-dashed border-btn-secondary w-fit mx-auto mb-6"
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
        <p className="text-md font-secondary font-semibold text-white">
          Backed by{" "}
        </p>
        <img src="/wtf.png" className=" w-10" />
      </motion.div>

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
        <span className="bg-linear-to-l  from-btn-secondary to-green-500 text-transparent bg-clip-text">
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
          className="rounded-full bg-linear-to-t from-btn-primary to-btn-secondary  text-white font-primary text-lg font-semibold group cursor-pointer px-12 has-[>svg]:px-8"
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
        <div className="flex justify-between px-16">
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
            <LuBadgeDollarSign className="rounded-lg bg-radial-[at_25%_25%] from-btn-secondary to-green-800  text-white size-16 p-4  -rotate-z-24" />
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
            <BsGraphUpArrow className="rounded-lg bg-radial-[at_25%_25%] from-btn-secondary to-green-800  text-white size-16 p-4 rotate-z-24" />
          </motion.div>
        </div>
      </div>

      <div className="mt-24 relative w-full h-fit [mask-image:linear-gradient(to_top,transparent,black_20%)] ">
        <video
          loop
          muted
          ref={vidRef}
          className={`w-full h-auto object-cover rounded-2xl border border-zinc-800 ${
            !playVideo ? "blur-xs" : ""
          }`}
        >
          <source src="demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none bg-btn-primary  size-20 flex items-center justify-center  rounded-full p-6  transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label={playVideo ? "Pause video" : "Play video"}
        >
          {playVideo ? (
            <FaPause className="size-20 text-white drop-shadow-lg" />
          ) : (
            <FaPlay className="size-20 text-white drop-shadow-lg" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

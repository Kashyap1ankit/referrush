import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function HowItWorks() {
  return (
    <div className="w-11/12 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 bg-btn-primary  p-1 px-2 rounded-2xl w-fit mx-auto mb-6">
        <p className="text-xs font-secondary font-semibold text-white">
          How it works
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
        How We Streamline Your{" "}
        <span className="text-primary-text">Process</span>
      </motion.p>

      <div className="flex flex-col gap-12 mt-12">
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-6 p-6 rounded-3xl border border-zinc-800 "
          initial={{
            y: 50,
            opacity: 0,
            filter: "blur(50px)",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.75,
            type: "tween",
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col gap-2 justify-betweenw-full w-full md:w-1/2  ">
            <div className="flex flex-col gap-6">
              <p className="font-primary text-2xl text-white font-bold">
                1. Tap WhatsApp Sharing
              </p>
              <p className="font-secondary text-md text-zinc-400 font-normal">
                With a single tap, customers can effortlessly share via
                WhatsApp, SMS, or Email — no friction, no confusion, just
                seamless reach.
              </p>
            </div>

            <Button className="rounded-2xl font-secondary w-fit cursor-pointer border border-zinc-700 ">
              Learn More
            </Button>
          </div>
          <div className="bg-grid-bg p rounded-2xl w-full md:w-1/2 border border-zinc-800">
            <img src="/phone-2.png" className="w-52 mx-auto" />
          </div>
        </motion.div>

        <motion.div
          className="flex  flex-col md:flex-row-reverse justify-between gap-6 p-12 rounded-3xl border border-zinc-800 "
          initial={{
            y: 50,
            opacity: 0,
            filter: "blur(50px)",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.75,
            type: "tween",
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col gap-6 flex flex-col gap-2 justify-between  w-full md:w-1/2  ">
            <div className="flex flex-col gap-6">
              <p className="font-primary text-2xl text-white font-bold">
                2.Friend Accepts Gift
              </p>
              <p className="font-secondary text-md text-zinc-400 font-normal ">
                The referred friend lands on a beautifully designed page, sees
                the offer, and makes a purchase — instantly boosting your sales.
              </p>
            </div>

            <Button className="rounded-2xl font-secondary mt-12 w-fit cursor-pointer border border-zinc-700 ">
              Learn More
            </Button>
          </div>
          <div className=" bg-grid-bg p rounded-2xl w-full md:w-1/2 border border-zinc-800">
            <img src="/phone-2.png" className="w-52 mx-auto " />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between gap-6 p-12 rounded-3xl border border-zinc-800 "
          initial={{
            y: 50,
            opacity: 0,
            filter: "blur(50px)",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.75,
            type: "tween",
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col gap-6 justify-between w-full md:w-1/2 ">
            <div className="flex flex-col gap-6">
              <p className="font-primary text-2xl text-white font-bold">
                3. Instant Rewards
              </p>
              <p className="font-secondary text-md text-zinc-400 font-normal ">
                Once the friend makes a purchase, your customer is automatically
                rewarded — with store credit, cashback, or free products.
              </p>
            </div>

            <Button className="rounded-2xl font-secondary mt-12 w-fit cursor-pointer border border-zinc-700 ">
              Learn More
            </Button>
          </div>
          <div className=" bg-grid-bg p rounded-2xl w-full md:w-1/2 border border-zinc-800">
            <img src="/phone-2.png" className="w-52 mx-auto " />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

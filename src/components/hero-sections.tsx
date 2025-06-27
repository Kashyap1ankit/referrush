import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaShopify } from "react-icons/fa6";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { SiCalendly } from "react-icons/si";

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
    <div>
      <p className="text-7xl text-white font-primary font-bold text-center text-white">
        Boost Sales with Automated, Omni Channel{" "}
        <span className="text-primary-text">Referrals</span>
      </p>

      <p className="font-secondary text-zinc-400 font-semibold text-center w-3/4 mx-auto mt-6">
        Reward your customers for spreading the word. Referrush gives every
        shopper a personal referral link to share across WhatsApp, SMS, email &
        social automating rewards, tracking, and discounts without any manual
        work.
      </p>

      <div className="flex flex-col md:flex-row gap-12 justify-center mt-12">
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
    </div>
  );
}

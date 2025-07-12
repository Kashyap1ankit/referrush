import { FaReadme } from "react-icons/fa6";
import Carousel from "./ui/carousel";
import { motion } from "motion/react";

export default function Testimonials() {
  const slideData = [
    {
      review:
        "Great product and amazing team! Have been using Referrush for almost 5 months and will recommend it to other business as well!Team is dedicated and very responsive. 10/10!",
      position: "CEO, MyFrido",
      name: "Ganesh Sonawane",
      image: "/ganesh.webp",
    },
    {
      review:
        "ReferRush is the easiest, highest quality, and most cost-effective referral program we've used. We love how our customers don't have to sign up and can refer friends in a single click! Also, it took us less than 5 minutes to set up and sales are coming in on auto-pilot",
      position: "CEO, Sneads",
      name: "Suyash Chavan",
      image: "/suyash.webp",
    },
    {
      review:
        "I just tried out this new WhatsApp referral application, and I have to say it's amazing! It's super convenient and user-friendly. I love how easy it is for my contacts to refer their friends with just a few clicks.",
      position: "CMO, Bathla",
      name: "Dev Bathla",
      image: "/dev.webp",
    },
    {
      review:
        "ReferRush is such an easy and cost-effective referral app to use. We love how it works— the simplicity of it, and the conversion has been awesome as well. It was an easy setup process & runs smoothly after that with basically zero interference required.",
      position: "CEO, Kica Active, Nykaa Fashion",
      name: "Aneesha Labroo",
      image: "/aneesha.webp",
    },
    {
      review:
        "This Shopify plugin is so easy to use! I was onboarded within a day, and the support team was super helpful in setting it up and making sure our branding was right. They went the extra mile to make adjustments.",
      position: "CEO, Tuckd",
      name: "Rhea Mable David",
      image: "/rhea.webp",
    },
  ];

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

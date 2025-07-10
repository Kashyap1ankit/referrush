import { ArrowRight } from "lucide-react";
import NavigationMenuDemo from "./nav-items";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  function handleScrollBehaviour() {
    setIsScrolled(window.scrollY > 10);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollBehaviour);

    return () => window.removeEventListener("scroll", handleScrollBehaviour);
  }, []);

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 flex justify-between items-center rounded-lg w-full md:w-1/2 p-2  z-999 border border-zinc-800 transition-all duration-300 ${
        isScrolled ? " shadow-md bg-black/90 backdrop-md" : ""
      }  `}
    >
      <div className="flex items-center gap-8">
        <img src="/logo.png" className="w-12 " />
        <NavigationMenuDemo />
      </div>
      <Button
        className="rounded-full bg-linear-to-t from-btn-primary to-btn-secondary  text-white font-primary text-lg font-semibold group cursor-pointer px-12 has-[>svg]:px-8"
        variant={"default"}
        size={"lg"}
      >
        <p>Start Free</p>
        <ArrowRight className="group-hover:translate-x-2 duration-500 bg-white rounded-full p-1 size-6 text-primary-text" />
      </Button>
    </div>
  );
}

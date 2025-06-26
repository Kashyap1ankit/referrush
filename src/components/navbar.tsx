import { ArrowRight } from "lucide-react";
import NavigationMenuDemo from "./nav-items";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 flex justify-between items-center border border-zinc-800 shadow-md bg-black/40 p-2 rounded-full w-full md:w-1/2">
      <div className="flex items-center gap-8">
        <img src="/logo.png" className="w-12 " />
        <NavigationMenuDemo />
      </div>
      <Button className="rounded-full bg-light-green hover:bg-light-green text-dark-green font-primary text-lg font-semibold group cursor-pointer">
        <p>Get Started</p>
        <ArrowRight className="group-hover:translate-x-2 duration-500" />
      </Button>
    </div>
  );
}

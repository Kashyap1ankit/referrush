import { ArrowRight } from "lucide-react";
import NavigationMenuDemo from "./nav-items";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 flex justify-between items-center border border-zinc-800 shadow-md bg-black  p-2 rounded-full w-full md:w-1/2">
      <div className="flex items-center gap-8">
        <img src="/logo.png" className="w-12 " />
        <NavigationMenuDemo />
      </div>
      <Button
        className="rounded-full bg-linear-to-t from-green-900 to-green-600  text-white font-primary text-lg font-semibold group cursor-pointer px-12 has-[>svg]:px-8"
        variant={"default"}
        size={"lg"}
      >
        <p>Start Free</p>
        <ArrowRight className="group-hover:translate-x-2 duration-500 bg-white rounded-full p-1 size-6 text-primary-text" />
      </Button>
    </div>
  );
}

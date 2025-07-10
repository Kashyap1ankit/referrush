import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function TrustedBy() {
  return (
    <div className="">
      <p className="text-center text-2xl font-primary text-zinc-400 font-semibold">
        Trusted by India's fastest-growing{" "}
        <span className="text-primary-text">D2C brands</span>
      </p>

      <InfiniteMovingCards
        items={[
          "/baccabucci.svg",
          "/bearhouse.svg",
          "/emma.svg",
          "/frido.svg",
          "/myfitness.svg",
          "/nykaa.svg",
        ]}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

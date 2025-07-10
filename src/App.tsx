import HeroSection from "./components/hero-sections";
import HowItWorks from "./components/how-it-works";
import Navbar from "./components/navbar";
import TrustedBy from "./components/trusted-by";

function App() {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 50% 50% at 50% 10%, #0d3d1f, transparent 100%), #000000",
      }}
      className="min-h-screen"
    >
      <div className="w-11/12 max-w-5xl mx-auto py-4 ">
        <Navbar />
        <div className="mt-28 md:mt-44 flex flex-col gap-32">
          <HeroSection />
          <TrustedBy />
          <HowItWorks />
        </div>
      </div>
    </div>
  );
}

export default App;

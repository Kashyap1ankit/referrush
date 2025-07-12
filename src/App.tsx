import Faq from "./components/faq";
import Footer from "./components/footer";
import HeroSection from "./components/hero-sections";
import HowItWorks from "./components/how-it-works";
import Navbar from "./components/navbar";
import Testimonials from "./components/testimonials";
import TrustedBy from "./components/trusted-by";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <div
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 10%, #0d3d1f, transparent 100%), #000000",
        }}
        className="min-h-screen overflow-x-hidden"
      >
        <div className=" py-4 ">
          <Navbar />
          <div className="mt-28 lg:mt-44 flex flex-col gap-32">
            <HeroSection />
            <TrustedBy />
            <HowItWorks />
            <Testimonials />
            <Faq />
            <Footer />
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;

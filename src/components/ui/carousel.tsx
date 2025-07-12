"use client";
import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";
import { useState, useRef, useId, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { LuQuote } from "react-icons/lu";

interface SlideData {
  review: string;
  position: string;
  name: string;
  image: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  return (
    <div className="[perspective:5200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-white opacity-100 transition-all duration-300 ease-in-out min-w-[90vmin] h-[60vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div className="relative w-full h-full p-4 border-2 border-zinc-800 rounded-2xl">
          <LuQuote className="text-dark-green size-36 absolute bottom-5 right-70 z-1 mt-4 opacity-50" />
          <div
            className={`flex flex-col md:flex-row md:items-start gap-6 h-full w-full bg-grid-bg relative transition-opacity duration-1000 ease-in-out  rounded-2xl p-4 ${
              current === index ? "opacity-100 visible" : "opacity-50"
            }`}
          >
            <div>
              <div className="flex gap-4 items-center">
                <img src={slide.image} className="rounded-full w-12 " />
                <div>
                  <p className="text-2xl font-primary">{slide.name}</p>
                  <p className="text-zinc-400 font-secondary tracking-wider">
                    {slide.position}
                  </p>
                </div>
              </div>

              <p className="mt-12 font-primary text-slate-200">
                {slide.review}
              </p>
            </div>

            <div className="flex  items-center bg-dark-green p-12 rounded-2xl h-full border-2 border-logo">
              <p className="text-8xl font-primary">5</p>
              <FaStar className="size-20 fill-yellow-500" />
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-btn-primary border-3 border-transparent rounded-full focus:border-btn-secondary focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 cursor-pointer`}
      title={title}
      onClick={handleClick}
    >
      {type === "previous" ? (
        <FaHandPointLeft className="text-white" />
      ) : (
        <FaHandPointRight className="text-white" />
      )}
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}

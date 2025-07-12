import { motion } from "motion/react";
import { FaComment } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqdata } from "@/lib/constant";

export default function Faq() {
  return (
    <div className="w-11/12 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 bg-btn-primary  p-1 px-2 rounded-2xl w-fit mx-auto mb-6">
        <FaComment className="text-white" />
        <p className="text-xs font-secondary font-semibold text-white">
          Testimonials
        </p>
      </div>

      <motion.p
        className="bg-linear-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent text-center font-primary font-bold text-4xl md:text-5xl "
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
        Frequently Asked <span className="text-primary-text">Questions </span>
      </motion.p>

      <Accordion
        type="single"
        collapsible
        className="mt-12 flex flex-col gap-6 w-full md:w-3/4 mx-auto"
      >
        {faqdata.map((e, i) => {
          return (
            <AccordionItem value={`item-${i}`}>
              <AccordionTrigger className="text-white text-lg md:text-xl font-primary font-semibold">
                {e.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 font-secondary tracking-wide">
                {e.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

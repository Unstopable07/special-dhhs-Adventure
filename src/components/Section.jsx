import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  "I never thought getting financial help could be this easy. DHHS really supported me when I needed it most, and the process was straightforward. They don’t just offer Grants  they give peace of mind. I’m truly grateful so easy Jason M Stanley.",
  "DHHS has been a blessing to me and my family. Their loan process was clear, and they explained everything step by step. I felt secure and cared for throughout, and I would recommend them to anyone in need of real support They are  reliable. Sharon Smith.",
  "Thanks to DHHS, I was able to cover important expenses without stress. They treated me with respect and kindness, and I could trust them completely. Having this kind of help available makes a huge difference. Debra Vargas.",
  "I’m so thankful for DHHS. They gave me the financial assistance I needed at the right time, and they made sure I understood the terms before moving forward. Honest, reliable, and truly supportive  I’d trust them again anytime. Mark Pearson."
];

export default function Section() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-[#000133] py-16 flex flex-col items-center relative">
      {/* Slider */}
      <h1 className="text-bold font-bold m-10 text-[40px] text-white">TESTIMONIALS</h1>
      <div className="relative w-full max-w-xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-red-500 rounded-2xl shadow-md text-white text-base leading-relaxed text-center"
          >
            {testimonials[index]}
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-red-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

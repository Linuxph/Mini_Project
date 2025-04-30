import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, title: "Fresh & Tasty", desc: "Delicious meals delivered fast!", img: "/public/banner1.jpg" },
  { id: 2, title: "Hot & Spicy", desc: "Perfectly spiced dishes for your taste!", img: "/public/banner2.jpg" },
  { id: 3, title: "Healthy Choices", desc: "Nutritious and tasty food options!", img: "/public/banner3.jpg" },
  { id: 4, title: "Sweet Treats", desc: "Indulge in delightful desserts!", img: "/public/banner4.jpg" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg mb-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x < -50) nextSlide();
            if (info.offset.x > 50) prevSlide();
          }}
          className="relative w-full h-full cursor-grab"
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
            <h2 className="text-3xl font-bold">{slides[current].title}</h2>
            <p className="text-lg">{slides[current].desc}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-yellow-400" : "bg-white/50"
            }`}
            animate={{ scale: current === index ? 1.2 : 1 }}
          />
        ))}
      </div>
    </div>
  );
}

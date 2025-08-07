"use client";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface ProjectPreviewProps {
  title: string;
  image: string;
  features: string[];
}

export default function ProjectPreview({ title, image }: ProjectPreviewProps) {
  // Always call hooks at the top level
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const screenshots = [
    {
      src: "/rehostly-mobile.png",
      alt: "Rehostly Mobile View",
      title: "Mobile App",
      description: "Perfect on all devices",
    },
    {
      src: "/rehostly-onboarding.png",
      alt: "Rehostly Onboarding",
      title: "Onboarding Flow",
      description: "Smooth user registration experience",
    },
    {
      src: "/rehostly-booking.png",
      alt: "Rehostly Booking Flow",
      title: "Booking Engine",
      description: "Seamless guest booking experience",
    },
  ];

  // Auto-advance slides - only for Rehostly
  useEffect(() => {
    if (title !== "Rehostly" || !isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, screenshots.length, title]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
    setIsAutoPlaying(false);
  };

  if (title === "Rehostly") {
    return (
      <div
        className="relative h-full p-4 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main Screenshot Carousel */}
        <div className="relative h-full">
          <div
            className={`absolute inset-0 bg-slate-800 shadow-2xl overflow-hidden ${
              screenshots[currentIndex].src === "/rehostly-mobile.png"
                ? "rounded-3xl mx-auto w-64"
                : "rounded-lg"
            }`}
          >
            {/* Browser Header - Desktop or Mobile */}
            {screenshots[currentIndex].src === "/rehostly-mobile.png" ? (
              /* Mobile Header */
              <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-3xl flex items-center justify-center z-20">
                <div className="w-12 h-1 bg-slate-600 rounded-full"></div>
              </div>
            ) : (
              /* Desktop Browser Header */
              <div className="absolute top-0 left-0 right-0 h-8 bg-slate-700 flex items-center px-3 z-20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-slate-600 rounded px-3 py-1 text-xs text-slate-300">
                    rehostly.com/
                    {screenshots[currentIndex].title
                      .toLowerCase()
                      .replace(" ", "-")}
                  </div>
                </div>
              </div>
            )}

            {/* Screenshot Carousel */}
            <div
              className={`absolute left-0 right-0 bottom-0 ${
                screenshots[currentIndex].src === "/rehostly-mobile.png"
                  ? "top-6"
                  : "top-8"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <motion.div
                      className="relative w-full h-[120%]"
                      initial={{ y: 0 }}
                      animate={{ y: "-16.67%" }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                      }}
                    >
                      <Image
                        src={screenshots[currentIndex].src}
                        alt={screenshots[currentIndex].alt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          (e.target as HTMLImageElement).src =
                            "/rehostly-mobile.png";
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Bottom Indicator */}
            {screenshots[currentIndex].src === "/rehostly-mobile.png" && (
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full z-20"></div>
            )}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle other projects with screenshots
  if (
    title === "JazzHunt" ||
    title === "TruthPulse 5000" ||
    title === "DiffRead"
  ) {
    return (
      <div className="relative h-full mx-4 md:mx-8 lg:mx-12">
        <div className="absolute inset-0 bg-slate-800 shadow-2xl overflow-hidden rounded-lg">
          {/* Desktop Browser Header */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-slate-700 flex items-center px-3 z-20">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-slate-600 rounded px-3 py-1 text-xs text-slate-300">
                {title === "JazzHunt"
                  ? "jazzhunt.app"
                  : title === "TruthPulse 5000"
                  ? "truthpulse.com"
                  : "diffread.com"}
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <div className="absolute left-0 right-0 bottom-0 top-8">
            <div className="relative w-full h-full overflow-hidden">
              <motion.div
                className="relative w-full h-[120%]"
                initial={{ y: 0 }}
                animate={{ y: "-16.67%" }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={() => {
                    // Fallback to placeholder if image doesn't exist
                    console.warn(`Failed to load image: ${image}`);
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default preview for other projects
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-slate-500 dark:text-slate-400">
        <div className="w-16 h-16 bg-slate-300 dark:bg-slate-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <Globe className="w-8 h-8" />
        </div>
        <p className="text-sm">Project Preview</p>
        <p className="text-xs mt-1">Website Application</p>
      </div>
    </div>
  );
}

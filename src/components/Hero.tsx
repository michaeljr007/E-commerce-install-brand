"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const slides = [
  {
    id: 1,
    title: "New Summer Collection",
    subtitle: "Fresh styles for sunny days",
    image: "/images/slide1.jpeg",
    cta: "Explore Collection",
  },
  {
    id: 2,
    title: "Urban Streetwear",
    subtitle: "Style meets comfort",
    image: "/images/slide2.jpeg",
    cta: "Shop Streetwear",
  },
  {
    id: 3,
    title: "Luxury Winter Coats",
    subtitle: "Stay warm, look cool",
    image: "/images/slide3.png",
    cta: "Browse Outerwear",
  },
  {
    id: 4,
    title: "Elegant Evening Wear",
    subtitle: "Make a statement",
    image: "/images/slide4.png",
    cta: "Discover Elegance",
  },
  {
    id: 5,
    title: "Casual Everyday Outfits",
    subtitle: "Comfort meets style",
    image: "/images/slide5.png",
    cta: "View Collection",
  },
];

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative w-full h-[92vh] max-h-[1000px] dark:bg-dark-surface"
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        speed={800}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 dark:from-black/80 dark:via-black/60 dark:to-black/30" />

              {/* Text Content */}
              <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 max-w-4xl">
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-4 md:space-y-6"
                  >
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight tracking-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-lg sm:text-xl md:text-2xl text-gray-50 max-w-2xl"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 dark:bg-dark-elevated dark:text-white dark:hover:bg-gray-700 transition-all duration-300"
                      >
                        <ShoppingBag className="w-5 h-5" />
                        {slide.cta}
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer swiper-prev hidden sm:block"
        >
          <div className="p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all">
            <ArrowLeft className="text-white w-6 h-6" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer swiper-next hidden sm:block"
        >
          <div className="p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all">
            <ArrowRight className="text-white w-6 h-6" />
          </div>
        </motion.div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              className="swiper-pagination-bullet w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white/80 cursor-pointer transition-all"
              whileHover={{ scale: 1.3 }}
              initial={{ scale: 1 }}
            />
          ))}
        </div>
      </Swiper>
    </motion.section>
  );
}

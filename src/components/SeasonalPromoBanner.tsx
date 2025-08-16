"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, Timer, Tag } from "lucide-react";
import Link from "next/link";

export default function SeasonalPromoBanner() {
  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:bg-dark-surface dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-300 dark:from-blue-800 dark:to-purple-900 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-pink-200 to-red-300 dark:from-pink-800 dark:to-red-900 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="relative flex flex-col lg:flex-row items-center rounded-3xl overflow-hidden shadow-2xl bg-white/80 dark:bg-dark-elevated/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/30"
        >
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-6 left-6 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            50% OFF
          </motion.div>

          <motion.div
            animate={{
              y: [10, -10, 10],
              x: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-6 right-6 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5"
          >
            <Timer className="w-4 h-4" />
            Limited Time
          </motion.div>

          {/* Left Side - Image */}
          <div className="relative w-full lg:w-1/2 h-72 md:h-96 lg:h-[510px] group overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/slide6.png"
                alt="Seasonal Promo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Floating Tag */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute bottom-6 left-6 bg-white/95 dark:bg-dark-elevated/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-sm font-semibold"
            >
              <Tag className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-gray-800 dark:text-gray-200">
                Best Deals
              </span>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="px-5 py-8 md:p-12 flex flex-col justify-center items-start w-full lg:w-1/2 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-red-500 dark:text-red-400" />
              <span className="text-sm uppercase tracking-widest text-red-600 dark:text-red-400 font-bold">
                Limited Time Only
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-300 leading-tight"
            >
              Special Discount Sale
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">
                50%
              </span>
              <span className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                OFF
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed max-w-md"
            >
              Upgrade your wardrobe with stylish winter essentials. Premium
              quality at unbeatable prices – but hurry, sale ends soon!
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free Shipping
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Easy Returns
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Premium Quality
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-4"
            >
              <Link
                href="/sale"
                className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl font-bold text-lg hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 dark:from-white dark:via-gray-100 dark:to-white dark:text-black dark:hover:from-gray-200 dark:hover:via-gray-300 dark:hover:to-gray-200 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="relative z-10">Shop the Sale</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="ml-3"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>

                {/* Button shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-4 pt-2 text-xs text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-1">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-yellow-400 rounded-full border border-white dark:border-gray-800"
                    ></div>
                  ))}
                </div>
                <span className="ml-2">4.9/5 Rating</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span>10,000+ Happy Customers</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

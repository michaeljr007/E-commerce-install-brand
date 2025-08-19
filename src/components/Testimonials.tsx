"use client";

import { motion } from "framer-motion";
import { Star, Quote, Heart, CheckCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Lee",
    role: "Verified Buyer",
    location: "New York, NY",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Absolutely love the quality of the clothes! The fabric feels premium and the fit is just perfect. Fast delivery too!",
    rating: 5,
    purchaseDate: "2 weeks ago",
    product: "Classic White T-Shirt",
  },
  {
    id: 2,
    name: "Daniel Chen",
    role: "Verified Buyer",
    location: "Los Angeles, CA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Stylish and comfortable — my go-to store for new trends. The customer support is also top-notch.",
    rating: 5,
    purchaseDate: "1 month ago",
    product: "Denim Jacket",
  },
  {
    id: 3,
    name: "Aisha Khan",
    role: "Verified Buyer",
    location: "Chicago, IL",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "I'm impressed by the attention to detail and the sustainable packaging. Will definitely shop again.",
    rating: 4,
    purchaseDate: "3 weeks ago",
    product: "Leather Handbag",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-surface dark:via-gray-900 dark:to-dark-surface relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-pink-100/30 to-orange-100/30 dark:from-pink-900/20 dark:to-orange-900/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-100/20 to-blue-100/20 dark:from-cyan-900/10 dark:to-blue-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200/50 dark:border-blue-800/30">
            <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 tracking-wide uppercase">
              Customer Reviews
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-6 leading-tight">
            What Our Customers Say
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don`t just take our word for it. Here`s what real customers have to
            say about their shopping experience
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 25 },
              }}
              className="group relative bg-white/90 dark:bg-dark-elevated/90 backdrop-blur-sm rounded-3xl px-5 py-4 shadow-lg hover:shadow-2xl border border-white/50 dark:border-gray-700/50 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-gray-400 dark:text-gray-600 transform rotate-180" />
              </div>

              <div className="relative z-10">
                {/* User Info */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-gray-700"
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {t.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {t.location}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg italic">
                  {t.review}
                </blockquote>

                {/* Rating and Product Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: i * 0.1 + index * 0.2,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          <Star
                            className={`w-5 h-5 ${
                              i < t.rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-300 dark:text-gray-600"
                            } transition-colors duration-200`}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                      {t.rating}/5
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-500">
                      Purchased: {t.product}
                    </span>
                    <span className="text-gray-500 dark:text-gray-500">
                      {t.purchaseDate}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-200/50 dark:border-blue-800/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Join thousands of happy customers
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Experience the quality and service that makes our customers come
              back for more
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Start Shopping
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Heart, ArrowRight, Star, Sparkles } from "lucide-react";

const bestSellers = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "/images/slide7.png",
    rating: 4.8,
    reviews: 128,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89.99,
    image: "/images/slide5.png",
    rating: 4.9,
    reviews: 89,
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Black Slim Jeans",
    price: 69.99,
    image: "/images/slide6.png",
    rating: 4.7,
    reviews: 204,
    badge: "Best Seller",
  },
  {
    id: 4,
    name: "Leather Handbag",
    price: 149.99,
    image: "/images/slide4.png",
    rating: 4.9,
    reviews: 67,
    badge: "Best Seller",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const badgeColors: Record<string, string> = {
  Popular: "bg-gradient-to-r from-blue-500 tocyan-500",
  Trending: "bg-gradient-to-r from-pink-500 to-rose-500",
  "Best Seller": "bg-gradient-to-r from-amber-500 to-orange-500",
  Premium: "bg-gradient-to-r from-purple-500 to-indigo-500",
};

export default function BestSellers() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-surface dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-pink-100/20 to-orange-100/20 dark:from-pink-900/10 dark:to-orange-900/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
            <span className="text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-400 uppercase">
              Customer Favorites
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our most loved products, handpicked by thousands of
            satisfied customers
          </p>

          <motion.button
            className="group inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Products
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {bestSellers.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 25 },
              }}
              className="group relative bg-white dark:bg-dark-elevated rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300"
            >
              {/* Product Badge */}
              <div className="absolute top-2 left-2 z-20">
                <motion.span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                    badgeColors[product.badge]
                  } backdrop-blur-sm`}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  {product.badge}
                </motion.span>
              </div>

              {/* Product Image */}
              <div className="relative w-full aspect-[8/5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-current"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Hover Actions Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 dark:bg-black/70 backdrop-blur-sm"
                initial={false}
              >
                <motion.button
                  className="p-3 rounded-full bg-white/90 dark:bg-dark-surface/90 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-dark-surface hover:scale-110 transition-all duration-200 shadow-lg backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart size={18} />
                </motion.button>
                <motion.button
                  className="p-3 rounded-full bg-white/90 dark:bg-dark-surface/90 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-dark-surface hover:scale-110 transition-all duration-200 shadow-lg backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart size={18} />
                </motion.button>
              </motion.div>

              {/* Quick Add Button */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                initial={false}
              >
                <button className="w-full py-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 font-semibold rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                  <ShoppingCart size={16} />
                  Quick Add
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can`t find what you`re looking for?
          </p>
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Browse All Categories
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Star, ArrowRight, Sparkles } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: "$79.99",
    image: "/images/slide1.jpeg",
    href: "/product/1",
    rating: 4.8,
    badge: "Popular",
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: "$59.99",
    image: "/images/slide4.png",
    href: "/product/2",
    rating: 4.9,
    badge: "New",
  },
  {
    id: 3,
    name: "Casual White Sneakers",
    price: "$89.99",
    image: "/images/slide5.png",
    href: "/product/3",
    rating: 4.7,
    badge: "Trending",
  },
  {
    id: 4,
    name: "Wool Blend Overcoat",
    price: "$129.99",
    image: "/images/slide6.png",
    href: "/product/4",
    rating: 4.6,
    badge: "Premium",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
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
      duration: 0.6,
    },
  },
};

const badgeVariants: Record<string, string> = {
  Popular: "bg-gradient-to-r from-purple-500 to-pink-500",
  New: "bg-gradient-to-r from-green-500 to-emerald-500",
  Trending: "bg-gradient-to-r from-orange-500 to-red-500",
  Premium: "bg-gradient-to-r from-blue-500 to-indigo-500",
};

export default function FeaturedProducts() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-dark-surface dark:via-dark-surface dark:to-dark-elevated overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100/25 dark:bg-grid-gray-800/25 [mask-image:linear-gradient(0deg,transparent,black,transparent)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-full border border-blue-200/50 dark:border-blue-800/50 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Curated Collection
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-5">
            Featured Products
          </h2>

          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-full font-medium hover:shadow-xl hover:shadow-gray-900/25 dark:hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Enhanced Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-3 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative bg-white/80 dark:bg-dark-elevated/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-500"
            >
              <Link href={product.href} className="block">
                {/* Product Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`inline-block px-3 py-1 text-xs font-bold text-white rounded-full ${
                      badgeVariants[product.badge]
                    } shadow-lg`}
                  >
                    {product.badge}
                  </motion.span>
                </div>

                {/* Product Image with enhanced effects */}
                <div className="relative w-full h-36 md:h-52 overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />

                  {/* Floating action buttons */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 absolute bottom-[65%] md:bottom-[70%] right-2 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/20 group/btn"
                    >
                      <Heart className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover/btn:text-red-500 transition-colors duration-300" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 absolute bottom-4 right-2 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/20 group/btn"
                    >
                      <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover/btn:text-blue-500 transition-colors duration-300" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Enhanced Product Details */}
                <div className="p-3 md:p-6 space-y-2 md:space-y-4">
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500 bg-clip-text text-transparent">
                        {product.price}
                      </p>
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ rotate: 90 }}
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can`t find what you`re looking for?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
          >
            Get in touch with our style experts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

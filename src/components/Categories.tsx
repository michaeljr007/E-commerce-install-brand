"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Heart,
  Star,
  ShoppingBag,
} from "lucide-react";
import { useRef } from "react";

const categories = [
  {
    id: 1,
    name: "Men",
    image: "/images/categories/men.jpg",
    href: "/men",
    description: "Contemporary styles for the modern man",
    items: "2,500+ items",
    trend: "+15%",
    icon: Users,
    color: "from-blue-600 to-purple-600",
    popular: false,
  },
  {
    id: 2,
    name: "Women",
    image: "/images/categories/women.jpg",
    href: "/women",
    description: "Elegant fashion for every occasion",
    items: "3,200+ items",
    trend: "+23%",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    popular: true,
  },
  {
    id: 3,
    name: "Kids",
    image: "/images/categories/kids.jpg",
    href: "/kids",
    description: "Fun and comfortable clothing for children",
    items: "1,800+ items",
    trend: "+18%",
    icon: Star,
    color: "from-green-500 to-emerald-500",
    popular: false,
  },
  {
    id: 4,
    name: "Sale",
    image: "/images/categories/sale.jpg",
    href: "/sale",
    description: "Amazing deals up to 70% off",
    items: "500+ items",
    trend: "70% OFF",
    icon: TrendingUp,
    color: "from-red-500 to-orange-500",
    popular: true,
  },
];

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const overlayVariants = {
    rest: { opacity: 0.3 },
    hover: {
      opacity: 0.6,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants = {
    rest: { y: 20, opacity: 0.8 },
    hover: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-surface dark:via-dark-surface dark:to-dark-elevated relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 rounded-full opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500 px-6 py-3 rounded-full text-white font-semibold mb-6 shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            <span>Explore Collections</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
            Shop by{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500 bg-clip-text text-transparent hover:from-amber-600 hover:to-black dark:hover:from-amber-500 dark:hover:to-black transition-all duration-300">
              Category
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover curated collections designed for every style, occasion, and
            personality. Find your perfect look today.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {categories.map((cat, index) => {
            const IconComponent = cat.icon;
            return (
              <motion.div key={cat.id} variants={itemVariants} custom={index}>
                <motion.div
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer group bg-white dark:bg-dark-elevated"
                >
                  <Link href={cat.href} className="block">
                    {/* Popular Badge */}
                    {cat.popular && (
                      <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          stiffness: 500,
                        }}
                        className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      >
                        Popular
                      </motion.div>
                    )}

                    {/* Image Container */}
                    <div className="relative h-80 sm:h-72 lg:h-80 overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <Image
                          width={400}
                          height={320}
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover"
                          priority={index < 2}
                        />
                      </motion.div>

                      {/* Gradient Overlay */}
                      <motion.div
                        variants={overlayVariants}
                        className={`absolute inset-0 bg-gradient-to-t ${cat.color} mix-blend-multiply`}
                      />

                      {/* Dark Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <motion.div
                      variants={contentVariants}
                      className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                    >
                      {/* Icon */}
                      <motion.div
                        className="mb-4"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${cat.color} shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>

                      {/* Category Name */}
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                        {cat.name}
                      </h3>

                      {/* Description */}
                      <p className="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {cat.description}
                      </p>

                      {/* Stats Row */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <ShoppingBag className="w-4 h-4" />
                            <span className="font-medium">{cat.items}</span>
                          </div>
                          <div
                            className={`flex items-center space-x-1 px-2 py-1 rounded-full bg-gradient-to-r ${cat.color} text-xs font-bold`}
                          >
                            <TrendingUp className="w-3 h-3" />
                            <span>{cat.trend}</span>
                          </div>
                        </div>

                        {/* Arrow Icon */}
                        <motion.div
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

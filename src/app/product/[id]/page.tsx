"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Star,
  ShoppingCart,
  Plus,
  Minus,
  Truck,
  Shield,
  RotateCcw,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Mock product data
const mockProduct = {
  id: 1,
  name: "Classic Leather Jacket",
  price: 250,
  originalPrice: 320,
  rating: 4.8,
  reviews: 32,
  colors: ["#000000", "#7C3AED", "#FBBF24"],
  sizes: ["S", "M", "L", "XL"],
  description:
    "This classic leather jacket is perfect for any fashion enthusiast. Crafted with high-quality leather and designed for comfort and style.",
  images: ["/images/slide1.jpeg", "/images/slide2.jpeg", "/images/slide3.png"],
  features: [
    "100% Genuine Leather",
    "Water Resistant",
    "Premium Stitching",
    "Adjustable Fit",
  ],
  inStock: true,
  discount: 22,
};

const ProductInfo = () => {
  const [selectedImage, setSelectedImage] = useState(mockProduct.images[0]);
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState(mockProduct.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-surface dark:via-dark-elevated dark:to-dark-surface">
      <Navbar />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-8 py-4"
      >
        {/* Breadcrumb */}
        <motion.nav variants={itemVariants} className="mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>Home</span>
            <ChevronRight size={16} />
            <span>Product</span>
            <ChevronRight size={16} />
            <span className="text-gray-900 dark:text-white font-medium">
              {mockProduct.name}
            </span>
          </div>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Product Images */}
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Discount Badge */}
            {mockProduct.discount && (
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
              >
                -{mockProduct.discount}%
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-elevated dark:to-dark-surface"
            >
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                onSlideChange={(swiper) =>
                  setSelectedImage(mockProduct.images[swiper.activeIndex])
                }
                className="w-full h-full rounded-2xl"
              >
                {mockProduct.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={img}
                      alt={`${mockProduct.name} ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      priority={idx === 0}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white dark:bg-dark-elevated/80 dark:hover:bg-dark-elevated backdrop-blur-sm rounded-full p-3 shadow-lg transition-all group">
                <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-white group-hover:scale-110 transition-transform" />
              </button>
              <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white dark:bg-dark-elevated/80 dark:hover:bg-dark-elevated backdrop-blur-sm rounded-full p-3 shadow-lg transition-all group">
                <ChevronRight className="w-5 h-5 text-gray-800 dark:text-white group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>

            {/* Thumbnail Grid */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {mockProduct.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden cursor-pointer border-3 transition-all ${
                    selectedImage === img
                      ? "border-amber-500 shadow-lg shadow-amber-500/25"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div variants={itemVariants} className="space-y-5">
            {/* Stock Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              {mockProduct.inStock ? (
                <>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    In Stock
                  </span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-red-600 dark:text-red-400 font-medium">
                    Out of Stock
                  </span>
                </>
              )}
            </motion.div>

            {/* Product Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white leading-tight"
            >
              {mockProduct.name}
            </motion.h1>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star
                      size={20}
                      className={`${
                        i < Math.floor(mockProduct.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      } transition-colors`}
                    />
                  </motion.div>
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                {mockProduct.rating} ({mockProduct.reviews} reviews)
              </span>
            </motion.div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                ${mockProduct.price}
              </span>
              {mockProduct.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  ${mockProduct.originalPrice}
                </span>
              )}
              {mockProduct.discount && (
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-bold">
                  Save ${mockProduct.originalPrice - mockProduct.price}
                </span>
              )}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {mockProduct.description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                Key Features
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {mockProduct.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <Check size={16} className="text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Colors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                Color
              </h3>
              <div className="flex gap-4">
                {mockProduct.colors.map((color, idx) => (
                  <motion.div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                    className={`relative w-12 h-12 rounded-full cursor-pointer border-4 transition-all shadow-lg ${
                      selectedColor === color
                        ? "border-amber-500 shadow-amber-500/25"
                        : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === color && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Check
                          size={20}
                          className="text-white drop-shadow-lg"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sizes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                Size
              </h3>
              <div className="flex gap-3">
                {mockProduct.sizes.map((size, idx) => (
                  <motion.div
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    className={`px-6 py-3 border-2 rounded-xl cursor-pointer font-medium transition-all shadow-sm ${
                      selectedSize === size
                        ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 shadow-amber-500/25"
                        : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-dark-elevated"
                    }`}
                  >
                    {size}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quantity & Add to Cart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center border-2 border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden bg-white dark:bg-dark-elevated shadow-sm">
                <motion.button
                  onClick={decrement}
                  whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Minus
                    size={20}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </motion.button>
                <span className="px-6 py-4 font-bold text-xl min-w-[80px] text-center text-gray-900 dark:text-white">
                  {quantity}
                </span>
                <motion.button
                  onClick={increment}
                  whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Plus
                    size={20}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </motion.button>
              </div>

              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:cursor-not-allowed"
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Adding...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="normal"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      <span>Add to Cart</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>

            {/* Wishlist & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4"
            >
              <motion.button
                onClick={toggleWishlist}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-medium transition-all shadow-sm ${
                  isWishlisted
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                    : "border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-elevated text-gray-700 dark:text-gray-300 hover:border-red-400"
                }`}
              >
                <motion.div
                  animate={{ scale: isWishlisted ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart
                    size={20}
                    className={isWishlisted ? "fill-current" : ""}
                  />
                </motion.div>
                {isWishlisted ? "In Wishlist" : "Add to Wishlist"}
              </motion.button>
            </motion.div>

            {/* Service Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              {[
                {
                  icon: Truck,
                  title: "Free Shipping",
                  desc: "On orders over $100",
                },
                {
                  icon: Shield,
                  title: "1 Year Warranty",
                  desc: "Full protection",
                },
                {
                  icon: RotateCcw,
                  title: "30-Day Returns",
                  desc: "Easy returns",
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + idx * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-dark-elevated"
                >
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <service.icon
                      size={20}
                      className="text-amber-600 dark:text-amber-400"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductInfo;

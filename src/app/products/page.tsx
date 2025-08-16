"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Eye,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

// Sample products with enhanced data
const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Premium Product ${i + 1}`,
  price: parseFloat((Math.random() * 100 + 20).toFixed(2)),
  originalPrice: parseFloat((Math.random() * 100 + 50).toFixed(2)),
  image: "/images/slide5.png",
  href: `/product/${i + 1}`,
  rating: 4.5 + Math.random() * 0.5,
  reviews: Math.floor(Math.random() * 200) + 50,
  isNew: i < 3,
  isSale: i % 3 === 0,
  category: ["Fashion", "Electronics", "Home"][i % 3],
  colors: ["Red", "Blue", "Green"].slice(0, Math.floor(Math.random() * 3) + 1),
}));

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

const filterOptions = [
  { label: "All Categories", value: "all" },
  { label: "Fashion", value: "fashion" },
  { label: "Electronics", value: "electronics" },
  { label: "Home", value: "home" },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest First", value: "newest" },
  { label: "Best Rated", value: "rating" },
];

export default function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Navbar />
      <section className="py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-surface dark:via-gray-900 dark:to-dark-surface min-h-screen relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-100/20 to-orange-100/20 dark:from-pink-900/10 dark:to-orange-900/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200/50 dark:border-blue-800/30">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 tracking-wide uppercase">
                  Our Collection
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
                All Products
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover our complete collection of premium products, carefully
                curated for style and quality
              </p>
            </div>

            {/* Search and Controls Bar */}
            <div className="bg-white/80 dark:bg-dark-elevated/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4">
                  {/* Category Filter */}
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white transition-all duration-200"
                  >
                    {filterOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white transition-all duration-200"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Count */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-gray-600 dark:text-gray-400">
              Showing {paginatedProducts.length} of {filteredProducts.length}{" "}
              products
            </p>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            className={`grid gap-y-6 gap-x-6 md:gap-y-10 mb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`${currentPage}-${selectedCategory}-${sortBy}-${searchTerm}`}
          >
            {paginatedProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                }}
                className={`group relative bg-white/90 dark:bg-dark-elevated/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-white/50 dark:border-gray-700/50 overflow-hidden transition-all mx-4 md:mx-0 duration-500`}
              >
                {/* Product Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                      New
                    </span>
                  )}
                  {product.isSale && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 shadow-lg">
                      Sale
                    </span>
                  )}
                </div>

                {/* Product Image */}
                <div
                  className={`relative w-full aspect-[4/2.5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-t-2xl`}
                >
                  <Link href={product.href}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes={
                        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      }
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </Link>

                  {/* Quick Actions Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 dark:bg-black/70 backdrop-blur-sm">
                    <motion.button
                      className="p-3 rounded-full bg-white/90 dark:bg-dark-surface/90 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-dark-surface hover:scale-110 transition-all duration-200 shadow-lg backdrop-blur-sm border border-white/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={18} />
                    </motion.button>
                    <motion.button
                      className="p-3 rounded-full bg-white/90 dark:bg-dark-surface/90 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-dark-surface hover:scale-110 transition-all duration-200 shadow-lg backdrop-blur-sm border border-white/20"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart size={18} />
                    </motion.button>
                    <motion.button
                      className="p-3 rounded-full bg-white/90 dark:bg-dark-surface/90 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-dark-surface hover:scale-110 transition-all duration-200 shadow-lg backdrop-blur-sm border border-white/20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart size={18} />
                    </motion.button>
                  </div>
                </div>

                {/* Product Info */}
                <div
                  className={`p-3 space-y-2`} // Reduced padding from p-6 to p-3
                >
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-amber-400 fill-current"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {product.rating.toFixed(1)} ({product.reviews})
                    </span>
                  </div>

                  {/* Product Name */}
                  <Link href={product.href}>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                      {product.name}
                    </h2>
                  </Link>

                  {/* Category */}
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {product.category}
                  </span>

                  {/* Colors */}
                  {product.colors.length > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Colors:
                      </span>
                      <div className="flex gap-1">
                        {product.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                            style={{ backgroundColor: color.toLowerCase() }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${product.price.toFixed(2)}
                    </p>
                    {product.isSale && (
                      <p className="text-lg text-gray-500 dark:text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0" // Adjusted bottom-6 to bottom-3
                >
                  <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg">
                    <ShoppingCart size={18} />
                    Quick Add
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Pagination */}
          {totalPages > 1 && (
            <motion.div
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <motion.button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white dark:bg-dark-elevated rounded-xl border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 shadow-md"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>

              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <motion.button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md ${
                      currentPage === page
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-white dark:bg-dark-elevated text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {page}
                  </motion.button>
                );
              })}

              <motion.button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white dark:bg-dark-elevated rounded-xl border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 shadow-md"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

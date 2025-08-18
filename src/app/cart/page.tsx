"use client";

import React, { useState } from "react";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  Heart,
  Star,
  ArrowRight,
  Package,
  Truck,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const cartItems = [
  {
    id: 1,
    name: "Leather Jacket",
    price: 12000,
    quantity: 1,
    image: "/images/slide4.png",
  },
  {
    id: 2,
    name: "Sneakers",
    price: 8000,
    quantity: 2,
    image: "/images/slide5.png",
  },
];

const Cart = () => {
  const [items, setItems] = useState(cartItems);
  const router = useRouter();

  const increment = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 text-white py-1 px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ShoppingCart size={30} className="text-white" />
              </motion.div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Your Cart</h1>
                <p className="text-white mt-2 text-sm">
                  {items.length} items ready for checkout
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto p-6 md:p-8 lg:p-12 -mt-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Cart Items */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white dark:bg-dark-elevated rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Package
                      size={24}
                      className="text-amber-600 dark:text-amber-400"
                    />
                    Cart Items
                  </h2>
                </div>

                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100, scale: 0.8 }}
                        whileHover={{ scale: 1.01 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="p-6 group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-6">
                          <motion.div
                            className="relative overflow-hidden rounded-xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            }}
                          >
                            <Image
                              width={120}
                              height={120}
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 md:w-30 md:h-30 object-cover shadow-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white truncate">
                                  {item.name}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        size={14}
                                        fill="currentColor"
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-500 dark:text-gray-400">
                                    (4.8)
                                  </span>
                                </div>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
                              >
                                <Heart size={18} />
                              </motion.button>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                  ₦{item.price}
                                </span>

                                <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => decrement(item.id)}
                                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    disabled={item.quantity <= 1}
                                  >
                                    <Minus
                                      size={16}
                                      className="text-gray-600 dark:text-gray-300"
                                    />
                                  </motion.button>
                                  <motion.span
                                    key={item.quantity}
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    className="px-4 py-2 font-semibold text-gray-900 dark:text-white min-w-[3rem] text-center"
                                  >
                                    {item.quantity}
                                  </motion.span>
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => increment(item.id)}
                                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                  >
                                    <Plus
                                      size={16}
                                      className="text-gray-600 dark:text-gray-300"
                                    />
                                  </motion.button>
                                </div>
                              </div>

                              <motion.button
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
                              >
                                <Trash2 size={20} />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Summary Sidebar */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="sticky top-8">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white dark:bg-dark-elevated rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 px-6 py-4 text-white">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <ShoppingCart size={24} />
                      </motion.div>
                      Order Summary
                    </h2>
                  </div>

                  <div className="p-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-gray-600 dark:text-gray-300">
                        <span className="flex items-center gap-2">
                          <Package size={16} />
                          Subtotal:
                        </span>
                        <span className="font-semibold">₦{total}</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-600 dark:text-gray-300">
                        <span className="flex items-center gap-2">
                          <Truck size={16} />
                          Shipping:
                        </span>
                        <span className="font-semibold">₦10</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-600 dark:text-gray-300">
                        <span className="flex items-center gap-2">
                          <Shield size={16} />
                          Tax:
                        </span>
                        <span className="font-semibold">
                          ₦{(total * 0.08).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                          Total:
                        </span>
                        <motion.span
                          key={total}
                          initial={{ scale: 1.1, color: "#3b82f6" }}
                          animate={{ scale: 1, color: undefined }}
                          className="text-2xl font-bold text-gray-900 dark:text-white"
                        >
                          ₦{(total + 10 + total * 0.08).toFixed(2)}
                        </motion.span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 hover:from-amber-700 hover:to-orange-700 text-white py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                      onClick={() =>
                        router.push(
                          `/checkout?total=${(
                            total +
                            10 +
                            total * 0.08
                          ).toFixed(2)}`
                        )
                      }
                    >
                      Proceed to Checkout
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={20} />
                      </motion.div>
                    </motion.button>

                    <div className="grid grid-cols-3 gap-2 text-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex flex-col items-center gap-1">
                        <Shield size={16} className="text-green-500" />
                        <span>Secure</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Truck size={16} className="text-blue-500" />
                        <span>Fast Ship</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Heart size={16} className="text-red-500" />
                        <span>Guarantee</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Cart;

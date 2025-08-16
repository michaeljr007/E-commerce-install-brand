"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, User, Menu, X, Search, Sun, Moon } from "lucide-react";
import { useThemeStore } from "@/store/useThemeStore";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useThemeStore();

  const navLinks = [
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Kids", href: "/kids" },
    { name: "Sale", href: "/sale", special: true },
  ];

  // Sync theme class on mount
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" as const },
    },
    tap: { scale: 0.95 },
  };

  const searchVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(218, 165, 32, 0.5)",
      transition: { duration: 0.2 },
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 0 0 0px rgba(218, 165, 32, 0)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className={`sticky top-0 z-50 py-1 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 dark:bg-dark-surface/80 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg"
          : "bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="text-3xl italic font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500 bg-clip-text text-transparent hover:from-amber-600 hover:to-black dark:hover:from-amber-500 dark:hover:to-black transition-all duration-300"
            >
              InstallBrand
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    link.special
                      ? "text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                      : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-elevated"
                  }`}
                >
                  {link.name}
                  {link.special && (
                    <motion.span
                      className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs px-1.5 py-0.5 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      Hot
                    </motion.span>
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Enhanced Search */}
          <motion.div
            className="hidden md:flex items-center relative"
            variants={searchVariants}
            animate={searchFocused ? "focused" : "unfocused"}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <motion.input
                type="text"
                placeholder="Search products..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-64 pl-10 pr-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-dark-elevated text-sm outline-none transition-all duration-300 focus:w-80 focus:bg-white dark:focus:bg-dark-surface dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
          </motion.div>

          {/* Icons */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-dark-elevated transition-all duration-200"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-5 w-5 text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-5 w-5 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* User Account */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="/account"
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-dark-elevated text-gray-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 transition-all duration-200"
              >
                <User className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Shopping Cart */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <Link
                href="/cart"
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-dark-elevated text-gray-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 transition-all duration-200"
              >
                <ShoppingBag className="h-5 w-5" />
                <motion.span
                  className="absolute top-2 -right-2 bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  3
                </motion.span>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-elevated transition-all duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-sm"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      link.special
                        ? "text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                        : "text-gray-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-dark-elevated"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      {link.name}
                      {link.special && (
                        <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                          Hot
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Search */}
              <motion.div
                className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-dark-elevated outline-none text-sm transition-all duration-300 focus:border-amber-500 dark:focus:border-amber-400 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

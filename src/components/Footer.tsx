"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Star,
  Award,
  Shield,
  Truck,
} from "lucide-react";

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
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const socialVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

const features = [
  { icon: Truck, text: "Free Shipping Over $200" },
  { icon: Shield, text: "Secure Payment" },
  { icon: Award, text: "Premium Quality" },
  { icon: Star, text: "5-Star Reviews" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-amber-600" },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    color: "hover:bg-pink-600",
  },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-amber-700" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-dark-elevated via-gray-900 to-dark-elevated dark:from-dark-surface dark:via-gray-950 dark:to-dark-surface text-gray-300 dark:text-gray-400 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-pink-900/10 to-orange-900/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />

      {/* Features Bar */}
      <motion.div
        className="border-b border-gray-700/50 dark:border-gray-800/50 py-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-sm font-medium text-gray-300 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-200 transition-colors">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.h3
              className="text-white dark:text-gray-100 text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              InstallBrand
            </motion.h3>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed mb-6">
              Trendy fashion for men, women, and kids. We deliver style and
              quality straight to your door with unmatched customer service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-sm group-hover:text-white dark:group-hover:text-gray-200 transition-colors">
                  hello@installbrand.com
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-sm group-hover:text-white dark:group-hover:text-gray-200 transition-colors">
                  +1 (555) 123-4567
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-sm group-hover:text-white dark:group-hover:text-gray-200 transition-colors">
                  New York, NY 10001
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white dark:text-gray-100 font-semibold text-lg mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {[
                "Men",
                "Women",
                "Kids",
                "Sale",
                "New Arrivals",
                "Best Sellers",
              ].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <motion.a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white dark:text-gray-100 font-semibold text-lg mb-6">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Shipping & Returns",
                "Size Guide",
                "Privacy Policy",
                "Terms of Service",
                "Contact Us",
              ].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <motion.a
                    href={`/${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace("&", "and")}`}
                    className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white dark:text-gray-100 font-semibold text-lg mb-6">
              Connect With Us
            </h4>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  variants={socialVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 bg-gray-700/50 dark:bg-gray-800/50 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} backdrop-blur-sm border border-gray-600/30 dark:border-gray-700/30 hover:border-transparent group`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-2xl p-4 border border-gray-600/30 dark:border-gray-700/30 backdrop-blur-sm">
              <h5 className="text-white dark:text-gray-100 font-semibold mb-2 text-sm">
                Stay Updated
              </h5>
              <p className="text-gray-400 dark:text-gray-500 text-xs mb-3">
                Get the latest fashion trends and exclusive deals
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700/50 dark:bg-gray-800/50 border border-gray-600/30 dark:border-gray-700/30 rounded-lg text-white dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500 text-white rounded-lg text-sm font-medium hover:from-yellow-600 hover:to-amber-600 transition-all duration-200 flex items-center gap-1"
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-700/50 dark:border-gray-800/50 py-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} InstallBrand. Made with
            </p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>
              by{" "}
              <a
                className=" text-yellow-500 ml-1 font-semibold hover:text-amber-600"
                target="blank"
                href="http://michael-isih.netlify.app"
              >
                Michael Isih
              </a>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-500 dark:text-gray-600 text-sm">
              All rights reserved.
            </span>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                scale: 1.1,
                y: -2,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gray-700/50 dark:bg-gray-800/50 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-600/30 dark:border-gray-700/30 hover:border-amber-500/50 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

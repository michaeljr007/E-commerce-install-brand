"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Shield,
  Gift,
  Sparkles,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: Gift,
    title: "Exclusive Deals",
    description: "Get up to 30% off exclusive member-only sales",
  },
  {
    icon: Sparkles,
    title: "New Arrivals",
    description: "Be first to shop the latest fashion trends",
  },
  {
    icon: Star,
    title: "Style Tips",
    description: "Weekly styling advice from fashion experts",
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

const itemVariants = {
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

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-dark-surface dark:via-dark dark:to-dark-elevated relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-pink-200/20 to-orange-200/20 dark:from-pink-800/20 dark:to-orange-800/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />

      {/* Floating elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-10 dark:opacity-5"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-10 dark:opacity-5"
        style={{ animationDelay: "-1s" }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl opacity-10 dark:opacity-5"
        style={{ animationDelay: "-2s" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Icon header */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-full border border-amber-200/50 dark:border-amber-800/30"
          >
            <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-semibold text-amber-700 dark:text-amber-300 tracking-wide uppercase">
              Newsletter
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl dark:text-white font-semibold mb-6 leading-tight"
          >
            Join Our Fashion Community
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Subscribe to our newsletter and be the first to get new arrivals,
            exclusive discounts, and style tips delivered straight to your
            inbox.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/70 dark:bg-dark-elevated/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-700 rounded-xl mb-4 shadow-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Form */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            {!isSubmitted ? (
              <motion.form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/80 dark:bg-dark-elevated/80 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700/50 shadow-xl">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-2 bg-transparent border-0 focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center min-w-[140px]"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        Subscribe
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/30"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome to the Family! 🎉
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Thank you for subscribing! Check your email for a special
                  welcome gift.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  whileHover={{ scale: 1.05 }}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-2 mx-auto"
                >
                  Subscribe Another Email
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Privacy Notice */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mt-8 px-6 py-3 bg-white/50 dark:bg-dark-elevated/50 backdrop-blur-sm rounded-full border border-white/50 dark:border-gray-700/50"
          >
            <Shield className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center gap-8 text-center"
          >
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                2,000+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Subscribers
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                4.9★
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Rating
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                Weekly
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Updates
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

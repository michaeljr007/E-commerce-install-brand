// app/components/FloatingThemeSettings.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Settings,
  Sun,
  Moon,
  Monitor,
  X,
  Palette,
  Check,
  Sparkles,
  Eye,
  Zap,
} from "lucide-react";

type Theme = "light" | "dark" | "system";

const THEME_KEY = "theme";

export default function FloatingThemeSettings() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  const [isHovering, setIsHovering] = useState(false);

  // Determine system preference
  const prefersDark = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches,
    []
  );

  // Apply theme to <html> element
  const applyTheme = (value: Theme) => {
    const root = document.documentElement;
    if (value === "system") {
      if (prefersDark) root.classList.add("dark");
      else root.classList.remove("dark");
      root.setAttribute("data-theme", "system");
    } else {
      root.classList.toggle("dark", value === "dark");
      root.setAttribute("data-theme", value);
    }
  };

  // Init from localStorage / system
  useEffect(() => {
    const stored = (localStorage.getItem(THEME_KEY) as Theme) || "system";
    setTheme(stored);
    applyTheme(stored);

    // react to system changes if user selected "system"
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      const current = (localStorage.getItem(THEME_KEY) as Theme) || "system";
      if (current === "system") applyTheme("system");
    };
    mq.addEventListener?.("change", listener);
    return () => mq.removeEventListener?.("change", listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle change
  const onSelectTheme = (value: Theme) => {
    setTheme(value);
    localStorage.setItem(THEME_KEY, value);
    applyTheme(value);
  };

  const fabVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring" as const, stiffness: 400, damping: 25 },
    },
    tap: { scale: 0.95 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      filter: "blur(10px)",
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 25 },
    },
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <motion.button
          onClick={() => setOpen(true)}
          variants={fabVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          className="group relative rounded-full shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white p-4 md:p-5 focus:outline-none focus:ring-4 focus:ring-blue-500/30 overflow-hidden"
          aria-label="Open theme settings"
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100"
            initial={false}
            animate={{ rotate: isHovering ? 360 : 0 }}
            transition={{
              duration: 2,
              repeat: isHovering ? Infinity : 0,
              ease: "linear",
            }}
          />

          {/* Glass overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

          {/* Icon with rotation animation */}
          <motion.div
            animate={{ rotate: isHovering ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative z-10"
          >
            <Settings className="h-5 w-5 md:h-6 md:w-6" />
          </motion.div>

          {/* Sparkle effects */}
          <AnimatePresence>
            {isHovering && (
              <>
                <motion.div
                  className="absolute top-1 right-1 text-yellow-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Sparkles className="h-3 w-3" />
                </motion.div>
                <motion.div
                  className="absolute bottom-1 left-1 text-pink-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="h-2 w-2" />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:bg-transparent"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Enhanced Modal/Card */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed z-50 bottom-20 right-6 max-w-sm w-[92vw] sm:w-96"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="rounded-3xl border border-white/20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl shadow-2xl overflow-hidden">
              {/* Animated header background */}
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-6">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-30"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative flex items-center justify-between">
                  <motion.div
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <div className="rounded-2xl p-3 bg-white/20 backdrop-blur-sm border border-white/30">
                      <Palette className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Theme Settings
                      </h3>
                      <p className="text-blue-100 text-sm opacity-90">
                        Customize your experience
                      </p>
                    </div>
                  </motion.div>

                  <motion.button
                    onClick={() => setOpen(false)}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>

              {/* Body */}
              <motion.div className="p-6 space-y-6" variants={itemVariants}>
                {/* Theme selector */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Eye className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Appearance Mode
                    </p>
                  </div>

                  <motion.div
                    className="grid grid-cols-3 gap-3"
                    variants={itemVariants}
                  >
                    <ThemeCard
                      label="Light"
                      description="Always bright"
                      icon={<Sun className="h-4 w-4" />}
                      active={theme === "light"}
                      onClick={() => onSelectTheme("light")}
                      gradient="from-yellow-400 to-orange-500"
                    />
                    <ThemeCard
                      label="Dark"
                      description="Easy on eyes"
                      icon={<Moon className="h-4 w-4" />}
                      active={theme === "dark"}
                      onClick={() => onSelectTheme("dark")}
                      gradient="from-indigo-500 to-purple-600"
                    />
                    <ThemeCard
                      label="System"
                      description="Auto-adapt"
                      icon={<Monitor className="h-4 w-4" />}
                      active={theme === "system"}
                      onClick={() => onSelectTheme("system")}
                      gradient="from-green-400 to-blue-500"
                    />
                  </motion.div>
                </div>

                {/* Quick Actions */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Quick Actions
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700/50 text-sm font-medium text-blue-700 dark:text-blue-300"
                      onClick={() =>
                        onSelectTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      Toggle Mode
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700/50 text-sm font-medium text-green-700 dark:text-green-300"
                      onClick={() => onSelectTheme("system")}
                    >
                      Use System
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Footer */}
              <motion.div
                className="px-6 py-4 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm border-t border-gray-200/80 dark:border-gray-700/60 flex items-center justify-between"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Check className="h-3 w-3 text-green-500" />
                  <span>Auto-saved</span>
                </div>
                <motion.button
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  Done
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ThemeCard({
  label,
  description,
  icon,
  active,
  onClick,
  gradient,
}: {
  label: string;
  description: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
  gradient: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative w-full rounded-2xl p-4 text-left transition-all duration-200 overflow-hidden ${
        active
          ? "bg-white dark:bg-gray-800 ring-2 ring-blue-500/50 shadow-lg shadow-blue-500/25"
          : "bg-gray-50/80 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md"
      }`}
    >
      {/* Active state background gradient */}
      {active && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <motion.span
            className={`inline-flex h-8 w-8 items-center justify-center rounded-xl transition-all ${
              active
                ? `bg-gradient-to-br ${gradient} text-white shadow-lg`
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
            }`}
            whileHover={{ rotate: active ? 360 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.span>
          {active && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-2 w-2 rounded-full bg-green-500"
            />
          )}
        </div>

        <div>
          <span
            className={`block text-sm font-semibold mb-1 ${
              active
                ? "text-gray-900 dark:text-gray-100"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {label}
          </span>
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            {description}
          </span>
        </div>
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5`}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}

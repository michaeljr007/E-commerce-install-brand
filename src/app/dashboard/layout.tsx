"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Settings,
  ChevronRight,
} from "lucide-react";
import FloatingThemeSettings from "@/components/FloatingThemeSettings";
import LogoutButton from "@/components/LogoutButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Detect desktop screens and set isOpen to true
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsOpen(mediaQuery.matches);

    const handleResize = () => setIsOpen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const navigationItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", icon: Package },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      backdropFilter: "blur(4px)",
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.2,
      },
    },
  };

  const navItemVariants = {
    hover: {
      x: 8,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
      },
    },
    active: {
      x: 4,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-dark-surface">
      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        className="fixed top-0 left-0 h-screen w-72 bg-white dark:bg-dark-elevated shadow-2xl z-50 md:translate-x-0 md:static md:shadow-none border-r border-gray-200 dark:border-gray-700"
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">User Panel</h2>
              </div>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </motion.button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-8rem)]">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive: boolean = pathname === item.href; // Explicit boolean type
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isActive
                    ? { ...navItemVariants.active, opacity: 1, x: 0 }
                    : { opacity: 1, x: 0 }
                } // Merge active variant with initial animation
                transition={{ delay: 0.1 + index * 0.05 }}
                variants={navItemVariants}
                whileHover="hover"
              >
                <Link
                  href={item.href}
                  className={`group flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 relative overflow-hidden
                    ${
                      isActive
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  onClick={handleNavClick}
                  aria-current={isActive ? "page" : undefined}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-opacity duration-200 rounded-xl ${
                      isActive
                        ? "opacity-20"
                        : "opacity-0 group-hover:opacity-10"
                    }`}
                  />
                  <IconComponent
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      isActive ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />
                  <span className="font-medium flex-1">{item.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-200 ${
                      isActive
                        ? "opacity-100 transform translate-x-0"
                        : "opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}
          <LogoutButton />

          {/* Sidebar Footer */}
          <div className="absolute md:w-[20%] bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-surface">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white dark:bg-dark-elevated shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  User
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  user@company.com
                </p>
              </div>
            </div>
          </div>
        </nav>
      </motion.aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 md:ml-0 flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white dark:bg-dark-elevated shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between sticky top-0 z-30 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
        >
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={20} />
            </motion.button>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Welcome back, what are we doing today?
              </p>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Settings size={18} />
            </motion.button>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">A</span>
            </div>
          </div>
        </motion.header>

        {/* Page Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1 p-6 bg-gray-50 dark:bg-dark-surface"
        >
          <div className="max-w-7xl mx-auto">{children}</div>
        </motion.main>
      </div>

      {/* Floating Settings */}
      <FloatingThemeSettings />
    </div>
  );
}

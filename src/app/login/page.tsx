"use client";

import Navbar from "@/components/Navbar";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  Chrome,
  LogIn,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  const router = useRouter();
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingCredentials, setLoadingCredentials] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoadingGoogle(true);
    await signIn("google", { callbackUrl: "/" });
    setLoadingGoogle(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoadingCredentials(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/dashboard");
    }
    setLoadingCredentials(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-dark-surface dark:via-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-400/10 to-orange-600/10 rounded-full blur-3xl"></div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative bg-white/80 dark:bg-dark-elevated/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl rounded-3xl px-8 py-4 -mt-[4vh]"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-4 shadow-lg">
                <LogIn className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Sign in to continue to your account
              </p>
            </motion.div>

            {/* Google Sign-In */}
            <motion.div variants={itemVariants} className="mb-4">
              <motion.button
                onClick={handleGoogleSignIn}
                disabled={loadingGoogle}
                whileHover={{ scale: loadingGoogle ? 1 : 1.02 }}
                whileTap={{ scale: loadingGoogle ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loadingGoogle ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-400/30 border-t-gray-600 rounded-full animate-spin"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Signing in...
                    </span>
                  </>
                ) : (
                  <>
                    <FaGoogle className="w-5 h-5 text-amber-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      Continue with Google
                    </span>
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="flex items-center mb-4"
            >
              <hr className="flex-1 border-gray-200 dark:border-gray-700" />
              <span className="px-4 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-dark-elevated">
                or continue with email
              </span>
              <hr className="flex-1 border-gray-200 dark:border-gray-700" />
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-xl flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-700 dark:text-red-300">
                  {error}
                </p>
              </motion.div>
            )}

            {/* Email / Password Login */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleCredentialsLogin}
              className="space-y-5"
            >
              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 dark:focus:border-amber-400 outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-12 pr-12 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 dark:focus:border-amber-400 outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loadingCredentials}
                whileHover={{ scale: loadingCredentials ? 1 : 1.02 }}
                whileTap={{ scale: loadingCredentials ? 1 : 0.98 }}
                className="w-full py-3 bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {loadingCredentials ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </motion.form>

            {/* Sign Up Link */}
            <motion.div variants={itemVariants} className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Don`t have an account?{" "}
                <a
                  href="/signup"
                  className="font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-blue-300 transition-colors hover:underline"
                >
                  Create one here
                </a>
              </p>
            </motion.div>

            {/* Remember Me & Security Note */}
            <motion.div
              variants={itemVariants}
              className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Secure login with encryption</span>
                <span>Privacy protected</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;

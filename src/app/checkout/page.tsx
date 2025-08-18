"use client";

import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Building2,
  User,
  Hash,
  DollarSign,
  MessageCircle,
  Copy,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";

const PaymentPageContent = () => {
  const searchParams = useSearchParams();
  const amount = searchParams.get("total");
  const [copiedField, setCopiedField] = useState("");

  const hotelBankDetails = {
    bankName: "Example Bank",
    accountName: "Install Brand",
    accountNumber: "1234567890",
  };

  const whatsappNumber = "2348089915518";
  const message = encodeURIComponent(
    `Hello, I have made a payment of ₦${amount}. Here is my proof of payment:`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(""), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-4xl"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 rounded-2xl mb-4 shadow-lg">
          <CreditCard className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
          Complete Your Payment
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base">
          Secure bank transfer details below
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Payment Details Card */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white/80 dark:bg-dark-elevated/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl py-5 px-6 shadow-2xl shadow-gray-200/50 dark:shadow-black/20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
              <Building2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bank Transfer Details
            </h2>
          </div>

          <div className="space-y-3">
            {/* Bank Name */}
            <motion.div
              variants={itemVariants}
              className="group px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Bank Name
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {hotelBankDetails.bankName}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    copyToClipboard(hotelBankDetails.bankName, "bankName")
                  }
                  className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {copiedField === "bankName" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Account Name */}
            <motion.div
              variants={itemVariants}
              className="group px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Account Name
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {hotelBankDetails.accountName}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    copyToClipboard(hotelBankDetails.accountName, "accountName")
                  }
                  className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {copiedField === "accountName" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Account Number */}
            <motion.div
              variants={itemVariants}
              className="group px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Hash className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Account Number
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white font-mono">
                      {hotelBankDetails.accountNumber}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    copyToClipboard(
                      hotelBankDetails.accountNumber,
                      "accountNumber"
                    )
                  }
                  className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {copiedField === "accountNumber" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Amount */}
            <motion.div
              variants={pulseVariants}
              initial="initial"
              animate="animate"
              className="px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-200 dark:border-amber-700"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 dark:bg-amber-800 rounded-xl">
                  <DollarSign className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-amber-800 font-bold dark:text-amber-400">
                    Amount to Pay
                  </p>
                  <p className="text-3xl font-bold text-black dark:text-amber-100">
                    ₦{amount?.toLocaleString() || "0"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Action Card */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* WhatsApp Action */}
          <div className="bg-white/80 dark:bg-dark-elevated/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 shadow-2xl shadow-gray-200/50 dark:shadow-black/20">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-4">
                <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Send Proof
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                After payment, send your receipt via WhatsApp
              </p>
            </div>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg shadow-green-600/25 hover:shadow-green-600/40 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5" />
              Send Proof
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Security Notice */}
          <motion.div
            variants={itemVariants}
            className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-4"
          >
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-amber-800 dark:text-amber-300 mb-1">
                  Secure Payment
                </h4>
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  Your payment is processed securely. Keep your receipt for
                  verification.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Processing Time */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-4"
          >
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-1">
                  Processing Time
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Confirmation within 5-10 minutes after receipt submission.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PaymentPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-dark-surface dark:via-slate-900 dark:to-slate-800 p-4">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
          <Suspense
            fallback={
              <div className="text-center py-10">
                Loading payment details...
              </div>
            }
          >
            <PaymentPageContent />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;

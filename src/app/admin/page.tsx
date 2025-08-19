import React from "react";
import {
  Users,
  Package,
  ShoppingCart,
  TrendingUp,
  Eye,
  DollarSign,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-slate-600 mt-2">
            Welcome back! Here`s what`s happening with your business today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Users Card */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20 hover:bg-white/80 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  +12%
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                Total Users
              </h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                1,245
              </p>
              <p className="text-sm text-slate-500">registered users</p>
            </div>
          </div>

          {/* Products Card */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20 hover:bg-white/80 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  +8%
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                Products
              </h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
                532
              </p>
              <p className="text-sm text-slate-500">in catalog</p>
            </div>
          </div>

          {/* Orders Card */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20 hover:bg-white/80 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                  +23%
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                New Orders
              </h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                89
              </p>
              <p className="text-sm text-slate-500">this week</p>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Revenue Card */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20 hover:bg-white/80 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                  +15%
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                Revenue
              </h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                $24.5K
              </p>
              <p className="text-sm text-slate-500">this month</p>
            </div>
          </div>

          {/* Growth Card */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20 hover:bg-white/80 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                  +18%
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                Growth Rate
              </h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                +18%
              </p>
              <p className="text-sm text-slate-500">vs last month</p>
            </div>
          </div>

          {/* Page Views Card */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20 hover:bg-white/80 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-medium text-teal-600 bg-teal-100 px-2 py-1 rounded-full">
                  +9%
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                Page Views
              </h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                12.8K
              </p>
              <p className="text-sm text-slate-500">this week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

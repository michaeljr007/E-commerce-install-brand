"use client";
import React, { useState } from "react";
import { Search, Plus, X } from "lucide-react";

const mockProducts = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: "$25",
    image: "https://via.placeholder.com/150",
    category: "Tops",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: "$80",
    image: "https://via.placeholder.com/150",
    category: "Outerwear",
  },
  {
    id: 3,
    name: "Leather Boots",
    price: "$120",
    image: "https://via.placeholder.com/150",
    category: "Footwear",
  },
  {
    id: 4,
    name: "Black Skinny Jeans",
    price: "$60",
    image: "https://via.placeholder.com/150",
    category: "Bottoms",
  },
];

const Page = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative bg-gray-50">
      {/* Fixed Top Bar */}
      <div className="fixed top-[15vh] md:top-[12.6vh] z-20 flex items-center justify-between bg-white p-4 shadow-md">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-black focus:outline-none"
          />
        </div>

        {/* New Product Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-4 flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-800"
        >
          <Plus size={18} />
          New Product
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-xl bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 h-40 w-full rounded-lg object-cover"
            />
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="mt-2 font-bold text-gray-900">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Create Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <h2 className="mb-4 text-lg font-semibold">Create New Product</h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Product Name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
              />
              <input
                type="text"
                placeholder="Category"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
              />
              <input
                type="text"
                placeholder="Price"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
              />
              <input
                type="url"
                placeholder="Image URL"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
              />

              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-black py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                Save Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

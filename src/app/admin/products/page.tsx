"use client";
import React, { useState } from "react";
import { Search, Plus, X } from "lucide-react";

const mockProducts = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Tops",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: "$80",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Outerwear",
  },
  {
    id: 3,
    name: "Leather Boots",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Footwear",
  },
  {
    id: 4,
    name: "Black Skinny Jeans",
    price: "$60",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Bottoms",
  },
  {
    id: 5,
    name: "Wool Beanie",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Silk Scarf",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Accessories",
  },
];

const Page = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  const filteredProducts = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  //eslint-disable-next-line
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //eslint-disable-next-line
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log("New product:", newProduct);
    setIsModalOpen(false);
    setNewProduct({ name: "", category: "", price: "", image: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-surface dark:to-dark-surface">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-20 flex items-center justify-between bg-white/80 dark:bg-dark-elevated backdrop-blur-md p-4 border-b border-gray-200 rounded-lg">
        <div className="container mx-auto flex items-center justify-between">
          {/* Search */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
            />
          </div>

          {/* New Product Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="ml-4 flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 transition-colors duration-200"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">New Product</span>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-xl bg-white dark:bg-dark-elevated shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-800 dark:text-white line-clamp-2">
                      {product.name}
                    </h3>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2">
                      {product.category}
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                    {product.price}
                  </p>
                  <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400">
              <Search size={96} className="mx-auto opacity-50" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              No products found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter to find what you`re looking
              for.
            </p>
          </div>
        )}
      </div>

      {/* Create Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100 transition-colors duration-200"
            >
              <X size={20} className="text-gray-500" />
            </button>

            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Create New Product
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Classic White T-Shirt"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  placeholder="e.g. Tops"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  placeholder="e.g. $25"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={newProduct.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
                  required
                />
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 transition-colors duration-200"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

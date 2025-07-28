import React, { useState } from "react";
import {
  Plus,
  Minus,
  Heart,
  RefreshCw,
  Truck,
  BadgeCheck,
} from "lucide-react";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="px-4 md:px-8 lg:px-28 py-10 bg-gradient-to-br from-lime-50 to-yellow-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section - Product Image */}
        <div className="flex flex-col items-center">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg"
            alt="Chicken Meatballs"
            className="rounded-md w-80 md:w-96 lg:w-[32rem]"
          />

          <div className="flex gap-4 mt-4">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-90x90.jpg"
              alt="Thumbnail"
              className="w-14 h-14 border-2 border-blue-600 rounded-md"
            />
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-90x90.jpg"
              alt="Thumbnail"
              className="w-14 h-14 rounded-md"
            />
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35-90x90.jpg"
              alt="Thumbnail"
              className="w-14 h-14 rounded-md"
            />
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            All Natural Italian-Style Chicken Meatballs
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>
              Brand: <span className="text-blue-600 font-medium">Welch’s</span>
            </span>
            <span>•</span>
            <span>⭐ 1 REVIEW</span>
            <span>•</span>
            <span>SKU: ZU49VOR</span>
          </div>

          <div className="flex items-center gap-3 text-xl font-semibold">
            <span className="text-red-600">$7.25</span>
            <span className="line-through text-gray-400 text-base">$9.35</span>
            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-md">
              23%
            </span>
          </div>

          <span className="inline-block px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full w-fit">
            IN STOCK
          </span>

          <p className="text-sm text-gray-600">
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
            malesuada tincidunt. Class aptent taciti sociosqu ad litora
            torquent.
          </p>

          {/* Quantity Selector & Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border rounded px-3 py-1">
              <Minus className="w-4 h-4 cursor-pointer" />
              <span className="text-sm">1</span>
              <Plus className="w-4 h-4 cursor-pointer" />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Add to cart
            </button>
          </div>

          {/* Wishlist & Compare */}
          <div className="flex gap-4 text-sm text-gray-500 mt-2">
            <button className="flex items-center gap-1 hover:text-blue-600">
              <Heart className="w-4 h-4" /> Add to Wishlist
            </button>
            <button className="flex items-center gap-1 hover:text-blue-600">
              <RefreshCw className="w-4 h-4" /> Compare
            </button>
          </div>

          {/* Info */}
          <ul className="text-sm text-gray-700 space-y-1 mt-4">
            <li>✅ Type: Organic</li>
            <li>✅ MFG: Jun 4, 2021</li>
            <li>✅ LIFE: 30 days</li>
          </ul>

          {/* Category & Tags */}
          <div className="text-sm text-gray-500 mt-2">
            <p>
              Category: <span className="text-gray-700">Meats & Seafood</span>
            </p>
            <p>
              Tags: <span className="text-gray-700">chicken, natural, organic</span>
            </p>
          </div>

          {/* Delivery Info */}
          <div className="bg-white p-4 mt-6 border rounded-lg space-y-3">
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Truck className="w-4 h-4 mt-1" />
              <span>Free Shipping apply to all orders over $100</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <BadgeCheck className="w-4 h-4 mt-1" />
              <span>Guaranteed 100% Organic from natural farms</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <RefreshCw className="w-4 h-4 mt-1" />
              <span>1 Day Returns if you change your mind</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              f
            </div>
            <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              ♥
            </div>
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
              in
            </div>
            <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              w
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-5xl mx-auto mt-12">
        <div className="flex justify-center gap-6 text-sm font-semibold">
          {['Description', 'Additional Info', 'Reviews'].map((tab) => (
            <button
              key={tab}
              className={`pb-2 px-2 transition text-gray-600 ${
                activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-700">
          {activeTab === "Description" && (
            <p>
              Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.

Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.
            </p>
          )}

          {activeTab === "Additional Info" && (
            <ul className="list-disc pl-5 space-y-1">
              <li>Weight: 500g</li>
              <li>Packaging: Vacuum sealed</li>
              <li>Storage: Keep refrigerated</li>
              <li>Origin: USA</li>
            </ul>
          )}

          {activeTab === "Reviews" && (
            <div className="space-y-6">
              <div>
                <p className="font-medium">John D.</p>
                <div className="text-yellow-400">★★★★☆</div>
                <p className="text-sm mt-2">
                  Great flavor and texture. Tasted fresh and cooked quickly.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Leave a Review</h3>
                <form className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Rating</label>
                    <select
                      className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Choose a rating</option>
                      <option value="5">★★★★★</option>
                      <option value="4">★★★★☆</option>
                      <option value="3">★★★☆☆</option>
                      <option value="2">★★☆☆☆</option>
                      <option value="1">★☆☆☆☆</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Comment</label>
                    <textarea
                      rows="4"
                      className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your review..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

// components/GroceryFooter.jsx
import React from 'react';
import { Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const GroceryFooter = () => {
  const categories = {
    'Fruits & Vegetables': ['Fresh Vegetables', 'Herbs & Seasonings', 'Fresh Fruits', 'Exotic Fruits & Veggies'],
    'Breakfast & Dairy': ['Milk & Flavoured Milk', 'Butter', 'Cheese', 'Eggs', 'Yogurt'],
    'Meat & Seafood': ['Chicken', 'Beef', 'Sausages', 'Shrimp', 'Crab & Shellfish'],
    'Beverages': ['Water', 'Soda', 'Coffee', 'Tea', 'Wine'],
    'Bakery': ['Bread', 'Pastries', 'Muffins', 'Bagels']
  };

  const policyLinks = ['Privacy Policy', 'Terms & Conditions', 'Cookies'];

  const paymentMethods = ['Visa', 'Mastercard', 'PayPal', 'Amex', 'Stripe'];

  return (
    <footer className="bg-gray-50 text-black-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 space-y-12">

        {/* Category Links */}
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {Object.entries(categories).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-black font-semibold mb-3">{title}</h4>
              <ul className="space-y-2 text-sm">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact, App Download, and Social */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row md:justify-between gap-8">

          {/* Contact Info */}
          <div className="flex items-start gap-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-semibold text-black">8 800 555-55</div>
              <div className="text-sm text-black-400">Working Hours: 8:00 - 22:00</div>
            </div>
          </div>

          {/* App Download */}
          <div>
            <p className="text-black font-semibold mb-2">Get Our App</p>
            <div className="flex gap-3">
              <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Google Play</a>
              <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">App Store</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 items-center">
            <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
              <Facebook className="text-white w-4 h-4" />
            </a>
            <a href="#" className="bg-sky-400 p-2 rounded-full hover:bg-sky-500">
              <Twitter className="text-white w-4 h-4" />
            </a>
            <a href="#" className="bg-pink-500 p-2 rounded-full hover:bg-pink-600">
              <Instagram className="text-white w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <div className="text-center text-black md:text-left">
            © 2025 GroceryMart. All rights reserved.
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap text-black justify-center md:justify-end gap-4">
            {policyLinks.map((link, i) => (
              <a key={i} href="#" className="hover:text-blue transition">{link}</a>
            ))}
          </div>

          {/* Payment */}
          <div className="flex gap-3 mt-2 md:mt-0">
            {paymentMethods.map((method, idx) => (
              <div key={idx} className="bg-gray-800 text-white text-xs px-3 py-1 rounded">{method}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroceryFooter;

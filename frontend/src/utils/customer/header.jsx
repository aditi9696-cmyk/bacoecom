import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  MapPin,
  Globe,
  ChevronDown
} from 'lucide-react';

const Header = () => {
  const [selectedLocation, setSelectedLocation] = useState('New York, US');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const locations = ['New York, US', 'London, UK', 'Mumbai, IN', 'Tokyo, JP', 'Sydney, AU'];
  const languages = ['English', 'Spanish', 'French', 'German', 'Japanese', 'Hindi'];

  return (
    <div className="w-full bg-white shadow-sm">
      {/* Location and Language Bar */}
      <div className="  bg-transparent border-b border-gray-200 w-full">
        <div className="px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-8 lg:space-x-12">
              {/* Location Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="flex items-center space-x-1 text-white-600"
                >
                  <MapPin className="h-4 w-4" />
                  <span>{selectedLocation}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                {isLocationOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          setSelectedLocation(location);
                          setIsLocationOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-white-700  hover:text-gray-900"
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-1 text-white-600  transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>{selectedLanguage}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                {isLanguageOpen && (
                  <div className="absolute top-full left-0 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {languages.map((language) => (
                      <button
                        key={language}
                        onClick={() => {
                          setSelectedLanguage(language);
                          setIsLanguageOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-white-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-6 text-gray-600">
              <span>Free shipping on orders over $50</span>
              <span>|</span>
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="relative bg-white w-full">
        <div className="px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 mr-12 lg:mr-16 xl:mr-20">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex space-x-4 lg:space-x-6 xl:space-x-8 mr-8 lg:mr-12 xl:mr-16">
              <Link to="/" className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
              <Link to="/productList" className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">ProductList</Link>
              <Link to="/productDetails" className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">ProductDetails</Link>
              <Link to="/cart" className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Cart</Link>
            </nav>

            {/* Search Bar */}
            <div className="flex flex-1 max-w-md lg:max-w-lg xl:max-w-xl mr-8 lg:mr-12 xl:mr-16">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-sm"
                />
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-6 lg:space-x-8">
              <Link to="/profile" className="flex flex-col items-center space-y-1 p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <User className="h-6 w-6" />
                <span className="text-xs">Profile</span>
              </Link>

              <Link to="/wishlist" className="flex flex-col items-center space-y-1 p-2 text-gray-600 hover:text-gray-900 transition-colors relative">
                <Heart className="h-6 w-6" />
                <span className="text-xs">Wishlist</span>
              </Link>

              <Link to="/cart" className="flex flex-col items-center space-y-1 p-2 text-gray-600 hover:text-gray-900 transition-colors relative">
                <ShoppingBag className="h-6 w-6" />
                <span className="text-xs">Bag</span>
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
              </Link>
              <Link to="/admin" className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Admin</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingCart,
  Package,
  UtensilsCrossed,
  ChefHat,
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'View Products', path: '/admin/products', icon: <UtensilsCrossed size={18} /> },
    { name: 'Orders List', path: '/admin/orders', icon: <ShoppingCart size={18} /> },
    { name: 'Inventory', path: '/admin/inventory', icon: <Package size={18} /> },
    { name: 'Chef Picks', path: '/admin/chefs', icon: <ChefHat size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-lime-50 to-yellow-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl rounded-r-lg overflow-hidden">
        <div className="p-6 text-3xl font-bold text-green-700 border-b border-green-200 tracking-wide">
          🥗 Food Admin
        </div>

        <nav className="p-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-transform duration-200 transform hover:scale-105 group ${
                location.pathname === item.path
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-green-100'
              }`}
            >
              <div className="text-green-600 group-hover:animate-bounce">
                {item.icon}
              </div>
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-4 text-xs text-center text-gray-400">
          &copy; {new Date().getFullYear()} Food Dashboard
        </div>
      </div>

      {/* Content Outlet */}
      <div className="flex-1 p-6">
        {/* Use <Outlet /> here in layout route */}
      </div>
    </div>
  );
};

export default AdminSidebar;

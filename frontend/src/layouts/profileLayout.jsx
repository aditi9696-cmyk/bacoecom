import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';

const Profilelayout = () => {
  const location = useLocation();
  const isLogin = location.pathname.endsWith('/login');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md min-h-[450px]">
        <div className="flex justify-center mb-6 border-b border-gray-200">
          <Link
            to="/profile/login"
            className={`px-4 py-2 font-semibold transition ${
              isLogin
                ? 'text-black border-b-2 border-black'
                : 'text-gray-400'
            }`}
          >
            LOGIN
          </Link>
          <Link
            to="/profile/register"
            className={`px-4 py-2 font-semibold transition ${
              !isLogin
                ? 'text-black border-b-2 border-black'
                : 'text-gray-400'
            }`}
          >
            REGISTER
          </Link>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Profilelayout;

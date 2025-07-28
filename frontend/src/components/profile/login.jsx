// src/components/profile/login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", user);
      localStorage.setItem("token", res.data.token);
      // localStorage.setItem("userId", res.data.user._id); // 👈 Save userId!
       
      toast.success("Login Successful! Redirecting to home...", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password *
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm">Remember me</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 font-semibold"
        >
          Log in
        </button>

        <div className="text-center mt-2">
          <a href="#" className="text-sm text-sky-500 hover:underline">
            Lost your password?
          </a>
        </div>
      </form>
    </>
  );
};

export default Login;

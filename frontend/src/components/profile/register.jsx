// src/components/profile/register.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!user.username || !user.email || !user.password || !user.confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username: user.username,
        email: user.email,
        password: user.password,
      });

      toast.success("Registration Successful! Redirecting to login...");
      setTimeout(() => navigate("/profile/login"), 2000);
    } catch (err) {
      toast.error(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username *</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email *</label>
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
          <label className="block text-sm font-medium text-gray-700">Password *</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password *</label>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 font-semibold"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Register;

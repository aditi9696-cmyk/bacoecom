// src/axiosInstance.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Change if needed
  withCredentials: true, // If using cookies
});

// Add token from localStorage if needed
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;


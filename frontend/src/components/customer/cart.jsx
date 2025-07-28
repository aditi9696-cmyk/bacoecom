import React, { useEffect, useState } from "react";
import axios from "../../axiosInstance";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const fetchCart = async () => {
    try {
      const res = await axios.get(`/cart/${userId}`);
      setCart(res.data);
    } catch (err) {
      toast.error("Failed to load cart");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (productId, type) => {
    try {
      await axios.put(`/cart/update`, {
        userId,
        productId,
        type,
      });
      fetchCart();
    } catch (err) {
      toast.error("Failed to update quantity");
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.put(`/cart/remove`, {
        userId,
        productId,
      });
      fetchCart();
    } catch (err) {
      toast.error("Failed to remove item");
    }
  };

  const handleCheckout = async (productId) => {
    try {
      await axios.post("/orders", { userId, productId });
      toast.success("Order placed successfully!");
      fetchCart();
    } catch (err) {
      toast.error("Checkout failed");
    }
  };

  const getTotal = () =>
    cart?.items?.reduce((acc, item) => {
      const product = item?.productId;
      if (product && product.price) {
        return acc + item.quantity * product.price;
      }
      return acc;
    }, 0) || 0;

  if (!cart?.items?.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-16 text-center">
        <ToastContainer />
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-28 h-28 mb-6"
        />
        <h2 className="text-lg md:text-xl font-semibold text-red-600 mb-4">
          YOUR CART IS CURRENTLY EMPTY.
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-900"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 md:px-8">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h2>

      <div className="space-y-6">
        {cart.items
          .filter((item) => item?.productId) // skip items with null productId
          .map((item) => {
            const product = item.productId;
            return (
              <div
                key={product._id}
                className="flex items-start justify-between p-4 border rounded-xl bg-gray-50 shadow-md"
              >
                <div className="flex gap-4">
                  <img
                    src={product.image || "https://via.placeholder.com/80"}
                    alt={product.name || "Product"}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-between">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {product.name || "Unnamed Product"}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      ₹{product.price} x {item.quantity}
                    </p>
                    <div className="flex gap-2 mt-2 items-center">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => updateQuantity(product._id, "decrease")}
                      >
                        −
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => updateQuantity(product._id, "increase")}
                      >
                        +
                      </button>
                      <button
                        className="ml-4 text-red-500 hover:underline text-sm"
                        onClick={() => removeFromCart(product._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end">
                  <p className="text-green-700 font-semibold text-lg mb-2">
                    ₹{(product.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleCheckout(product._id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {/* Bottom Summary */}
      <div className="bg-gray-100 rounded-xl shadow-lg p-6 mt-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Summary</h3>
        <div className="flex justify-between mb-2 text-gray-600">
          <span>Subtotal</span>
          <span>₹{getTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 text-gray-600">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{getTotal().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;

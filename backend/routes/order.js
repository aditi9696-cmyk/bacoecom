// const express = require("express");
// const router = express.Router();
// const Order = require("../models/order");
// const Cart = require("../models/cart");
// const Product = require("../models/product");

// // Place Order
// router.post("/", async (req, res) => {
//   const { userId } = req.body;

//   try {
//     const cart = await Cart.findOne({ userId }).populate("items.productId");

//     if (!cart || cart.items.length === 0) {
//       return res.status(400).json({ error: "Cart is empty" });
//     }

//     const total = cart.items.reduce(
//       (sum, item) => sum + item.productId.price * item.quantity,
//       0
//     );

//     const order = new Order({
//       userId,
//       items: cart.items.map((item) => ({
//         productId: item.productId._id,
//         quantity: item.quantity,
//       })),
//       total,
//     });

//     await order.save();

//     // Clear cart after placing order
//     await Cart.findOneAndDelete({ userId });

//     res.status(200).json({ message: "Order placed", order });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Admin: Get All Orders
// router.get("/all", async (req, res) => {
//   try {
//     const orders = await Order.find().populate("userId").populate("items.productId");
//     res.json(orders);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Admin: Update Order Status
// router.put("/:orderId", async (req, res) => {
//   try {
//     const updated = await Order.findByIdAndUpdate(
//       req.params.orderId,
//       { status: req.body.status },
//       { new: true }
//     );
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to update order" });
//   }
// });


const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const Product = require("../models/product");

router.post("/", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const order = new Order({
      userId,
      productId,
      quantity: 1, // you can customize this if you want to pass quantity
      price: product.price,
      status: "Placed",
      orderDate: new Date()
    });

    await order.save();
    res.status(201).json({ message: "Order placed", order });
  } catch (error) {
    res.status(500).json({ message: "Order placement failed", error });
  }
});

module.exports = router;

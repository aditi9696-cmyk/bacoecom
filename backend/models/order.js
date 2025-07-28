// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   items: [
//     {
//       productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//       quantity: Number,
//     },
//   ],
//   total: Number,
//   status: { type: String, default: "Processing" },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Order", orderSchema);



const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity: {
    type: Number,
    default: 1
  },
  price: Number,
  status: {
    type: String,
    enum: ["Placed", "Shipped", "Delivered", "Cancelled"],
    default: "Placed"
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);

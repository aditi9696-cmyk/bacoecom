const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  items: [CartItemSchema],
});

module.exports = mongoose.model("Cart", CartSchema);

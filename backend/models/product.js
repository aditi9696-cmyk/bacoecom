const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  description: String,
  image: String,
  rating: { type: Number, default: 0 },
  category: { type: String, required: true }, // ✅ This is crucial
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", productSchema);

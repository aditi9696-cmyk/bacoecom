// const express = require("express");
// const router = express.Router();
// const Cart = require("../models/cart");
// const Product = require("../models/product");

// // ✅ Add item to Cart
// router.post("/add", async (req, res) => {
//   const { userId, productId, quantity } = req.body;

//   try {
//     let cart = await Cart.findOne({ userId });

//     if (!cart) {
//       cart = new Cart({ userId, items: [{ productId, quantity }] });
//     } else {
//       const itemIndex = cart.items.findIndex(
//         item => item.productId.toString() === productId
//       );

//       if (itemIndex > -1) {
//         cart.items[itemIndex].quantity += quantity;
//       } else {
//         cart.items.push({ productId, quantity });
//       }
//     }

//     await cart.save();
//     res.status(200).json({ message: "Item added to cart", cart });
//   } catch (err) {
//     console.error("Add to Cart Error:", err);
//     res.status(500).json({ error: "Failed to add item to cart" });
//   }
// });

// // ✅ Get Cart Items
// router.get("/:userId", async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.params.userId })
//       .populate("items.productId");

//     if (!cart) {
//       return res.status(200).json({ userId: req.params.userId, items: [] });
//     }

//     res.status(200).json(cart);
//   } catch (err) {
//     console.error("Get Cart Error:", err);
//     res.status(500).json({ error: "Failed to fetch cart" });
//   }
// });

// // ✅ Clear Cart after Checkout
// router.delete("/clear/:userId", async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.params.userId });

//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     cart.items = [];
//     await cart.save();
//     res.status(200).json({ message: "Cart cleared successfully" });
//   } catch (err) {
//     console.error("Clear Cart Error:", err);
//     res.status(500).json({ error: "Failed to clear cart" });
//   }
// });

// // ✅ Update Quantity of a Cart Item
// router.patch("/update", async (req, res) => {
//   const { userId, productId, quantity } = req.body;

//   try {
//     const cart = await Cart.findOne({ userId });
//     if (!cart) return res.status(404).json({ error: "Cart not found" });

//     const item = cart.items.find(
//       item => item.productId.toString() === productId
//     );
//     if (!item) return res.status(404).json({ error: "Product not in cart" });

//     item.quantity = quantity;
//     await cart.save();
//     res.status(200).json({ message: "Cart item updated", cart });
//   } catch (err) {
//     console.error("Update Quantity Error:", err);
//     res.status(500).json({ error: "Failed to update cart" });
//   }
// });

// // ✅ Remove a single item from cart
// router.delete("/remove", async (req, res) => {
//   const { userId, productId } = req.body;

//   try {
//     const cart = await Cart.findOne({ userId });
//     if (!cart) return res.status(404).json({ error: "Cart not found" });

//     cart.items = cart.items.filter(
//       item => item.productId.toString() !== productId
//     );
//     await cart.save();
//     res.status(200).json({ message: "Item removed", cart });
//   } catch (err) {
//     console.error("Remove Item Error:", err);
//     res.status(500).json({ error: "Failed to remove item from cart" });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");




router.put("/update", async (req, res) => {
  const { userId, productId, type } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const item = cart.items.find((i) => i.productId.toString() === productId);
    if (!item) return res.status(404).json({ error: "Item not found in cart" });

    if (type === "increase") {
      item.quantity += 1;
    } else if (type === "decrease") {
      item.quantity = Math.max(item.quantity - 1, 1);
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Remove item from cart
router.put("/remove", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter((i) => i.productId.toString() !== productId);
    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add to cart
router.post("/add", async (req, res) => {
  const { userId, productId, quantity = 1 } = req.body;

  if (!userId || !productId) {
    return res.status(400).json({ error: "Missing userId or productId" });
  }

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json({ message: "Item added to cart", cart });
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ error: "Failed to add to cart" });
  }
});

// Get cart
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate("items.productId");
    if (!cart) return res.json({ items: [] });
    res.json(cart);
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
});

module.exports = router;

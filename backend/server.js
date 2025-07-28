const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/products");
 

const app = express();
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));
app.use(express.json());

// 🔗 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error(err));


const cartRoutes = require("./routes/cart");
// 🛣️ Use Product Routes
app.use("/api/products", productRoutes);
app.use("/api/auth",require("./routes/auth"))
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/order'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

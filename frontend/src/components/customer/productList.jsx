// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ChevronDown } from "lucide-react";
// import { toast } from 'react-toastify';
// import axios from "../../axiosInstance";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [limit, setLimit] = useState(8);
//   const [category, setCategory] = useState("All");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get("/products");
//         let filtered = res.data;
//         if (category !== "All") {
//           filtered = filtered.filter(p => p.category === category);
//         }
//         setProducts(filtered.slice(0, limit));
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load products");
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [limit, category]);

//   const handleCategoryClick = (catKey) => {
//     setCategory(catKey);
//   };

//   const handleAddToCart = async (productId) => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) return toast.error("Please login to add to cart");

//     try {
//       await axios.post("/cart/add", {
//         userId,
//         productId,
//         quantity: 1,
//       });
//       toast.success("Item added to cart!");
//     } catch (err) {
//       toast.error("Failed to add to cart");
//     }
//   };

//   return (
//     <div className="w-380 flex flex-col md:flex-row px-4 md:px-20 py-10 gap-8 bg-gradient-to-br from-lime-50 to-yellow-50">
//       <aside className="w-full md:w-1/4 space-y-6">
//         <div>
//           <h3 className="text-gray-600 font-semibold mb-2">PRODUCT CATEGORIES</h3>
//           {["All","Beverages","Biscuits & Snacks","Breads & Bakery","Breakfast & Dairy","Frozen Foods","Fruits & Vegetables","Grocery & Staples","Household Needs","Meats & Seafood"].map((name, idx) => (
//             <div
//               key={idx}
//               className="text-black flex items-center gap-2 mb-1 cursor-pointer"
//               onClick={() => handleCategoryClick(name)}
//             >
//               <input type="radio" name="category" checked={category === name} readOnly />
//               <label>{name}</label>
//               <span className="ml-auto">+</span>
//             </div>
//           ))}
//         </div>

//         <div>
//           <h3 className="text-gray-600 font-semibold mb-2">FILTER BY PRICE</h3>
//           <div className="relative">
//             <input type="range" min="0" max="1000" className="w-full" />
//             <p className="text-black text-sm mt-2">
//               Price: <strong>$0 – $1000</strong>
//             </p>
//             <button className="text-black text-xs mt-1 text-blue-600 font-semibold">FILTER</button>
//           </div>
//         </div>

//         <div>
//           <h3 className="text-gray-600 font-semibold mb-2">PRODUCT STATUS</h3>
//           {["In Stock", "On Sale"].map((status, idx) => (
//             <div key={idx} className="text-black flex items-center gap-2 mb-1">
//               <input type="checkbox" />
//               <label>{status}</label>
//             </div>
//           ))}
//         </div>

//         <div>
//           <h3 className="text-gray-600 font-semibold mb-2">BRANDS</h3>
//           {[
//             { name: "Frito Lay", count: 10 },
//             { name: "Nespresso", count: 12 },
//             { name: "Oreo", count: 9 }
//           ].map((brand, idx) => (
//             <div key={idx} className="text-black flex items-center gap-2 mb-1">
//               <input type="checkbox" />
//               <label>{brand.name} ({brand.count})</label>
//             </div>
//           ))}
//         </div>

//         <div className="mt-6 h-64">
//           <img
//             src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
//             alt="Ad"
//             className="w-full h-full object-cover rounded-lg shadow"
//           />
//         </div>
//       </aside>

//       <main className="w-full md:w-3/4 space-y-6">
//         <div
//           className="relative h-48 rounded-md flex items-center justify-center text-center text-xl md:text-2xl font-semibold text-gray-800"
//           style={{
//             backgroundImage: "url('https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="flex flex-col items-center">
//             <p>Organic Meals Prepared</p>
//             <p className="text-xl text-green-600">Delivered to your Home</p>
//           </div>
//         </div>

//         <div className="flex justify-end items-center">
//           <div className="flex gap-4 items-center text-sm">
//             <span className="flex items-center gap-1">
//               Sort by latest <ChevronDown size={16} />
//             </span>
//             <span className="flex items-center gap-1">
//               Show
//               <select
//                 className="border px-2 py-1 rounded text-sm"
//                 value={limit}
//                 onChange={(e) => setLimit(Number(e.target.value))}
//               >
//                 {[8, 12, 16, 20].map((val) => (
//                   <option key={val} value={val}>{val}</option>
//                 ))}
//               </select>
//             </span>
//           </div>
//         </div>

//         {loading ? (
//           <p className="text-center text-gray-500">Loading products...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">{error}</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <Link to={`/product/${product._id}`} key={product._id}>
//                 <div className="border-black/50 shadow-sm p-4 rounded-md relative bg-white hover:shadow-md transition">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-32 mx-auto object-contain"
//                   />
//                   <p className="text-sm mt-2 font-medium line-clamp-2">
//                     {product.name}
//                   </p>
//                   <p className="text-green-600 text-xs mt-1 font-semibold">IN STOCK</p>
//                   <p className="text-yellow-500 text-sm">★ ★ ★ ★ ☆</p>
//                   <div className="mt-1">
//                     <span className="text-red-500 font-semibold text-md">
//                       ${product.price.toFixed(2)}
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default ProductList;




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { toast } from 'react-toastify';
import axios from "../../axiosInstance";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(8);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/products");
        let filtered = res.data;
        if (category !== "All") {
          filtered = filtered.filter(p => p.category === category);
        }
        setProducts(filtered.slice(0, limit));
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit, category]);

  const handleCategoryClick = (catKey) => {
    setCategory(catKey);
  };

 const handleAddToCart = async (productId) => {
  const userId = localStorage.getItem("userId");
  if (!userId) return toast.error("Please login to add to cart");

  try {
    await axios.post("/cart/add", {
      userId,
      productId,
      quantity: 1, // ✅ Add this line
    });

    toast.success("Item added to cart!");
  } catch (err) {
    console.error("Add to Cart Error:", err); // ⛔ add for debugging
    toast.error("Failed to add to cart");
  }
};


  return (
    <div className="w-380 flex flex-col md:flex-row px-4 md:px-20 py-10 gap-8 bg-gradient-to-br from-lime-50 to-yellow-50">
      <aside className="w-full md:w-1/4 space-y-6">
        <div>
          <h3 className="text-gray-600 font-semibold mb-2">PRODUCT CATEGORIES</h3>
          {[
            "All", "Beverages", "Biscuits & Snacks", "Breads & Bakery", "Breakfast & Dairy",
            "Frozen Foods", "Fruits & Vegetables", "Grocery & Staples", "Household Needs", "Meats & Seafood"
          ].map((name, idx) => (
            <div
              key={idx}
              className="text-black flex items-center gap-2 mb-1 cursor-pointer"
              onClick={() => handleCategoryClick(name)}
            >
              <input type="radio" name="category" checked={category === name} readOnly />
              <label>{name}</label>
              <span className="ml-auto">+</span>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-gray-600 font-semibold mb-2">FILTER BY PRICE</h3>
          <div className="relative">
            <input type="range" min="0" max="1000" className="w-full" />
            <p className="text-black text-sm mt-2">
              Price: <strong>$0 – $1000</strong>
            </p>
            <button className="text-black text-xs mt-1 text-blue-600 font-semibold">FILTER</button>
          </div>
        </div>

        <div>
          <h3 className="text-gray-600 font-semibold mb-2">PRODUCT STATUS</h3>
          {["In Stock", "On Sale"].map((status, idx) => (
            <div key={idx} className="text-black flex items-center gap-2 mb-1">
              <input type="checkbox" />
              <label>{status}</label>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-gray-600 font-semibold mb-2">BRANDS</h3>
          {[{ name: "Frito Lay", count: 10 }, { name: "Nespresso", count: 12 }, { name: "Oreo", count: 9 }]
            .map((brand, idx) => (
              <div key={idx} className="text-black flex items-center gap-2 mb-1">
                <input type="checkbox" />
                <label>{brand.name} ({brand.count})</label>
              </div>
            ))}
        </div>

        <div className="mt-6 h-64">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
            alt="Ad"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </aside>

      <main className="w-full md:w-3/4 space-y-6">
        <div
          className="relative h-48 rounded-md flex items-center justify-center text-center text-xl md:text-2xl font-semibold text-gray-800"
          style={{
            backgroundImage: "url('https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center">
            <p>Organic Meals Prepared</p>
            <p className="text-xl text-green-600">Delivered to your Home</p>
          </div>
        </div>

        <div className="flex justify-end items-center">
          <div className="flex gap-4 items-center text-sm">
            <span className="flex items-center gap-1">
              Sort by latest <ChevronDown size={16} />
            </span>
            <span className="flex items-center gap-1">
              Show
              <select
                className="border px-2 py-1 rounded text-sm"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
              >
                {[8, 12, 16, 20].map((val) => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
            </span>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="border-black/50 shadow-sm p-4 rounded-md relative bg-white hover:shadow-md transition flex flex-col"
              >
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 mx-auto object-contain"
                  />
                  <p className="text-sm mt-2 font-medium line-clamp-2">{product.name}</p>
                  <p className="text-green-600 text-xs mt-1 font-semibold">IN STOCK</p>
                  <p className="text-yellow-500 text-sm">★ ★ ★ ★ ☆</p>
                  <div className="mt-1">
                    <span className="text-red-500 font-semibold text-md">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToCart(product._id)}
                  className="mt-3 bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductList;


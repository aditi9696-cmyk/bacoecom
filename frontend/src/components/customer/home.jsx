import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Home = () => {
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      .then(res => res.json())
      .then(data => setProducts(data.meals.slice(0, 5)));
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        scrollRight();
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const bestSellerImages = [
    'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg'
  ];
  
  const featuredProducts = [
    {
      id: 1,
      name: "USDA Choice Angus Beef Stew Meat",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7-346x310.jpg",
      discount: "38%",
      oldPrice: "$79.99",
      price: "$49.99",
      rating: 3.5,
      inStock: true,
    },
    {
      id: 2,
      name: "Signature Wood-Fired Mushroom and Caramelized Onion Pizza",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-16-346x310.jpg",
      discount: "26%",
      oldPrice: "$7.99",
      price: "$5.99",
      rating: 3.5,
      inStock: true,
    },
    {
      id: 3,
      name: "Perdue Simply Smart Organics Gluten Free Nuggets",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-22-346x310.jpg",
      discount: "12%",
      oldPrice: "$8.99",
      price: "$7.99",
      rating: 4,
      inStock: true,
    },
    {
      id: 4,
      name: "Organic Frozen Triple Berry Blend",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-29-346x310.jpg",
      price: "$15.79",
      rating: 5,
      inStock: true,
    },
    {
      id: 5,
      name: "Organic 100% Grassfed 85_15 Ground Beef",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-31-346x310.jpg",
      price: "$5.99",
      rating: 4,
      inStock: true,
    },
  ];
  
  

  return (
    <div className="w-380 font-sans bg-white space-y-10 bg-gradient-to-br from-lime-50 to-yellow-50">
      {/* Hero Section */}
      <div>
      <div className="w-full relative px-10 py-13 md:px-20 flex items-center justify-center ">
  <div className="relative w-full max-w-6xl rounded overflow-hidden">
    <img
      src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-3.jpg"
      alt="Hero"
      className="w-full h-72 md:h-[28rem] object-cover" // updated heights
    />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="text-white px-4 space-y-2 md:space-y-4 text-center">
        <p className="text-xs md:text-sm font-medium text-green-300">EXCLUSIVE OFFER - 25% OFF</p>
        <h1 className="text-xl md:text-4xl font-bold">A different kind of grocery store</h1>
        <p className="text-sm md:text-lg">Only this week. Don’t miss...</p>
        <p className="text-base md:text-xl font-bold text-yellow-300">From $7.99</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm md:text-base">Shop Now</button>
      </div>
    </div>
  </div>
</div>

<div className="w-full py-3 px-4 bg-green-50 rounded-md shadow-sm overflow-hidden ">
  <div className="flex whitespace-nowrap animate-marquee items-center">
    {[
      "🚚 On-time delivery",
      "🥬 Freshness guaranteed",
      "📦 Safe packaging",
      "✅ Always reliable",
      "🛒 Fast grocery shipping",
      "🧼 Hygienic handling",
      "🚪 No-delay doorstep delivery",
    ]
      .flatMap((text) => [text])
      .map((text, index) => (
        <span
          key={index}
          className="mx-6 text-green-600 text-base sm:text-xl font-medium"
        >
          {text}
        </span>
      ))}
  </div>

  <style jsx="true">{`
    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-marquee {
      display: flex;
      animation: marquee 8s linear infinite;
    }
  `}</style>
</div>
</div>


      {/* Special Offers Section */}
      <div className="py-6 px-4 md:px-20">
  <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
    <h2 className="text-blue-600 text-xl md:text-2xl">
      Special Offers of the <span className="text-red-600">week!</span>
    </h2>
    <div className="flex gap-2 text-xs md:text-sm">
      {["78", "12", "19", "52"].map((val, i) => (
        <span key={i} className="bg-red-500 text-white px-3 py-1 rounded">
          {val}
        </span>
      ))}
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {products.map((item) => {
      const rating = Math.floor(Math.random() * 5) + 1; // random rating 1 to 5
      return (
        <div
          key={item.idMeal}
          className="relative group border border-black/20 p-4 rounded-md shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between bg-white"
        >
          <div className="flex justify-center mb-3">
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="w-24 h-24 object-contain"
            />
          </div>
          <div>
            <p className="text-sm line-through text-gray-400">$11.99</p>
            <p className="text-lg font-semibold text-red-500">$7.99</p>
            <p className="text-sm text-gray-700 mt-1 truncate">{item.strMeal}</p>
            <div className="text-yellow-400 text-sm mt-1">
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </div>
            <p className="text-xs mt-1 text-gray-500">{item.strCategory}</p>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
            Add to Cart
          </button>
        </div>
      );
    })}
  </div>
</div>


      {/* Promo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-20 mb-10 ">
  {[
    {
      title: "The freshest milk products",
      subtitle: "A fresh place for grocery",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-07.jpg"
    },
    {
      title: "Yogurt with Delicious Fruit",
      subtitle: "A different kind of grocery store",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-08.jpg"
    }
  ].map((card, i) => (
    <div
      key={i}
      className="relative h-60 bg-white rounded-md overflow-hidden shadow-md"
    >
      <img
        src={card.img}
        alt="Promo"
        className="absolute inset-0 w-full h-full  "
      />
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800">{card.title}</h3>
          <p className="text-sm md:text-base text-gray-700">{card.subtitle}</p>
        </div>
        <button className="text-blue-600 flex items-center text-xs font-medium w-fit">
  Shop now <ChevronRight size={12} className="ml-1" />
</button>

      </div>
    </div>
  ))}
</div>


      {/* Categories Carousel */}
    <div className="px-4 md:px-20 mb-16 relative ">
  <h2 className="text-xl text-green-700 font-bold mb-4 text-center">Categories</h2>

  <div className="flex justify-center items-center relative">
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex gap-6 w-max overflow-x-auto scroll-smooth mx-4 py-2 hide-scrollbar"
    >
      {[
        {
          label: "Household Needs",
          icon: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/household-1.jpg",
        },
        {
          label: "Meats & Seafood",
          icon: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/meat-1.jpg",
        },
        {
          label: "Beverages",
          icon: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/baverages-1.jpg",
        },
        {
          label: "Biscuits & Snacks",
          icon: "https://cdn-icons-png.flaticon.com/512/1046/1046782.png",
        },
        {
          label: "Breads & Bakery",
          icon: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg",
        },
        {
          label: "Biscuits & Snacks",
          icon: "https://cdn-icons-png.flaticon.com/512/1046/1046782.png",
        },
        {
          label: "Breads & Bakery",
          icon: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg",
        },

        {
          label: "Household Needs",
          icon: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/household-1.jpg",
        },
        {
          label: "Meats & Seafood",
          icon: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/meat-1.jpg",
        },
        {
          label: "Beverages",
          icon: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/baverages-1.jpg",
        },
        {
          label: "Biscuits & Snacks",
          icon: "https://cdn-icons-png.flaticon.com/512/1046/1046782.png",
        },
        {
          label: "Breads & Bakery",
          icon: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg",
        },
        {
          label: "Biscuits & Snacks",
          icon: "https://cdn-icons-png.flaticon.com/512/1046/1046782.png",
        },
        {
          label: "Breads & Bakery",
          icon: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg",
        },
      ].map((cat, i) => (
        <div
          key={i}
          className="min-w-[160px] sm:min-w-[180px] min-h-[160px] flex flex-col items-center bg-white border border-black/20 rounded p-6 shadow hover:shadow-md transition"
        >
          <img
            src={cat.icon}
            alt={cat.label}
            className="w-16 h-16 object-contain mb-2"
          />
          <p className="text-sm font-medium text-gray-700 text-center">
            {cat.label}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Inline style for hiding scrollbar and auto-scroll */}
  <style>{`
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
</div>



      {/* Best Sellers */}
      <div className="px-4 md:px-20 mb-16 ">
  <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-700">Best Seller</h2>
            <p className="text-sm text-gray-500">Do not miss the current offers until the end of month.</p>
          </div>
          <button className="text-sm text-blue-600 border px-4 py-1 rounded-full flex items-center gap-2">
            View All <ChevronRight size={16} />
          </button>
        </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {bestSellerImages.map((img, i) => (
      <div
        key={i}
        className="relative group border border-black/20 p-4 rounded-md shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-between bg-white"
      >
        <img
          src={img}
          alt={`Best ${i + 1}`}
          className="w-full h-32 object-contain mb-2"
        />
        <div>
          <p className="text-sm line-through text-gray-400">$11.99</p>
          <p className="text-lg font-semibold text-blue-600">$7.99</p>
          <p className="text-sm text-gray-700 mt-1">Bestseller Product</p>
          <div className="text-yellow-400 text-sm mt-1">★★★★★</div>
          <p className="text-xs mt-1 text-gray-500">10 available</p>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>

{/* Featured Products */}
      <section className="py-8 px-4 md:px-20 ">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-700">Featured Products</h2>
            <p className="text-sm text-gray-500">Do not miss the current offers until the end of month.</p>
          </div>
          <button className="text-sm text-blue-600 border px-4 py-1 rounded-full flex items-center gap-2">
            View All <ChevronRight size={16} />
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => document.getElementById("featured-scroll").scrollBy({ left: -300, behavior: "smooth" })}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <div
            id="featured-scroll"
            className="flex overflow-x-auto scroll-smooth space-x-6 pb-4"
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-[250px] max-w-[250px] bg-white border border-gray-300 rounded-xl p-4 shadow group hover:shadow-md transition relative"
              >
                {product.discount && (
                  <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded absolute">
                    {product.discount}
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-contain mx-auto mb-3"
                />
                <h3 className="text-sm font-semibold leading-tight line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-green-600 text-xs mt-1">IN STOCK</p>
                <div className="text-yellow-500 text-sm mt-1">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                  <span className="text-gray-500 text-xs">1</span>
                </div>
                <div className="mt-1 mb-2">
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through mr-2">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="text-pink-600 font-semibold">{product.price}</span>
                </div>
                <button className="w-full border border-yellow-400 text-yellow-500 py-2 rounded transition group-hover:bg-black-400 group-hover:text-yellow">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => document.getElementById("featured-scroll").scrollBy({ left: 300, behavior: "smooth" })}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      
    </div>
  );
};

export default Home;

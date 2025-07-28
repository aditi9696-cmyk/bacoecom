📦 project-root/
├── 📁 client/                # Frontend (React)
│   ├── 📁 node_modules/
│   ├── 📁 public/
│   ├── 📁 src/
│   │   ├── 📁 assets/         # Images, icons, etc.
│   │   ├── 📁 components/
│   │   │   ├── 📁 admin/      # Admin dashboard UI
│   │   │   ├── 📁 customer/   # Customer-facing pages
│   │   │   │   ├── cart.jsx
│   │   │   │   ├── home.jsx
│   │   │   │   ├── productDetails.jsx
│   │   │   │   └── productList.jsx
│   │   │   └── 📁 profile/    # Login, Signup, Profile
│   │   ├── 📁 layouts/        # Shared layouts (e.g., Navbar, Footer)
│   │   ├── 📁 routes/         # React Router config
│   │   ├── 📁 utils/          # Axios instance, helpers
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── axiosInstance.js
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── tailwind.config.js
│   │   └── postcss.config.js
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── index.html
│   └── eslint.config.js
│
├── 📁 server/                # Backend (Node.js + Express + MongoDB)
│   ├── 📁 mid/               # Middleware
│   │   └── authMiddleware.js
│   ├── 📁 models/            # Mongoose models
│   │   ├── cart.js
│   │   ├── order.js
│   │   ├── product.js
│   │   └── user.js
│   ├── 📁 routes/            # Express route handlers
│   │   ├── admin.js
│   │   ├── auth.js
│   │   ├── cart.js
│   │   ├── order.js
│   │   ├── products.js
│   │   └── user.js
│   ├── node_modules/
│   ├── .env
│   ├── server.js            # Main Express server
│   ├── package.json
│   └── package-lock.json
│
└── README.md (optional)

hhhhhhhhhhhhhhhhhhhhhhhhhhhh
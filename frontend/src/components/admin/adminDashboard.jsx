// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const AdminDashboard = () => {
//   const weeklyIncomeData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//     datasets: [
//       {
//         label: "Income",
//         data: [2000, 2500, 4000, 1500, 5000, 2200],
//         backgroundColor: "#3b82f6",
//         borderRadius: 6,
//       },
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-white to-blue-100 p-4 md:p-8 font-sans">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h2 className="text-xl text-gray-700 font-semibold">👋 Hello Aditi,</h2>
//           <p className="text-3xl font-bold text-indigo-600">Have a great day ahead!</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <input type="text" placeholder="Search..." className="border px-3 py-1 rounded-md shadow-sm hidden lg:block" />
//           <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-2 border-indigo-400" alt="User" />
//         </div>
//       </div>

//       {/* Top Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
//           <p className="text-sm">🏆 Congratulations David</p>
//           <h3 className="text-3xl font-bold mt-2">$69.9k</h3>
//           <p className="text-sm mt-1">Top seller of the month</p>
//         </div>
//         <div className="bg-white p-6 rounded-2xl shadow-md">
//           <p className="text-gray-500 font-medium mb-3">📦 Product Sales</p>
//           <div className="flex justify-around items-end gap-4">
//             <div className="w-6 h-24 bg-purple-300 rounded-lg"></div>
//             <div className="w-6 h-32 bg-purple-500 rounded-lg"></div>
//             <div className="w-6 h-40 bg-purple-700 rounded-lg"></div>
//           </div>
//           <div className="flex justify-around text-xs mt-2 text-gray-600">
//             <span>Pizza</span>
//             <span>Burger</span>
//             <span>Donut</span>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-3">
//           {[600, 300, 800, 300, 500, 900].map((val, idx) => (
//             <div
//               key={idx}
//               className="bg-white p-4 text-center rounded-xl shadow hover:shadow-lg transition duration-300"
//             >
//               <p className="text-xl font-bold text-indigo-600">{val}</p>
//               <p className="text-xs text-gray-500">
//                 {["Items Sold", "Downloads", "Documents", "New Orders", "Products", "Invoices"][idx]}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Status Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-gradient-to-tr from-blue-500 to-indigo-500 text-white p-5 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
//           <h4 className="text-sm">📘 Products</h4>
//           <p className="text-2xl font-bold mt-2">300</p>
//         </div>
//         <div className="bg-gradient-to-tr from-red-400 to-pink-500 text-white p-5 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
//           <h4 className="text-sm">🛒 Orders</h4>
//           <p className="text-2xl font-bold mt-2">600</p>
//         </div>
//         <div className="bg-gradient-to-tr from-purple-400 to-indigo-400 text-white p-5 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
//           <h4 className="text-sm">🌟 Reviews</h4>
//           <p className="text-2xl font-bold mt-2">600</p>
//         </div>
//       </div>

//       {/* Charts & Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-5 rounded-2xl shadow-md">
//           <p className="text-gray-500">📊 Sales (This Month)</p>
//           <h2 className="text-2xl font-bold text-blue-600 mt-2">660k</h2>
//           <p className="text-green-500 text-sm mt-1">▲ 22% Higher</p>
//         </div>
//         <div className="bg-white p-5 rounded-2xl shadow-md">
//           <p className="text-gray-500">💰 Overall Revenue</p>
//           <h2 className="text-2xl font-bold text-green-600 mt-2">$98.6K</h2>
//           <p className="text-blue-500 text-sm mt-1">▲ 33% Higher</p>
//         </div>
//         <div className="bg-white p-5 rounded-2xl shadow-md">
//           <p className="text-gray-500">📈 Weekly Income</p>
//           <p className="text-xs mb-3">Highest income generated on Friday</p>
//           <Bar data={weeklyIncomeData} options={{ plugins: { legend: { display: false } }, scales: { y: { display: false }, x: { ticks: { color: '#888' } } } }} height={120} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminDashboard = () => {
  const weeklyIncomeData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Income",
        data: [2000, 2500, 4000, 1500, 5000, 2200],
        backgroundColor: "#10b981",
        borderRadius: 6,
      },
    ],
  };
  

  return (
    <div className="min-h-screen  p-4 md:p-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl text-gray-700 font-semibold">👋 Hello Aditi,</h2>
          <p className="text-3xl font-bold text-emerald-600">Have a great day ahead!</p>
        </div>
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Search..." className="border px-3 py-1 rounded-md shadow-sm hidden lg:block" />
          <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-2 border-emerald-400" alt="User" />
        </div>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6 rounded-2xl shadow-lg">
          <p className="text-sm">🏆 Congratulations David</p>
          <h3 className="text-3xl font-bold mt-2">$69.9k</h3>
          <p className="text-sm mt-1">Top seller of the month</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <p className="text-gray-500 font-medium mb-3">📦 Product Sales</p>
          <div className="flex justify-around items-end gap-4">
            <div className="w-6 h-24 bg-green-300 rounded-lg"></div>
            <div className="w-6 h-32 bg-green-500 rounded-lg"></div>
            <div className="w-6 h-40 bg-green-700 rounded-lg"></div>
          </div>
          <div className="flex justify-around text-xs mt-2 text-gray-600">
            <span>Pizza</span>
            <span>Burger</span>
            <span>Donut</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[600, 300, 800, 300, 500, 900].map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-4 text-center rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <p className="text-xl font-bold text-emerald-600">{val}</p>
              <p className="text-xs text-gray-500">
                {["Items Sold", "Downloads", "Documents", "New Orders", "Products", "Invoices"][idx]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-tr from-green-500 to-emerald-500 text-white p-5 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
          <h4 className="text-sm">📘 Products</h4>
          <p className="text-2xl font-bold mt-2">300</p>
        </div>
        <div className="bg-gradient-to-tr from-lime-400 to-green-500 text-white p-5 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
          <h4 className="text-sm">🛒 Orders</h4>
          <p className="text-2xl font-bold mt-2">600</p>
        </div>
        <div className="bg-gradient-to-tr from-teal-400 to-emerald-400 text-white p-5 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
          <h4 className="text-sm">🌟 Reviews</h4>
          <p className="text-2xl font-bold mt-2">600</p>
        </div>
      </div>

      {/* Charts & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <p className="text-gray-500">📊 Sales (This Month)</p>
          <h2 className="text-2xl font-bold text-emerald-600 mt-2">660k</h2>
          <p className="text-green-500 text-sm mt-1">▲ 22% Higher</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <p className="text-gray-500">💰 Overall Revenue</p>
          <h2 className="text-2xl font-bold text-green-600 mt-2">$98.6K</h2>
          <p className="text-emerald-500 text-sm mt-1">▲ 33% Higher</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <p className="text-gray-500">📈 Weekly Income</p>
          <p className="text-xs mb-3">Highest income generated on Friday</p>
          <Bar data={weeklyIncomeData} options={{ plugins: { legend: { display: false } }, scales: { y: { display: false }, x: { ticks: { color: '#888' } } } }} height={120} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
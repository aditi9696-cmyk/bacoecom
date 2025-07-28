import React from 'react';

const Inventory = () => {
  const stockItems = [
    { name: 'Milk', quantity: 30 },
    { name: 'Bread', quantity: 50 },
    { name: 'Eggs', quantity: 100 },
  ];

  return (
    <div className="">
      <h2 className="text-xl font-semibold text-green-700 mb-4">Inventory</h2>
      <ul className="space-y-2 text-sm">
        {stockItems.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-green-50 px-4 py-2 rounded"
          >
            <span>{item.name}</span>
            <span className="font-medium text-gray-700">{item.quantity} pcs</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;

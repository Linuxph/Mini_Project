import React from 'react';

const Recommended = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Recommended For You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="w-full bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
              <img src="https://source.unsplash.com/400x300/?food,biryani" alt="Food Item" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Delicious Burger</h3>
                <p className="text-gray-600 mb-2 text-sm">Cheesy, juicy, and freshly baked!</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">₹199</span>
                  <button className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full hover:bg-orange-600 transition">Add</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Recommended;

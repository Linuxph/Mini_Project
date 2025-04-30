import React, { useState } from 'react';

const suggestions = [
  "Pizza", "Burger", "Sushi", "Pasta", "Biryani", "Salad", "Dessert", "Drinks"
];

const BrowsePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-yellow-100 via-yellow-300 to-blue-100 px-4 relative">

      {/* Positioning Search Box */}
      <div className="absolute top-[20%] w-full max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gray-700">Discover Deliciousness 🍽️</h1>
        
        {/* Creative Search Bar */}
        <div className="flex items-center bg-white rounded-full shadow-xl p-3 md:p-4 hover:shadow-2xl transition">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search for restaurants, dishes or cuisines..."
            className="flex-1 bg-transparent outline-none px-4 text-lg md:text-xl placeholder-gray-400"
          />
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
            Search
          </button>
        </div>

        {/* Suggestions */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {suggestions.map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-white hover:bg-yellow-100 rounded-full shadow-md text-sm md:text-base text-gray-600 hover:text-pink-600 transition"
              onClick={() => setSearchTerm(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default BrowsePage;

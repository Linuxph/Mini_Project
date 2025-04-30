import React from 'react'

const categories = [
  { title: "Pizza", img: "/images/pizza.jpg" },
  { title: "Burger", img: "/images/burger.jpg" },
  { title: "Dessert", img: "/images/dessert.jpg" },
  { title: "Beverages", img: "/images/beverages.jpg" },
];

const PopularCategories = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="cursor-pointer transform hover:scale-105 transition duration-300">
            <img src={cat.img} alt={cat.title} className="w-full h-28 md:h-40 object-cover rounded-xl shadow-md" />
            <h3 className="text-center mt-2 text-sm md:text-base font-semibold">{cat.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularCategories

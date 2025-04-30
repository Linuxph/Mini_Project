import React from 'react'
const restaurant = {
  name: "Burger Hub",
  coverImg: "/images/restaurant_cover.jpg",
  rating: 4.5,
  cuisines: ["Burger", "Fast Food", "Beverages"],
  location: "Sector 21, New Delhi",
};

const dishes = [
  { id: 1, name: "Classic Cheeseburger", desc: "Juicy grilled beef patty with cheese", price: 199, img: "/images/burger1.jpg" },
  { id: 2, name: "Veggie Delight", desc: "Crispy veg patty with fresh veggies", price: 149, img: "/images/burger2.jpg" },
  { id: 3, name: "Chicken Wings", desc: "Spicy glazed chicken wings", price: 249, img: "/images/wings.jpg" },
  { id: 4, name: "French Fries", desc: "Crispy golden fries", price: 99, img: "/images/fries.jpg" },
];
const Display = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      {/* Restaurant Header */}
      <div className="relative mb-8">
        <img src={restaurant.coverImg} alt={restaurant.name} className="w-full h-56 md:h-80 object-cover rounded-2xl shadow-md" />
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 backdrop-blur-md p-4 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold">{restaurant.name}</h1>
          <p className="text-gray-600 text-sm md:text-base">{restaurant.cuisines.join(", ")}</p>
          <p className="text-gray-700 font-semibold mt-1">{restaurant.rating} ★</p>
          <p className="text-gray-500 text-xs md:text-sm">{restaurant.location}</p>
        </div>
      </div>

      {/* Menu Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Menu</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {dishes.map((dish) => (
            <div key={dish.id} className="flex gap-4 p-4  rounded-xl shadow-md hover:shadow-lg transition">
              <img src={dish.img} alt={dish.name} className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover" />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">{dish.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{dish.desc}</p>
                </div>
                <p className="text-orange-500 font-bold text-base md:text-lg mt-2">₹{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Display
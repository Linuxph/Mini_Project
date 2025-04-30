import React from 'react'

const restaurants = [
  { name: "Pizza Palace", rating: 4.8, img: "/images/restaurant1.jpg" },
  { name: "Burger Hub", rating: 4.7, img: "/images/restaurant2.jpg" },
  { name: "Sweet Tooth", rating: 4.9, img: "/images/restaurant3.jpg" },
];

const TopRatedRestaurants = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">Top Rated Restaurants</h2>
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-2">
        {restaurants.map((rest, index) => (
          <div key={index} className="min-w-[200px] md:min-w-[250px] bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={rest.img} alt={rest.name} className="w-full h-28 md:h-40 object-cover" />
            <div className="p-3 md:p-4">
              <h3 className="font-semibold text-sm md:text-base">{rest.name}</h3>
              <p className="text-yellow-500 font-bold text-sm">{rest.rating} ★</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopRatedRestaurants

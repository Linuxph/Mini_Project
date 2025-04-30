import React from 'react'

const deals = [
  { title: "50% off on Pizza", desc: "Use code PIZZA50" },
  { title: "Free Dessert", desc: "On orders above ₹499" },
];

const SpecialDeals = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-yellow-300 p-6 md:p-8 rounded-2xl text-white shadow-xl">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">Special Deals</h2>
      <ul className="space-y-3">
        {deals.map((deal, index) => (
          <li key={index} className="flex flex-col">
            <span className="font-semibold text-sm md:text-base">{deal.title}</span>
            <span className="text-xs md:text-sm">{deal.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpecialDeals

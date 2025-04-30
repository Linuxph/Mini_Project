import React from 'react'

const testimonials = [
  { name: "Amit", review: "Amazing food and fast delivery!" },
  { name: "Sana", review: "Loved the burgers, will order again." },
];

const CustomerTestimonials = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">What Our Customers Say</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((test, index) => (
          <div key={index} className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-md">
            <p className="text-gray-800 text-sm md:text-base mb-2">"{test.review}"</p>
            <h4 className="font-semibold text-sm">- {test.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerTestimonials

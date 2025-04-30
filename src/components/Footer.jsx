import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        <p className="text-xs md:text-sm">&copy; 2025 FoodDelivery. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange-400 text-xs md:text-sm">Facebook</a>
          <a href="#" className="hover:text-orange-400 text-xs md:text-sm">Instagram</a>
          <a href="#" className="hover:text-orange-400 text-xs md:text-sm">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className="bg-orange-500 p-6 md:p-8 rounded-2xl text-white text-center shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Craving Something Delicious?</h2>
      <p className="mb-6 text-sm md:text-base">Order now and get it delivered hot and fresh!</p>
      <button className="bg-white text-orange-500 font-bold py-2 px-6 rounded-full hover:bg-orange-100 transition">
        <Link to='/browse'>
        Browse Menu
        </Link>
      </button>
    </div>
  )
}

export default CallToAction

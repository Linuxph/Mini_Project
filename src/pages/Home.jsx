import React from 'react'
import Slider from '../components/home page/Slider'
import Recommended from '../components/home page/Recommended'
import PopularCategories from '../components/home page/PopularCategories'
import TopRatedRestaurants from '../components/home page/TopRatedRestaurants'
// import SpecialDeals from '../components/home page/SpecialDeals'
import CallToAction from '../components/home page/CallToAction'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Slider />
      <Recommended  imageUrl = "./public/rec/d13.jpg"/>
      
      <PopularCategories />
      <TopRatedRestaurants />
      {/* <SpecialDeals /> */}
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home;

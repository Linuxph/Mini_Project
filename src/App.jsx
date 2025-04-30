import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import Nav from './components/Nav'
import Display from './pages/Display'
import Profile from './pages/Profile'
import Order from './pages/Order'
import Payment from './pages/Payment'
import Help_center from './pages/Help_center'
import Tracking from './pages/Tracking'
import BrowsePage from './pages/BrowsePage'


function App() {

  return (
    <div className='w-full'>
      <Nav />
      <Router>
        <Routes>
          <Route path='/home' element={<Home />}  />
          <Route path='/signup' element={<SignUp />}  />
          <Route path='/login' element={<Login />}  />
          <Route path='/browse' element={<BrowsePage />}  />
          <Route path='/restaurants' element={<Display />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/order' element={<Order />} />
          <Route path='/payment' element = {<Payment />} />
          <Route path='/help-center' element={<Help_center />} />
          <Route path='/tracking' element={<Tracking />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

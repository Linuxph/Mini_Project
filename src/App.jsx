import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'


function App() {

  return (
    <div className='bg-black h-screen w-full'>
      <Router>
        <Routes>
          <Route path='/signup' element={<SignUp />}  />
          <Route path='/login' element={<Login />}  />
        </Routes>
      </Router>
    </div>
  )
}

export default App

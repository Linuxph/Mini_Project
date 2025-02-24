import React from 'react'
import LoginFrom from '../components/LoginForm'

const Login = () => {
  return (
    <div className=' h-screen w-full flex justify-center'>
        <div className='flex h-screen w-3/4 items-center'>
            <div 
            style={{backgroundImage:"url('../img2.jpeg')"}} 
            className='h-3/4 w-1/2 rounded-xl text-white'>
            </div>
            <div className='h-3/4 w-1/2 rounded-xl bg-white'>
            <LoginFrom />

            </div>
        </div>
        
    </div>
  )
}

export default Login
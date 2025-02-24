import React from 'react'
import Form from '../components/Form'

const SignUp = () => {
  return (
    <div className=' h-screen w-full flex justify-center'>
        <div className='flex h-screen w-3/4 items-center'>
            <div 
            style={{backgroundImage:"url('../img1.jpeg')"}} 
            className='h-3/4 w-1/2 rounded-xl text-white'>
            </div>
            <div className='h-3/4 w-1/2 rounded-xl bg-white'>
            <Form />

            </div>
        </div>
        
    </div>
  )
}

export default SignUp
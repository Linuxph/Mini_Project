import { useState } from 'react'
import SignUp from './pages/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black h-screen w-full'>
      <SignUp />
      
    </div>
  )
}

export default App

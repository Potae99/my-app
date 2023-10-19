import React, { useState } from 'react'
import Input_URL from './component/Input_URL'
import Result_URL from './component/Result_URL'


function App() {
  const [inputValue, setInputValue] = useState("");



  return (
    <div className='relative text-center bg-gradient-to-r  from-blue-500 to-purple-500 min-h-screen'>
    <Input_URL setInputValue={setInputValue} />
    <Result_URL inputValue ={inputValue} />
    </div>
    
  )
}

export default App
import React, { useState } from 'react'
import Input_URL from './component/Input_URL'
import BackgroundWeb from './component/BackgroundWeb'
import Result_URL from './component/Result_URL'


function App() {
  const [inputValue, setInputValue] = useState("");



  return (
    <div>
    <Input_URL setInputValue={setInputValue} />
    <BackgroundWeb/>
    <Result_URL inputValue ={inputValue} />
    </div>
    
  )
}

export default App
import React, { useState } from 'react'
import { Input } from '@material-tailwind/react'

const Input_URL = ({ setInputValue }) => {

    const [value, setValue] = useState("");

    const handleClick = () =>{
        setInputValue(value);
        setValue("");

    }

    return (
        <div className=' flex flex-auto'>
            <div className="w-72">
                <Input
                    value={value}
                    label="Please paste a link "
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleClick} href="#_" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                    <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Button Text</span>
                </button>

            </div>
        </div>
    )
}

export default Input_URL
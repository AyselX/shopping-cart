import React, {useState} from 'react'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'

const RelatedCategories = () => {
    const[open, isOpen] = useState(true)

    const handleClick = () => {
        isOpen(!open)
    }
  return (
    <div className='border-b border-bright-gray py-4'>
        <div className='flex flex-row justify-between text-red text-base font-semibold py-2 px-4' onClick={handleClick}><h2>Ilgili Kateqoriler</h2>
         {open ? <FaAngleUp className='text-sm mt-1' /> : <FaAngleDown className='text-sm mt-1' />}
        </div>
        <ul className={open ? "flex flex-col max-h-40 overflow-y-auto" : "hidden" }>
            <li className='flex flex-row justify-between text-md leading-8 px-4'><span>Lorem Ipsum</span> <span className='text-granite-gray'>20</span></li>
            <li className='flex flex-row justify-between text-md leading-8 px-4'><span>Lorem Ipsum</span> <span className='text-granite-gray'>20</span></li>
            <li className='flex flex-row justify-between text-md leading-8 px-4'><span>Lorem Ipsum</span> <span className='text-granite-gray'>20</span></li>
            <li className='flex flex-row justify-between text-md leading-8 px-4'><span>Lorem Ipsum</span> <span className='text-granite-gray'>20</span></li>
            <li className='flex flex-row justify-between text-md leading-8 px-4'><span>Lorem Ipsum</span> <span className='text-granite-gray'>20</span></li>
            <li className='flex flex-row justify-between text-md leading-8 px-4'><span>Lorem Ipsum</span> <span className='text-granite-gray'>20</span></li>
            <li className='flex flex-row justify-between text-md leading-8 px-4'><span>Lorem Ipsum</span> <span className='text-granite-gray'>20</span></li>
            <li className='flex flex-row justify-between text-md leading-8 px-4'><span>Lorem Ipsum</span> <span className='text-granite-gray'>20</span></li>
            <li className='flex flex-row justify-between text-md leading-8 px-4'><span>Lorem Ipsum</span> <span className='text-granite-gray'>20</span></li>
        </ul>
    </div>
  )
}

export default RelatedCategories
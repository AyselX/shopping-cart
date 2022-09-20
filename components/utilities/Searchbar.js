import React from 'react'
import Image from 'next/image'
import searchIcon from '/public/icons/search-icon.png'
const Searchbar = () => {
  return (
    <div className='flex flex-row justify-between rounded-full bg-cultured border border-bright-gray px-2 py-1.5'>
         <figure className='w-5 h-5 py-2 mx-1'>
                <Image src={searchIcon} layout="responsive" width={5} height={5} objectFit='contain' alt='logo'  />
            </figure>
        <input className='bg-transparent w-3/4 outline-none' type='search' placeholder='Aradığınız hər şey burada' />
        <button className='bg-red text-white px-2 py-1 rounded-full text-base font-sans-pro font-semibold'>Arama Yap</button>
    </div>
   
  )
}

export default Searchbar
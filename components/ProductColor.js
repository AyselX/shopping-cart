import Image from 'next/image'
import React from 'react'
import productPhoto from '/public/icons/photo1.png'

const colorData = [
    {},{},{},{},{},{},
]

const ProductColor = () => {
  return (
    <div className='border border-bright-gray rounded h-min px-4 py-2 my-2'>
        <h2 className='text-tiny font-semibold'>Renk</h2>
        <div className='flex flex-row my-2'>
        {
            colorData && colorData.map((color,i)=>(
                <figure key={i} className='w-14 h-16 rounded'>
            <Image className='block rounded' src={productPhoto} layout='responsive' width={18} height={20} objectFit="contain" alt='product' />
        </figure>
            ))
        }
        </div>
    </div>
  )
}

export default ProductColor
import React from 'react'
import Image from 'next/image'
import productPhoto from '/public/icons/product-photo.jpg'
import RaitingStarsGroup from './RaitingStarsGroup'

const ProductCard = () => {
  return (
    <div className='flex flex-col rounded-md shadow-xl hover:shadow-2xl bg-white'>
    
        <figure className='w-full rounded-t-md'>
        <Image className='rounded-t-md' src={productPhoto} layout='responsive' width={200} height={300} objectFit="cover" alt='product-name' />
        </figure>
   
    <div className='flex flex-col px-4 py-2'>
        <h2 className='text-base font-semibold'>Lorem ipsum dolor</h2>
        <RaitingStarsGroup />
        <p className='text-sm text-granite-gray'>SUNY.P1FX Turkuaz Kız Çocuk Deniz ...</p>
        <article className='flex flex-row'>
            <span className='line-through text-xs'>150$</span>
            <span className='font-bold text-sm'>100$</span>
        </article>
        <div className='flex flex-row'>
        <input className=' accent-green mx-0.5' type="radio" name="fav_language" />

<input className='accent-blue bg-blue mx-0.5' type="radio"  name="fav_language" checked />

        </div>
    </div>
    </div>
  )
}

export default ProductCard
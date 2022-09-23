import React from 'react'
import AboutProduct from './AboutProduct'
import ProductColor from './ProductColor'
import ProductSize from './ProductSize'
import ProductSlider from './ProductSlider'

const ProductPreview = () => {
  return (
    <div className='flex flex-row'>
    <ProductSlider />
    <div className='flex flex-col justify-around w-8/12'>
    <AboutProduct />
    <ProductColor />
    <ProductSize />
    <div className='flex flex-row justify-start my-2'>
        <button className='rounded-full px-2 w-1/3 py-2 mx-2 bg-green text-white tracking-wider uppercase text-base font-semibold'>Hemen Al</button>
        <button className='rounded-full px-2 w-1/3 py-2 mx-2 bg-red text-white tracking-wider uppercase text-base font-semibold'>Sepete Ekle</button>
    </div>
    </div>
    
</div>
  )
}

export default ProductPreview
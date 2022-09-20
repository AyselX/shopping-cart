import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Products from './Products'
import ProductFilter from './utilities/ProductFilter'

const ProductContainer = () => {
  return (
    <div className='bg-cultured container mx-auto'>
        <div className='flex flex-row justify-between'>
            <h6>Product Brend</h6>
            <ul className='flex flex-row'>
                <li className='flex flex-row text-dark-gray text-sm'>Ana Sayfa <span> <MdOutlineKeyboardArrowRight className='text-lg' /></span> </li>
                <li className='flex flex-row text-dark-gray text-sm'>Tüm Butikler <span> <MdOutlineKeyboardArrowRight  className='text-lg'/></span> </li>
                <li className='flex flex-row text-granite-gray text-sm'>Koton</li>
            </ul>
        </div>

        <ProductFilter />
        <Products />

    </div>
  )
}

export default ProductContainer
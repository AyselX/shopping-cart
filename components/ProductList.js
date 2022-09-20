import React from 'react'
import ProductCard from './utilities/ProductCard'
import TagBadge from './utilities/TagBadge'

const ProductList = () => {
  return (
    <div className='w-4/5 p-4'>
        <ul className='flex flex-row'>
            <li className='mx-2'><TagBadge /></li>
            <li className='mx-2'><TagBadge /></li>
            <li className='mx-2'><TagBadge /></li>
        </ul>

       <div className='grid grid-cols-4 gap-4 py-4'>
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />
       </div>
    </div>
  )
}

export default ProductList
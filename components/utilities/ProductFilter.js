import React from 'react'
import Image from 'next/image'
import productIcon from '/public/icons/product.png'
import FilterButton from './FilterButton'
import SortingFilter from './SortingFilter'

const ProductFilter = () => {
  return (
    <div className='flex flex-row justify-between bg-white py-3 px-2'>
        <div className='flex flex-row justify-between w-3/5'>
            <div className='flex flex-row'>
                <Image src={productIcon} layout="responsive" width={10} height={10} alt="product-count" />
                <p className='text-sm'>Ürün sayı: <span className='text-red'>12345</span></p>
            </div>

            <div>
                <FilterButton filterTitle={"Tümü"} />
                <FilterButton filterTitle={"Lorem Ipsum"} />
                <FilterButton filterTitle={"Lorem Ipsum"} />
                <FilterButton filterTitle={"Lorem Ipsum"} />
            </div>
        </div>

        <SortingFilter />
    </div>
  )
}

export default ProductFilter
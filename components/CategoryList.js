import React from 'react'
import AgeFilter from './utilities/AgeFilter'
import ColorFilter from './utilities/ColorFilter'
import GenderFilter from './utilities/GenderFilter'
import PriceFilter from './utilities/PriceFilter'
import RelatedCategories from './utilities/RelatedCategories'
import SizeFilter from './utilities/SizeFilter'

const CategoryList = () => {
  return (
    <div className='w-1/5 lg:w-2/5 md:hidden sm:hidden xs:hidden xxs:hidden h-full'>
      <RelatedCategories />
      <GenderFilter />
      <SizeFilter />
      <AgeFilter />
      <ColorFilter />
      <PriceFilter />
    </div>
  )
}

export default CategoryList
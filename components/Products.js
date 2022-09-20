import React from 'react'
import CategoryList from './CategoryList'
import ProductList from './ProductList'

const Products = () => {
  return (
    <div className='flex flex-row'>
        <CategoryList />
        <ProductList />

    </div>
  )
}

export default Products
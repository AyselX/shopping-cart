import React from 'react'

const FilterButton = ({filterTitle}) => {
  return (
    <button className='w-32 border border-border-gray rounded-md px-2 py-2 mx-2'>{filterTitle}</button>
  )
}

export default FilterButton
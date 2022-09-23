import React from 'react'

const FilterButton = ({filterTitle}) => {
  return (
    <button className='w-32 lg:w-28 lg:text-sm border text-tiny border-border-gray rounded-md px-2 py-1.5 mx-2'>{filterTitle}</button>
  )
}

export default FilterButton
import React from 'react'
import Image from 'next/image'
import raitingStar from '/public/icons/raiting-star.png'

const RaitingStarsGroup = () => {
  return (
    <div className='flex flex-row'>
        <figure className='w-3 h-3 mx-0.5'>
            <Image src={raitingStar} layout="responsive" width={20} height={20} alt="raiting-star" />
        </figure>
        <figure className='w-3 h-3 mx-0.5'>
            <Image src={raitingStar} layout="responsive" width={20} height={20} alt="raiting-star" />
        </figure>
        <figure className='w-3 h-3 mx-0.5'>
            <Image src={raitingStar} layout="responsive" width={20} height={20} alt="raiting-star" />
        </figure>
        <figure className='w-3 h-3 mx-0.5'>
            <Image src={raitingStar} layout="responsive" width={20} height={20} alt="raiting-star" />
        </figure>
        <figure className='w-3 h-3 mx-0.5'>
            <Image src={raitingStar} layout="responsive" width={20} height={20} alt="raiting-star" />
        </figure>
    </div>
  )
}

export default RaitingStarsGroup
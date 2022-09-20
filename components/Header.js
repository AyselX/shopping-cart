import React from 'react'
import Searchbar from './utilities/Searchbar'
import Image from 'next/image'
import Logo from '/public/icons/LOGO.png'
import orderIcon from '/public/icons/order-icon.png'
import favoriteIcon from '/public/icons/favorilerim-icon.png'
import cartIcon from '/public/icons/sepetim-icon.png'
import accountIcon from '/public/icons/hesabim-icon.png'
import Menu from './Menu'

const Header = () => {
  return (
    <div className='flex flex-col'>
       <div className='flex flex-row justify-around py-4 border-b border-bright-gray'>
       <div className='p-2'>
            <figure className='w-40 h-9'>
                <Image src={Logo} layout="responsive" width={100} height={20} objectFit='contain' alt='logo'  />
            </figure>
        </div>
        <div>
            <a className='text-black font-sans-pro text-sm underline font-normal mx-4'>Mağazanı yarat</a>
            <a className='text-black font-sans-pro text-sm font-normal mx-4'>Yardım</a>
        </div>

        <div>
            <select className='text-black font-sans-pro text-sm font-normal mx-4'>
                <option>Istanbul|TRY|Tr</option>
            </select>
        </div>

        <div className='w-1/3'>
            <Searchbar />
        </div>

        <div>
            <ul className='flex flex-row'>
                <li className='text-sm mx-2 font-normal flex flex-col'>
                <figure className='w-5 h-5 my-2 self-center'>
                <Image src={orderIcon} layout="responsive" width={5} height={5} objectFit='contain' alt='order-icon'  />
            </figure>
                    Siparişlerim</li>
                <li className='text-sm mx-2 font-normal flex flex-col'>
                <figure className='w-5 h-5 my-2 self-center'>
                <Image src={favoriteIcon} layout="responsive" width={5} height={5} objectFit='contain' alt='favorite-icon'  />
            </figure>
                    Favorilerim</li>
                <li className='text-sm mx-2 font-normal flex flex-col'>
                <figure className='w-5 h-5 my-2 self-center'>
                <Image src={cartIcon} layout="responsive" width={5} height={5} objectFit='contain' alt='cart-icon'  />
            </figure>
                    Sepetim</li>
                <li className='text-sm mx-2 font-normal flex flex-col'>
                <figure className='w-5 h-5 my-2 self-center'>
                <Image src={accountIcon} layout="responsive" width={5} height={5} objectFit='contain' alt='account-icon'  />
            </figure>
                    Hesabım</li>
            </ul>
        </div>
       </div>

       <Menu />
    </div>
  )
}

export default Header
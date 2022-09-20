import React from 'react'
import Link from 'next/link'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex flex-col text-white'>
        <div className='container mx-auto bg-charleston grid grid-cols-5 gap-4 py-10'>
            <article className='flex flex-col leading-8'>
            <h6 className='text-lg font-semibold'>Biz kimiz?</h6>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            
            </article>

            <article className='flex flex-col leading-8'>
            <h6 className='text-lg font-semibold'>Yardım</h6>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            
            </article>

            <article className='flex flex-col leading-8'>
            <h6 className='text-lg font-semibold'>Kampaniyalar</h6>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            <Link href={"#"}><a className='text-sm'>Lorem Ipsum</a></Link>
            
            </article>

            <article className='flex flex-col leading-8'>
            <h6 className='text-lg font-semibold'>Sosyal Medya</h6>
            <ul>
                <li className='text-sm'>
                    <Link href="#"><a className='flex flex-row'><FaFacebook className='mt-2 mr-2 text-lg' /> Facebook</a></Link>
                </li>
                <li className='text-sm'><Link href="#"><a className='flex flex-row'><FaInstagram className='mt-2 mr-2 text-lg' /> Instagram</a></Link></li>
                <li className='text-sm'><Link href="#"><a className='flex flex-row'><FaTwitter className='mt-2 mr-2 text-lg' /> Twitter</a></Link></li>
                <li className='text-sm'><Link href="#"><a className='flex flex-row'><FaYoutube className='mt-2 mr-2 text-lg' /> Youtube</a></Link></li>
            </ul>
            
            </article>

            <form className='flex flex-col leading-4'>
            <h6 className='text-lg font-semibold'>İndirim ve yenilikler için abone olun</h6>
            <label className='flex flex-row my-2'>
               <input className='rounded-md bg-white outline-none py-2 mx-1' type={"email"} placeholder="E-mail" />
               <input className='rounded-md bg-red px-2 mx-1' type={"submit"} value="Abone Ol" />
            </label>

            <p className='text-sm'>Bültene kaydolarak <Link href={"#"}><a className='underline'>Gizlilik Politikasını</a></Link> kabul etmiş olursunuz</p>

            </form>
        
       
        </div>
    </div>
  )
}

export default Footer
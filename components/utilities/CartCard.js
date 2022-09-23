import React from 'react'
import Image from 'next/image'
import CounterController from './CounterController'
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart} from '../../redux/cart.slice';
import {AiOutlineClose} from 'react-icons/ai'

const CartCard = ({item}) => {
    const dispatch = useDispatch();
  return (
    <div className='flex flex-row py-5 border-b border-bright-gray'>
          {Object.keys(item.checkImg).map((product) => {
          if (item.checkImg[product]) {
            return (
              <figure key={product} className="w-5/12 h-14">
                <Image
                  className="rounded-t-md"
                  src={item.linkImg[product]}
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit="contain"
                  alt={item.name}
                />
              </figure>
            );
          } else {
            return null;
          }
        })}


        <div className='flex flex-col w-7/12 leading-6'>
            <div className='flex flex-row justify-between bg-smoke-white'>
                <h6 className='text-xs text-black-olive font-semibold tracking-wider'>{item.name}</h6>
                <button className="mx-2 text-granite-gray text-sm" onClick={() => dispatch(removeFromCart(item.id))}>
                <AiOutlineClose className='text-granite-gray' />
                </button>
            </div>
            <p className='text-granite-gray text-xs line-clamp-1'>{item.description}</p>
            <p className='text-red text-tiny font-bold'>$ {item.quantity * item.price}</p>
            <div className='mt-2'>
            <CounterController item={item} />
            </div>
        </div>
    </div>
  )
}

export default CartCard
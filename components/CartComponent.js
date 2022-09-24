import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {AiOutlineClose} from 'react-icons/ai'
import Link from "next/link";
import CartCard from "./utilities/CartCard";

const CartComponent = ({ closeSide }) => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  console.log(cart);
  return (
    <aside className="flex-col h-full w-2/12 shadow-lg bg-white fixed z-40 right-0 top-20 py-2 hidden 2xl:flex xl:flex lg:flex">
      <div className="flex flex-row justify-between sticky bg-white shadow-md top-0 py-2 px-2">
        <h2 className="text-base font-semibold">
          <span className="uppercase text-granite-gray mx-2">ürün sayı:</span>
          {getItemsCount()}
        </h2>
          
          <AiOutlineClose role={"button"} onClick={closeSide} className="font-semibold" />
      </div>

      <div className="flex flex-col bg-smoke-white h-max overflow-y-auto">
        {
          cart.length === 0 ? (<h2 className="py-10 px-4">Your Cart is Empty!!</h2>) : (
            cart.map((item,i)=>(
              <CartCard key={i} item={item} />
            ))
          )
        }
      </div>

      <div className="flex flex-col fixed bottom-40 bg-white shadow-custom-shadow w-2/12 px-5 py-2">
        <div className="flex flex-row justify-between">
          <p className="text-lg font-bold tracking-wider">Toplam:</p>
          <span className="text-red text-2xl font-bold">${getTotalPrice()}</span>
        </div>
        <Link href={"/cart"}>
        <a className="bg-red self-center text-lg my-2 text-white font-bold tracking-wider w-full uppercase text-center py-2 rounded">Sepete Git</a>
        </Link>
      </div>
    </aside>
  );
};

export default CartComponent;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cart.slice";

const CounterController = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row border border-platinum rounded-lg w-min h-min px-4">
      <button className="pr-2.5 text-xl text-center" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
      <p className="border-x border-platinum bg-snow px-3 text-sm" >{item.quantity}</p>
      <button className="pl-2.5 text-xl" onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
      {/* <button className="pl-2 text-xl" onClick={() => dispatch(removeFromCart(item.id))}>x</button> */}
    </div>
  );
};

export default CounterController;

import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import CounterController from '../components/utilities/CounterController';
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import productPhoto from '/public/icons/product-photo.jpg'


const Cart = () => {

  const cart = useSelector((state) => state.cart);
 

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className='flex flex-col px-10 py-20'>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <ul className='container mx-auto grid grid-cols-6 border-b-2 border-granite-gray text-lg font-semibold'>
            <li>Image</li>
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Actions</li>
            <li>Total Price</li>
          </ul>
          {cart.map((item,i) => (
            <div className='container mx-auto grid grid-cols-6' key={i}>
              <div>
                <Image src={productPhoto} height="90" width="65" alt={item.name} />
              </div>
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
             
              <CounterController item={item} />
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2 className='self-center text-xl'>Grand Total: <span className='text-red'>$ {getTotalPrice()}</span></h2>
        </>
      )}
    </div>
  );
};

export default Cart;
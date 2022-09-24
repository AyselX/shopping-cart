import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Searchbar from "./utilities/Searchbar";
import Image from "next/image";
import Logo from "/public/icons/LOGO.png";
import orderIcon from "/public/icons/order-icon.png";
import favoriteIcon from "/public/icons/favorilerim-icon.png";
import cartIcon from "/public/icons/sepetim-icon.png";
import Link from "next/link";
import CartComponent from "./CartComponent";
import Menu from "./Menu";
import Dropdown from "./utilities/Dropdown";
import LoginDropdown from "./utilities/LoginDropdown";

const Header = () => {
  const [isOpenCartSide, setIsCartSide] = useState(false);
  const router = useRouter();

  const handleCartSide = () => {
    setIsCartSide(!isOpenCartSide);
  };

  const cart = useSelector((state) => state.cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  useEffect(() => {
    setIsCartSide(false);
  }, [router]);
  return (
    <>
      <div className="flex flex-col sticky top-0 z-40 bg-white">
        <div className="flex flex-row justify-between justify-items-center text-center px-9 md:px-4 sm:px-2 xs:px-2 xxs:px-2 py-2 border-b border-bright-gray max-h-24">
          <Link href={"/"}>
            <a className="py-2 flex">
              <figure className="w-40 h-9 self-center">
                <Image
                  src={Logo}
                  layout="responsive"
                  width={100}
                  height={20}
                  objectFit="contain"
                  alt="logo"
                />
              </figure>
            </a>
          </Link>
          <div className="hidden 2xl:block xl:block self-center">
            <a className="text-black font-sans-pro text-sm underline font-normal mx-4">
              Mağazanı yarat
            </a>
            <a className="text-black font-sans-pro text-sm font-normal mx-4">
              Yardım
            </a>
          </div>

          <div className="self-center hidden 2xl:flex xl:flex flex-row">
            <Dropdown />
          </div>

          <div className="2xl:w-1/3 xl:w-1/3 lg:w-2/3 sm:hidden xs:hidden xxs:hidden md:hidden">
            <Searchbar />
          </div>

          <div className="self-center">
            <ul className="flex flex-row">
              <li className="text-sm mx-2 font-normal 2xl:flex xl:flex hidden flex-col">
                <figure className="w-5 h-5 my-2 self-center">
                  <Image
                    src={orderIcon}
                    layout="responsive"
                    width={5}
                    height={5}
                    objectFit="contain"
                    alt="order-icon"
                  />
                </figure>
                Siparişlerim
              </li>
              <li className="text-sm mx-2 font-normal hidden 2xl:flex xl:flex flex-col">
                <figure className="w-5 h-5 my-2 self-center">
                  <Image
                    src={favoriteIcon}
                    layout="responsive"
                    width={5}
                    height={5}
                    objectFit="contain"
                    alt="favorite-icon"
                  />
                </figure>
                Favorilerim
              </li>
              <li className="text-sm mx-2 font-normal flex flex-col">
                <div
                  className="relative flex flex-col cursor-pointer"
                  onClick={handleCartSide}
                >
                  <figure className="w-5 h-5 my-2 self-center">
                    <Image
                      src={cartIcon}
                      layout="responsive"
                      width={5}
                      height={5}
                      objectFit="contain"
                      alt="cart-icon"
                    />
                  </figure>
                  Sepetim
                  <span className="bg-red px-1.5 text-xs text-white rounded-full absolute top-0 right-0">
                    {getItemsCount()}
                  </span>
                </div>
              </li>
              <li className="text-sm mx-2">
                <LoginDropdown />
              </li>
            </ul>
          </div>
        </div>

        <Menu />
      </div>

      {isOpenCartSide && <CartComponent closeSide={handleCartSide} />}
    </>
  );
};

export default Header;

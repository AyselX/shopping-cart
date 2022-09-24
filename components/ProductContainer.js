import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa";
import Products from "./Products";
import ProductFilter from "./utilities/ProductFilter";
import Image from "next/image";
import talkIcon from "/public/icons/talkIcon.png";

const ProductContainer = () => {
  return (
    <div className="bg-cultured relative">
      <div className="2xl:container xl:container lg:container mx-auto">
        <div className="flex flex-row justify-between py-3 md:px-4 sm:px-4 xs:px-4 xxs:px-4">
          <h6 className="text-lg xs:text-sm font-semibold">Product Brend</h6>
          <ul className="flex flex-row">
            <li className="flex flex-row text-dark-gray text-sm">
              <Link href={"/"}>
                <a className="flex flex-row">
                  Ana Sayfa{" "}
                  <span>
                    {" "}
                    <MdOutlineKeyboardArrowRight className="text-lg mt-0.5" />
                  </span>{" "}
                </a>
              </Link>
            </li>
            <li className="flex flex-row text-dark-gray text-sm">
              <Link href={"/"}>
                <a className="flex flex-row">
                  Tüm Butikler{" "}
                  <span>
                    {" "}
                    <MdOutlineKeyboardArrowRight className="text-lg mt-0.5" />
                  </span>{" "}
                </a>
              </Link>
            </li>
            <li className="flex flex-row text-granite-gray text-sm">Koton</li>
          </ul>
        </div>

        <ProductFilter />
        <Products />
      </div>

      <div className="flex flex-col fixed top-1/2 right-0">
        <button className="flex justify-center py-1.5 rounded-full border-2 border-red w-10 h-10 my-2 ml-2">
          <FaAngleUp className="text-red text-2xl" />
        </button>
        <figure className="w-12 h-6 mt-1 mx-2">
          <Image
            src={talkIcon}
            layout="responsive"
            width={60}
            height={60}
            alt="talk"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductContainer;

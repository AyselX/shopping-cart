import React, { useState } from "react";
import Image from "next/image";
import productIcon from "/public/icons/product.png";
import FilterButton from "./FilterButton";
import SortingFilter from "./SortingFilter";

const ProductFilter = () => {
  // const[selectItem, isSelectItem] = useState()
  return (
    <div className="flex flex-row justify-between bg-white container mx-auto py-2 px-2">
      <div className="flex flex-row justify-between w-3/5">
        <div className="hidden 2xl:flex xl:flex flex-row self-center">
          <figure className="w-4 h-4">
            <Image
              src={productIcon}
              layout="responsive"
              width={20}
              height={20}
              alt="product-count"
            />
          </figure>
          <p className="text-sm font-semibold mx-2">
            Ürün sayı: <span className="text-red">12345</span>
          </p>
        </div>

        <div className="hidden 2xl:flex xl:flex lg:flex flex-row ">
          <FilterButton filterTitle={"Tümü"} />
          <FilterButton filterTitle={"Lorem Ipsum"} />
          <FilterButton filterTitle={"Lorem Ipsum"} />
          <FilterButton filterTitle={"Lorem Ipsum"} />
        </div>
      </div>

      <SortingFilter />
    </div>
  );
};

export default ProductFilter;

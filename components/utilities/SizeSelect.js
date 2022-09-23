import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import vector from "/public/icons/rectangle.png";
import filterIcon from '/public/icons/filter.png'

const SizeSelect = () => {
  const [isActive, setIsActive] = useState(false);
  const selectRef = useRef();
  const sizesData = [
    "XS", "S", "M", "L", "XL", "2XL", "3XL","4XL", "XS", "S", "M", "L", "XL", "2XL", "3XL","4XL"
  ]

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (e) => {
    if (!selectRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div ref={selectRef} className="relative my-2">
      <div
        className="flex flex-row justify-between border border-platinum bg-cultured px-2 py-1 text-quick-silver text-base cursor-pointer"
        onClick={handleClick}
      >
        <span>Select Size</span>
        <FaAngleDown className="text-quick-silver mt-1" />
      </div>

      {isActive && (
        <div className="leading-7 bg-white shadow-custom-shadow rounded absolute px-4 py-3 pb-3 top-9 w-56 z-20">
         <div className="grid grid-cols-4 gap-2 max-h-40 overflow-y-auto text-center text-sm">
          {sizesData && sizesData.map((data,i)=>(
            <div key={i} className="border border-platinum rounded px-2">{data}</div>
          ))}
         </div>
       <button className="flex flex-row justify-center my-1 text-sm font-semibold self-center text-center">
       <figure className="w-3.5 h-2 mt-2 mr-2">
          <Image
            className=""
            src={filterIcon}
            layout="responsive"
            width={3}
            height={3}
            alt="filterIcon"
          />
        </figure>
        Beden filtresini temizle</button>
      </div>
      )}

{isActive && (
        <figure className=" w-3.5 h-3.5 absolute top-7 bg-white shadow-vector rotate-45 left-6 z-30">
          <Image
            className=""
            src={vector}
            layout="responsive"
            width={10}
            height={10}
            alt="vector"
          />
        </figure>
      )}
    </div>
  );
};

export default SizeSelect;

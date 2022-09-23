import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaCheck } from "react-icons/fa";


const ColorFilter = () => {
  const [open, isOpen] = useState(true);

  const handleClick = () => {
    isOpen(!open);
  };
  return (
    <div className="border-b border-bright-gray py-4">
      <div
        className="flex flex-row justify-between text-red text-base font-semibold py-2 px-4"
        onClick={handleClick}
      >
        <h2>Rəng</h2>
        {open ? (
          <FaAngleUp className="text-sm mt-1" />
        ) : (
          <FaAngleDown className="text-sm mt-1" />
        )}
      </div>
      <ul
        className={open ? "flex flex-col max-h-40 overflow-y-auto" : "hidden"}
      >
        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <button className="w-4 h-4 shadow-md mt-1.5 rounded bg-white"></button>
            <span className="mx-2">Beyaz</span>
          </div>
          
        </li>

        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <button className="w-4 h-4 shadow-md mt-1.5 rounded bg-green"></button>
            <span className="mx-2">Yeşil</span>
          </div>
          
        </li>

        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <button className="w-4 h-4 shadow-md mt-1.5 rounded bg-blue"></button>
            <span className="mx-2">Mavi</span>
          </div>
          
        </li>

        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <button className="w-4 h-4 shadow-md mt-1.5 rounded bg-red"></button>
            <span className="mx-2">Kırmızı</span>
          </div>
          
        </li>

        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <button className="w-4 h-4 shadow-md mt-1.5 rounded bg-violet"></button>
            <span className="mx-2">Pembe</span>
          </div>
          
        </li>

        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <button className="w-4 h-4 shadow-md mt-1.5 rounded bg-yellow"></button>
            <span className="mx-2">Sarı</span>
          </div>
          
        </li>

      </ul>
    </div>
  );
};

export default ColorFilter;

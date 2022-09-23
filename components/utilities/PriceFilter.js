import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {FiSearch} from "react-icons/fi"

const PriceFilter = () => {
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
        <h2>Fiyat Aralığı</h2>
        {open ? (
          <FaAngleUp className="text-sm mt-1" />
        ) : (
          <FaAngleDown className="text-sm mt-1" />
        )}
      </div>

      <div className="flex flex-row justify-around">
        <label className="flex flex-col">
         <span className="text-tiny text-quick-silver">Min</span>
         <input className="border border-platinum bg-white w-20 h-9 rounded-md" type={"number"} />
        </label>

        <label className="flex flex-col">
         <span className="text-tiny text-quick-silver">Max</span>
         <input className="border border-platinum bg-white w-20 h-9 rounded-md" type={"number"} />
        </label>

        <button className="flex bg-red w-20 h-9 self-end rounded-md px-6">
            <FiSearch className="text-white self-center" />
        </button>
      </div>
      <ul
        className={open ? "flex flex-col max-h-40 overflow-y-auto" : "hidden"}
      >
        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <input
              type={"checkbox"}
              className="accent-red rounded w-4 h-4 mt-2"
              checked
            />
            <span className="mx-2 text-tiny">10-35</span>
          </div>
          
        </li>

        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <input
              type={"checkbox"}
              className="accent-red rounded w-4 h-4 mt-2"
            />
            <span className="mx-2 text-tiny">13-65</span>
          </div>
          
        </li>

        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <input
              type={"checkbox"}
              className="accent-red rounded w-4 h-4 mt-2"
            />
            <span className="mx-2 text-tiny">16-15</span>
          </div>
          
        </li>

        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <input
              type={"checkbox"}
              className="accent-red rounded w-4 h-4 mt-2"
            />
            <span className="mx-2 text-tiny">120-200</span>
          </div>
          
        </li>
      </ul>
    </div>
  );
};

export default PriceFilter;

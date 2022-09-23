import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const AgeFilter = () => {
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
        <h2>Yaş Oranı</h2>
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
            <input
              type={"checkbox"}
              className="accent-red rounded w-4 h-4 mt-2"
              checked
            />
            <span className="mx-2 text-tiny">0-3 YAŞ</span>
          </div>
          <span className="text-granite-gray">10</span>
        </li>

        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <input
              type={"checkbox"}
              className="accent-red rounded w-4 h-4 mt-2"
            />
            <span className="mx-2 text-tiny">3-6 YAŞ</span>
          </div>
          <span className="text-granite-gray">10</span>
        </li>

        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <input
              type={"checkbox"}
              className="accent-red rounded w-4 h-4 mt-2"
            />
            <span className="mx-2 text-tiny">6-14 YAŞ</span>
          </div>
          <span className="text-granite-gray">10</span>
        </li>

        <li className="flex flex-row justify-between text-tiny font-normal leading-8 px-4">
          <div className="flex flex-row">
            <input
              type={"checkbox"}
              className="accent-red rounded w-4 h-4 mt-2"
            />
            <span className="mx-2 text-tiny">14-18 YAŞ</span>
          </div>
          <span className="text-granite-gray">10</span>
        </li>
      </ul>
    </div>
  );
};

export default AgeFilter;

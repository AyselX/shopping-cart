import React, { useState } from "react";
import Image from "next/image";
import menuIcon from "/public/icons/menu icon.png";

const menuData = [
  "Lorem Ipsum 1",
  "Lorem Ipsum 2",
  "Lorem Ipsum 3",
  "Lorem Ipsum 4",
  "Lorem Ipsum 5",
  "Lorem Ipsum 6",
  "Lorem Ipsum 7",
  "Lorem Ipsum 8",
  "Lorem Ipsum 9",
  "Lorem Ipsum 10",
  "Lorem Ipsum 11",
  "Lorem Ipsum 12",
  "Lorem Ipsum 13",
  "Lorem Ipsum 14",
];

const Menu = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
  };
  return (
    <div className="flex flex-row justify-between h-14 max-h-14 px-9 md:px-4 sm:px-4 xs:px-4 xxs:px-4">
      <button className=" w-8 h-8 px-2 shadow-light-red shadow-lg self-center">
        <Image
          src={menuIcon}
          layout="responsive"
          width={10}
          height={10}
          alt="menu"
        />
      </button>
      <ul className="2xl:flex xl:flex flex-row h-min self-center hidden">
        {menuData.map((category, i) => (
          <li
            onClick={() => handleClick(i)}
            className={
              i === index
                ? "text-sm mx-2 font-semibold whitespace-nowrap text-red cursor-pointer"
                : "text-sm mx-2 font-semibold whitespace-nowrap cursor-pointer"
            }
            key={i}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

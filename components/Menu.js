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
];

const Menu = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
  };
  return (
    <div className="flex flex-row justify-around py-4 px-2">
      <button className=" w-8 h-8 p-2 shadow-light-red shadow-lg">
        <Image
          src={menuIcon}
          layout="responsive"
          width={10}
          height={10}
          alt="menu"
        />
      </button>
      <ul className="flex flex-row">
        {menuData.map((category, i) => (
          <li
            onClick={() => handleClick(i)}
            className={
              i === index
                ? "text-base mx-2 font-semibold whitespace-nowrap text-red cursor-pointer"
                : "text-base mx-2 font-semibold whitespace-nowrap cursor-pointer"
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

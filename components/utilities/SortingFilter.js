import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import vector from "/public/icons/rectangle.png";
import { FaAngleDown } from "react-icons/fa";

const SortingFilter = () => {
  const [isActive, setIsActive] = useState(true);

  const dropRef = useRef();
  const router = useRouter();

  const handleClick = (e) => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (e) => {
    if (!dropRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  useEffect(() => {
    setIsActive(false);
  }, [router]);
  return (
    <div ref={dropRef} className="dropdown relative cursor-pointer">
      <div
        className="text-center flex flex-row justify-between border text-tiny border-border-gray rounded-md  px-2 py-1.5 "
        onClick={handleClick}
      >
        <p>Sıralama Seçin</p>
        <FaAngleDown className="text-gray mt-1" />
      </div>
      {isActive && (
        <div className="leading-7 bg-white shadow-custom-shadow rounded absolute px-4 py-3 pb-3 top-9 w-56 z-20">
          <ul className="text-tiny ">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
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

export default SortingFilter;

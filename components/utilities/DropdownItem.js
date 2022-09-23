import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import vector from "/public/icons/rectangle.png";
import {FaAngleDown} from 'react-icons/fa'


const DropdownItem = ({data}) => {
 

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(data[0]);

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
      <div onClick={handleClick}>
        <div className="flex flex-row justify-between cursor-pointer border border-platinum bg-cultured text-sm rounded px-2 py-1.5">
          {/* <figure className="w-3.5 h-1.5 mt-0.5 mx-1">
            <Image
              src={selected.flag}
              layout="responsive"
              width={14}
              height={14}
              alt={selected.option}
            />
          </figure> */}
          <p className="mx-1">{selected.option}</p>
          <FaAngleDown className="text-granite-gray mt-1" />
        </div>
      </div>
      {isActive && (
        <div className="bg-white shadow rounded absolute text-center py-3 pb-3 top-8 w-16 z-20">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                className="flex flex-row justify-around cursor-pointer text-sm"
                onClick={(e) => {
                  setSelected(item);
                  setIsActive(false);
                }}
              >
                <figure className="w-3.5 h-1.5">
                  <Image
                    src={item.flag}
                    layout="intrinsic"
                    width={14}
                    height={14}
                    alt={item.option}
                  />
                </figure>
                <p>{item.option}</p>
              </div>
            ))}
        </div>
      )}
     
     {isActive &&  <figure className=" w-3.5 h-3.5 absolute top-7 bg-white shadow-vector rotate-45 left-6 z-30">
        <Image
          className=""
          src={vector}
          layout="responsive"
          width={10}
          height={10}
          alt="vector"
        />
      </figure>}
    </div>
  );
};

export default DropdownItem;

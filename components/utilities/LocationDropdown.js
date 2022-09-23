import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import vector from "/public/icons/rectangle.png";
import {FaAngleDown} from 'react-icons/fa'

const LocationDropdown = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const [openDrop, setOpenDrop] = useState(false);

  const dropRef = useRef();
  const seconDropRef = useRef();
  const router = useRouter();

  const handleClick = (e) => {
    setIsActive(!isActive);
  };

  const handleDropClick = () => {
    setOpenDrop(!openDrop);
  };

  const handleClickOutside = (e) => {
    if (!dropRef.current.contains(e.target)) {
      setIsActive(false);
      setOpenDrop(false);
    }

  };

//   const handleSecondDropClickOutside = (e) => {
    

//     if (!seconDropRef.current.contains(e.target)) {
//         setOpenDrop(false);
//       }
//   };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // document.addEventListener("mousedown", handleSecondDropClickOutside);
    

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    //   document.removeEventListener("mousedown", handleSecondDropClickOutside);
    };
  });
  useEffect(() => {
    setIsActive(false);
  }, [router]);
  return (
    <div ref={dropRef} className="dropdown relative cursor-pointer">
      <div className="dropdown-btn text-center" onClick={handleClick}>
        <div className="flex flex-row justify-between cursor-pointer border border-platinum bg-cultured text-sm rounded px-2 py-1.5">
          <p className="mx-1">{selected && selected.option}</p>
          <FaAngleDown className="text-granite-gray mt-1" />
        </div>
      </div>
      {isActive && (
        <div className="bg-white shadow rounded absolute text-center px-4 py-3 top-8 w-52 z-20">
          <h6 className="text-tiny font-semibold">
            Ürünlerin hızlı ulaşması için
          </h6>
          <div className="flex flex-row text-granite-gray justify-between border px-2 py-1 my-2 border-platinum rounded bg-cultured text-sm" onClick={handleDropClick}>
            <span>Şehir Seçin</span>
            <FaAngleDown className="mt-1" />
          </div>

          {openDrop && (
            <div className="flex flex-col bg-white shadow rounded absolute text-center px-4 py-3 top-8 w-52 z-30">
              {data &&
                data.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-row justify-around cursor-pointer text-sm bg-white"
                    onClick={(e) => {
                      setSelected(item);
                      setIsActive(false);
                      setOpenDrop(false);
                    }}
                  >
                    <p className="text-granite-gray">{item.option}</p>
                  </div>
                ))}
            </div>
          )}
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

export default LocationDropdown;

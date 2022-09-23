import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import photo from "/public/icons/tr-flag.png";
import vector from "/public/icons/rectangle.png";
import LocationDropdown from "./LocationDropdown";
import {
  languageOptions,
  currencyOptions,
  locationOptions,
} from "../../mock/data";
import DropdownItem from "./DropdownItem";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(true);
  //   const [selected, setSelected] = useState(data[0]);

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
      <div className="dropdown-btn text-center" onClick={handleClick}>
        <div className="flex flex-row justify-center cursor-pointer text-sm">
          <figure className="w-4 h-2 mt-1 mx-1">
            <Image
              src={photo}
              layout="responsive"
              width={19}
              height={14}
              alt={"test"}
            />
          </figure>
          <p className="mx-1">
            <span className="mx-1">{"Istanbul"}</span>
            <span className="mx-1 border-x-2 px-0.5 border-bright-gray">
              {"TRY"}
            </span>
            <span className="mx-1">{"TR"}</span>
          </p>
        </div>
      </div>
      {isActive && (
        <div className="leading-7 bg-white shadow-2xl rounded absolute px-4 py-3 pb-3 top-8 w-56 z-20">
          <div className="flex flex-col text-start">
            <h6 className="text-sm font-semibold">Country</h6>
            <LocationDropdown data={locationOptions} />
          </div>

          <div className="flex flex-col text-start">
            <h6 className="text-sm font-semibold">City</h6>
            <LocationDropdown data={locationOptions} />
          </div>
          <div className="flex flex-col text-start">
            <h2 className="text-sm font-semibold">Language</h2>
            <DropdownItem data={languageOptions} />
          </div>
          <div className="flex flex-col text-start">
            <h2 className="text-sm font-semibold">Currency</h2>
            <DropdownItem data={currencyOptions} />
          </div>

          <div className="flex flex-col text-center my-3">
            <button
              className="bg-red text-white font-semibold text-base rounded py-1.5"
              onClick={handleClick}
            >
              Save
            </button>
          </div>
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

export default Dropdown;

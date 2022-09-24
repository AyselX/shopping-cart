import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import vector from "/public/icons/rectangle.png";
import accountIcon from "/public/icons/hesabim-icon.png";

const LoginDropdown = () => {
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
        className="text-sm mx-2 font-normal flex flex-col"
        onClick={handleClick}
      >
        <figure className="w-5 h-5 my-2 self-center">
          <Image
            src={accountIcon}
            layout="responsive"
            width={5}
            height={5}
            objectFit="contain"
            alt="account-icon"
          />
        </figure>
        Hesabım
      </div>
      {isActive && (
        <div className="leading-7 bg-white shadow-custom-shadow rounded absolute px-4 py-3 pb-3 top-9 flex flex-col w-40 right-2 z-20">
          <Link href={"/"}>
            <a className="bg-red text-white my-1 rounded">Giriş Yapın</a>
          </Link>
          <Link href={"/"}>
            <a className="border border-platinum rounded my-1">Yeni üye</a>
          </Link>
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

export default LoginDropdown;

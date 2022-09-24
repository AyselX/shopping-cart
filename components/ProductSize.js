import Image from "next/image";
import React from "react";
import favIcon from '/public/icons/favIcon.png'
import bellIcon from '/public/icons/bellİcon.png'
import SizeSelect from "./utilities/SizeSelect";

const ProductSize = () => {
  return (
    <div className="border border-bright-gray rounded h-min w-full px-2 my-2 py-2">
      <div className="flex flex-row justify-around">
        <div className="flex flex-col">
          <article className="flex flex-row">
            <p className="flex flex-row justify-between w-full">
              <span className="text-tiny font-semibold">Beden</span>
              <span className="text-sm font-normal underline text-quick-silver">
                Beden tablosu
              </span>
            </p>
          </article>
           
           <SizeSelect />
          <p className="text-xs font-semibold text-quick-silver">
            Tahmini Teslimat:
            <span className="text-black">12 - 26 Haziran</span>
          </p>
        </div>

        <div className="flex flex-col">
          <p>Adet</p>
          <div className="flex flex-row border border-platinum  w-min h-min px-4  my-1">
      <button className="pr-2 text-base">+</button>
      <button className="border-x border-platinum bg-snow px-3 text-base py-1">1</button>
      <button className="pl-2 text-base">+</button>
    </div>
        </div>

        <div className="flex flex-col justify-end">
          <button className="border border-platinum py-2 mb-2.5 rounded flex justify-center">
            <figure className="w-4 h-4">
                <Image src={bellIcon} width={10} height={10} objectFit="cover" layout="responsive" alt="bell"  />
            </figure>
          </button>
          <span className="text-xs font-semibold">Fiyat Alarmı</span>
        </div>

        

        <div className="flex flex-col justify-end">
        <button className="border border-platinum py-1.5 mb-2.5 rounded flex justify-center">
            <figure className="w-4 h-5">
                <Image src={favIcon} width={20} height={18} objectFit="cover" layout="responsive" alt="favorite"  />
            </figure>
          </button>
          <p className="text-xs text-quick-silver">
            Favori: <span className="text-black semibold">12345</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSize;

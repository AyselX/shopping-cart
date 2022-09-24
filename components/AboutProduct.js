import Image from "next/image";
import React from "react";
import RaitingStarsGroup from "./utilities/RaitingStarsGroup";
import cargoIcon from '/public/icons/cargo.png'
import saleIcon from '/public/icons/sale-icon.png'

export const ProductBadge = ({image, text}) => {
   return (
    <div className="border border-bright-gray rounded w-min py-2 px-3 mx-2">
        <figure className="w-8 h-7">
            <Image src={image} layout="responsive" width={20} height={20} alt="icon" />
        </figure>

        <span className="text-tiny font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo to-queen-blue">{text}</span>
    </div>
   )
}

const AboutProduct = () => {
  return (
    <div className="border flex flex-row border-bright-gray h-min px-4 py-2 rounded">
      <div className="flex flex-col leading-6">
        <h2 className="text-lg text"><span className="underline font-semibold">Koton</span> Kadın Antrasit Kaban 0KAK0 6697EW</h2>
        <p className="text-sm text-quick-silver font-semibold">
          Satıcı: <span className="text-black font-semibold">Koton</span>
          <span className="text-xs mx-2 rounded-full bg-green text-white px-2">9.5</span>
        </p>
        <div className="flex flex-row">
          <span className="text-md font-semibold">5</span>
          <div className="self-center mx-2">
          <RaitingStarsGroup />
          </div>
        </div>

        <p>
          <span className="text-lg line-through text-quick-silver font-semibold">$52</span>
          <span className="text-2xl text-red font-semibold mx-2">$40</span>
        </p>
      </div>

      <div className="flex flex-row">
       <ProductBadge image={cargoIcon} text={"Kargo Bedava"} />
       <ProductBadge image={saleIcon} text={"50% Endirim"} />
      </div>
    </div>
  );
};

export default AboutProduct;

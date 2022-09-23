import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import RaitingStarsGroup from "./RaitingStarsGroup";
import zoomIcon from "/public/icons/zoom-icon.png";
import Modal from "./Modal";
import ProductPreview from "../ProductPreview";
import favIcon from "/public/icons/favIcon.png";
import likeIcon from "/public/icons/Like.png";

const ProductCard = ({ product, chooseColor }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <div className="group relative flex flex-col rounded-md shadow-xl hover:shadow-2xl bg-white cursor-pointer">
        {Object.keys(product.checkImg).map((item) => {
          if (product.checkImg[item]) {
            return (
              <figure key={item} className="w-full rounded-t-md">
                <Image
                  className="rounded-t-md"
                  src={product.linkImg[item]}
                  layout="responsive"
                  width={200}
                  height={290}
                  objectFit="cover"
                  alt={product.name}
                />
              </figure>
            );
          } else {
            return null;
          }
        })}

        <div className="flex flex-col px-4 py-2 leading-6">
          <h2 className="text-base font-semibold">{product.name}</h2>
          <RaitingStarsGroup />
          <p className="line-clamp-1 text-tiny text-granite-gray">
            {product.description}
          </p>
          <article className="flex flex-row">
            <span className="line-through text-sm text-quick-silver">
              ${product.old_price}
            </span>
            <span className="text-md mx-1 font-bold">${product.price}</span>
          </article>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              {product.colors.map((color) => (
                <button
                  onClick={() => chooseColor(product.id, color)}
                  key={color}
                  className={
                    "${product.checkImg[color] && active self-center h-min w-min p-0.5 text-xs rounded-full border-2 border-platinum mr-1.5"
                  }
                >
                  <p
                    style={{ backgroundColor: color }}
                    className="h-0.5 w-0.5 p-1.5 text-xs rounded-full"
                  ></p>
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                dispatch(addToCart(product));
              }}
              className={
                "bg-red text-white py-1 px-4 invisible group-hover:visible rounded-full text-tiny font-semibold"
              }
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="hidden group-hover:flex flex-col justify-between h-40 bottom-44 absolute left-10">
          <figure onClick={handleModal} className="w-10 h-10 self-center">
            <Image
              className="opacity-60"
              src={zoomIcon}
              layout="responsive"
              width={50}
              height={50}
              alt="zoom-icon"
            />
          </figure>

          <ul className="flex flex-row bg-white opacity-60 w-40 p-2 rounded justify-around justify-items-around text-dark-gray text-md font-semibold">
            <li>XS</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
          </ul>
        </div>

        <div
          className="bg-white rounded-l-full absolute top-4 shadow-md right-0 px-2.5 py-1.5"
          onClick={handleFavorite}
        >
          <figure className="w-5 h-5">
            <Image
              src={favorite ? likeIcon : favIcon}
              layout="responsive"
              width={10}
              height={10}
              alt="favorite icon"
            />
          </figure>
        </div>

        <div className="bg-red rounded-br-full py-2 absolute bottom-36 left-0 pl-2 px-4">
          <p className="text-xs text-white semibold tracking-wider flex-wrap">
            Hızlı Teslimat
          </p>
        </div>
      </div>

      {isOpenModal && (
        <Modal closeModal={handleModal}>
          <ProductPreview />
        </Modal>
      )}
    </>
  );
};

export default ProductCard;

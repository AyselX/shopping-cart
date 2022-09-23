import React, { useState, useEffect, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import ProductCard from "./utilities/ProductCard";
import TagBadge from "./utilities/TagBadge";
import { products } from "../mock/data";

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState(products);

  const handleChooseColor = (id, color) => {
    setAllProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          let newCheckImg = {};
          Object.keys(product.checkImg).map((item) => {
            product.checkImg[item] = false;
            newCheckImg = { ...product.checkImg, [color]: true };
            return null;
          });

          return { ...product, checkImg: newCheckImg };
        } else {
          return product;
        }
      });
    });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="w-4/5 lg:w-3/5 md:w-full sm:w-full xs:w-full xxs:w-full p-4">
      {loading ? (
        <div className="w-full h-full flex flex-row justify-center my-auto py-40">
          <FadeLoader cssOverride={{}} color="#6B6B6B" />
        </div>
      ) : (
        <>
          <ul className="flex flex-row">
            <li className="mx-2">
              <TagBadge />
            </li>
            <li className="mx-2">
              <TagBadge />
            </li>
            <li className="mx-2">
              <TagBadge />
            </li>
          </ul>

          <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-6 py-4">
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                chooseColor={handleChooseColor}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;

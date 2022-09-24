import Image from "next/image";
import React, { Component } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

export class DetailsThumb extends Component {
  render() {
    const { images, tab, myRef } = this.props;
    return (
      <div className="flex flex-col justify-between cursor-pointer" ref={myRef}>
        <button className="flex justify-center bg-white shadow-custom-shadow py-0.5 rounded-t">
          <FaAngleUp className="text-sm" />
        </button>
        <ul>
          {images.map((img, index) => (
            <li
              key={index}
              className="w-24 h-32 my-2 first:mt-0 last:mb-0 rounded first:rounded-t-none last:rounded-b-none"
              onClick={() => tab(index)}
            >
              <Image
                className="block rounded"
                src={img}
                width={103}
                height={136}
                objectFit="cover"
                alt="thumbnail photo"
              />
            </li>
          ))}
        </ul>

        <button className="flex justify-center bg-white shadow-custom-shadow py-0.5 rounded-b">
          <FaAngleDown className="text-sm" />
        </button>
      </div>
    );
  }
}

export default DetailsThumb;

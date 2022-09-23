import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ closeModal, children }) {
  return (
    <>
      <div className="fixed inset-0 z-50 items-center justify-center focus:outline-none hidden 2xl:flex xl:flex">
        <div className="relative w-8/12">
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg outline-none drop-shadow-xl focus:outline-none">
            <div className="flex flex-row justify-end px-2 py-2 justify-items-end">
              <button
                className="self-end text-right bg-red rounded p-1"
                type="button"
                onClick={closeModal}
              >
                <AiOutlineClose className="text-sm text-white" />
              </button>
            </div>

            <div className="relative flex-auto px-6 pb-4">{children}</div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-60 hidden 2xl:flex xl:flex"></div>
    </>
  );
}

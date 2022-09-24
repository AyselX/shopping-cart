import React from "react";
import Link from "next/link";
import Image from "next/image";
import faceIcon from "/public/icons/facebook.png";
import youtubeIcon from "/public/icons/youtube.png";
import instagramIcon from "/public/icons/instagram.png";
import twitterIcon from "/public/icons/twitter.png";
import masterCard from "/public/icons/Mastercard.png";
import visaCard from "/public/icons/Visa.png";

const Footer = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="bg-charleston">
        <div className="2xl:container xl:container lg:container md:container sm:container xs:container xxs:px-4 mx-auto grid grid-cols-5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-4 py-10">
          <article className="flex flex-col leading-8">
            <h6 className="text-lg font-semibold">Biz kimiz?</h6>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
          </article>

          <article className="flex flex-col leading-8">
            <h6 className="text-lg font-semibold">Yardım</h6>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
          </article>

          <article className="flex flex-col leading-8">
            <h6 className="text-lg font-semibold">Kampaniyalar</h6>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
            <Link href={"#"}>
              <a className="text-sm">Lorem Ipsum</a>
            </Link>
          </article>

          <article className="flex flex-col leading-8">
            <h6 className="text-lg font-semibold">Sosyal Medya</h6>
            <ul>
              <li className="text-sm">
                <Link href="#">
                  <a className="flex flex-row">
                    <figure className="w-5 h-5 mt-1">
                      <Image
                        src={faceIcon}
                        layout="responsive"
                        width={20}
                        height={20}
                        alt="facebook icon"
                      />
                    </figure>
                    <span className="mx-2">Facebook</span>
                  </a>
                </Link>
              </li>
              <li className="text-sm">
                <Link href="#">
                  <a className="flex flex-row">
                    <figure className="w-5 h-5 mt-1">
                      <Image
                        src={twitterIcon}
                        layout="responsive"
                        width={20}
                        height={20}
                        alt="facebook icon"
                      />
                    </figure>
                    <span className="mx-2">Twitter</span>
                  </a>
                </Link>
              </li>
              <li className="text-sm">
                <Link href="#">
                  <a className="flex flex-row">
                    <figure className="w-5 h-5 mt-1">
                      <Image
                        src={instagramIcon}
                        layout="responsive"
                        width={20}
                        height={20}
                        alt="facebook icon"
                      />
                    </figure>
                    <span className="mx-2">Instagram</span>
                  </a>
                </Link>
              </li>
              <li className="text-sm">
                <Link href="#">
                  <a className="flex flex-row">
                    <figure className="w-5 h-5 mt-1">
                      <Image
                        src={youtubeIcon}
                        layout="responsive"
                        width={20}
                        height={20}
                        alt="facebook icon"
                      />
                    </figure>
                    <span className="mx-2">Youtube</span>
                  </a>
                </Link>
              </li>
            </ul>
          </article>

          <form className="flex flex-col leading-6">
            <h6 className="text-lg font-semibold">
              İndirim ve yenilikler için abone olun
            </h6>
            <label className="flex flex-row my-2">
              <input
                className="rounded bg-white outline-none py-2 mx-1"
                type={"email"}
                placeholder="E-mail"
              />
              <input
                className="rounded bg-red px-2 mx-1"
                type={"submit"}
                value="Abone Ol"
              />
            </label>

            <p className="text-sm">
              Bültene kaydolarak{" "}
              <Link href={"#"}>
                <a className="underline">Gizlilik Politikasını</a>
              </Link>{" "}
              kabul etmiş olursunuz
            </p>
          </form>
        </div>

        <div className="bg-raisin-black py-2">
          <div className="flex flex-row justify-between 2xl:container xl:container lg:container sm:container md:container xs:mx-2 xxs:mx-2 mx-auto">
            <ul className="flex flex-row text-xs sm:text-xxs justify-between w-1/2 xs:w-full xxs:w-full xs:justify-center xxs:justify-center">
              <li>© Telif Hakkı 2022 - testwebsite.com</li>
              <li className="xs:hidden xxs:hidden">Kullanım Koşulları</li>
              <li className="xs:hidden xxs:hidden">KVK ve Gizlilik Politikası</li>
            </ul>

            <div className="flex flex-row xs:hidden xxs:hidden">
              <figure className="w-10 h-5 mt-1 mx-2">
                <Image
                  src={masterCard}
                  layout="responsive"
                  width={36}
                  height={20}
                  alt="master card"
                />
              </figure>

              <figure className="w-10 h-5 mt-1 mx-2">
                <Image
                  src={visaCard}
                  layout="responsive"
                  width={52}
                  height={16}
                  alt="master card"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

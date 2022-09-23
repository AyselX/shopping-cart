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
        <div className="container mx-auto grid grid-cols-5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-4 py-10">
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
          <div className="flex flex-row justify-between container mx-auto">
            <ul className="flex flex-row text-xs sm:text-xxs justify-between w-1/2">
              <li>© Telif Hakkı 2022 - testwebsite.com</li>
              <li>Kullanım Koşulları</li>
              <li>KVK ve Gizlilik Politikası</li>
            </ul>

            <div className="flex flex-row">
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

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import images from "../assets";
import { ParsedUrlQueryInput } from "querystring";

type Props = {
  nft: {
    i: number;
    name: string;
    price: string;
    image?: StaticImageData;
    seller: string;
    owner: string;
    description: string;
  };
};

const NFTCard = ({ nft }: Props) => {
  return (
    <Link href={{ pathname: "/nft-details", query: nft as unknown as string }}>
      <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 ng-white rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer card-shadow card-transition hover:scale-105 ">
        <div className="relative w-full h-52 sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
          <Image
            src={nft?.image || images[`nft${nft.i}` as keyof typeof images]}
            fill
            style={{ objectFit: "cover" }}
            alt={`nft${nft.i}`}
          />
        </div>

        <div className="mt-3 flex flex-col">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">
            {nft?.name}
          </p>
          <div className="flexBetween mt-1 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:mt-3">
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-lg">
              {nft?.price}
              <span className="normal"> ETH</span>
            </p>
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-lg">
              {nft?.seller}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;

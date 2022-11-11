import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import images from "../assets";
import { Button } from "./";
import { NextRouter, useRouter } from "next/router";

type MenuItemsProps = {
  isMobile?: boolean;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

const MenuItems = ({
  isMobile,
  active,
  setActive,
  setIsOpen,
}: MenuItemsProps) => {
  const generateLink = (i: number) => {
    switch (i) {
      case 0:
        return "/";
      case 1:
        return "/created-nfts";
      case 2:
        return "/my-nfts";
      default:
        return "/";
    }
  };

  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMobile && "flex-col h-full gap-5"
      }`}
    >
      {["Explore NFTs", "ListedNFTs", "My NFTs"]?.map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
            setIsOpen && setIsOpen(false);
          }}
          className={`flex flex-rpw items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 
        ${
          active === item
            ? "dark:text-white text-nft-black-1"
            : "dark:text-gray-500 text-nft-gray-2"
        }
        `}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

type ButtonGroupProps = {
  setActive: Dispatch<SetStateAction<string>>;
};

const ButtonGroup = ({ setActive }: ButtonGroupProps) => {
  const router = useRouter();
  const hasConnected = true;
  return hasConnected ? (
    <Button
      btnName="Create"
      classStyles="mx-2 rounded-xl"
      handleClick={() => {
        setActive("");
        router.push("/create-nft");
      }}
    />
  ) : (
    <Button btnName="Connect" classStyles="mx-2 rounded-xl" />
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState<string>("Explore NFTs");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      {/* Logo */}
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div
            className="flexCenter md:hidden cursor-pointer"
            onClick={() => {}}
          >
            <Image
              src={images.logo02}
              alt=""
              width={50}
              height={50}
              style={{ objectFit: "contain", width: "50px" }}
            />
            <p className="dark:text-white text-nft-black-1 font-poppins font-semibold text-lg ml-1">
              NFTNinja
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex" onClick={() => {}}>
            <Image
              src={images.logo02}
              alt=""
              width={32}
              height={32}
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
      </div>

      {/* Nav Items */}
      <div className="flex flex-initial flex-row justify-end">
        {/* Theme Toggle Switch */}
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>

        {/* Menu Items */}
        <div className="md:hidden flex">
          <ul className="list-none flexCenter flex-row">
            <MenuItems active={active} setActive={setActive} />
            <div className="ml-4">
              <ButtonGroup setActive={setActive} />
            </div>
          </ul>
        </div>
      </div>

      <div className="hidden md:flex ml-2">
        {isOpen ? (
          <Image
            src={images.cross}
            style={{ objectFit: "contain" }}
            width={20}
            height={20}
            className={`cursor-pointer ml-[5px] ${
              theme === "light" ? " filter invert" : ""
            }`}
            onClick={() => setIsOpen(false)}
            alt="cross-icon"
          />
        ) : (
          <Image
            src={images.menu}
            style={{ objectFit: "contain" }}
            width={25}
            height={25}
            className={
              theme === "light"
                ? "cursor-pointer filter invert"
                : "cursor-pointer"
            }
            onClick={() => setIsOpen(true)}
            alt="menu-icon"
          />
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
          <div className="flex-1 p-4">
            <MenuItems
              active={active}
              setActive={setActive}
              setIsOpen={setIsOpen}
              isMobile
            />
          </div>
          <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
            <ButtonGroup setActive={setActive} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Banner, CreatorCard, NFTCard } from "../components";
import { makeId } from "../utils/makeId";
import images from "../assets";

const Home = () => {
  const [hideButton, setHideButton] = useState<boolean>(false);
  const { theme } = useTheme();
  const parentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (current) {
      if (direction === "left") {
        current.scrollLeft = current.scrollLeft - scrollAmount;
      } else {
        current.scrollLeft = current.scrollLeft + scrollAmount;
      }
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current && parent) {
      if (current?.scrollWidth >= parent?.offsetWidth) {
        setHideButton(false);
      } else {
        setHideButton(true);
      }
    }
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener("resize", isScrollable);
    return () => window.removeEventListener("resize", isScrollable);
  }, []);

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        {/* Banner */}
        <Banner
          name="Discover, collect, and sell extraordinary NFTs"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />

        {/* Top Sellers */}
        <div>
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minglg:text-4xl font-semibold ml-4 xs:ml-0">
            Best Creators
          </h1>

          {/* Creator Card */}
          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
              ref={scrollRef}
            >
              {[6, 7, 8, 9, 10].map((i) => (
                <CreatorCard
                  key={`creator-${i}`}
                  rank={i}
                  creatorImage={images?.[`creator${i}` as keyof typeof images]}
                  creatorName={`0x${makeId(3)}...${makeId(4)}`}
                  creatorEths={10 - i * 0.5}
                />
              ))}

              {/* Arrow Buttons */}
              {!hideButton && (
                <>
                  <div
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
                    onClick={() => handleScroll("left")}
                    role="presentation"
                  >
                    <Image
                      src={images.left}
                      alt="left-arrow"
                      fill
                      style={{ objectFit: "contain" }}
                      className={theme === "light" ? "filter invert" : ""}
                    />
                  </div>
                  <div
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
                    onClick={() => handleScroll("right")}
                    role="presentation"
                  >
                    <Image
                      src={images.right}
                      alt="left-arrow"
                      fill
                      style={{ objectFit: "contain" }}
                      className={theme === "light" ? "filter invert" : ""}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Hot Bids */}
        <div className="mt-10">
          <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
            <h1 className="flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold  sm:mb-4">
              Hot Bids
            </h1>
            <div>SearchBar</div>
          </div>

          <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <NFTCard
                key={i}
                nft={{
                  i,
                  name: `Nifty NFS ${i}`,
                  price: (10 - i * 0.534)?.toFixed(2),
                  seller: `0x${makeId(3)}...${makeId(4)}`,
                  owner: `0x${makeId(3)}...${makeId(4)}`,
                  description: "Cool NFT on Sale",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

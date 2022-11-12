import React from "react";

type Props = {
  inputType: string;
  title: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const Input = ({ inputType, title, placeholder, handleChange }: Props) => {
  return (
    <div className="mt-10 w-full">
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">{title}</p>

      {inputType === "text" && (
        <input
          className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-black-1 text-base mt-4 px-4 py-3"
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      {inputType === "textarea" && (
        <textarea
          rows={10}
          className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-black-1 text-base mt-4 px-4 py-3"
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      {inputType === "number" && (
        <div className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-black-1 text-base mt-4 px-4 py-3 flexBetween flex-row">
          <input
            type="number"
            min="0"
            placeholder={placeholder}
            className="flex w-full dark:bg-nft-black-1 bg-white outline-none"
            onChange={handleChange}
          />
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">ETH</p>
        </div>
      )}
    </div>
  );
};

export default Input;

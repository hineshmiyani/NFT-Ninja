import React from "react";

type Props = {
  classStyles?: string;
  btnName: string;
  handleClick?: () => void;
};

const Button = ({ classStyles, btnName, handleClick }: Props) => {
  return (
    <button
      type="button"
      className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white  button-transition hover:scale-105 ${classStyles}`}
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

export default Button;

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useMemo, useCallback, useContext } from "react";
import { useTheme } from "next-themes";
import { useDropzone } from "react-dropzone";
import { Button, Input } from "../components";
import images from "../assets";

const CreateNFT = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const { theme } = useTheme();

  const onDrop = useCallback(() => {
    ("");
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg"] },
    maxSize: 5000000,
  });

  const fileStyle = useMemo(
    () =>
      `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed 
      ${isDragActive ? "border-file-active" : ""}
      ${isDragAccept ? "border-file-accept" : ""}
      ${isDragReject ? "border-file-reject" : ""}`,
    []
  );

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          Create new NFT
        </h1>

        {/* File Upload  */}
        <div className="mt-16">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
            Upload File
          </p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />

              <div className="flexCenter flex-col text-center">
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                  JPG, PNG, GIF, SVG, WEBP Max 5mb.
                </p>

                <div className="my-12 w-full flex justify-center">
                  <Image
                    src={images?.upload}
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                    className={theme === "light" ? "filter invert" : ""}
                    alt="file upload"
                  />
                </div>

                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                  Drag and Drop FIle
                </p>
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                  or Browse media on your device
                </p>
              </div>
            </div>

            {fileUrl && (
              <aside>
                <div>
                  <Image src={fileUrl} alt="asset_file" />
                </div>
              </aside>
            )}
          </div>
        </div>

        {/* Form */}
        <Input
          inputType="text"
          title="Name"
          placeholder="NFT Name"
          handleChange={(e) => setFormData({ ...formData, name: e?.target?.value })}
        />

        <Input
          inputType="textarea"
          title="Description"
          placeholder="NFT Description"
          handleChange={(e) => setFormData({ ...formData, description: e?.target?.value })}
        />

        <Input
          inputType="number"
          title="Price"
          placeholder="NFT Price"
          handleChange={(e) => setFormData({ ...formData, price: e?.target?.value })}
        />

        <div className="w-full mt-7 flex justify-end">
          <Button btnName="Create NFT" classStyles="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;

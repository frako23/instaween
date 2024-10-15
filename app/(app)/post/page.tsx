"use client";

import { useImgActionStore } from "@/store/imgActions";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import React from "react";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
const Page = () => {
  const uploadedImage = useImgActionStore((state) => state.uploadedImage);
  console.log(uploadedImage);
  const uploadedImageID = useImgActionStore((state) => state.uploadedImageID);

  return (
    <div className="flex items-center justify-center p-8">
      {" "}
      {uploadedImage && (
        <div>
          <h3>Uploaded Image: {uploadedImageID ? uploadedImageID : ""}</h3>
          <Image width={500} height={500} src={uploadedImage} alt="Uploaded" />
        </div>
      )}
      {/* <CldImage
        width="960"
        height="600"
        src={uploadedImage}
        sizes="100vw"
        alt="Description of my image"
      /> */}
    </div>
  );
};

export default Page;

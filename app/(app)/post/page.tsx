"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
const page = () => {
  return (
    <CldImage
      src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
      width="500" // Transform the image: auto-crop to square aspect_ratio
      height="500"
      alt="upload Image"
      crop={{
        type: "auto",
        source: true,
      }}
    />
  );
};

export default page;

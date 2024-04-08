import Image from "next/image";
import React from "react";

function GalleryCard({ image }) {
  return (
    <div className="border ">
      <Image
        src={image}
        alt="CFK Gallery"
        height={400}
        width={500}
        className="object-cover w-80 h-64"
      />
    </div>
  );
}

export default GalleryCard;

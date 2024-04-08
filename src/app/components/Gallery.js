import React from "react";
import GalleryCard from "./GalleryCard";

function Gallery() {
  return (
    <>
      <h1 className="py-8 text-center md:text-4xl text-semi-bold">GALLERY</h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <GalleryCard image={"/img_14.jpg"} />{" "}
        <GalleryCard image={"/img_2.jpg"} />{" "}
        <GalleryCard image={"/img_6.jpg"} />{" "}
        <GalleryCard image={"/img_7.jpg"} />{" "}
        <GalleryCard image={"/img_8.jpg"} />{" "}
        <GalleryCard image={"/img_9.jpg"} />{" "}
        <GalleryCard image={"/img_5.jpg"} />{" "}
        <GalleryCard image={"/img_15.jpg"} />{" "}
        <GalleryCard image={"/img_10.jpg"} />{" "}
      </div>
    </>
  );
}

export default Gallery;

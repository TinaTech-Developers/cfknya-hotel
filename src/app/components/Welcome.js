import React from "react";
import FillButton from "./FillButton";
import Image from "next/image";

function Welcome() {
  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-2">
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl md:text-5xl font-medium py-8">
          {" "}
          Stay and Enjoy{" "}
        </h1>
        <p className="text-lg px-10 pb-6 ">
          From the serene surroundings to the meticulously designed interiors,
          every aspect of our resort has been crafted with your comfort in mind.
          We hope that your stay with us will be filled with memorable moments
          and that our resort will become your preferred destination for
          relaxation. Thank you for being a part of our journey. We look forward
          to serving you and making your stay a delightful experience.
        </p>
        <FillButton name={"MORE ABOUT US"} link={"/about"} />
      </div>
      <div className="p-4">
        <Image
          src={"/f_img_1.png"}
          height={500}
          width={400}
          alt="Best Resort"
          className="w-[600px] mx-auto"
        />
      </div>
    </div>
  );
}

export default Welcome;

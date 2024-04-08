import Image from "next/image";
import React from "react";
import FillButton from "./FillButton";
function StaffCard({ image, name, desc, post }) {
  return (
    <div className="w-96 h-full border ">
      <Image src={image} alt="Staff" width={400} height={500} />
      <div className="flex flex-col items-start p-4">
        <h1 className="uppercase text-gray-400">{post}</h1>
        <hr className=" border-x-4 border-amber-950 w-10" />
        <h2 className="text-amber-900 text-2xl">{name}</h2>
        <p className="text-start py-2 text-gray-500">{desc}</p>
        <FillButton name={"Explore"} link={""} />
      </div>
    </div>
  );
}

export default StaffCard;

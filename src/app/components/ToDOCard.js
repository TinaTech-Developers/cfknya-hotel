import Image from "next/image";
import React from "react";
import FillButton from "./FillButton";

function ToDOCard({ image, title, desc }) {
  return (
    <div className="flex flex-col items-start gap-4 w-96 h-full hover:shadow-2xl p-4">
      <Image src={image} alt="CFK NYA RESORTS ToDo" height={400} width={500} />
      <h1 className="uppercase text-gray-400">ACTIVITIES</h1>
      <hr className=" border-x-4 border-amber-950 w-10 -mt-2" />
      <h2 className="text-amber-900 text-2xl">{title}</h2>
      <p className="text-start py-2 text-gray-500">{desc}</p>
      <FillButton name={"READ MORE"} link={"/reservation"} />
    </div>
  );
}

export default ToDOCard;

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Room({ price, image }) {
  return (
    <div className=" w-80 md:w-96 h-96 border border-amber-900 bg-black ">
      <Image
        src={image}
        alt=""
        width={500}
        height={500}
        className=" w-80 md:w-96 h-96 object-cover "
      />
      <div className="flex gap-2 text-white items-start justify-center -translate-y-10">
        <p>HOTEL ROOM</p>
        <Link
          href={""}
          className="p-1 rounded-lg text-white bg-amber-700 text-start"
        >
          ROOM ${price}
        </Link>
      </div>
    </div>
  );
}

export default Room;

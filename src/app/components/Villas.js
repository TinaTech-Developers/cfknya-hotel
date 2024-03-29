import Image from "next/image";
import React from "react";
import FillButton from "./FillButton";
import Link from "next/link";
import Room from "./Room";
import { IoIosStar } from "react-icons/io";

function Villas() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-gray-400 text-center  text-lg uppercase">
        our luxury villas
      </h1>
      <h2 className="text-5xl text-center py-4">Featured Villas</h2>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <div className=" w-96 md:w-[700px] h-full border border-amber-950  hover:shadow-2xl">
          <Image
            src={"/IMG-20231122-WA0060.jpg"}
            alt=""
            width={400}
            height={500}
            className=" w-96 md:w-[700px] object-contain"
          />
          <p className="flex items-center justify-center text-white -translate-y-12 p-4">
            FETURED ROOM <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </p>
          <div className="pb-10 mx-10 -mt-14">
            <h2 className="text-amber-800 text-3xl py-4">Maple Manor</h2>
            <div className="h-12"></div>
            <p className="py-4">
              The definition of cosy. This villa is not a brick short from the
              being the warmest villa you can ever find. Words could never do it
              justice.
            </p>
            <FillButton name={"BOOK NOW FROM $120"} link={"/rooms"} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-10 gap-y-10">
          <Room image={"/IMG-20231122-WA0050.jpg"} price={"122"} />
          <Room image={"/IMG-20231122-WA0074.jpg"} price={"122"} />
        </div>
      </div>
    </div>
  );
}

export default Villas;

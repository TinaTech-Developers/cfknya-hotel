import React from "react";
import FillButton from "./FillButton";
import Image from "next/image";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

function Footer() {
  return (
    <div>
      <div className=" hidden md:grid grid-cols-1 md:grid-cols-2 w-56 h-full md:w-[800px] md:h-56 bg-gray-400 mx-auto translate-y-36 shadow-2xl">
        <div>
          <h1 className="capitalize text-lg text-amber-900 p-4">
            You need a laxurious room
          </h1>
          <p className="text-white text-xl font-medium px-4">
            Call 24Hrs Emergency <br />
            Services All Time!
          </p>
          <div className="md:flex items-center justify-between p-4">
            <FillButton name="Call Now" link={""} />
            <p className="text-3xl text-white font-semibold">
              + 263 77 224 1125
            </p>
          </div>
        </div>
        <div>
          <Image
            src={
              "https://www.kindpng.com/picc/m/65-657867_virtual-assistant-soporte-tecnico-png-transparent-png.png"
            }
            height={300}
            width={200}
            alt="NYANGA RESORT"
            className="w-40 h-52 object-contain -translate-y-10 shadow-2xl "
          />
        </div>
      </div>
      <div className="h-full grid grid-cols-1 md:grid-cols-3 md:w-full bg-gray-500 md:h-96 ">
        <div className=" flex flex-col items-center justify-center p-4 text-gray-500 pt-12">
          <h1 className="text-xl text-amber-950 font-bold py-2">
            CFK NYA RESORTS
          </h1>
          <p className="text-sm text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            magnam vero veniam? Nemo eaque facere animi qui, quod omnis dolore
            labore non, placeat dolorem officia eligendi, temporibus neque fuga
            expedita!
          </p>
          <div></div>
        </div>
        <div className="flex flex-col items-start px-32 justify-center mt-20 text-white ">
          <h1 className="text-white text-xl font-semibold p-2">Explore us!</h1>
          <div className="flex items-center justify-between gap-1">
            <SlArrowRight color="brown" size={"0.8rem"} />
            <Link href={""}>About Us</Link>
          </div>
          <div className="flex items-center justify-between gap-1">
            <SlArrowRight color={"brown"} size={"0.8rem"} />
            <Link href={""}>Terms & Conditions</Link>
          </div>
          <div className="flex items-center justify-between gap-1">
            <SlArrowRight color={"brown"} size={"0.8rem"} />
            <Link href={""}>Newss & Articles</Link>
          </div>
          <div className="flex items-center justify-between gap-1">
            <SlArrowRight color={"brown"} size={"0.8rem"} />
            <Link href={""}>How we work</Link>
          </div>
          <div className="flex items-center justify-between gap-1">
            <SlArrowRight color={"brown"} size={"0.8rem"} />
            <Link href={""}>Contact Us</Link>
          </div>
        </div>
        <div className="flex flex-col items-center text-white mt-36">
          <p className="px-10 py-2">
            Get the best updates via email. Dont miss it. Any time you may{" "}
          </p>
          <input className="w-[70%] p-2 bg-white" placeholder="Your email" />
          <button className="bg-amber-950 w-[70%] p-2 my-2">
            Subscribe Now!
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-10 bg-gray-900">
        <p className="text-white text-sm">
          Copyright 2023 by <Link href={""}>TinaTech Solutions</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;

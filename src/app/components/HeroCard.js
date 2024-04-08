"use client";
import React from "react";
import Link from "next/link";
import FillButton from "./FillButton";
import Typewriter from "typewriter-effect";

function HeroCard() {
  return (
    <div className="bg-scroll bg-[url('/big_image_1.jpg')] object-cover h-[600px]">
      <div className="bg-scroll bg-black bg-opacity-70 h-[600px]">
        <div className="px-6 translate-y-80 md:pl-36 ">
          <h1 className="text-3xl text-amber-950 uppercase font-semibold">
            Best of The Bests
          </h1>
          <div className="text-4xl text-start md:pr-96 text-white">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [
                  "Welcome To Our Luxury Villas",
                  "Click The Button Below for Bookings",
                ],
              }}
            />
          </div>
          <div className="py-8">
            <FillButton name={"Explore"} link={"/reservation"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;

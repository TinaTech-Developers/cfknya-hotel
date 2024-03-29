"use client";
import React from "react";
import Link from "next/link";
import FillButton from "./FillButton";
import Typewriter from "typewriter-effect";

function HeroCard1() {
  return (
    <div className="bg-scroll bg-[url('/img_8.jpg')] bg-  object-fill h-[600px]">
      <div className="bg-scroll bg-black bg-opacity-70 h-[600px]">
        <div className="px-6 translate-y-80 md:pl-36 ">
          <h1 className="text-3xl text-amber-700 uppercase font-semibold">
            Best of The Bests
          </h1>
          <div className="text-2xl text-start md:pr-96 text-white">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [
                  "Feed your thirst to ride the unknown trails or just having a calm ride with your loved ones and share a motor moment.",
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

export default HeroCard1;

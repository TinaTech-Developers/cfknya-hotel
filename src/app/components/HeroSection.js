"use client";
import React from "react";
import Typewriter from "typewriter-effect";
function HeroSection({ title, subtitle }) {
  return (
    <div className="bg-scroll bg-[url('/big_image_1.jpg')] object-cover h-[600px]">
      <div className="flex flex-col items-center justify-center bg-scroll bg-black bg-opacity-70 h-[600px] ">
        <h1 className="text-2xl text-white md:text-6xl font-semiold">
          {title}
        </h1>
        <div className="text-xl text-gray-500">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [`${subtitle}`],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

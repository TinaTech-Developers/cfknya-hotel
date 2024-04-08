"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import HeroCard from "./HeroCard";
import HeroCard1 from "./HeroCard1";

export default function Hero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <HeroCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard1 />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

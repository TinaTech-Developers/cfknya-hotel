import HeroSection from "../components/HeroSection";
import Image from "next/image";
import FillButton from "../components/FillButton";
import React from "react";
import Staff from "../components/Staff";
import View from "../components/View";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="pt-16 text-center">
        <HeroSection
          title={"About CFK NYA"}
          subtitle={"Discover a home better than home."}
        />
        <div className="grid grid-cols-1 md:grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-gray-500 text-center pt-4">
              STAY WITH OUR LUXURY ROOMS
            </p>
            <h1 className="text-2xl md:text-5xl font-bold pb-4">Our Story</h1>
            <p className="  px-10 pb-6 text-start">
              Welcome to CFK, your ultimate destination for relaxation and
              rejuvenation. Nestled amidst the serene landscapes and
              breathtaking views, our resort is a haven of tranquility, offering
              an escape from the hustle and bustle of everyday life. <br></br>
              <br></br>Our story began over a decade ago when our founder, a
              passionate traveler, fell in love with this idyllic location. He
              envisioned a place where people could experience the beauty of
              nature while enjoying the comforts of a home away from home. Thus,
              CFK was born. <br></br>
              <br></br>Today, we offer a range of luxurious accommodations, from
              cozy cabins to spacious villas, all designed with your comfort in
              mind. Our facilities include a world-class spa, a gourmet
              restaurant serving local and international cuisine, and a variety
              of recreational activities for all ages.
            </p>
            <FillButton name={"MORE ABOUT US"} link={"/contact"} />
          </div>
          <div className="p-4">
            <Image
              src={"/f_img_1.png"}
              height={500}
              width={400}
              alt="Best Resort"
              className="w-[600px] mx-auto md:h-[620px]"
            />
          </div>
        </div>
        <Staff />
        <View />
      </div>
    </Layout>
  );
}

export default About;

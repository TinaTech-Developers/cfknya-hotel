import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import ToDOCard from "../components/ToDOCard";
import React from "react";

function ToDo() {
  return (
    <Layout>
      <div className="pt-16 text-center">
        <HeroSection
          title={"To-Do & Addons"}
          subtitle={"Its not just accomodation. Its an experience."}
        />
        <div className="flex flex-wrap items-center justify-center gap-8 pt-20">
          <ToDOCard
            image={"/img_8.jpg"}
            title={"QUAD BIKING"}
            desc={
              "Feed your thirst to ride the unknown trails or just having a calm ride with your loved ones and share a motor moment."
            }
          />
          <ToDOCard
            image={"/img_9.jpg"}
            title={"Bird Watching"}
            desc={
              "We know the stressful day to day in the big city, exchange the polution for melodic songs the birds sing."
            }
          />
          <ToDOCard
            image={"/img_7.jpg"}
            title={"HIKING"}
            desc={
              "Explore the trails to bring out the Adam and Eve inside. See nature for what it is, the scenery is amazing."
            }
          />
          <ToDOCard
            image={"/img_12.jpg"}
            title={"Culture Hour"}
            desc={
              "Meet with the locals and get a chance to understand and enjoy the rich culture our beloved country has to offer."
            }
          />{" "}
          <ToDOCard
            image={"/img_11.jpg"}
            title={"Troutbeck"}
            desc={
              "We are in close proximity to troutbeck which has a number of activities such as horseback riding."
            }
          />{" "}
          <ToDOCard
            image={"/img_10.jpg"}
            title={"Landmarks"}
            desc={
              "There are plenty places to visit, take picture and savour the greatest moments in life."
            }
          />
        </div>
      </div>
    </Layout>
  );
}

export default ToDo;

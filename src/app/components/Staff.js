import React from "react";
import StaffCard from "./StaffCard";

function Staff() {
  return (
    <div className="flex flex-col pt-14 items-center justify-center gap-6 py-10">
      <div>
        <p className="text-gray-500">OUR KIND STAFF</p>
        <h1 className="text-5xl ">Our Staff</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <StaffCard
          post={"STAFF"}
          name={"AUNT LILLY"}
          desc={
            " Every time you catch the fresh breeze of linen. She should come to your mind. Responsible for the upkeep of the resort she also has carries the rich culture of the area from trees to wildlife."
          }
          image={"/person_9.jpg"}
        />
        <StaffCard
          post={"STAFF"}
          name={"BROTHER TAKU"}
          desc={
            "We take pride in the preservation of the our land. Taku the tree whisperer as we call him keeps nature at its best. If it werent for his dedication, our paradise would'nt be the same"
          }
          image={"/person_8.jpg"}
        />
        <StaffCard
          post={"COOK"}
          name={"CHEF DANIEL"}
          desc={
            "A moment to reflect on childhood delicacies, induldge in the culinary heritage or just a quick snack. Chef daniel never falls short. Take our word, he knows how to feed the soul."
          }
          image={"/person_7.jpg"}
        />
      </div>
    </div>
  );
}

export default Staff;

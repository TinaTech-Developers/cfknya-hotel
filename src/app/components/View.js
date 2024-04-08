import React from "react";

function View() {
  return (
    <div className=" bg-[url('/img_5.jpg')] bg-fixed h-[250px] bg-center-bottom bg-no-repeat bg-cover mb-8 md:bg-cover md:h-[600px]">
      <div className="flex flex-col items-center justify-center bg-scroll bg-black w-full h-full bg-opacity-50">
        <h1 className="text-3xl text-center text-white md:text-6xl">
          Relax and Enjoy your Holiday
        </h1>
      </div>
    </div>
  );
}

export default View;

import React from "react";
import "../App.css";

import Carasoule3 from "./Carousel3";

function Testimonials3() {
  return (
    <div className="w-full font-serif  flex  justify-center items-center px-2 md:px-0 py-10 md:py-20">
      <div className="w-full   flex flex-col justify-center items-center gap-6 md:gap-16">
        <h1 className=" text-center text-[32px] text-black md:text-[54px] font-semibold ">
          Testimonials
        </h1>
        <div>
          <Carasoule3 />
        </div>
      </div>
    </div>
  );
}

export default Testimonials3;

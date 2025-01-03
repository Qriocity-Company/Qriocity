import React from "react";
import "../App.css";
import Carousel6 from "./Carousel6";

function Testimonials6() {
  return (
    <div className="w-full font-serif  flex  justify-center items-center px-2 md:px-0 py-10 md:py-20">
      <div className="w-full   flex flex-col justify-center items-center gap-6 md:gap-16">
        <h1 className=" text-center text-[32px] text-white md:text-[54px] font-bold ">
          Unable to decide?
        </h1>
        <h1 className=" text-center text-white text-[20px]  md:text-[32px] font-semibold ">
          Listen from the people whom we have worked with
        </h1>
        <div>
          <Carousel6 />
        </div>
      </div>
    </div>
  );
}

export default Testimonials6;

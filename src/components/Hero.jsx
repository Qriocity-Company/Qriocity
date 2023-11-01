import React from "react";
import heroImage from "../assets/Qriocity.png";
export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center mt-[68px] md:mt-[0]">
      <div className="bg-[#FF7A00] absolute top-[8rem] left-[18rem] h-[35.25rem]   w-[25rem] rounded-full blur-[10rem]"></div>
      <div className="bg-[#3cffff] absolute top-[12rem] -left-[6rem]  h-[15.25rem] z-10  w-[30.25rem] rounded-2xl blur-[10rem]"></div>
      <img src={heroImage} alt="hero-image absolute " className="mt-20 z-20 lg:block hidden" />
      <h1 className="lg:absolute static z-10 md:z-1 lg:top-[130px] lg:left-[100px] font-figtree  text-[44px] lg:text-[72px] text-white lg:w-[600px] w-[350px] md:w-[380px] font-semibold lg:mt-0 mt-[20px]">
        Simple solutions for complex projects
      </h1>

      <div className="group lg:w-[990px] w-[350px] md:w-[600px] lg:h-[166px] h-[80px] md:h-[120px] bg-white hover:cursor-pointer font-figtree lg:rounded-[27px] rounded-2xl z-[30] flex flex-row lg:px-[150px]  px-[50px] justify-between items-center  mt-20 lg:mt-0">
        <div className="flex flex-col items-center">
          <h2 className="font-bold  text-[20px] md:text-[32px] lg:text-[40px] animate-charcter ">4.1</h2>
          <span className="font-medium text-[8px] md:text-[16px] animate-charcter">Google Ratings</span>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[20px] md:text-[32px] lg:text-[40px] animate-charcter ">12 LPA</h2>
          <span className="font-medium text-[8px] md:text-[16px] animate-charcter">Highest Package</span>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[20px] md:text-[32px] lg:text-[40px] animate-charcter ">500+</h2>
          <span className="font-medium text-[8px] md:text-[16px] animate-charcter ">Hiring Partners</span>
        </div>
      </div>
    </div>
  );
};

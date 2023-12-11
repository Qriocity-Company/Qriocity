import React from "react";
import heroImage from "../assets/Qriocity.png";
import { FaGoogle } from "react-icons/fa";
import Review from "../assets/review.png";
export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center mt-[68px] md:mt-[0]">
      <div className="bg-[#FF7A00] absolute top-[8rem] left-[18rem] h-[35.25rem]   w-[25rem] rounded-full blur-[10rem]"></div>
      <div className="bg-[#3cffff] absolute top-[12rem] -left-[6rem]  h-[15.25rem] z-10  w-[30.25rem] rounded-2xl blur-[10rem]"></div>
      <img
        src={heroImage}
        alt="hero-image absolute "
        className="mt-20 z-20 lg:block hidden"
      />
      <h1 className="lg:absolute static z-10 md:z-1 lg:top-[130px] lg:left-[100px] font-figtree  text-[44px] lg:text-[72px] text-white lg:w-[600px] w-[350px] md:w-[380px] font-semibold lg:mt-0 mt-[20px]">
        Simple solutions for complex projects
      </h1>

      <div className="group lg:w-[990px] w-[350px] md:w-[600px] lg:h-[166px] h-[80px] md:h-[120px] bg-white hover:cursor-pointer font-figtree lg:rounded-[27px] rounded-2xl z-[30] flex flex-row lg:px-[150px] px-[15px] md:px-[50px] justify-between items-center  mt-20 lg:mt-0 py-[45px] md:py-0">

        <div className="w-[90px] md:w-fit h-[50px] md:h-auto flex flex-col items-center ">
          <div className="font-bold text-[20px] md:text-[32px] lg:text-[40px] animate-charcter ">
                  200+
          </div>
          <div className="flex md:items-end justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="122"
              height="30"
              viewBox="0 0 122 41"
              fill="none"
              className="w-[60%] md:w-auto"
            >
              <g clip-path="url(#clip0_208_3815)">
                <path
                  d="M118.199 24.4647L121.584 26.721C120.486 28.3389 117.858 31.1149 113.316 31.1149C107.675 31.1149 103.475 26.7508 103.475 21.199C103.475 15.2913 107.72 11.2834 112.841 11.2834C117.992 11.2834 120.515 15.3802 121.332 17.5919L121.777 18.7202L108.507 24.2123C109.516 26.2015 111.09 27.2109 113.316 27.2109C115.543 27.2109 117.086 26.1124 118.199 24.4647ZM107.794 20.8876L116.656 17.2062C116.166 15.9743 114.711 15.0986 112.974 15.0986C110.763 15.0986 107.69 17.058 107.794 20.8876Z"
                  fill="#FF302F"
                />
                <path
                  d="M97.0771 1.17492H101.352V30.2095H97.0771V1.17468V1.17492Z"
                  fill="#20B15A"
                />
                <path
                  d="M90.3386 12.0554H94.4651V29.6898C94.4651 37.0077 90.1456 40.021 85.0392 40.021C80.23 40.021 77.3356 36.7851 76.2519 34.1579L80.037 32.5842C80.7197 34.2022 82.3674 36.1172 85.0392 36.1172C88.3196 36.1172 90.3386 34.0835 90.3386 30.2836V28.8587H90.1902C89.2103 30.0461 87.3401 31.1148 84.9651 31.1148C80.0072 31.1148 75.4648 26.7952 75.4648 21.229C75.4648 15.6327 80.0072 11.2688 84.9651 11.2688C87.3253 11.2688 89.2103 12.3227 90.1902 13.4805H90.3386V12.0556V12.0554ZM90.6353 21.229C90.6353 17.7257 88.3049 15.1726 85.3361 15.1726C82.3376 15.1726 79.8142 17.7257 79.8142 21.229C79.8142 24.6874 82.3376 27.196 85.3361 27.196C88.3051 27.211 90.6355 24.6874 90.6355 21.229H90.6353Z"
                  fill="#3686F7"
                />
                <path
                  d="M51.9972 21.1547C51.9972 26.8697 47.5442 31.0703 42.0816 31.0703C36.6193 31.0703 32.166 26.8549 32.166 21.1547C32.166 15.4103 36.6193 11.2244 42.0816 11.2244C47.5442 11.2244 51.9972 15.4103 51.9972 21.1547ZM47.6629 21.1547C47.6629 17.5924 45.0799 15.1429 42.0816 15.1429C39.0833 15.1429 36.5003 17.5924 36.5003 21.1547C36.5003 24.6875 39.0833 27.1666 42.0816 27.1666C45.0801 27.1666 47.6629 24.6875 47.6629 21.1547Z"
                  fill="#FF302F"
                />
                <path
                  d="M73.6535 21.199C73.6535 26.914 69.2002 31.1146 63.7379 31.1146C58.2753 31.1146 53.8223 26.9137 53.8223 21.199C53.8223 15.4546 58.2753 11.2834 63.7379 11.2834C69.2002 11.2834 73.6535 15.4398 73.6535 21.199ZM69.3041 21.199C69.3041 17.6367 66.7214 15.1872 63.7228 15.1872C60.7246 15.1872 58.1416 17.6367 58.1416 21.199C58.1416 24.7318 60.7246 27.2109 63.7228 27.2109C66.7362 27.2109 69.3041 24.717 69.3041 21.199Z"
                  fill="#FFBA40"
                />
                <path
                  d="M15.8676 26.7656C9.64798 26.7656 4.77942 21.7483 4.77942 15.5287C4.77942 9.30933 9.64798 4.29209 15.8676 4.29209C19.2224 4.29209 21.6714 5.61312 23.4824 7.30539L26.4661 4.32187C23.9427 1.90236 20.5732 0.0614014 15.8676 0.0614014C7.34738 0.0616396 0.177734 7.00873 0.177734 15.5287C0.177734 24.0492 7.34738 30.996 15.8676 30.996C20.4693 30.996 23.9427 29.482 26.6591 26.6617C29.4496 23.8709 30.3105 19.9522 30.3105 16.7756C30.3105 15.7811 30.1919 14.7569 30.0582 13.9999H15.8676V18.1265H25.9762C25.6793 20.7094 24.863 22.4758 23.6606 23.6779C22.2059 25.1477 19.9053 26.7656 15.8676 26.7656Z"
                  fill="#3686F7"
                />
              </g>
              <defs>
                <clipPath id="clip0_208_3815">
                  <rect width="122" height="40.0312" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <img src={Review} className="w-[60%] md:w-auto"/>
          </div>
          
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[20px] md:text-[32px] lg:text-[40px] animate-charcter ">
            22 LPA
          </h2>
          <span className="font-medium text-[8px] md:text-[16px] animate-charcter">
            Highest Package
          </span>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[20px] md:text-[32px] lg:text-[40px] animate-charcter ">
            100+
          </h2>
          <span className="font-medium text-[8px] md:text-[16px] animate-charcter ">
            Hiring Partners
          </span>
        </div>
      </div>
    </div>
  );
};

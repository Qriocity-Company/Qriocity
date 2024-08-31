import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";


const Banners = [
    {
      content: "The bootcamp simplified full stack development for me. I now have the confidence to become a great developer. Thanks to Somesh sir for the fantastic 5-day session.",
      name: "Abhinav",
      location: "Kolkata",
    },
    {
      content: "The hands-on session clarified real-time use cases. Basic and advanced CSS concepts were well explained, boosting my understanding and skills.",
      name: "Kishore",
      location: "Chennai",
    },
    {
      content: "The bonus materials and 1-1 mentorship with Kesaven sir were invaluable. The mock interview provided clear insights into technical interview best practices.",
      name: "Shreya",
      location: "Mumbai",
    },
    {
      content: "Qriocity's Discord community, weekly sessions, and 30-day challenges have driven me to push my limits and pursue my dream job.",
      name: "Ayush",
      location: "Delhi",
    },
    {
      content: "The bootcamp transformed my coding approach. I now have a clear roadmap to enhance my skills and secure a high-paying job.",
      name: "Karthick",
      location: "Chennai",
    },
  ];
  
  




  const Banners2 = [
    {
      content: "The bootcamp simplified full stack development for me. I now have the confidence to become a great developer. Thanks to Somesh sir for the fantastic 5-day session.",
      name: "Abhinav",
      location: "Kolkata",
    },
    {
      content: "The hands-on session clarified real-time use cases. Basic and advanced CSS concepts were well explained, boosting my understanding and skills.",
      name: "Kishore",
      location: "Chennai",
    },
    {
      content: "The bonus materials and 1-1 mentorship with Kesaven sir were invaluable. The mock interview provided clear insights into technical interview best practices.",
      name: "Shreya",
      location: "Mumbai",
    },
    {
      content: "Qriocity's Discord community, weekly sessions, and 30-day challenges have driven me to push my limits and pursue my dream job.",
      name: "Ayush",
      location: "Delhi",
    },
    {
      content: "The bootcamp transformed my coding approach. I now have a clear roadmap to enhance my skills and secure a high-paying job.",
      name: "Karthick",
      location: "Chennai",
    },
  ];
  




function Carousel2() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1000) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    }

    window.addEventListener("resize", handleResize);

    // Call handleResize once on initial render to set initial state
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 20,
    cssEase: "linear",
    ltr: true,
    arrows: false,
  };
  const settings2 = {
    dots: false,

    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 20,
    cssEase: "linear",
    rtl: true,
    arrows: false,
  };
  return (
    <div className="h-full  w-[99vw] px-2 ">
      <div className="slider-container h-full w-full z-50 gap-2   flex  flex-col items-center ">
        <Slider
          {...settings}
          className="w-full md:w-[95%] flex justify-between  "
        >
          {Banners.map((banner, index) => (
            <div className="p-5 ">
              <div
                className="bg-gradient-to-r from-[#FBA154] to-[#f6754a] text-white h-[250px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2   rounded-xl"
                key={index}
              >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col items-center">
                      <h1 className="gabarito font-bold text-[19.2px]">
                        {banner.name}
                      </h1>
                       <p>{banner.location}</p>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Slider
          {...settings2}
          className="w-full md:w-[95%] flex justify-between  "
        >
          {Banners2.map((banner, index) => (
            <div className="p-5 ">
            <div
              className=" bg-gradient-to-r from-[#FBA154] to-[#f6754a] text-white h-[250px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2   rounded-xl"
              key={index}
            >
              <h1 className="gabarito text-[14px]">{banner.content}</h1>
              <div className="w-full flex items-center">
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col items-center">
                    <h1 className="gabarito font-bold text-[19.2px]">
                      {banner.name}
                    </h1>
                    <p>{banner.location}</p>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel2;

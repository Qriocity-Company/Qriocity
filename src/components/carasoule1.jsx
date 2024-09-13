import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";


const Banners = [
    {
      content: "The bootcamp clarified basic concepts and boosted my confidence in DSA. Thanks to Shubhang sir for making everything simple and clear.",
      name: "Priya",
      location: "Chennai",
    },
    {
      content: "Shubhang sir guided me through logic building, emphasizing patience and daily practice. Grateful to him and Qriocity for this transformative 5-day bootcamp.",
      name: "Aditya",
      location: "Bangalore",
    },
    {
      content: "The bonus materials and 1-1 mentorship with Kesaven sir were invaluable, providing a clear career roadmap. The recorded mock interview was especially enlightening.",
      name: "Shreya",
      location: "Mumbai",
    },
    {
      content: "Qriocity's Discord community, weekly sessions, and 30-day challenges truly pushed me to maximize my potential and pursue my dream job.",
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
      content: "The bootcamp clarified basic concepts and boosted my confidence in DSA. Thanks to Shubhang sir for making everything simple and clear.",
      name: "Priya",
      location: "Chennai",
    },
    {
      content: "Shubhang sir guided me through logic building, emphasizing patience and daily practice. Grateful to him and Qriocity for this transformative 5-day bootcamp.",
      name: "Aditya",
      location: "Bangalore",
    },
    {
      content: "The bonus materials and 1-1 mentorship with Kesaven sir were invaluable, providing a clear career roadmap. The recorded mock interview was especially enlightening.",
      name: "Shreya",
      location: "Mumbai",
    },
    {
      content: "Qriocity's Discord community, weekly sessions, and 30-day challenges truly pushed me to maximize my potential and pursue my dream job.",
      name: "Ayush",
      location: "Delhi",
    },
    {
      content: "The bootcamp transformed my coding approach. I now have a clear roadmap to enhance my skills and secure a high-paying job.",
      name: "Karthick",
      location: "Chennai",
    },
  ];
  




function Carousel1() {
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

export default Carousel1;

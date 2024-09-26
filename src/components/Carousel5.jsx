import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import User1 from "../assets/user_01.jpg";
import User2 from "../assets/user_02.jpg";
import User3 from "../assets/user_03.jpg";
import User4 from "../assets/User4.jpg";
import "../App.css";

const Banners = [
  {
    content:
      "When I was overwhelmed with my thesis work, it was Qriocity who helped me to get my work done successfully. They provided expert guidance from the very first consultation, helping me design my research and ensuring that every section was logically structured and well-supported. The weekly updates kept me informed, and the final dissertation was beyond my expectations. Thanks to Qriocity, I was able to submit a well-researched dissertation on time without the usual stress. Highly recommend them to anyone needing support during their thesis journey!",
    name: "John M. , (Master's in Engineering)",
    image: User1,
  },
  {
    content:
      "Qriocity was a game-changer for my MBA dissertation. I was struggling to select a topic and structure my proposal, but their team took the time to understand my academic needs and helped me craft a proposal that got immediate approval from my institution. The entire process, from the literature review to the final submission, was seamless. I particularly appreciated their flexibility with revisions and how they always met my deadlines. I couldn’t have asked for a better experience!",
    name: "Emily S. , (Master's in Business Administration)",
    image: User2,
  },
  {
    content:
      "The toughest part of my thesis was the data analysis, but Qriocity made it simple. They handled the complex stats and explained the results in a way that I could understand. The Turnitin report assured me everything was original, and their fast turnaround on revisions was impressive. Thank you Shubham sir and Qriocity Team",
    name: "David H. , (Master's in Data Science)",
    image: User3,
  },
  {
    content:
      "Balancing my thesis with a full-time job felt impossible, but Qriocity made it work. They handled the research, writing, and revisions, and were always available to answer my questions. I got regular progress updates, so I never felt lost. Even with a tight deadline, they delivered high-quality work. They made the whole process stress-free, and I’m really grateful!",
    name: "Tom W. , (Master's in Computer Science)",
    image: User4,
  },
];

function Carousel5() {
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
            <div className="p-5  " key={index}>
              <div
                className="bg-gradient-to-r from-[#FBA154] to-[#f6754a] text-white h-[300px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2   rounded-xl"
                key={index}
              >
                <h1 className="gabarito text-[10px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <h1 className="gabarito font-semibold text-[15px]">
                        {banner.name}
                      </h1>
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
          {Banners.map((banner, index) => (
            <div className="p-5 " key={index}>
              <div
                className=" bg-gradient-to-r from-[#FBA154] to-[#f6754a] text-white h-[300px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2   rounded-xl"
                key={index}
              >
                <h1 className="gabarito text-[10px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <h1 className="gabarito font-semibold text-[15px]">
                        {banner.name}
                      </h1>
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

export default Carousel5;

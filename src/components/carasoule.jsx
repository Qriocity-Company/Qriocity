import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";

const Banners = [
  {
    content:
      "I felt so refreshed and calm after the session. It was an incredible experience. Highly recommended to anyone needing relaxation. The session exceeded my expectations. Thank you so much!",
    name: "Sarah",
    location: "New York",
   
  },
  {
    content:
      "Lydia was fantastic during the session. I learned a lot in just one hour. The meditation was very informative and beneficial. I highly appreciate Lydia's guidance. Great session!",
    name: "David",
    location: "Los Angeles",
   
  },
  {
    content:
      "This was the most relaxing hour of my week. I feel great after the session. It significantly boosted my well-being. The calmness I felt was unparalleled. Thank you for the wonderful experience!",
    name: "Akshaya",
    location: "San Francisco",
   
  },
  {
    content:
      "A truly peaceful experience that helped me de-stress. I felt completely at ease during the session. The meditative experience was calming and effective. It greatly reduced my stress. Highly recommend it!",
    name: "Riya",
    location: "Chicago",
   
  },
  {
    content:
      "This meditation session was a game-changer for me. I felt so relaxed afterward. Lydia provided an amazing session. The experience was deeply relaxing and transformative. Thank you, Lydia!",
    name: "Jessica",
    location: "Miami",
   
  },
];

const Banners2 = [
  {
    content:
      "The session was incredibly insightful and relaxing. I felt a sense of calm wash over me. It's a wonderful way to unwind and find inner peace. Thank you for such a fantastic experience!",
    name: "Emily",
    location: "Boston",
   
  },
  {
    content:
      "I couldn't believe how effective the meditation session was. It provided me with the clarity I needed. Lydia's guidance was spot-on. I'll definitely be returning for more sessions!",
    name: "Michael",
    location: "Seattle",
   
  },
  {
    content:
      "An absolutely amazing session that left me feeling rejuvenated. The atmosphere was perfect for relaxation. I appreciate the attention to detail and care. Highly recommended for anyone!",
    name: "Priya",
    location: "Austin",
   
  },
  {
    content:
      "This meditation session helped me connect with myself on a deeper level. It was a transformative experience. Lydia's expertise and soothing voice made it even more special. Thank you!",
    name: "Arjun",
    location: "Denver",
   
  },
  {
    content:
      "A wonderful session that left me feeling at peace. The guided meditation was exactly what I needed to de-stress. Lydia's approach is gentle and effective. Can't wait for the next one!",
    name: "Sophia",
    location: "San Diego",
   
  },
];



function Carousel() {
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
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Slider
          {...settings2}
          className="md:w-[95%]  justify-between hidden md:flex"
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

export default Carousel;

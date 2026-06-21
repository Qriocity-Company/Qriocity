import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";


const Banners = [
  {
    content:
      "This course gave me a solid grasp of DSA basics and a strong foundation through numerous practice problems. It was invaluable for building my understanding.",
    name: "Rahul",
    location: "Bangalore",
  },
  {
    content:
      "The course clarified my path for placement and deepened my knowledge, making a significant difference during my final interview rounds.",
    name: "Rohith",
    location: "Chennai",
  },
  {
    content:
      "Qriocity’s focused approach helped me tackle important problems and stay motivated, enhancing my consistency and problem-solving skills.",
    name: "Harshit",
    location: "Trichy",
  },
  {
    content:
      "Joining this course connected me with a community of like-minded individuals and provided a comprehensive structure to address all my DSA questions.",
    name: "Naresh",
    location: "Coimbatore",
  },
  {
    content:
      "The course was well-organized with clear explanations on data structures and algorithms. The curated problems boosted my confidence and skills.",
    name: "Khishore",
    location: "Chennai",
  },
  {
    content:
      "An excellent course with thorough content. The logical flow of topics made complex concepts easier to grasp and understand.",
    name: "Karthika",
    location: "Coimbatore",
  },
  {
    content:
      "The course went beyond my expectations with detailed content and challenging tasks, significantly improving my programming abilities.",
    name: "Monish",
    location: "Trichy",
  },
  {
    content:
      "An intense course covering algorithms, data structures, and Python basics, greatly benefiting my coding skills and placement preparation.",
    name: "Vasanth Marshall",
    location: "Rameswaram",
  },
  {
    content:
      "DSA Batch 2 offered clear explanations and valuable weekly doubt-solving sessions, which have greatly enhanced my understanding and skills.",
    name: "Nitin",
    location: "Chennai",
  },
];




const Banners2 = [
  {
    content:
      "This course gave me a solid grasp of DSA basics and a strong foundation through numerous practice problems. It was invaluable for building my understanding.",
    name: "Rahul",
    location: "Bangalore",
  },
  {
    content:
      "The course clarified my path for placement and deepened my knowledge, making a significant difference during my final interview rounds.",
    name: "Rohith",
    location: "Chennai",
  },
  {
    content:
      "Qriocity’s focused approach helped me tackle important problems and stay motivated, enhancing my consistency and problem-solving skills.",
    name: "Harshit",
    location: "Trichy",
  },
  {
    content:
      "Joining this course connected me with a community of like-minded individuals and provided a comprehensive structure to address all my DSA questions.",
    name: "Naresh",
    location: "Coimbatore",
  },
  {
    content:
      "The course was well-organized with clear explanations on data structures and algorithms. The curated problems boosted my confidence and skills.",
    name: "Khishore",
    location: "Chennai",
  },
  {
    content:
      "An excellent course with thorough content. The logical flow of topics made complex concepts easier to grasp and understand.",
    name: "Karthika",
    location: "Coimbatore",
  },
  {
    content:
      "The course went beyond my expectations with detailed content and challenging tasks, significantly improving my programming abilities.",
    name: "Monish",
    location: "Trichy",
  },
  {
    content:
      "An intense course covering algorithms, data structures, and Python basics, greatly benefiting my coding skills and placement preparation.",
    name: "Vasanth Marshall",
    location: "Rameswaram",
  },
  {
    content:
      "DSA Batch 2 offered clear explanations and valuable weekly doubt-solving sessions, which have greatly enhanced my understanding and skills.",
    name: "Nitin",
    location: "Chennai",
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

export default Carousel;

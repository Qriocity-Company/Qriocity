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
      content: "Despite initial issues, the project was delivered in 3-4 days and executed successfully. Though pricier, Qriosity is reliable and delivers as promised. Highly recommended.",
      name: "Bhatri Narayana, CSE, VIT University",
      image: User1,
    },
    {
      content: "Thank you for your support. Despite some concerns, the project was delivered as promised. Special thanks to Sayed for his responsiveness. Highly recommend for project development.",
      name: "Goutham, ECE, Satyabama University",
      image: User2
    },
    {
      content: "Exceeded expectations with timely delivery and excellent communication. Dawood, Rajavee, Shreyanth, and Ayush were friendly and supportive. Highly recommended for computer science students seeking advanced projects.",
      name: "Deeksha, IT, GITAM University",
      image: User3,
    },
    {
      content: "Unique project ideas, timely delivery, and great support. Ayush and Shubhyansh were helpful throughout the process, explaining details and features clearly. Highly appreciate their work and humble approach.",
      name: "Ramya, CSE, Veltech University",
      image: User4,
    },
  ];
  
  const Banners2 = [
    {
      content: "Despite initial issues, the project was delivered in 3-4 days and executed successfully. Though pricier, Qriosity is reliable and delivers as promised. Highly recommended.",
      name: "Bhatri Narayana, CSE, VIT University",
      image: User1,
    },
    {
      content: "Thank you for your support. Despite some concerns, the project was delivered as promised. Special thanks to Sayed for his responsiveness. Highly recommend for project development.",
      name: "Goutham, ECE, Satyabama University",
      image: User2,
    },
    {
      content: "Exceeded expectations with timely delivery and excellent communication. Dawood, Rajavee, Shreyanth, and Ayush were friendly and supportive. Highly recommended for computer science students seeking advanced projects.",
      name: "Deeksha, IT, GITAM University",
      image: User3,
    },
    {
      content: "Unique project ideas, timely delivery, and great support. Ayush and Shubhyansh were helpful throughout the process, explaining details and features clearly. Highly appreciate their work and humble approach.",
      name: "Ramya, CSE, Veltech University",
      image: User4,
    },
  ];
  




    




function Carasoule4() {
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
            <div className="p-5  "key={index}>
              <div
                className="bg-gradient-to-r from-[#FBA154] to-[#f6754a] text-white h-[250px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2   rounded-xl"
                key={index}
              >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex gap-2 items-center">
                       <img src={banner.image} alt="" className="w-[50px] h-[50px] rounded-full" /> 
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
          className="w-full md:w-[95%] flex justify-between  "
        >
          {Banners2.map((banner, index) => (
            <div className="p-5 " key={index}>
            <div
              className=" bg-gradient-to-r from-[#FBA154] to-[#f6754a] text-white h-[250px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2   rounded-xl"
              key={index}
            >
              <h1 className="gabarito text-[14px]">{banner.content}</h1>
              <div className="w-full flex items-center">
                <div className="flex w-full items-center justify-between">
                <div className="flex gap-2 items-center">
                       <img src={banner.image} alt="" className="w-[50px] h-[50px] rounded-full" /> 
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

export default Carasoule4;

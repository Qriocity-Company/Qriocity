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
      "Joining as a campus expert transformed my college life! I'm earning ₹50,000 monthly while focusing on my studies. The flexible schedule is perfect for my classes, and the placement training helped me secure interviews with top MNCs. I've even won an iPhone 16 for my performance!",
    name: "Priya R. (SRM University, Chennai)",
    image: User1,
  },
  {
    content:
      "Initially, I was skeptical about earning ₹50K monthly, but the program proved me wrong! The training was comprehensive, and I only need to work 2-3 hours weekly. Plus, the free placement preparation saved me thousands. Now I'm helping other students while building my career.",
    name: "Karthik M. (VIT, Vellore)",
    image: User2,
  },
  {
    content:
      "The campus expert program is a game-changer! Beyond the monthly earnings, the free final year project support and placement guidance are invaluable. I've developed amazing leadership skills and built a strong professional network. The work-study balance is perfect!",
    name: "Sneha T. (Easwari Engineering College, Chennai)",
    image: User3,
  },
  {
    content:
      "As a third-year student, I was worried about placements and finances. This program solved both! I'm earning consistently, received comprehensive placement training, and got my dream internship through their referrals. The support team is available 24/7!",
    name: " Rahul D. (PSG Tech, Coimbatore)",
    image: User4,
  },
  {
    content:
      "Being a campus expert opened incredible opportunities! The flexible timing means I never miss classes, and the earnings helped me become financially independent. The bonus courses in Python and DSA were exactly what I needed for placements.",
    name: "Aishwarya P. (SSN College of Engineering, Chennai)",
    image: User4,
  },
  {
    content:
      "The program exceeded my expectations! Not only am I earning ₹50K monthly, but I also received a MacBook M2 for consistently meeting targets. The placement preparation and mock interviews boosted my confidence tremendously.",
    name: "Mohammed S. (Hindustan University, Chennai)",
    image: User4,
  },
];

function Carousel8() {
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
                className="bg-gradient-to-r from-[#FBA154] to-[#f6754a] text-white h-[320px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2   rounded-xl"
                key={index}
              >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
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
                className=" bg-gradient-to-r from-[#FBA154] to-[#f6754a] text-white h-[320px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2   rounded-xl"
                key={index}
              >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
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

export default Carousel8;

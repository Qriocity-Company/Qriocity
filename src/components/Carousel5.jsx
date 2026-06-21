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
      "When I was swamped with multiple assignments, Qriocity stepped in and saved me. They helped structure each task properly, ensuring that the research was spot-on and met all the requirements. Their weekly progress reports kept me in the loop, and the final submission was exactly what I needed. The whole process was smooth and stress-free. I highly recommend Qriocity to anyone who needs reliable support for their coursework!",
    name: "John M. , (Master's in Engineering)",
    image: User1,
  },
  {
    content:
      "Qriocity was a lifesaver for my MBA coursework. I was struggling to manage several projects and needed help with research and formatting. Their team was thorough, quick, and attentive to all my needs. They were flexible with revisions and always delivered on time. I was able to submit high-quality work without any last-minute stress. I’m incredibly thankful for their support!",
    name: "Emily S. , (Master's in Business Administration)",
    image: User2,
  },
  {
    content:
      "Data analysis in my coursework was the toughest part, but Qriocity made it easy. They handled the statistical work and explained the results in simple terms. I was able to submit a perfectly formatted, well-researched assignment with confidence, thanks to their Turnitin report ensuring everything was original. Their fast revisions and excellent customer service made the experience even better.",
    name: "David H. , (Master's in Data Science)",
    image: User3,
  },
  {
    content:
      "Balancing coursework with my full-time job was really tough, but Qriocity came through for me. They helped with the research, writing, and formatting, making sure everything was tailored to my institution's requirements. Their regular updates and support kept me calm, even with tight deadlines. They made the entire process seamless, and I’m truly grateful for their help!",
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

export default Carousel5;

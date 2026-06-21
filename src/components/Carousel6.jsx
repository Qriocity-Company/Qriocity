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
      "Qriocity made a huge difference in my AI research. Their in-depth knowledge and attention to detail helped me overcome major challenges in data preprocessing and model optimization. The team's consistent support through consultations was invaluable. I highly recommend their service to researchers. They truly delivered beyond my expectations.",
    name: "Dr. Priya S. (PhD in Artificial Intelligence)",
    image: User1,
  },
  {
    content:
      "Qriocity’s support in developing NLP models for my dissertation was incredible. They assisted with advanced text analysis and improved my research's overall quality. Their team provided original, well-researched content free of plagiarism. Regular feedback sessions made collaboration smooth. I strongly recommend them for academic projects.",
    name: "Dr. Meera L. (PhD in Natural Language Processing)",
    image: User2,
  },
  {
    content:
      "Qriocity’s team went above and beyond in helping with my bioinformatics research. They expertly handled complex data analysis and AI model development. Their insights added immense value to my work. The progress reports kept me confident and on track throughout. I’m extremely pleased with their service.",
    name: ". Prof. Anirudh H. (PhD in Computational Biology)",
    image: User3,
  },
  {
    content:
      "The expertise Qriocity brought to my cognitive science research was phenomenal. They helped me design innovative machine learning models to interpret cognitive behavior data. Their thoroughness in research and writing ensured my papers met all academic standards. The team's professionalism was unmatched. I’m grateful for their continued support.",
    name: "Dr. Kavita P. (PhD in Cognitive Science)",
    image: User4,
  },
  {
    content:
      "Qriocity played a crucial role in my big data analytics research. They provided clear guidance on handling large datasets and optimizing my models for accuracy. The team’s ability to translate complex problems into workable solutions was impressive. Their timely delivery and dedication to quality were exceptional. I highly recommend their services to any researcher.",
    name: "Prof. Vikram S. (PhD in Big Data Analytics)",
    image: User4,
  },
];

function Carousel6() {
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
                className=" bg-gradient-to-r from-[#FBA154] to-[#f6754a] text-white h-[300px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2   rounded-xl"
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

export default Carousel6;

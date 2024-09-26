import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import User1 from "../assets/user_01.jpg";
import User2 from "../assets/user_02.jpg";
import User3 from "../assets/user_03.jpg";
import User4 from "../assets/User4.jpg";
import "../App.css";

// Data for testimonials
const Banners = [
  {
    content:
      "Despite initial issues, the project was delivered in 3-4 days and executed successfully. Though pricier, Qriosity is reliable and delivers as promised. Highly recommended.",
    name: "Bhatri Narayana, CSE, VIT University",
    image: User1,
  },
  {
    content:
      "Thank you for your support. Despite some concerns, the project was delivered as promised. Special thanks to Sayed for his responsiveness. Highly recommend for project development.",
    name: "Goutham, ECE, Satyabama University",
    image: User2,
  },
  {
    content:
      "Exceeded expectations with timely delivery and excellent communication. Dawood, Rajavee, Shreyanth, and Ayush were friendly and supportive. Highly recommended for computer science students seeking advanced projects.",
    name: "Deeksha, IT, GITAM University",
    image: User3,
  },
  {
    content:
      "Unique project ideas, timely delivery, and great support. Ayush and Shubhyansh were helpful throughout the process, explaining details and features clearly. Highly appreciate their work and humble approach.",
    name: "Ramya, CSE, Veltech University",
    image: User4,
  },
];

function Carasoule4() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null); // State to manage selected testimonial for modal

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
    handleResize();
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
    arrows: false,
  };

  // Handle click to show modal
  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div className="h-full w-[99vw] px-2">
      <div className="slider-container h-full w-full z-50 gap-2 flex flex-col items-center">
        <Slider
          {...settings}
          className="w-full md:w-[95%] flex justify-between"
        >
          {Banners.map((banner, index) => (
            <div
              className="p-5"
              key={index}
              onClick={() => handleTestimonialClick(banner)}
            >
              <div
                className="bg-gradient-to-r from-[#FBA154] to-[#f6754a] text-white h-[250px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2 rounded-xl hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
                key={index}
              >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <img
                        src={banner.image}
                        alt=""
                        className="w-[50px] h-[50px] rounded-full"
                      />
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
          {...settings}
          className="w-full md:w-[95%] flex justify-between"
        >
          {Banners.map((banner, index) => (
            <div
              className="p-5"
              key={index}
              onClick={() => handleTestimonialClick(banner)}
            >
              <div
                className="bg-gradient-to-r from-[#FBA154] to-[#f6754a] text-white h-[250px] p-5 md:p-10 flex justify-between flex-col gap-2 border-2 rounded-xl hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
                key={index}
              >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <img
                        src={banner.image}
                        alt=""
                        className="w-[50px] h-[50px] rounded-full"
                      />
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

        {/* Modal for enlarged testimonial */}
        {selectedTestimonial && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto relative">
              <button
                className="absolute top-4 right-4 text-black text-2xl font-bold"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  className="w-[100px] h-[100px] rounded-full mb-4"
                />
                <h2 className="font-bold text-lg mb-2">
                  {selectedTestimonial.name}
                </h2>
                <p className="text-gray-700">{selectedTestimonial.content}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carasoule4;

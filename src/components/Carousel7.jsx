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
      "Qriocity's hardware expertise took my robotics project to the next level. Their efficient PCB design and component selection streamlined the entire process. Regular progress reports kept me confident throughout the project. The team’s deep knowledge of embedded systems impressed me. Highly recommend them for any complex hardware project!",
    name: "Arjun M. (Karpagam Engineering College, Coimbatore)",
    image: User1,
  },
  {
    content:
      "Collaborating with Qriocity for my IoT project was an excellent experience. Their approach to hardware integration was seamless and professional. The team delivered on time and was always available for guidance. The final product exceeded my expectations, both in functionality and quality. I would work with them again in a heartbeat!",
    name: "Neha P. (SRM Institute of Science and Technology, Trichy)",
    image: User2,
  },
  {
    content:
      "The Qriocity team helped me overcome major technical challenges in my embedded systems project. Their prototype development and testing processes were incredibly thorough. They provided consistent support and timely feedback throughout. The attention to detail was remarkable, ensuring a flawless final product. Great experience overall!!!",
    name: "Rakesh S. (SSN College of Engineering, Chennai)",
    image: User3,
  },
  {
    content:
      "Qriocity provided exceptional support for my sensor network project. Their knowledge of hardware integration and testing was invaluable. The team worked closely with me to ensure every detail met industry standards. Weekly progress reports were reassuring and kept the project on track. Their service was beyond professional.",
    name: "Anjali K. (Sathyabama Institute of Science and Technology, Chennai)",
    image: User4,
  },
  {
    content:
      "Qriocity’s expertise helped me design innovative automation hardware for my research. Their in-depth understanding of system design and prototyping saved me time and effort. The final prototype was highly efficient and met all required standards. I particularly appreciated the team's prompt communication. I highly recommend their hardware development services!",
    name: "Kavya N. (Hindustan University, Coimbatore)",
    image: User4,
  },
  {
    content:
      "Qriocity made a significant impact on my robotics research with their hardware solutions. They handled complex sensor integration with ease, providing expert guidance along the way. The team’s professionalism and quality testing were top-notch. Timely delivery ensured I stayed on schedule. Highly recommended for anyone working on advanced hardware projects!",
    name: "Vijay R. (Velammal Engineering College, Chennai)",
    image: User4,
  },
  {
    content:
      "I was impressed by Qriocity’s hardware design and attention to detail for my mechatronics project. They worked closely with me to refine the design and prototype. Their communication was always clear and timely. The hardware delivered exceeded my performance expectations. I’m grateful for their hard work and dedication!",
    name: "Priya S. (St. Joseph's College of Engineering, Chennai)",
    image: User4,
  },
  {
    content:
      "Qriocity’s support in developing hardware for my electrical engineering research was outstanding. They provided expert insight into component selection and testing protocols. The team was responsive and kept me updated with weekly reports. Their ability to solve complex hardware issues was remarkable. I highly recommend their services!",
    name: "Raghav K. (Karunya University, Karunya)",
    image: User4,
  },
  {
    content:
      "Working with Qriocity for my embedded AI hardware project was a great experience. Their attention to the details of hardware integration ensured smooth functionality. They provided reliable testing and quality assurance at every step. The team’s commitment to delivering the project on time was impressive. I couldn't have completed my project without their help!",
    name: "Meera L. (Vellore Institute of Technology, Vellore Campus)",
    image: User4,
  },
  {
    content:
      "Qriocity’s hardware expertise added significant value to my bioelectronics project. They helped me overcome integration challenges with sensors and controllers. The team's attention to detail and rigorous testing ensured high-quality output. Their professional approach and timely updates were exceptional. I highly recommend their services for any hardware project!",
    name: "Anirudh H. (SRM, Chennai)",
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

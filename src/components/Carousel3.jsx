import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";

const Banners = [
  {
    content:
      "The Top 50 Final Year Project Ideas E-book saved me so much time! I found the perfect project and impressed my professors instantly. The ideas were detailed, relevant, and helped me understand the industry trends. This resource gave me the confidence to tackle my project head-on.",
    name: "Aishwarya",
    location: "Chennai",
  },
  {
    content:
      "The step-by-step guidance on completing my project was a lifesaver! I managed my time better and finished my project ahead of schedule. The session broke down complex tasks into manageable steps, and I felt more in control of my workload.",
    name: "Karthik",
    location: "Coimbatore",
  },
  {
    content:
      "The session taught me how to add novelty to my project. I never thought I'd be able to publish a research paper, but I did! The tips on research writing and selecting unique project angles were invaluable. It opened up so many opportunities for me, and I now feel confident about my academic future.",
    name: "Sneha",
    location: "Bangalore",
  },
  {
    content:
      "I was struggling to balance placements and projects, but this session helped me organize everything. I secured a high-paying job and got great project grades. The practical strategies were a game-changer, and now I feel like I can handle any workload with ease.",
    name: "Rahul",
    location: "Delhi",
  },
  {
    content:
      "The Python and DSA courses in Bonus section were incredibly useful. I was able to use those skills not just in my project but also during my placement interviews! The detailed explanations and real-world examples boosted my confidence, and now I’m much more prepared for technical interviews.",
    name: "Varun",
    location: "Mumbai",
  },
  {
    content:
      "The ATS-friendly resume and cover letter templates in Bonus section has helped me land interviews faster. I felt so prepared and confident with my new resume! The templates were professional and made sure my resume passed through automated systems with ease. I’m now getting more responses from recruiters.",
    name: "Meera",
    location: "Chennai",
  },
  {
    content:
      "I loved the stress-free workflow tips! I used to feel so overwhelmed, but now I’m managing my project and job applications with ease. The session provided simple yet effective techniques to stay on top of everything, and I now feel much more in control of my schedule",
    name: "Nisha",
    location: "Bangalore",
  },
  {
    content:
      "The 2-hour session gave me a clear action plan on how to land my dream job, while also creating a standout final year project. The roadmap for success was so practical and easy to follow, and I was able to apply the strategies immediately. I’m much more confident about my future now.",
    name: "Harish",
    location: "Chennai",
  },
  {
    content:
      "The LinkedIn Mastery sessions and mock interviews were game-changers! I learned how to present myself online and perform well in interviews. My LinkedIn profile is now polished, and I’ve already seen an increase in recruiter views. The mock interviews helped me prepare for real job interviews with confidence.",
    name: "Priya",
    location: "Pune",
  },
];

const Carousel3 = [
  {
    content:
      "The bootcamp simplified full stack development for me. I now have the confidence to become a great developer. Thanks to Somesh sir for the fantastic 5-day session.",
    name: "Abhinav",
    location: "Kolkata",
  },
  {
    content:
      "The hands-on session clarified real-time use cases. Basic and advanced CSS concepts were well explained, boosting my understanding and skills.",
    name: "Kishore",
    location: "Chennai",
  },
  {
    content:
      "The bonus materials and 1-1 mentorship with Kesaven sir were invaluable. The mock interview provided clear insights into technical interview best practices.",
    name: "Shreya",
    location: "Mumbai",
  },
  {
    content:
      "Qriocity's Discord community, weekly sessions, and 30-day challenges have driven me to push my limits and pursue my dream job.",
    name: "Ayush",
    location: "Delhi",
  },
  {
    content:
      "The bootcamp transformed my coding approach. I now have a clear roadmap to enhance my skills and secure a high-paying job.",
    name: "Karthick",
    location: "Chennai",
  },
];

function Carousel2() {
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
          {Banners.map((banner, index) => (
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

export default Carousel3;

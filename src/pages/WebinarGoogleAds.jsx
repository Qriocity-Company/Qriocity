import React, { useState, useEffect } from "react";
import "../styles/Contact.css";
import Modal from "../components/Modal";
import Testimonials4 from "../components/Testimonials4";
import MoneyBackSection from "../components/WebinarGoogleAds/MoneyBackSection";
import FaqSection from "../components/WebinarGoogleAds/FaqSection";
import FooterBook from "../components/WebinarGoogleAds/FooterBook";
import Comparision from "../components/WebinarGoogleAds/Comparision";
import BonusesSection from "../components/WebinarGoogleAds/BonusSection";
import ProjectSolution from "../components/WebinarGoogleAds/ProjectSolution";
import TimelineComponent from "../components/WebinarGoogleAds/TimelineComponent";
import ProblemSection from "../components/WebinarGoogleAds/ProblemSection";
import MainCard from "../components/WebinarGoogleAds/MainCard";
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const ContentCard = ({ content }) => {
  return (
    <div className=" w-full rounded-xl border border-[#2ACDD0] p-6 flex gap-2 md:gap-10 items-center  mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="28"
        viewBox="0 0 27 28"
        fill="none"
      >
        <path
          d="M9.65664 5.10106C11.367 2.03393 12.2216 0.500366 13.5 0.500366C14.7784 0.500366 15.6329 2.03393 17.3434 5.10106L17.7861 5.89484C18.2721 6.76692 18.5151 7.20296 18.8931 7.4905C19.2711 7.77804 19.7436 7.88469 20.6886 8.09799L21.5472 8.29238C24.8681 9.04431 26.5272 9.41961 26.9227 10.6899C27.3169 11.9589 26.1856 13.2832 23.9218 15.9305L23.3359 16.6149C22.6933 17.3669 22.3706 17.7435 22.2262 18.2079C22.0817 18.6736 22.1303 19.1758 22.2275 20.1789L22.3166 21.0928C22.6582 24.6256 22.8296 26.3914 21.7956 27.1757C20.7615 27.9614 19.2063 27.2446 16.0987 25.8136L15.2928 25.4437C14.4099 25.036 13.9684 24.8335 13.5 24.8335C13.0316 24.8335 12.5901 25.036 11.7059 25.4437L10.9027 25.8136C7.79368 27.2446 6.23852 27.9601 5.20579 27.1771C4.17037 26.3914 4.34181 24.6256 4.68336 21.0928L4.77245 20.1802C4.86965 19.1758 4.91825 18.6736 4.77245 18.2092C4.62936 17.7435 4.30672 17.3669 3.66413 16.6163L3.07825 15.9305C0.814348 13.2846 -0.316925 11.9602 0.0772654 10.6899C0.472806 9.41961 2.13327 9.04296 5.45419 8.29238L6.31277 8.09799C7.2564 7.88469 7.72754 7.77804 8.10688 7.4905C8.48487 7.20296 8.72786 6.76692 9.21385 5.89484L9.65664 5.10106Z"
          fill="url(#paint0_linear_209_3862)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_209_3862"
            x1="13.5"
            y1="0.500366"
            x2="13.5"
            y2="27.4996"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#26CFD3" />
            <stop offset="1" stop-color="#1A8A8C" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-white md:text-2xl text-xs font-[300]">
        {" "}
        {content}
      </div>
    </div>
  );
};

const WebinarGoogleAds = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already active
    } else {
      setActiveIndex(index); // Open the clicked one
    }
  };

  return (
    <div className=" w-full  ">
      {showForm && <Modal setShowForm={setShowForm} />}

      <div className="relative mt-20">
        <div className=" text-white w-full md:mt-20 mt-10  flex justify-center items-center  font-figtree ">
          <div className="bg-[#3cffff] hidden md:block absolute top-[2.5%] -left-[15%]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[12rem]"></div>
          <div className="bg-[#FF7A00]  hidden md:block absolute -top-[2%] -right-[10%] h-[35.25rem]   w-[20rem] rounded-full blur-[14rem]"></div>
          <MainCard setShowForm={setShowForm} />
        </div>
        <div className="bg-gradient-to-b  md:mt-20 mt-10  from-[#04131300] to-[#041313] w-full ">
          <div className=" md:w-5/6 mx-auto   md:p-16 p-4">
            <div className="lg:text-6xl md:text-4xl text-2xl text-center  text-white  ">
              Why Choose us?
            </div>
          </div>

            <div className="relative md:mt-0 mt-10  space-y-10 text-center md:p-16 p-4 ">
            <ContentCard content="Project Delivery in 1 day" />
            <ContentCard content="Advanced Unique IEEE Titles" />
            <ContentCard content="PPT’s and Reports in your college format " />
            <ContentCard content="24/7 Support through WhatsApp" />
            <button
              className="btn md:mt-20 font-bold  mt-10 text-white bg-gradient-to-r from-[#FBA154] to-[#F15A29]  px-16 py-4 rounded-full md:text-xl "
              style={{}}
              onClick={() => {
                scrollToTop();
              }}
            >
              {" "}
              BOOK FREE CONSULTATION CALL{" "}
            </button>
            <div className="bg-[#3cffff] hidden md:block absolute top-[50%] -left-[15%]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[12rem]"></div>
            <div className="bg-[#FF7A00]  hidden md:block absolute top-[80%] -right-[10%] h-[35.25rem]   w-[20rem] rounded-full blur-[14rem]"></div>
          </div>

          {/* What problem we will solve? section  */}
          <ProblemSection/>
          <TimelineComponent/>
          <ProjectSolution/> 
          <BonusesSection/>
          <Comparision/>
          <Testimonials4 />
          <MoneyBackSection/>
          <FaqSection/>
        </div>
      </div>
        <FooterBook/>
    </div>
  );
};

export default WebinarGoogleAds;

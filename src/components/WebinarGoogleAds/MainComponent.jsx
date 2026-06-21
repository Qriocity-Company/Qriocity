import React from 'react'
import ContentCard from './ContentCard';

function MainComponent() {
  return (
    <>
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
          BOOK CONSULTATION CALL{" "}
        </button>
        <div className="bg-[#3cffff] hidden md:block absolute top-[50%] -left-[15%]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[12rem]"></div>
        <div className="bg-[#FF7A00]  hidden md:block absolute top-[80%] -right-[10%] h-[35.25rem]   w-[20rem] rounded-full blur-[14rem]"></div>
      </div>
    </>

  )
}

export default MainComponent
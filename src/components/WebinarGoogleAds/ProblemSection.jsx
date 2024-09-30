import React from 'react';
import ProblemCard from "./ProblemCard"

const ProblemSection = () => {
  return (
    <div className="md:mt-20 mt-10 md:p-16 p-4 z-0">
      <div className="lg:text-6xl md:text-4xl text-2xl text-center text-white">
        Stuck with Projects or Placements? Consider it solved
      </div>
      <div className="relative mt-16 md:px-20 space-y-12">
        <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center">
          <ProblemCard
            content="Don't know which "
            boldContent="domain and title to choose?"
            pos="left"
          />
          <div className="lg:flex hidden justify-between items-center w-full">
            <div className="w-[10px] h-[10px] bg-white rounded-full text-white"></div>
            <div className="w-full h-0" style={{ border: "2px dashed white" }}></div>
            <div className="w-[10px] h-[10px] bg-white rounded-full text-white"></div>
          </div>
          <ProblemCard
            content="Finding it difficult to create "
            boldContent="PPTs and Reports?"
            pos="right"
          />
        </div>
        <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center">
          <ProblemCard
            content="Couldn't manage your"
            boldContent="academics and projects"
            pos="left"
          />
          <div className="lg:flex hidden justify-between items-center w-full">
            <div className="w-[10px] h-[10px] bg-white rounded-full text-white"></div>
            <div className="w-full h-0" style={{ border: "2px dashed white" }}></div>
            <div className="w-[10px] h-[10px] bg-white rounded-full text-white"></div>
          </div>
          <ProblemCard
            content="Have to focus on"
            boldContent="Placements?"
            pos="right"
          />
        </div>

        <div
          className="lg:block hidden absolute font-[500] text-white text-9xl top-[40%] left-[50%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          ?
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:mr-10 mt-10 mb-10">
        <button
          className="px-14 py-4 rounded-full font-bold text-white"
          style={{
            background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
          }}
          onClick={() => {
            scrollToTop();
          }}
        >
          SOLVE ALL YOUR PROBLEMS NOW
        </button>
      </div>
    </div>
  );
};
export default ProblemSection

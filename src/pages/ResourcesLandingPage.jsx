import React from "react";
import bg from "../Utils/bg-image.jpg";
import { useNavigate } from "react-router-dom";

const ResourceLandingPage = () => {
  const navigate = useNavigate();
  const filled = localStorage.getItem("Filled");

  const handleClick = () => {
    if (filled) {
      window.location.href = "https://www.geeksforgeeks.org/";
    } else {
      navigate("/form");
    }
  };
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="relative flex items-center justify-between w-full p-4 ">
        <div className="relative  p-8  bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg w-[500px] h-[500px] flex flex-col">
          <div className="place-self-center p-3 w-[300px] flex justify-center items-center rounded-full text-white border-2 border-white mt-5">
            <h1 className="text-xl font-bold place-self-center ">
              FREE PDF RESOURCE
            </h1>
          </div>
          <h2 className="text-5xl font-bold  mt-10 place-self-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF5924]">
            Top 100
          </h2>
          <h2 className="text-4xl font-semibold mt-2 place-self-center">
            APTITUDE QUESTIONS
          </h2>
          <div className="mt-10 flex items-center justify-center">
            <p className="text-xl text-center">
              Best proven reels ideas for coaches, content creators as well
              service based businesses to get more followers and leads
            </p>
          </div>

          <button
            className="mt-auto relative bg-orange-500 text-white text-xl font-bold rounded-full shadow-lg hover:opacity-90 transition duration-300 background p-4"
            onClick={handleClick}
          >
            Download Free PDF Resource
          </button>
        </div>
        <img className=" h-[700px]  " src={bg} alt="background" />
      </div>
    </div>
  );
};

export default ResourceLandingPage;

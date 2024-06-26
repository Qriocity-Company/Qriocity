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
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full p-4 ">
        <div className="relative box mt-28 lg:-m-8  p-4  bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg lg:w-[500px] lg:h-[500px] flex flex-col">
          <div className="place-self-center p-3 lg:w-[300px] w-auto flex justify-center items-center rounded-full text-white border-2 border-white mt-5">
            <h1 className="text-xl font-bold place-self-center ">
              FREE PDF RESOURCE
            </h1>
          </div>
          <h2 className="lg:text-5xl text-4xl font-bold  mt-10 place-self-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF5924]">
            Top 100
          </h2>
          <h2 className="lg:text-4xl text-xl font-semibold mt-2 place-self-center">
            APTITUDE QUESTIONS
          </h2>
          <div className="mt-10 flex items-center justify-center">
            <p className="text-xl text-center">
              Best proven reels ideas for coaches, content creators as well
              service based businesses to get more followers and leads
            </p>
          </div>

          <button
            className="mt-4 relative bg-orange-500 text-white lg:text-xl font-bold  rounded-full shadow-lg hover:opacity-90 transition duration-300 background p-4"
            onClick={handleClick}
          >
            Download Free PDF Resource
          </button>
        </div>
        <img
          className="h-[500px] lg:h-[700px] lg:-m-24 -m-20 object-cover "
          src={bg}
          alt="background"
        />
      </div>
    </div>
  );
};

export default ResourceLandingPage;

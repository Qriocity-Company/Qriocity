import React , {useState} from "react";
import demo from "../assets/demo.png";
import { Link } from "react-router-dom";
import Modal from "./Modal";

import ai from '../assets/projects/AI.png'
import ml from '../assets/projects/MachineLearning.png'
import dl from '../assets/projects/deepLearning.png'
export const Project = () => {
  const [showForm, setShowForm] = useState(false);
  return (
   <>
     {showForm && (
      <Modal setShowForm={setShowForm}/>
   )}
    <div className="my-24 flex flex-col items-center font-figtree">
      <h1 className="font-figtree text-[32px]  z-10 md:text-[60px] text-white font-semibold">
        Our Custom Projects{" "}
      </h1>

      <div className="flex lg:flex-row flex-col gap-16 my-16 justify-center items-center">
          <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px] flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
            <h3 className="text-white text-[24px] my-2 font-bold text-center">Deep Learning</h3>
            <img
              src={dl}
              alt="image"
              className="grayscale group-hover:grayscale-0 h-[55%] w-full object-cover"
            />
            <h3 className="text-white text-[16px] md:text-[24px] my-2 font-bold text-center">
            Secure System for Tracking Missing Persons with CCTV Integration
            </h3>
            <button onClick={()=>{setShowForm(true)}} className="button w-[220px] group-hover:bg-black">
              <span>Buy Now </span>
            </button>
          </div>

          <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
            <h3 className="text-white text-[24px] my-2 font-bold text-center">Machine Learning</h3>
            <img
              src={ml}
              alt="image"
              className="grayscale group-hover:grayscale-0 h-[55%] w-full object-cover"
            />
            <h3 className="text-white text-[16px] md:text-[24px] my-2 font-bold text-center">
            Women's Safety App with Emergency Features and Police Navigation
            </h3>
            <button onClick={()=>{setShowForm(true)}} className="button w-[220px] group-hover:bg-black">
              <span>Buy Now </span>
            </button>
          </div>

          <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
            <h3 className="text-white text-[24px] my-2 font-bold text-center">Artificial Intelligence</h3>
            <img
              src={ai}
              alt="image"
              className="grayscale group-hover:grayscale-0 h-[55%] w-full object-cover"
            />
            <h3 className="text-white placeholder:text-[16px] md:text-[24px] px-2 my-2 font-bold text-center">
            AI Trauma Chatbot Analyzing Voice, Text, and Direct Doctor Link
            </h3>
            <button onClick={()=>{setShowForm(true)}} className="button w-[220px] group-hover:bg-black">
              <span>Buy Now </span>
            </button>
          </div>
        </div>
      <Link to="/projects">
        <button className="button w-[300px]">
          <span>Explore All Projects </span>
        </button>
      </Link>
    </div>
   </>
  );
};

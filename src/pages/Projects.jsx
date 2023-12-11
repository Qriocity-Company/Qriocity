import React , {useState} from "react";
import demo from "../assets/demo.png";
import { Link } from "react-router-dom";

import ai from '../assets/projects/AI.png'
import cloud from '../assets/projects/cloud.png'
import cyber from '../assets/projects/CyberSecurity.png'
import dataScience from '../assets/projects/DataScience.png'
import ml from '../assets/projects/MachineLearning.png'
import dl from '../assets/projects/deepLearning.png'
import dl2 from '../assets/projects/image.png'

import person from '../assets/projects/missing.png'
import chatbot from '../assets/projects/chatbot.png'
import farm from '../assets/projects/ds.png'
import parking from '../assets/projects/parking.png'
import home from '../assets/projects/home.png'
import threats from '../assets/projects/threats.png'

import { Footer } from "../components/Footer";
import Modal from "../components/Modal";
const Projects = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
     {showForm && (
         <Modal setShowForm={setShowForm}/>
      )}
      <div className="bg-cover bg-center bg-no-repeat header-course w-full flex flex-col justify-center items-center mt-[68px] ">
        <h1 className="font-figtree text-[16px] mt-8 z-10 md:text-[48px] text-white font-semibold">
          Get 50% OFF all our Premium Projects{" "}
        </h1>
        
        <button className=" bg-[#F15A29] mb-8 text-white rounded-2xl mt-1 p-1 w-[100px] md:p-3 text-[12px] md:text-[16px] md:rounded-3xl md:w-[200px]" onClick={()=>{setShowForm(true)}}>
          <span>Get Offer </span>
        </button>
        
      </div>
      <div className="relative">
        <div className="bg-[#FF7A00] absolute top-[34rem] left-[-15rem] h-[35.25rem]   w-[20rem] rounded-full blur-[10rem]"></div>
        <div className="bg-[#3cffff] absolute top-[20rem] right-[-20rem]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[10rem]"></div>
        <h1 className="font-figtree  text-[32px]  z-10 md:text-[60px] mt-8 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent font-semibold">
          Our Custom Projects
        </h1>

        <div className="flex lg:flex-row flex-col gap-16 my-16 justify-center items-center">
          <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px] flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
            <h3 className="text-white text-[24px] my-2 font-bold text-center">Deep Learning</h3>
            <img
              src={person}
              alt="image"
              className="grayscale group-hover:grayscale-0 h-[55%] w-full object-cover"
            />
            <h3 className="text-white text-[24px] my-2 font-bold text-center">
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
            <h3 className="text-white text-[24px] my-2 font-bold text-center">
            Women's Safety App with Emergency Features and Police Navigation
            </h3>
            <button onClick={()=>{setShowForm(true)}} className="button w-[220px] group-hover:bg-black">
              <span>Buy Now </span>
            </button>
          </div>

          <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
            <h3 className="text-white text-[24px] my-2 font-bold text-center">Artificial Intelligence</h3>
            <img
              src={chatbot}
              alt="image"
              className="grayscale group-hover:grayscale-0 h-[55%] w-full object-cover"
            />
            <h3 className="text-white text-[24px] my-2 font-bold text-center">
            AI Trauma Chatbot Analyzing Voice, Text, and Direct Doctor Link
            </h3>
            <button onClick={()=>{setShowForm(true)}} className="button w-[220px] group-hover:bg-black">
              <span>Buy Now </span>
            </button>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-16 my-16 justify-center items-center">
          <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px] flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
            <h3 className="text-white text-[24px] my-2 font-bold text-center">Data Science</h3>
            <img
              src={farm}
              alt="image"
              className="grayscale group-hover:grayscale-0 h-[55%] w-full object-cover"
            />
            <h3 className="text-white text-[24px] my-2 font-bold text-center">
            Farm_era: GIS Mapping, AI Pest Management, Smart Irrigation Analytics
            </h3>
            <button onClick={()=>{setShowForm(true)}} className="button w-[220px] group-hover:bg-black">
              <span>Buy Now </span>
            </button>
          </div>

          <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
            <h3 className="text-white text-[24px] my-2 font-bold text-center">Artificial Intelligence</h3>
            <img
              src={parking}
              alt="image"
              className="grayscale group-hover:grayscale-0 h-[55%] w-full object-cover"
            />
            <h3 className="text-white text-[24px] my-2 font-bold text-center">
            Intelligent Parking: Real-time Spot Detection and Navigation System
            </h3>
            <button onClick={()=>{setShowForm(true)}} className="button w-[220px] group-hover:bg-black">
              <span>Buy Now </span>
            </button>
          </div>

          <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
            <h3 className="text-white text-[24px] my-2 font-bold text-center">Cloud Computing</h3>
            <img
              src={cloud}
              alt="image"
              className="grayscale group-hover:grayscale-0 h-[55%] w-full object-cover"
            />
            <h3 className="text-white text-[24px] my-2 font-bold text-center">
             Dual Server Authentication for Enhanced Cryptographic Login Security
            </h3>
            <button onClick={()=>{setShowForm(true)}} className="button w-[220px] group-hover:bg-black">
              <span>Buy Now </span>
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-16 my-16 justify-center items-center">
          <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
            <h3 className="text-white text-[24px] my-2 font-bold text-center">Cyber Security</h3>
            <img
              src={cyber}
              alt="image"
              className="grayscale group-hover:grayscale-0 h-[55%] w-full object-cover"
            />
            <h3 className="text-white text-[24px] my-2 font-bold text-center">
            Role-Based Authentication for Server File Access Control
            </h3>
            <button onClick={()=>{setShowForm(true)}} className="button w-[220px] group-hover:bg-black">
              <span>Buy Now </span>
            </button>
          </div>

          <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
            <h3 className="text-white text-[24px] my-2 font-bold text-center">Cyber Security</h3>
            <img
              src={threats}
              alt="image"
              className="grayscale group-hover:grayscale-0 h-[55%] w-full object-cover"
            />
            <h3 className="text-white text-[24px] my-2 font-bold text-center">
            Collaborative Cybersecurity: Comprehensive IT Threat Analysis Platform
            </h3>
            <button onClick={()=>{setShowForm(true)}} className="button w-[220px] group-hover:bg-black">
              <span>Buy Now </span>
            </button>
          </div>

          <div className=" group w-[258px] h-[450px] md:w-[388px] md:h-[574px]  flex flex-col justify-between items-center py-10 border-[#cac9c9]  border rounded-3xl hover:bg-[#F4511E] cursor-pointer ">
            <h3 className="text-white text-[24px] my-2 font-bold text-center">Data Science</h3>
            <img
              src={home}
              alt="image"
              className="grayscale group-hover:grayscale-0 h-[55%] w-full object-cover"
            />
            <h3 className="text-white text-[24px] my-2 font-bold text-center">
              Automated Home Electricity Management with Pygame and Consumption Tracking
            </h3>
            <button onClick={()=>{setShowForm(true)}} className="button w-[220px] group-hover:bg-black">
              <span>Buy Now </span>
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Projects;

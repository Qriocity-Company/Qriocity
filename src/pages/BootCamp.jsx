import React from 'react';
import PostCard from '../components/PostCard';
import Dsa from "../assets/dsa.png"
import fullstack from "../assets/fullstack.png"
import Laptop from "../assets/laptop.png";
import laptop2 from "../assets/laptop-2.png";
import play from "../assets/play-btn.svg";
import { Link } from 'react-router-dom';

const BootCamp = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative">
        <div className="bg-[#3cffff] absolute  left-[-15rem] h-[35.25rem]   w-[20rem] rounded-full blur-[10rem]"></div>
        <div className="bg-[#FF7A00] absolute  top-[10rem] right-[-20rem]  h-[15.25rem]   w-[40.25rem] rounded-full blur-[10rem]"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-4 max-w-4xl">
    
              <Link to="/DsaBootcamp"><div className=" overflow-hidden transform transition-transform hover:scale-105 p-8 bg-white text-black md:max-w-md max-w-xs  flex flex-col items-start md:gap-5 gap-2 rounded-xl relative">
                <img
                  src={play}
                  alt=""
                  className="absolute top-[7%] left-[10%]"
                />
                <img src={laptop2}className=' h-[340px] rounded-lg' />
                <div className="text-start text-3xl font-[700]">
                  Data Structure and Algorithms
                </div>
                <div className="bg-[#26CFD3] text-white font-bold p-2 px-4 rounded-full shadow-lg w-fit">
                  click here for more details
                </div>
              </div>
              </Link>

              <Link to="/FullstackBootcamp"><div className=" overflow-hidden transform transition-transform hover:scale-105 p-8 bg-white text-black md:max-w-md max-w-xs  flex flex-col items-start md:gap-5 gap-2 rounded-xl relative">
                <img
                  src={play}
                  alt=""
                  className="absolute top-[7%] left-[10%]"
                />
                <img src={fullstack}  className='h-[340px] rounded-lg'/>
                <div className="text-start text-3xl font-[700] flex items-start flex-col">
                  Full Stack
                  
                  <span> Development</span>
                </div>
                <div className="bg-[#FF7A00] text-white font-semibold p-2 px-4 shadow-lg rounded-full w-fit">
                  click here for more details
                </div>
              </div></Link>
      </div>
    </div>
  );
};

export default BootCamp;

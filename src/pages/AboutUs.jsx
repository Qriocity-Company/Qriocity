import React from "react";
import notes from "../assets/notes.svg";
import bulb from "../assets/bulb.svg";
import rocket from "../assets/rocket.svg";
import video from "../assets/vidoe.svg";
import building from "../assets/building.svg";
import tictac from "../assets/tic-tac.svg";
import about2 from "../assets/about2.jpeg";
import corporate from "../assets/corporate.svg";
import hire from "../assets/hire.svg";
import lateralhire from "../assets/lateralhire.svg";
import time from "../assets/time.svg";
import campus from "../assets/campus.svg";
import { Footer } from "../components/Footer";
const AboutUs = () => {
  return (
   <>
     <div className="flex flex-col justify-center items-center font-figtree relative mt-[68px]">
      <div className="bg-[#3cffff] absolute top-[54rem] left-[-15rem] h-[35.25rem]   w-[20rem] rounded-full blur-[10rem]"></div>
      <div className="bg-[#FF7A00] absolute top-[30rem] right-[-20rem]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[10rem]"></div>

      <div className="flex gap-12 mt-14 z-10">
        <div className="hidden lg:block w-auto md:w-[322px] md:h-[309px] lg:w-[644px] lg:h-[718px] bg-cover about-img"></div>
        <div className="flex flex-col">
          <h2 className="text-[#F15A29] text-[26px] ml-5 md:ml-0">Why we started Qriocity ?</h2>
          <h1 className="text-4xl md:text-[48px] text-white w-[366px] font-bold ml-5 md:ml-0  leading-11">
            {" "}
            We help to Get it done easy
          </h1>
          
          <div className="flex flex-row gap-5 md:gap-10 mt-14 ml-5 md:ml-0">
            <img src={bulb} alt="bulb svg" />
            <div className="flex flex-col  text-white">
              <h4 className="text-[26px] font-bold">Complex Project Challenges</h4>
              <span className="text-[14px] w-auto md:w-[500px] pr-4">
              Students frequently encounter difficulties in tackling complex projects, which can be overwhelming alongside their regular studies.
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-5 md:gap-10 mt-14 ml-5 md:ml-0">
            <img src={rocket} alt="bulb svg"  />
            <div className="flex flex-col  text-white">
              <h4 className="text-[26px] font-bold">Job Placement Pressures</h4>
              <span className="text-[14px]  w-auto md:w-[500px] pr-4">
              There is significant stress related to preparing for job placements while managing academic responsibilities.
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-5 md:gap-10 mt-14 ml-5 md:ml-0">
            <img src={bulb} alt="bulb svg" />
            <div className="flex flex-col  text-white">
              <h4 className="text-[26px] font-bold">Non-Essential Task Overload</h4>
              <span className="text-[14px] w-auto md:w-[500px] pr-4">
              Students face a busy schedule creating presentations and documents for projects and activities that often don't directly contribute to their career development
              </span>
            </div>
          </div>
        </div>
      </div>

      <h1 className="font-figtree text-[32px] mt-16 my-[30px] md:text-[60px] text-white font-semibold">
      Why choose Qriocity?{" "}
      </h1>
      <div className="flex flex-col lg:flex-row gap-12 z-10">

        <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px]  flex-col justify-between p-4 md:p-8 rounded-lg bg-[#161616] text-white border border-[#fff]">
          <div className="flex flex-col">
            <img
              src={notes}
              alt="icon of notes"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] mb-0 md:mb-3"
            />
            {" "}
            <h4 className="text-[24px] my-2 md:text-[32px] font-bold ">
            Customized Projects in College Template
            </h4>
            <p className="w-auto text-[12px] md:text-[16px]">
            We provide projects tailored to fit the specific template and requirements of their colleges.
            </p>
          </div>

        </div>

        <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px]  flex-col justify-between p-4 md:p-8 rounded-lg bg-[#161616] text-white border border-[#fff]">
          <div className="flex flex-col">
            <img
              src={building}
              alt="icon of notes"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] mb-0 md:mb-3"
            />
            {" "}
            <h4 className="text-[24px] my-2 md:text-[32px] font-bold ">
            Advanced, Industry-Relevant Projects
            </h4>
            <p className="w-auto text-[12px] md:text-[16px]">
            Our projects are not just academic exercises; they are advanced, mirroring real industry demands.
            </p>
          </div>

        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-12 z-10">

        <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px]  flex-col justify-between p-4 md:p-8 rounded-lg bg-[#161616] text-white border border-[#fff]">
          <div className="flex flex-col">
            <img
              src={tictac}
              alt="icon of notes"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] mb-0 md:mb-3"
            />
            {" "}
            <h4 className="text-[24px] my-2 md:text-[32px] font-bold ">
            Full Project Assistance
            </h4>
            <p className="w-auto text-[12px] md:text-[16px]">
            We take complete responsibility for guiding the projects, allowing students to focus on crucial aspects like placements and further studies.
            </p>
          </div>

        </div>

        <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px]  flex-col justify-between p-4 md:p-8 rounded-lg bg-[#161616] text-white border border-[#fff]">
          <div className="flex flex-col">
            <img
              src={notes}
              alt="icon of notes"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] mb-0 md:mb-3"
            />
            {" "}
            <h4 className="text-[24px] my-2 md:text-[32px] font-bold ">
            Group Discounts
            </h4>
            <p className="w-auto text-[12px] md:text-[16px]">
            We offer attractive discounts for groups, making our services more accessible.
            </p>
          </div>

        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 mt-12 z-10 pb-4">

        <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px]  flex-col justify-between p-4 md:p-8 rounded-lg bg-[#161616] text-white border border-[#fff]">
          <div className="flex flex-col">
            <img
              src={tictac}
              alt="icon of notes"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] mb-0 md:mb-3"
            />
            {" "}
            <h4 className="text-[24px] my-2 md:text-[32px] font-bold ">
            Holistic Career Development
            </h4>
            <p className="w-auto text-[12px] md:text-[16px]">
            Access free career counseling, internships, a Data Structures course, and HackerRank exercises to boost your job readiness and technical skills.
            </p>
          </div>

        </div>

        <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px]  flex-col justify-between p-4 md:p-8 rounded-lg bg-[#161616] text-white border border-[#fff]">
          <div className="flex flex-col">
            <img
              src={building}
              alt="icon of notes"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] mb-0 md:mb-3"
            />
            {" "}
            <h4 className="text-[24px] my-2 md:text-[32px] font-bold ">
            Earn While You Learn
            </h4>
            <p className="w-auto text-[12px] md:text-[16px]">
            Students have the opportunity to earn through our affiliate marketing program and by becoming campus ambassadors.
            </p>
          </div>

        </div>
      </div>

      <div className=" flex flex-col md:flex-row gap-12  lg:gap-14 md:items-center items-start text-white mt-24 pb-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-[24px] w-[350px] md: lg:text-[48px] lg:w-[574px] font-bold ">
            Passionate Teachers That Make a Difference
          </h1>
          <hr className="h-[2px] w-[70%] border-[#F15A29] border-[2px] rounded-3xl" />
          <p className="w-[350px]  text-justify lg:w-[480px]">
          Embark on a transformative learning experience with our team of passionate educators who are not just mentors but difference-makers. Our courses, ranging from Python Programming to Full Stack Web Development and Machine Learning, are crafted by these inspiring teachers who bring expertise, enthusiasm, and a commitment to empowering you in every aspect of your educational journey.
          </p>
        </div>
        <div className="hover-div w-[300px] h-[250px] lg:w-[500px] lg:h-[383px] mt-5">
          <img
            src={about2}
            alt="actor2 img"
            width={500}
            height={383}
            className="rounded-xl "
          />
        </div>
      </div>

      {/* <div className="flex flex-col  items-center gap-14 text-white my-24 ">
        <h1 className="text-[36px] w-[350px] flex  justify-center  md:w-full md:text-[48px] lg:text-[60px] font-semibold ">
          Want to become our Hiring Partner?
        </h1>

        <div class="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-white">
          <div className=" group flex flex-col gap-2 items-center">
            <img src={corporate} alt="corporate" className="z-20" />
            <div className="text-[24px] font-semibold h-full justify-center items-center  flex-col">
              <p className="text-[24px] font-semibold">Corporate</p>
              <p className="text-[24px] font-semibold"> Training</p>
            </div>
          </div>

          <div className=" group flex flex-col gap-2 items-center">
            <img src={hire} alt="corporate" className="z-20" />
            <div className="text-[24px] font-semibold h-full justify-center items-center flex-col">
              <p className="text-[24px] font-semibold">Hire Trained </p>
              <p className="text-[24px] font-semibold">Freshers</p>
            </div>
          </div>

          <div className=" group flex flex-col gap-2 items-center">
            <img src={lateralhire} alt="corporate" className="z-20" />
            <div className="text-[24px] font-semibold h-full justify-center items-center flex-col">
              <p className="text-[24px] font-semibold">Lateral </p>
              <p className="text-[24px] font-semibold">Hiring</p>
            </div>
          </div>

          <div className=" group flex flex-col gap-2 items-center">
            <img src={time} alt="corporate" className="z-20" />
            <div className="text-[24px] font-semibold h-full justify-center items-center flex-col">
              <p className="text-[24px] font-semibold">Candidate</p>
              <p className="text-[24px] font-semibold">assessment</p>
            </div>
          </div>

          <div className="group flex flex-col gap-2 items-center">
            <img src={campus} alt="corporate" className="z-20" />
            <div className="text-[24px] font-semibold h-full justify-center items-center flex-col ">
              <p className="text-[24px] font-semibold">Campus </p>
              <p className="text-[24px] font-semibold">Hiring</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    <Footer/>
   </>
  );
};

export default AboutUs;

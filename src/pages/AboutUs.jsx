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

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center font-figtree relative mt-[68px]">
      <div className="bg-[#3cffff] absolute top-[54rem] left-[-15rem] h-[35.25rem]   w-[20rem] rounded-full blur-[10rem]"></div>
      <div className="bg-[#FF7A00] absolute top-[30rem] right-[-20rem]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[10rem]"></div>

      <div className="flex gap-12 mt-14 z-10">
        <div className="hidden md:block md:w-[322px] md:h-[309px] lg:w-[644px] lg:h-[718px] bg-cover about-img"></div>
        <div className="flex flex-col">
          <h2 className="text-[#F15A29] text-[26px] ml-5 md:ml-0">WHO WE ARE</h2>
          <h1 className="text-[48px] text-white w-[366px] font-bold ml-5 md:ml-0  leading-11">
            {" "}
            We help to Get it done easy
          </h1>
          <p className="text-white text-[16px] w-[350px] md:w-[388px] flex ml-5 md:ml-0 text-justify">
            Qriocity is proud to offer a wide range of comprehensive courses.
            Our curriculum is tailored to impart practical knowledge and
            expertise, simulating real-world scenariosthat prompt students to
            apply theoretical concepts dynamically. With the guidance of
            industry experts and innovative resources, students gain first-hand
            experience working on live projects, instilling confidence and
            competence to tackle real-world challenges post-graduation.
          </p>
          <div className="flex flex-row gap-10 mt-14 ml-5 md:ml-0">
            <img src={bulb} alt="bulb svg" />
            <div className="flex flex-col  text-white">
              <h4 className="text-[26px]">Vision</h4>
              <span className="text-[14px] w-[200px]">
                To provide an real time industry level learning and experience
                for college students
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-10 mt-14 ml-5 md:ml-0">
            <img src={rocket} alt="bulb svg"  />
            <div className="flex flex-col  text-white">
              <h4 className="text-[26px]">Mission</h4>
              <span className="text-[14px] w-[200px]">
                10Lakh Students Trained across PAN India
              </span>
            </div>
          </div>
        </div>
      </div>

      <h1 className="font-figtree text-[32px]  my-[20px] md:text-[60px] text-white font-semibold">
        What Qriocity offers you?{" "}
      </h1>
      <div className="flex flex-col lg:flex-row gap-12 z-10">
        <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px]  flex-col justify-between p-8 rounded-lg bg-[#161616] text-white border border-[#fff]">
          <div className="flex flex-col">
            {" "}
            <h4 className="text-[24px] md:text-[32px] font-bold ">
              Self Paced Course
            </h4>
            <p className="w-[150px] md:w-[200px] text-[8px] md:text-[16px]">
              Learn & Upskill via Online Courses
            </p>
          </div>

          <div className="flex justify-between items-baseline ">
            <button className=" bg-[#F15A29] mb-8 text-white rounded-2xl mt-1 p-1 w-[100px] md:p-3 text-[12px] md:text-[16px] md:rounded-3xl md:w-[200px]">
              <span>Learn More </span>
            </button>
            <img
              src={notes}
              alt="icon of notes"
              className="w-[50px] h-[50px] md:w-[107px] md:h-[107px]"
            />
          </div>
        </div>

        <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] flex-col justify-between p-8 rounded-lg bg-[#161616] text-white border border-[#fff]">
          <div className="flex flex-col">
            {" "}
            <h4 className="text-[24px] md:text-[32px] font-bold ">
              Live Classes
            </h4>
            <p className="w-[150px] md:w-[200px] text-[8px] md:text-[16px]">
              Live Classes offering Guaranteed Job Placement Support
            </p>
          </div>

          <div className="flex justify-between items-baseline ">
            <button className=" bg-[#F15A29] mb-8 text-white rounded-2xl mt-1 p-1 w-[100px] md:p-3 text-[12px] md:text-[16px] md:rounded-3xl md:w-[200px]">
              <span>Learn More </span>
            </button>
            <img
              src={video}
              alt="icon of video"
              className="w-[50px] h-[50px] md:w-[107px] md:h-[107px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-12 z-10">
        <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] flex-col justify-between px-4 py-8 rounded-lg bg-[#161616] text-white border border-[#fff]">
          <div className="flex flex-col">
            {" "}
            <h4 className="text-[24px] md:text-[32px] font-bold ">
              Interactive Practice Platforms
            </h4>
            <p className=" w-[150px] md:w-[200px] text-[8px] md:text-[16px]">
              Learn through Hands-on Coding Experience
            </p>
          </div>

          <div className="flex justify-between items-baseline ">
            <button className=" bg-[#F15A29] mb-8 text-white rounded-2xl mt-1 p-1 w-[100px] md:p-3 text-[12px] md:text-[16px] md:rounded-3xl md:w-[200px]">
              <span>Learn More </span>
            </button>
            <img
              src={tictac}
              alt="icon of notes"
              className="w-[50px] h-[50px] md:w-[107px] md:h-[107px]"
            />
          </div>
        </div>

        <div className="w-[300px] h-[180px] md:w-[500px] md:h-[300px] flex-col justify-between p-8 rounded-lg bg-[#161616] text-white border border-[#fff]">
          <div className="flex flex-col">
            {" "}
            <h4 className="text-[24px] md:text-[32px] font-bold ">
              For Corporates
            </h4>
            <p className=" w-[150px] md:w-[200px] text-[8px] md:text-[16px]">
              Meet your hiring needs at ease
            </p>
          </div>

          <div className="flex justify-between items-baseline ">
            <button className=" bg-[#F15A29] mb-8 text-white rounded-2xl mt-1 p-1 w-[100px] md:p-3 text-[12px] md:text-[16px] md:rounded-3xl md:w-[200px]">
              <span>Learn More </span>
            </button>
            <img
              src={building}
              alt="icon of video"
              className="w-[50px] h-[50px] md:w-[107px] md:h-[107px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12  lg:gap-14 md:items-center items-start text-white mt-24 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-[24px] w-[350px] md: lg:text-[48px] lg:w-[574px] font-bold ">
            Passionate Teachers That Make a Difference
          </h1>
          <hr className="h-[2px] w-[70%] border-[#F15A29] border-[2px] rounded-3xl" />
          <p className="w-[350px]  text-justify lg:w-[480px]">
            Beginners with little or no prior programming experience.
            Individuals interested in data science or web development.
            Professionals seeking to upskill or transition to a technical role.
            Educators or students looking to integrate Python into their
            curriculum or projects.
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

      <div className="flex flex-col  items-center gap-14 text-white my-24 ">
        <h1 className="text-[36px] w-[350px] flex  justify-center  md:w-full md:text-[48px] lg:text-[60px] font-semibold ">
          Want to become our Hiring Partner?
        </h1>

        <div class="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-white">
          <div className=" group flex flex-col gap-2">
            <img src={corporate} alt="corporate" className="z-20" />
            <div className="text-[24px] font-semibold h-full justify-center items-center  flex-col  -z-10 group-hover:flex  group-hover:z-0 -translate-y-36 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
              <p className="text-[24px] font-semibold">Corporate</p>
              <p className="text-[24px] font-semibold"> Training</p>
            </div>
          </div>

          <div className=" group flex flex-col gap-2">
            <img src={hire} alt="corporate" className="z-20" />
            <div className="text-[24px] font-semibold h-full justify-center items-center  flex-col  -z-10 group-hover:flex  group-hover:z-0 -translate-y-36 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
              <p className="text-[24px] font-semibold">Hire Trained </p>
              <p className="text-[24px] font-semibold">Freshers</p>
            </div>
          </div>

          <div className=" group flex flex-col gap-2">
            <img src={lateralhire} alt="corporate" className="z-20" />
            <div className="text-[24px] font-semibold h-full justify-center items-center  flex-col  -z-10 group-hover:flex  group-hover:z-0 -translate-y-36 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
              <p className="text-[24px] font-semibold">Lateral </p>
              <p className="text-[24px] font-semibold">Hiring</p>
            </div>
          </div>

          <div className=" group flex flex-col gap-2">
            <img src={time} alt="corporate" className="z-20" />
            <div className="text-[24px] font-semibold h-full justify-center items-center flex-col -z-10 group-hover:flex  group-hover:z-0 -translate-y-36 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
              <p className="text-[24px] font-semibold">Candidate</p>
              <p className="text-[24px] font-semibold">assessment</p>
            </div>
          </div>

          <div className="group flex flex-col gap-2">
            <img src={campus} alt="corporate" className="z-20" />
            <div className="text-[24px] font-semibold h-full justify-center items-center flex-col -z-10 group-hover:flex  group-hover:z-0 -translate-y-36 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
              <p className="text-[24px] font-semibold">Campus </p>
              <p className="text-[24px] font-semibold">Hiring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

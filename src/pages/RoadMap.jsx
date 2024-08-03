import React from "react";
import path from "../assets/path.png";
import person from "../assets/person.png";
import clock from "../assets/clock.png";
import calendar from "../assets/calendar.png";
import bullet from "../assets/bullet.png";
import line_circle from "../assets/line_circle.png";
import { FaStar } from "react-icons/fa";
import Linkedin from "../assets/linkedin.png";
import doc from "../assets/doc.png";
import discord from "../assets/discord.png";
import interview from "../assets/interview.png";
import leetcode from "../assets/leetcode.png";
import Book from "../components/Book";
import dream from "../assets/dream.png";
import portfolio from "../assets/portfolio.png";
import jobmarket from "../assets/jobmarket.png";
import internship from "../assets/internship.png";
import hacks from "../assets/hacks.png";
import interviewprep from "../assets/interviewprep.png";
import { Testimonial } from "../components/Testimonial";
import Faq from "../components/Faq";
const RoadMap = () => {
  return (
    <>
      <div className="flex flex-col p-4 bg-white min-h-screen w-full">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="flex justify-start items-start mt-40">
            <img
              className=" h-[300px] "
              style={{
                maskImage:
                  "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
              }}
              src={path}
              alt="Road"
            />
            <img className="h-[300px] -ml-52 z-50" src={person} alt="Person" />
          </div>
          <div className="flex flex-col justify-center lg:items-start items-center lg:mr-40 mt-14 lg:mt-40">
            <h1 className=" font-bold text-3xl lg:text-[40px]">
              Get your Dream Career{" "}
            </h1>
            <h1 className=" font-bold text-3xl mt-2 lg:mt-5 lg:text-[40px]">
              Roadmap in 2 hours
            </h1>
            <h1 className="font-semibold text-xl mt-5">
              Learn how to fund Hidden job market and High paying jobs.
            </h1>
            <div className="bg-[#FFF7F4] border-2 border-[#F15A29] h-[121px] w-auto lg:w-[550px] mt-5 rounded-2xl flex justify-center items-center p-4 text-lg">
              <h1>
                Learn the exact strategies that made{" "}
                <span className="font-bold">10K+ students</span> get their dream
                job in 3 months <span className="font-bold">for free !</span>
              </h1>
            </div>
            <div className="flex justify-center items-center mt-10 gap-8 lg:gap-20">
              <div className="flex justify-center items-center gap-1 lg:gap-5">
                <img src={clock} />
                <h1 className="font-bold text-lg lg:text-xl flex flex-col justify-center items-start">
                  2 hour <span>Session</span>{" "}
                </h1>
              </div>

              <div className="flex justify-center items-center gap-1 lg:gap-5">
                <img src={calendar} />
                <h1 className="font-bold lg:text-xl text-lg flex flex-col justify-center items-start">
                  August 5, <span>2024</span>{" "}
                </h1>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:mr-10 mt-10">
              <span className="-mr-20 -mb-4 bg-black text-white rounded-2xl px-4 z-30 py-1">
                90% seats booked
              </span>
              <button
                className="px-14 py-4 rounded-full font-bold text-white "
                style={{
                  background:
                    "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
              >
                Book your Free spot
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-28 lg:mt-40">
          <h1 className="font-bold lg:text-4xl text-lg">
            Who{" "}
            <span
              className="px-6 lg:py-2 rounded-2xl font-bold text-white"
              style={{
                background:
                  "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                display: "inline-block", // Required to apply transformations
                transform: "rotate(-2deg)", // Adjust the degree to control the tilt
                transformOrigin: "center", // Optional: adjust the pivot point of the rotation
              }}
            >
              should attend{" "}
            </span>{" "}
            this session?
          </h1>
          <div className="flex justify-center flex-col gap-8 items-start mt-10 lg:mt-20">
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
                Overcome Stress & Anxiety
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
                Improve physical and emotional health naturally
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
                Experience powerful meditative states
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
                Experience peace and happiness
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
                Experience powerful meditative states
              </h1>
            </div>
          </div>
        </div>

        <div className=" bg-[#EDEDED] mt-20  flex flex-col justify-start items-center p-4">
          <h1 className="font-bold lg:text-4xl lg:mt-20 mt-8">
            What will{" "}
            <span
              className="lg:px-8 lg:py-2 px-4 py-1 rounded-2xl font-bold text-white"
              style={{
                background:
                  "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                display: "inline-block", // Required to apply transformations
                transform: "rotate(-2deg)", // Adjust the degree to control the tilt
                transformOrigin: "center", // Optional: adjust the pivot point of the rotation
              }}
            >
              you learn{" "}
            </span>{" "}
            in this 2 hours session?
          </h1>

          <div className="relative flex flex-col justify-center items-center mt-10 gap-10 px-4 sm:px-8 md:px-16">
            {/* Vertical Line */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-1 h-full bg-gray-300 relative">
                {/* Circles on the line */}
                <div className="hidden lg:block absolute top-0 w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"></div>
                <div className="hidden lg:block absolute bottom-0 w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"></div>
                <div className="hidden lg:block absolute top-1/6 w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"></div>
                <div className="hidden lg:block absolute top-1/3 w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"></div>
                <div className="hidden lg:block absolute top-1/2 w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"></div>
                <div className="hidden lg:block absolute top-2/3 w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"></div>
                <div className="hidden lg:block absolute top-5/6 w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 z-40">
              <div className="bg-white p-4 rounded-xl h-[100px] w-full md:w-[200px] font-semibold text-lg flex justify-center items-center order-2 md:order-1">
                Clear roadmap to get your dream job
              </div>
              <img
                className="h-[200px] w-full md:w-[250px] object-cover order-1 md:order-2"
                src={dream}
                alt="Clear roadmap"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 z-40">
              <div className="bg-white p-4 rounded-xl h-[100px] w-full md:w-[200px] font-semibold text-lg flex justify-center items-center order-2 md:order-1">
                How to build an attractive portfolio
              </div>
              <img
                className="h-[200px] w-full md:w-[250px] object-cover order-1 md:order-2"
                src={portfolio}
                alt="Portfolio"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 z-40">
              <div className="bg-white p-4 rounded-xl h-[100px] w-full md:w-[200px] font-semibold text-lg flex justify-center items-center order-2 md:order-1">
                How to find hidden job market?
              </div>
              <img
                className="h-[200px] w-full md:w-[250px] object-cover order-1 md:order-2"
                src={jobmarket}
                alt="Job market"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 z-40">
              <div className="bg-white p-4 rounded-xl h-[100px] w-full md:w-[230px] font-semibold text-lg flex justify-center items-center order-2 md:order-1">
                Magical Process to get any internship or job
              </div>
              <img
                className="h-[200px] w-full md:w-[250px] object-cover order-1 md:order-2"
                src={internship}
                alt="Internship"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 z-40">
              <div className="bg-white p-4 rounded-xl h-[100px] w-full md:w-[230px] font-semibold text-lg flex justify-center items-center order-2 md:order-1">
                Best LinkedIn hacks to get your dream job
              </div>
              <img
                className="h-[200px] w-full md:w-[250px] object-cover order-1 md:order-2"
                src={hacks}
                alt="LinkedIn hacks"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 z-40">
              <div className="bg-white p-4 rounded-xl h-[100px] w-full md:w-[200px] font-semibold text-lg flex justify-center items-center order-2 md:order-1">
                Complete Interview preparation guide
              </div>
              <img
                className="h-[200px] w-full md:w-[250px] object-cover order-1 md:order-2"
                src={interviewprep}
                alt="Interview preparation"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center lg:mt-20 mt-10 flex-col">
          <h1 className="font-bold text-lg lg:text-4xl lg:mt-20 mt-10">
            <span
              className="lg:px-8 lg:py-2 px-4 py-1 rounded-2xl font-bold text-white"
              style={{
                background:
                  "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                display: "inline-block", // Required to apply transformations
                transform: "rotate(-1deg)", // Adjust the degree to control the tilt
                transformOrigin: "center", // Optional: adjust the pivot point of the rotation
              }}
            >
              Life-Changing benefits{" "}
            </span>{" "}
            of Attending our session
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 mt-10 lg:mt-20 px-4 lg:px-0">
            {/* Left Column */}
            <div className="flex flex-col justify-center items-center gap-4 lg:gap-6">
              <div className="bg-[#F5FFFF] p-4 rounded-xl border-2 border-[#2E7071] w-full lg:w-[600px] flex justify-start items-center gap-4 font-semibold text-base lg:text-lg">
                <FaStar color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                  Feel immediate calm and gain tools for lasting stress
                  reduction.
                </h1>
              </div>
              <div className="bg-[#F5FFFF] p-4 rounded-xl border-2 border-[#2E7071] w-full lg:w-[600px] flex justify-start items-center gap-4 font-semibold text-base lg:text-lg">
                <FaStar color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                  Feel immediate calm and gain tools for lasting stress
                  reduction.
                </h1>
              </div>
              <div className="bg-[#F5FFFF] p-4 rounded-xl border-2 border-[#2E7071] w-full lg:w-[600px] flex justify-start items-center gap-4 font-semibold text-base lg:text-lg">
                <FaStar color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                  Feel immediate calm and gain tools for lasting stress
                  reduction.
                </h1>
              </div>
              <div className="bg-[#F5FFFF] p-4 rounded-xl border-2 border-[#2E7071] w-full lg:w-[600px] flex justify-start items-center gap-4 font-semibold text-base lg:text-lg">
                <FaStar color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                  Feel immediate calm and gain tools for lasting stress
                  reduction.
                </h1>
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden lg:flex flex-col items-center gap-4 px-4 lg:px-0 mt-10 lg:mt-20">
              <div className="bg-slate-50 shadow-xl rounded-2xl w-full lg:w-[250px] h-[100px] flex justify-center items-center flex-col text-lg lg:text-xl font-bold">
                High Salary{" "}
                <span className="text-base lg:text-xl">Package</span>
              </div>

              <div className="bg-slate-50 shadow-xl rounded-2xl w-full lg:w-[500px] h-[100px] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 mt-2">
                <h1 className="text-lg lg:text-xl font-bold flex flex-col items-center">
                  Hidden Job{" "}
                  <span className="text-base lg:text-xl">market</span>
                </h1>
                <div
                  className="rounded-full h-24 w-24 lg:h-32 lg:w-32 text-white flex flex-col justify-center items-center font-bold text-xl lg:text-2xl z-20"
                  style={{
                    background:
                      "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                  }}
                >
                  <span>Dream</span>
                  <span>Job</span>
                </div>
                <h1 className="text-lg lg:text-xl font-bold flex flex-col items-center">
                  Attractive{" "}
                  <span className="text-base lg:text-xl">Portfolio</span>
                </h1>
              </div>

              <div className="bg-slate-50 shadow-xl rounded-2xl w-full lg:w-[250px] h-[100px] flex justify-center items-center flex-col text-lg lg:text-xl font-bold">
                Personal <span className="text-base lg:text-xl">Branding</span>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-[#FEEEE9] h-auto lg:h-[500px] max-w-full rounded-xl flex flex-col justify-start items-center p-4 mb-10">
            <h1 className="text-4xl font-bold mt-6 lg:text-[50px]">
              Exciting <span className="text-[#F26530]">bonuses</span>
            </h1>
            <div className="mt-10 lg:mt-20 flex flex-wrap justify-center items-center gap-4 lg:gap-5 w-full">
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={30} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  LinkedIn Bio <span>Optimization</span> <span>Guide</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={Linkedin}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={30} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Cover letter & <span>ATS Resume</span> <span>Template</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={doc}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={30} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Discord <span>Community</span> <span>lifetime access</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={discord}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={30} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Top 100 <span>Interview Q/A</span> <span>PDF</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={interview}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={30} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Top 50 Leetcode <span>problems and</span>{" "}
                  <span>solutions</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={leetcode}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <Faq />
      <Book />
    </>
  );
};

export default RoadMap;

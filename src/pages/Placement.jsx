import React, { useState } from "react";
import placement from "../assets/placement.png";
import rocket from "../assets/rockett.png";
import doubts from "../assets/doubt.png";
import discord from "../assets/disc.png";
import portal from "../assets/portal.png";
import contest from "../assets/contest.png";
import sessions from "../assets/sessions.png";
import video from "../assets/video.png";
import blog from "../assets/blog.png";
import certificate from "../assets/certificate.png";

import { TiTick } from "react-icons/ti";
import Testimonials from "../components/Testimonials";
const Placement = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What will I learn from this webinar?",
      answer:
        "You will learn strategies to access the hidden job market, find high-paying jobs, and the exact steps followed by over 10,000 students to land their dream jobs within 3 months.",
    },
    {
      question: "Who is this webinar for?",
      answer:
        "This webinar is ideal for job seekers, recent graduates, and professionals looking to switch careers or find better job opportunities.",
    },
    {
      question: "Is the webinar really free?",
      answer:
        "Yes, the webinar is completely free of charge. Our goal is to provide valuable insights and strategies to help you achieve your career goals.",
    },
    {
      question: "How long is the webinar?",
      answer:
        "The webinar will last for 3 hours, providing in-depth knowledge and actionable strategies to enhance your job search.",
    },
    {
      question: "Will there be a Q&A session?",
      answer:
        "Yes, there will be a Q&A session at the end of the webinar where you can ask any questions you have regarding the job search process.",
    },
    {
      question: "How can I register for the webinar?",
      answer: "You can register by clicking the Book your Free Spot button.",
    },
    {
      question: "Can I share the webinar information with my friends?",
      answer:
        "Absolutely! We encourage you to share the webinar details with anyone who might benefit from it.",
    },
    {
      question: "Will I get recording of this program?",
      answer: "No, this is a live webinar and no recording will be shared.",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#020816] via-[#040509] to-black flex flex-col relative">
        <div className="mt-20 flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:items-start lg:relative">
          <div className="flex flex-col justify-center items-start mt-20 lg:ml-16 ml-5 gap-2 relative z-10">
            <h1 className="font-bold text-white lg:text-[60px] text-[30px]">
              Get your Dream Job
            </h1>
            <h1 className="font-bold text-white lg:text-[60px] text-[30px]">
              with Complete Placement
            </h1>
            <h1 className="font-bold text-white lg:text-[60px] text-[30px]">
              Preparation Course
            </h1>

            <div className="mt-10 flex flex-col text-white text-[18px] justify-center items-start gap-8">
              <div className="flex justify-center items-center gap-2">
                <img src={rocket} />
                <h1>Aptitude, Python & DSA Projects</h1>
              </div>

              <div className="flex justify-center items-center gap-2">
                <img src={doubts} />
                <h1>Weekly Doubt Solving sessions</h1>
              </div>

              <div className="flex justify-center items-center gap-2">
                <img src={discord} />
                <h1>Free Discord Community access for Lifetime</h1>
              </div>
            </div>

            <button className=" p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-10 text-[22px] hover:scale-105 cursor-pointer font-semibold">
              Start Your Journey Now
            </button>
          </div>

          <img
            className="lg:h-[700px] lg:w-[850px] h-auto w-auto lg:relative z-0 lg:-ml-32 lg:mt-0 mt-20"
            src={placement}
            alt="Placement"
          />
        </div>

        <div className="mt-20 flex justify-center items-center flex-col">
          <h1 className="mt-10 text-[#FA9D51] text-[40px]">FEATURES</h1>
          <h1 className="text-white  font-semibold lg:text-[45px] text-[30px] lg:mt-0 mt-5">
            What makes us standout?
          </h1>

          <div className="lg:w-[1200px] lg:block hidden  w-auto mx-auto p-4 bg-[#0F0F0F] rounded-lg overflow-hidden mt-10">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-r border-gray-700"></th>
                  <th className=" text-center p-4 text-white lg:text-xl text-sm border-b border-r border-gray-700">
                    STANDARD
                  </th>
                  <th className=" text-center p-4 text-orange-500 lg:text-xl text-sm border-b border-r border-gray-700">
                    PREMIUM
                  </th>
                  <th className=" text-center p-4 text-orange-500 lg:text-xl text-sm border-b border-gray-700">
                    CLASSIC
                  </th>
                </tr>
              </thead>
              <tbody className="text-white">
                {/* Pricing Row */}
                <tr className="">
                  <td className="p-4 h-full border-r border-gray-700">
                    <div className="lg:text-xl text-sm flex flex-col justify-center items-start lg:font-semibold ">
                      Compare plans
                      <span className=" text-sm">What we offer?</span>
                    </div>
                  </td>
                  <td className="p-4 text-center border-r border-gray-700">
                    <div className="lg:text-3xl text-xl font-semibold">
                      ₹5699{" "}
                      <span className="line-through text-gray-400 lg:text-2xl text-sm">
                        ₹9999
                      </span>
                    </div>
                    <button className="bg-orange-500 text-white lg:w-[200px] w-auto p-1 mt-2 rounded-lg hover:bg-orange-600">
                      Register Now
                    </button>
                  </td>
                  <td className="p-4 text-center border-r border-gray-700">
                    <div className="lg:text-3xl text-xl font-semibold">
                      ₹9999{" "}
                      <span className="line-through text-gray-400 lg:text-2xl text-sm">
                        ₹9999
                      </span>
                    </div>
                    <button className="bg-orange-500 text-white lg:w-[200px] w-auto p-1 mt-2 rounded-lg hover:bg-orange-600">
                      Register Now
                    </button>
                  </td>
                  <td className="p-4 text-center ">
                    <div className="lg:text-3xl text-xl font-semibold">
                      ₹9999{" "}
                      <span className="line-through text-gray-400 lg:text-2xl text-sm">
                        ₹9999
                      </span>
                    </div>
                    <button className="bg-orange-500 text-white lg:w-[200px] w-auto p-1 mt-2 rounded-lg hover:bg-orange-600">
                      Register Now
                    </button>
                  </td>
                </tr>

                {/* Feature Rows */}
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700 border-t">
                    Complexity Analysis
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 border-t text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 border-t text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-gray-700 border-t text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Evaluate time and space efficiency.
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Real-Life Examples
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Practical applications for every problem
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Progress Tracking
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-red-500">
                    ❌
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Monitor your advancement.
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-red-500">
                    ❌
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Leaderboard
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Compete with others or opt-out.
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b  border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Completion Certificate
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-r border-gray-700">
                    Showcase your achievement
                  </td>
                  <td className="p-4 text-center border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center text-green-400">✅</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lg:hidden block">
            <div className="space-y-4 p-4  rounded-lg mt-10">
              {/* Repeat for each plan */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-center text-white  text-xl font-bold">
                  STANDARD
                </h3>
                <div className="text-center text-orange-500 lg:text-3xl text-xl font-semibold mt-2">
                  ₹5699{" "}
                  <span className="line-through text-gray-400 lg:text-2xl text-sm">
                    ₹9999
                  </span>
                </div>

                <ul className="mt-4 text-white space-y-2">
                  <li>✅ Complexity Analysis</li>
                  <li>✅ Evaluate time and space efficiency</li>
                  <li>✅ Real-Life Examples</li>
                  <li>✅ LeaderBoard</li>
                  <li>✅ Compete with others or opt-out.</li>
                  <li>✅ Completion Certificate</li>
                  <li>✅ Showcase your achievement</li>
                  <li>❌ Progress Tracking</li>
                  <li>❌ Monitor your advancement.</li>
                  {/* Add more features as list items */}
                </ul>
                <button className="bg-orange-500 text-white lg:w-[200px] w-full p-1 mt-5 rounded-lg hover:bg-orange-600">
                  Register Now
                </button>
              </div>
            </div>

            <div className="space-y-4 p-4  rounded-lg mt-10">
              {/* Repeat for each plan */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-center text-white  text-xl font-bold">
                  PREMIUM
                </h3>
                <div className="text-center text-orange-500 lg:text-3xl text-xl font-semibold mt-2">
                  ₹9999{" "}
                  <span className="line-through text-gray-400 lg:text-2xl text-sm">
                    ₹9999
                  </span>
                </div>

                <ul className="mt-4 text-white space-y-2">
                  <li>✅ Complexity Analysis</li>
                  <li>✅ Evaluate time and space efficiency</li>
                  <li>✅ Real-Life Examples</li>
                  <li>✅ LeaderBoard</li>
                  <li>✅ Compete with others or opt-out.</li>
                  <li>✅ Completion Certificate</li>
                  <li>✅ Showcase your achievement</li>
                  <li>✅ Progress Tracking</li>
                  <li>✅ Monitor your advancement.</li>
                  {/* Add more features as list items */}
                </ul>
                <button className="bg-orange-500 text-white lg:w-[200px] w-full p-1 mt-5 rounded-lg hover:bg-orange-600">
                  Register Now
                </button>
              </div>
            </div>

            <div className="space-y-4 p-4  rounded-lg mt-10">
              {/* Repeat for each plan */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-center text-white  text-xl font-bold">
                  CLASSIC
                </h3>
                <div className="text-center text-orange-500 lg:text-3xl text-xl font-semibold mt-2">
                  ₹9999{" "}
                  <span className="line-through text-gray-400 lg:text-2xl text-sm">
                    ₹9999
                  </span>
                </div>

                <ul className="mt-4 text-white space-y-2">
                  <li>✅ Complexity Analysis</li>
                  <li>✅ Evaluate time and space efficiency</li>
                  <li>✅ Real-Life Examples</li>
                  <li>✅ LeaderBoard</li>
                  <li>✅ Compete with others or opt-out.</li>
                  <li>✅ Completion Certificate</li>
                  <li>✅ Showcase your achievement</li>
                  <li>✅ Progress Tracking</li>
                  <li>✅ Monitor your advancement.</li>
                  {/* Add more features as list items */}
                </ul>
                <button className="bg-orange-500 text-white lg:w-[200px] w-full p-1 mt-5 rounded-lg hover:bg-orange-600">
                  Register Now
                </button>
              </div>
            </div>
            {/* Repeat similar blocks for PREMIUM and CLASSIC */}
          </div>
        </div>

        <div className="mt-20 flex justify-center items-center flex-col">
          <h1 className="mt-10 text-[#FA9D51] text-[40px]   ">FEATURES</h1>
          <h1 className="text-white  font-semibold lg:text-[55px] text-[40px] lg:mt-0">
            What we offer?
          </h1>

          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-[90px] text-white">
            <div className="flex flex-col justify-center items-center gap-10 mt-20">
              <div className="bg-[#0F0F0F] rounded-xl p-4 lg:h-[180px] h-auto lg:w-[521px] w-[300px] flex lg:flex-row flex-col lg:justify-start lg:items-center justify-center items-center lg:gap-10">
                <div className="border-[#FA9D51] border-2 p-[1px] rounded-xl">
                  <div className="bg-white p-2 rounded-xl ">
                    <img className="lg:h-[30px] h-auto w-auto" src={portal} />
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start lg:w-[400px] gap-5">
                  <h1 className="font-bold text-xl">Portal</h1>
                  <p className="">
                    You can write code, and submit on our platform, making it a
                    one platform experience. Also we have a feature, which makes
                    sure you have understood the problem statement.
                  </p>
                </div>
              </div>

              <div className="bg-[#0F0F0F] rounded-xl p-4 lg:h-[180px] h-auto lg:w-[521px] w-[300px] flex lg:flex-row flex-col lg:justify-start lg:items-center justify-center items-center lg:gap-10">
                <div className="border-[#FA9D51] border-2 p-[1px] rounded-xl">
                  <div className="bg-white p-2 rounded-xl ">
                    <img className="lg:h-[30px] h-auto w-auto" src={discord} />
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start lg:w-[400px] gap-5">
                  <h1 className="font-bold lg:text-2xl text-xl mt-5 lg:mt-0">
                    Free Discord community
                  </h1>
                  <p className="">
                    We tell you where every DSA question is used in the industry
                    or real life, so that you end up relating DSA even while
                    watching netflix.
                  </p>
                </div>
              </div>

              <div className="bg-[#0F0F0F] rounded-xl p-4 lg:h-[180px] h-auto lg:w-[521px] w-[300px] flex lg:flex-row flex-col lg:justify-start lg:items-center justify-center items-center lg:gap-10">
                <div className="border-[#FA9D51] border-2 p-[1px] rounded-xl">
                  <div className="bg-white p-2 rounded-xl ">
                    <img className="lg:h-[30px] w-auto h-auto " src={contest} />
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start lg:w-[400px] gap-5">
                  <h1 className="font-bold text-2xl mt-5 lg:mt-0">
                    Multiple Contests
                  </h1>
                  <p className="">
                    After completing the learning process, you can test yourself
                    by giving multiple contests having question from mixed
                    topic.
                  </p>
                </div>
              </div>

              <div className="bg-[#0F0F0F] rounded-xl p-4 lg:h-[180px] h-auto lg:w-[521px] w-[300px] flex lg:flex-row flex-col lg:justify-start lg:items-center justify-center items-center lg:gap-10">
                <div className="border-[#FA9D51] border-2 p-[1px] rounded-xl">
                  <div className="bg-white p-2 rounded-xl ">
                    <img className="lg:h-[30px] h-auto w-auto" src={doubts} />
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start lg:w-[400px] gap-5">
                  <h1 className="font-bold text-2xl mt-5 lg:mt-0">
                    Doubt Portal{" "}
                  </h1>
                  <p className="">
                    You can post your doubts, which will be instantly solved by
                    our AI TA who has been trained with all our data set,
                    videos, and FAQs.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-10 lg:mt-20 mt-10">
              <div className="bg-[#0F0F0F] rounded-xl p-4 lg:h-[180px] h-auto lg:w-[521px] w-[300px] flex lg:flex-row flex-col lg:justify-start lg:items-center justify-center items-center lg:gap-10">
                <div className="border-[#FA9D51] border-2 p-[1px] rounded-xl">
                  <div className="bg-white p-2 rounded-xl ">
                    <img className="lg:h-[30px] h-auto w-auto" src={sessions} />
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start lg:w-[400px] gap-5">
                  <h1 className="font-bold text-2xl mt-5 lg:mt-0">
                    Weekly Sessions with Experts
                  </h1>
                  <p className="">
                    Every week, we will have a session with Striver, where you
                    can ask literally anything and everything. Also we will
                    brings in founders, and lead engineers who will help you
                    out.
                  </p>
                </div>
              </div>

              <div className="bg-[#0F0F0F] rounded-xl p-4 lg:h-[180px] h-auto lg:w-[521px] w-[300px] flex lg:flex-row flex-col lg:justify-start lg:items-center justify-center items-center lg:gap-10">
                <div className="border-[#FA9D51] border-2 p-[1px] rounded-xl">
                  <div className="bg-white p-2 rounded-xl ">
                    <img className="lg:h-[30px] h-auto w-auto" src={video} />
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start lg:w-[400px] gap-5">
                  <h1 className="font-bold text-2xl mt-5 lg:mt-0">
                    Approach-wise Video Solutions
                  </h1>
                  <p className="">
                    Videos have been broken down into smaller parts (brute,
                    better, optimal) to save your time.
                  </p>
                </div>
              </div>
              <div className="bg-[#0F0F0F] rounded-xl p-4 lg:h-[180px] h-auto lg:w-[521px] w-[300px] flex lg:flex-row flex-col lg:justify-start lg:items-center justify-center items-center lg:gap-10">
                <div className="border-[#FA9D51] border-2 p-[1px] rounded-xl">
                  <div className="bg-white p-2 rounded-xl ">
                    <img className="lg:h-[30px] h-auto w-auto" src={blog} />
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start lg:w-[400px] gap-5">
                  <h1 className="font-bold text-2xl mt-5 lg:mt-0">
                    Approach-wise Premium Blogs
                  </h1>
                  <p className="">
                    Blogs have been broken down into smaller parts (brute,
                    better, optimal) to save your time and not overwhelm you. We
                    provide codes in Java, Cpp, Python and Js.
                  </p>
                </div>
              </div>

              <div className="bg-[#0F0F0F] rounded-xl p-4 lg:h-[180px] h-auto lg:w-[521px] w-[300px] flex lg:flex-row flex-col lg:justify-start lg:items-center justify-center items-center lg:gap-10">
                <div className="border-[#FA9D51] border-2 p-[1px] rounded-xl">
                  <div className="bg-white p-2 rounded-xl ">
                    <img className="lg:h-[30px] h-auto w-auto" src={blog} />
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start lg:w-[400px] gap-5">
                  <h1 className="font-bold text-2xl mt-5 lg:mt-0">
                    Approach-wise Premium Blogs
                  </h1>
                  <p className="">
                    Blogs have been broken down into smaller parts (brute,
                    better, optimal) to save your time and not overwhelm you. We
                    provide codes in Java, Cpp, Python and Js.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className=" p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-20 text-[22px] hover:scale-105 cursor-pointer font-semibold">
            Start Your Journey Now
          </button>
        </div>

        <div className="mt-20 flex justify-center items-center flex-col">
          <h1 className="mt-10 text-[#FA9D51] text-[40px]">COMPARISON</h1>
          <h1 className="text-white  font-semibold lg:text-[45px] text-[30px] lg:mt-0 mt-5">
            What makes us standout?
          </h1>

          <div className="lg:w-[900px]  w-auto mx-auto p-4 bg-[#0F0F0F] rounded-lg overflow-hidden mt-10">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr>
                  <th className="text-center p-4 text-white lg:text-2xl text-xl border-b border-gray-700 border-r">
                    Features
                  </th>

                  <th className=" text-center p-4 text-orange-500 lg:text-2xl text-xl border-b border-r border-gray-700">
                    Qriocity
                  </th>
                  <th className=" text-center p-4 text-white lg:text-2xl text-xl border-b border-gray-700">
                    Other Platforms
                  </th>
                </tr>
              </thead>
              <tbody className="text-white ">
                {/* Pricing Row */}

                {/* Feature Rows */}
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Recorded lectures
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b  border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Weekly sessions
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b  border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Placement Support
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b  border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Practice Portal
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b  border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    Curated list separately for beginners
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-red-500">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b border-gray-700 text-green-400">
                    ❌
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left border-b border-r border-gray-700">
                    300 curated list for everyone
                  </td>
                  <td className="p-4 text-center border-b border-r border-gray-700 text-red-500">
                    ✅
                  </td>
                  <td className="p-4 text-center border-b  border-gray-700 text-green-400">
                    ❌
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-left  border-r border-gray-700">
                    Personalised Roadmaps
                  </td>
                  <td className="p-4 text-center  border-r border-gray-700 text-green-400">
                    ✅
                  </td>
                  <td className="p-4 text-center   border-gray-700 text-green-400">
                    ✅
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <button className=" p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-20 text-[22px] hover:scale-105 cursor-pointer place-self-center font-semibold">
          Start Your Journey Now
        </button>

        <div className="mt-20 flex justify-center items-center flex-col">
          <h1 className="mt-10 text-[#FA9D51] lg:text-[40px] text-[30px]">
            Make your resume shine
          </h1>
          <h1 className="text-white  font-semibold text-[45px]">Certificate</h1>
        </div>
        <img
          className="place-self-center lg:mt-20 mt-10 p-4"
          src={certificate}
        />

        <button className=" p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-20 text-[22px] hover:scale-105 cursor-pointer place-self-center font-semibold">
          Start Your Journey Now
        </button>

         <Testimonials/>
        <button className=" p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-20 text-[22px] hover:scale-105 cursor-pointer place-self-center font-semibold">
          Start Your Journey Now
        </button>
        <div className="mt-20 lg:w-[700px] w-auto place-self-center text-white p-4">
          <h2 className="lg:text-[55px] text-[45px] flex flex-col font-bold text-center text-[#FA9D51] mb-10">
            FAQs
            <span className="mt-5 text-[40px] text-white">
              Here’s everything you may ask...
            </span>
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-300 mb-10">
              <button
                className="w-full text-left flex justify-between items-center p-4 text-lg  font-semibold  focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700 bg-gray-50">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <button className=" p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-10 mb-10 text-[22px] hover:scale-105 cursor-pointer place-self-center font-semibold">
          Start Your Journey Now
        </button>
      </div>
    </>
  );
};

export default Placement;

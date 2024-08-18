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
import { FaBook, FaVideo, FaComments , FaLaptop, FaCertificate, FaChartLine, FaPuzzlePiece } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import { faComments, faLaptop, faCertificate, faChartLine, faPuzzlePiece, faVideo } from '@fortawesome/free-solid-svg-icons';

import Testimonials from "../components/Testimonials";
import Footer2 from "../components/Footer2";
import Book from "../components/Book";
const Placement = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "In which language is the course being taught?",
      answer: "All the recorded lectures will be in Tamil language and weekly doubts sessions can be in English or Tamil.",
    },
    {
      question: "What is the programming language used?",
      answer: "Python is the programming language being used in this course because it’s simple and easy to learn for beginners. ",
    },
    {
      question: "Will the basics of the programming language be taught in the course?",
      answer:
        "Along with the DSA course, you will also receive a Python course that covers the syntax and in-depth features of the language.",
    },
    {
      question: "Is it a recorded or live session?",
      answer: "All the topics are delivered through pre-recorded videos.",
    },
    {
      question: "Will there be any doubt solving?",
      answer:
        "Based on the package you choose, you can receive doubt-solving support accordingly.",
    },
    {
      question: "How many hours do I need to spend on a daily basis?",
      answer: "It totally depends on your schedule. Please plan a sustainable schedule so you can be consistently. We advise everyone to spend 1-2 hours everyday. ",
    },
    {
      question: "Will I get a placement because of this course?",
      answer:
        "No one can guarantee placements. If someone promises you a placement, be cautious, as it is likely a false promise.",
    },
    {
      question: "Can I pay in multiple installments?",
      answer: "No, the payment must be made in a single installment.",
    },
    {
      question: "Is there a refund policy?",
      answer: "There is no refund policy.",
    },
    {
      question: "Where will we study?",
      answer: "The course is hosted on a platform named Graphy.",
    },
    {
      question: "Will there be a certificate?",
      answer:
        "Upon successful completion of the course, participants will receive a Course Completion Certificate, personally issued by Kesavan, the Founder and CEO of Qriocity.",
    },
    {
      question: "What is the validity period for these courses?",
      answer: "It depends on the package you choose.",
    },
    {
      question: "I don’t know coding; should I join this course?",
      answer:
        "Since this course includes teaching the basics of Python, you can join even if you have no prior knowledge of programming.",
    },
    {
      question: "I’m from a different department, can I join?",
      answer: "Yes, you can join.",
    },
    {
      question: "I’ve  just completed my schooling or I’m in my 1st or 2nd year, can I join this course?",
      answer:
        "Definitely! Joining this course will help you build a strong foundation in DSA, which will significantly aid you during the placement process",
    },
 
  ];
  

  const data = [
    { name: "Aptitude - 10 hours recorded videos", check1: "❌", check2: "❌", check3: "✅" },
    { name: "Python - 10 hours recorded videos", check1: "✅", check2: "✅", check3: "✅" },
    { name: "DSA - 25 hours recorded videos", check1: "✅", check2: "✅", check3: "✅" },
    { name: "60+ Beginner Problems", check1: "✅", check2: "✅", check3: "✅" },
    { name: "200 Curated Problems", check1: "✅", check2: "✅", check3: "✅" },
    { name: "Detailed Articles (coming soon)", check1: "❌", check2: "✅", check3: "✅" },
    { name: "Practice Portal", check1: "✅", check2: "✅", check3: "✅" },
    { name: "Complexity Analysis", check1: "✅", check2: "✅", check3: "✅" },
    { name: "Progress Tracking", check1: "✅", check2: "✅", check3: "✅" },
    { name: "Leaderboard", check1: "✅", check2: "✅", check3: "✅" },
    { name: "Course Completion Certificate", check1: "✅", check2: "✅", check3: "✅" },
    { name: "Affiliate Program", check1: "✅", check2: "✅", check3: "✅" },
    { name: "2 Recorded Mock Interviews", check1: "❌", check2: "✅", check3: "✅" },
    { name: "Accountability Mentor", check1: "❌", check2: "✅", check3: "✅" },
    { name: "Higher Studies A-Z - 3 hours recorded videos", check1: "❌", check2: "✅", check3: "✅" },
    { name: "Doubt solving support", check1: "Only Community forum Support", check2: "Bi-Weekly sessions", check3: "Weekly live sessions" },
    { name: "Resume & Cold Email Live Session", check1: "❌", check2: "1 Session", check3: "3 Session" },
    { name: "Live Mock Interviews by Industry Experts", check1: "❌", check2: "❌", check3: "3 Session" },
    { name: "LinkedIn Mastery Live Session", check1: "❌", check2: "❌", check3: "3 Session" },
    { name: "1-1 Mentorship with Founder & CEO of Qriociy, Kesaven", check1: "❌", check2: "❌", check3: "3 Session" },
    { name: "How to generate passive income using your skills, live session with founder and CEO of Qriocity,Kesavan", check1: "❌", check2: "❌", check3: "3 Session" },
    { name: "Validity of Recordings", check1: "6 Months", check2: "2 Years", check3: "Lifetime" }
  ];

  const feature1 = [
    { name: "Aptitude - 10 hours recorded videos", check: "❌" },
    { name: "Python - 10 hours recorded videos", check: "✅" },
    { name: "DSA - 25 hours recorded videos", check: "✅" },
    { name: "60+ Beginner Problems", check: "✅" },
    { name: "200 Curated Problems", check: "✅" },
    { name: "Detailed Articles (coming soon)", check: "❌" },
    { name: "Practice Portal", check: "✅" },
    { name: "Complexity Analysis", check: "✅" },
    { name: "Progress Tracking", check: "✅" },
    { name: "Leaderboard", check: "✅" },
    { name: "Course Completion Certificate", check: "✅" },
    { name: "Affiliate Program", check: "✅" },
    { name: "2 Recorded Mock Interviews", check: "❌" },
    { name: "Accountability Mentor", check: "❌" },
    { name: "Higher Studies A-Z - 3 hours recorded videos", check: "❌" },
    { name: "Doubt solving support(Only community forum support)", check: "✅" },
    { name: "Resume & Cold Email Live", check: "❌" },
    { name: "Live Mock Interviews by Industry Experts", check: "❌" },
    { name: "LinkedIn Mastery Live", check: "❌" },
    { name: "1-1 Mentorship with Founder & CEO Kesaven", check: "❌" },
    { name: "Side hustle Income generation", check: "❌" },
    { name: "6 months Validity of Recordings", check: "✅" },
  ];
  
  const feature2 = [
    { name: "Aptitude - 10 hours recorded videos", check: "❌" },
    { name: "Python - 10 hours recorded videos", check: "✅" },
    { name: "DSA - 25 hours recorded videos", check: "✅" },
    { name: "60+ Beginner Problems", check: "✅" },
    { name: "200 Curated Problems", check: "✅" },
    { name: "Detailed Articles (coming soon)", check: "✅" },
    { name: "Practice Portal", check: "✅" },
    { name: "Complexity Analysis", check: "✅" },
    { name: "Progress Tracking", check: "✅" },
    { name: "Leaderboard", check: "✅" },
    { name: "Course Completion Certificate", check: "✅" },
    { name: "Affiliate Program", check: "✅" },
    { name: "2 Recorded Mock Interviews", check: "✅" },
    { name: "Accountability Mentor", check: "✅" },
    { name: "Higher Studies A-Z - 3 hours recorded videos", check: "✅" },
    { name: "Doubt solving support (Bi-Weekly sessions)", check: "✅" },
    { name: "Resume & Cold Email Live 1 Session", check: "✅" },
    { name: "Live Mock Interviews by Industry Experts", check: "❌" },
    { name: "LinkedIn Mastery Live", check: "❌" },
    { name: "1-1 Mentorship with Founder & CEO Kesaven", check: "❌" },
    { name: "Side hustle Income generation", check: "❌" },
    { name: "2 Years Validity of Recordings", check: "✅" },
  ];

  const feature3 = [
    { name: "Aptitude - 10 hours recorded videos", check: "✅" },
    { name: "Python - 10 hours recorded videos", check: "✅" },
    { name: "DSA - 25 hours recorded videos", check: "✅" },
    { name: "60+ Beginner Problems", check: "✅" },
    { name: "200 Curated Problems", check: "✅" },
    { name: "Detailed Articles (coming soon)", check: "✅" },
    { name: "Practice Portal", check: "✅" },
    { name: "Complexity Analysis", check: "✅" },
    { name: "Progress Tracking", check: "✅" },
    { name: "Leaderboard", check: "✅" },
    { name: "Course Completion Certificate", check: "✅" },
    { name: "Affiliate Program", check: "✅" },
    { name: "2 Recorded Mock Interviews", check: "✅" },
    { name: "Accountability Mentor", check: "✅" },
    { name: "Higher Studies A-Z - 3 hours recorded videos", check: "✅" },
    { name: "Doubt solving support (Weekly live sessions)", check: "✅" },
    { name: "Resume & Cold Email Live (3 Session)", check: "✅" },
    { name: "Live Mock Interviews by Industry Experts (3 Session)", check: "✅" },
    { name: "LinkedIn Mastery Live (3 Session)", check: "✅" },
    { name: "1-1 Mentorship with Founder & CEO Kesaven(3 Session)", check: "✅" },
    { name: "Side hustle Income generation (3 Session)", check: "✅" },
    { name: "Lifetime Validity of Recordings", check: "✅" },
  ];
  const feature4 = [
    { name: "Recorded Lectures", check: "✅" },
    { name: "Placement Support", check: "✅ (False promises)" },
    { name: "Practice Portal", check: "✅" },
    { name: "Accountability Mentor", check: "❌" },
    { name: "Core Skills Preparation", check: "❌" },
    { name: "Complete Placement Preparation", check: "❌" },
    { name: "Doubt solving Live Sessions", check: "❌" },
  ];
  
  const feature5 = [
    { name: "Recorded Lectures", check: "✅" },
    { name: "Placement Support", check: "❌" },
    { name: "Practice Portal", check: "✅" },
    { name: "Accountability Mentor", check: "✅" },
    { name: "Core Skills Preparation", check: "✅" },
    { name: "Complete Placement Preparation", check: "✅" },
    { name: "Doubt solving Live Sessions", check: "✅" },
  ];
  const data2 = [
    { name: "Recorded Lectures", check1: "✅", check2: "✅" },
    { name: "Placement Support", check1: "✅ (False promises)", check2: "❌" },
    { name: "Practice Portal", check1: "✅", check2: "✅" },
    { name: "Accountability Mentor", check1: "❌", check2: "✅" },
    { name: "Core Skills Preparation", check1: "❌", check2: "✅" },
    { name: "Complete Placement Preparation", check1: "❌", check2: "✅" },
    { name: "Doubt solving Live Sessions", check1: "❌", check2: "✅" },
  ];


  
const featureDetails = [
  {
    name: "Doubt solving forum support",
    description:
      "Doubt-solving support is available in our forum. Post your questions in relevant threads, and our moderators will assist you promptly. Use tags for easy navigation and quick answers. Engage with the community to get your doubts resolved efficiently.",
    icon: <FaComments size="2em" />,
  },
  {
    name: "Practice Portal",
    description:
      "Explore Forum's dedicated practice portal, where you can solve a wide range of coding challenges designed to sharpen your skills. Elevate your coding proficiency and stay ahead in your career with Forum.",
    icon: <FaLaptop size="2em" />,
  },
  {
    name: "Course Completion Certificate",
    description:
      "On successful completion of the course, participants will receive a Course Completion Certificate, personally issued by Kesavan, the Founder and CEO of Qriocity. This certificate serves as a formal acknowledgment of the skills and knowledge acquired during the program, reflecting your dedication to professional growth and enhancing your career credentials.",
    icon: <FaCertificate size="2em" />,
  },
  {
    name: "Progress Tracking",
    description:
      "Progress tracking is closely monitored throughout the course to ensure consistent learning and development. This structured approach helps maintain focus and enhances the overall learning experience, ensuring that each individual achieves their full potential.",
    icon: <FaChartLine size="2em" />,
  },
  {
    name: "Curated Problems",
    description:
      "Curated problems are designed to deepen your knowledge and enhance your skills. These challenges are tailored to progressively build your expertise, ensuring a comprehensive understanding of key concepts. By engaging with these problems, you will develop the critical thinking and problem-solving abilities essential for success in your field.",
    icon: <FaPuzzlePiece size="2em" />,
  },
  {
    name: "Detailed Video Explanations",
    description:
      "Courses offer detailed video explanations that break down complex concepts into easily understandable segments. Each video is crafted to provide in-depth insights, guiding you through the material with clarity and precision. These visual aids enhance your learning experience, ensuring you grasp the core principles effectively and efficiently.",
    icon: <FaVideo size="2em" />,
  },
];
const handleSubmit=()=>{
  window.location.href="https://courses.qriocity.in/s/store"
}
  
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
              <div className="flex justify-center items-center gap-4">
                <FaBook size={30} color="orange" />
                <h1>Aptitude, Python, DSA & Interview Guide</h1>
              </div>

              <div className="flex justify-center items-center gap-4">
                <FaVideo size={30} color="orange"/>
                <h1>InDepth Detailed Video Explanations</h1>
              </div>

              <div className="flex justify-center items-center gap-4">
                <FaComments size={30} color="orange"/>
                <h1>Doubt Solving Forum Support</h1>
              </div>
            </div>

            <button onClick={handleSubmit} className=" p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-10 text-[22px] hover:scale-105 cursor-pointer font-semibold">
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
                    ENTRY
                  </th>
                  <th className=" text-center p-4 text-orange-500 lg:text-xl text-sm border-b border-r border-gray-700">
                    SKILLED
                  </th>
                  <th className=" text-center p-4 text-orange-500 lg:text-xl text-sm border-b border-gray-700">
                    MASTERY
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
                      ₹4999{" "}
                      <span className="line-through text-gray-400 lg:text-2xl text-sm">
                        ₹12000 {" "}
                      </span>
                      <span className=" lg:text-2xl text-sm">
                       COUPON71
                      Discounted Price ₹1499</span>
                                          
                    </div>
                    <button onClick={handleSubmit} className="bg-orange-500 text-white lg:w-[200px] w-auto p-1 mt-2 rounded-lg hover:bg-orange-600">
                      Register Now
                    </button>
                  </td>
                  <td className="p-4 text-center border-r border-gray-700">
                    <div className="lg:text-3xl text-xl font-semibold">
                      ₹9999{" "}
                      <span className="line-through text-gray-400 lg:text-2xl text-sm">
                        ₹20000{" "}
                      </span>
                      <span className=" lg:text-2xl text-sm">
                      COUPON61
                      Discounted Price ₹3999
                     </span>
                    </div>
                    <button onClick={handleSubmit} className="bg-orange-500 text-white lg:w-[200px] w-auto p-1 mt-2 rounded-lg hover:bg-orange-600">
                      Register Now
                    </button>
                  </td>
                  <td className="p-4 text-center ">
                    <div className="lg:text-3xl text-xl font-semibold">
                      ₹19999{" "}
                      <span className="line-through text-gray-400 lg:text-2xl text-sm">
                        ₹35000{" "}
                      </span>
                      <span className=" lg:text-2xl text-sm">
                       COUPON50
                       Discounted Price ₹7999

                     </span>

                    </div>
                    <button onClick={handleSubmit} className="bg-orange-500 text-white lg:w-[200px] w-auto p-1 mt-2 rounded-lg hover:bg-orange-600">
                      Register Now
                    </button>
                  </td>
                </tr>

                {/* Feature Rows */}
                {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="p-4 text-left  border-r border-gray-700 border-t">
                  {row.name}
                  </td>
                  <td className="p-4 text-center  border-r border-gray-700 border-t text-green-400">
                    {row.check1}
                  </td>
                  <td className="p-4 text-center  border-r border-gray-700 border-t text-green-400">
                  {row.check2}
                  </td>
                  <td className="p-4 text-center  border-gray-700 border-t text-green-400">
                  {row.check3}
                  </td>
                </tr>
                 ))}
                
              </tbody>
            </table>
          </div>

          <div className="lg:hidden block">
            <div className="space-y-4 p-4  rounded-lg mt-10">
              {/* Repeat for each plan */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-center text-white  text-xl font-bold">
                  ENTRY
                </h3>
                <div className="text-center text-orange-500 lg:text-3xl text-xl font-semibold mt-2">
                  ₹1499{" "}
                  <span className="line-through text-gray-400 lg:text-2xl text-sm">
                    ₹4999{" "}
                  </span>
                  <span className=" lg:text-2xl text-sm">
                       COUPON71
                      Discounted Price ₹1499</span>
                </div>

                <ul className="mt-4 text-white  space-y-2">
                {feature1.map((feature, index) => (
                  <li key={index}  >
                    
                      {feature.check} {feature.name}
                  
                  </li>
                ))}
                  {/* Add more features as list items */}
                </ul>
                <button onClick={handleSubmit} className="bg-orange-500 text-white lg:w-[200px] w-full p-1 mt-5 rounded-lg hover:bg-orange-600">
                  Register Now
                </button>
              </div>
            </div>

            <div className="space-y-4 p-4  rounded-lg mt-10">
              {/* Repeat for each plan */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-center text-white  text-xl font-bold">
                  SKILLED
                </h3>
                <div className="text-center text-orange-500 lg:text-3xl text-xl font-semibold mt-2">
                  ₹3999{" "}
                  <span className="line-through text-gray-400 lg:text-2xl text-sm">
                    ₹9999{" "}
                  </span>
                  <span className=" lg:text-2xl text-sm">
                      COUPON61
                      Discounted Price ₹3999
                     </span>
                </div>

                <ul className="mt-4 text-white space-y-2">
                {feature2.map((feature, index) => (
                  <li key={index}  >
                    
                      {feature.check} {feature.name}
                  
                  </li>
                ))}
                  {/* Add more features as list items */}
                </ul>
                <button onClick={handleSubmit} className="bg-orange-500 text-white lg:w-[200px] w-full p-1 mt-5 rounded-lg hover:bg-orange-600">
                  Register Now
                </button>
              </div>
            </div>

            <div className="space-y-4 p-4  rounded-lg mt-10">
              {/* Repeat for each plan */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-center text-white  text-xl font-bold">
                  MASTERY
                </h3>
                <div className="text-center text-orange-500 lg:text-3xl text-xl font-semibold mt-2">
                  ₹7999{" "}
                  <span className="line-through text-gray-400 lg:text-2xl text-sm">
                    ₹19999
                  </span>
                  <span className=" lg:text-2xl text-sm">
                       COUPON50
                       Discounted Price ₹7999

                   </span>
                </div>

                <ul className="mt-4 text-white space-y-2">
                {feature3.map((feature, index) => (
                  <li key={index}  >
                    
                      {feature.check} {feature.name}
                  
                  </li>
                ))}
                  
                  {/* Add more features as list items */}
                </ul>
                <button onClick={handleSubmit} className="bg-orange-500 text-white lg:w-[200px] w-full p-1 mt-5 rounded-lg hover:bg-orange-600">
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
            <div className="flex flex-wrap justify-center items-center gap-10 mt-20">
              { featureDetails.map((data,index)=>{
                return(
              <div className="bg-[#0F0F0F] rounded-xl p-4 lg:h-[300px] h-auto lg:w-[521px] w-[300px] flex lg:flex-row flex-col lg:justify-start lg:items-center justify-center items-center lg:gap-10">
                <div className="border-[#FA9D51] border-2 p-[1px] rounded-xl">
                  <div className="bg-white p-2 rounded-xl text-orange-500 ">
                  {data.icon}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center lg:items-start lg:w-[400px] gap-5">
                  <h1 className="font-bold  text-xl text-center">{data.name}</h1>
                  <p className="">
                  {data.description}
                  </p>
                </div>
              </div>
                );
              })}

             
            </div>
          </div>
          <button onClick={handleSubmit} className=" p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-20 text-[22px] hover:scale-105 cursor-pointer font-semibold">
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

                  <th className=" text-center p-4 text-white lg:text-2xl text-xl border-b border-r border-gray-700">
                    Other Platforms
                  </th>
                  <th className=" text-center p-4 text-orange-500 lg:text-2xl text-xl border-b border-gray-700">
                    Qriocity
                  </th>
                </tr>
              </thead>
              <tbody className="text-white ">
                {/* Pricing Row */}

                {/* Feature Rows */}
                {data2.map((row, rowIndex) => (
                <tr>
                  <td className="p-4 text-left border-t border-r border-gray-700">
                    {row.name}
                  </td>
                  <td className="p-4 text-center border-t border-r border-gray-700 text-green-400">
                    {row.check1}
                  </td>
                  <td className="p-4 text-center border-t  border-gray-700 text-green-400">
                  {row.check2}
                  </td>
                </tr>
                ))}
                
              </tbody>
            </table>
          </div>
        </div>

        <button onClick={handleSubmit} className=" p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-20 text-[22px] hover:scale-105 cursor-pointer place-self-center font-semibold">
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

        <button onClick={handleSubmit} className=" p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-20 text-[22px] hover:scale-105 cursor-pointer place-self-center font-semibold">
          Start Your Journey Now
        </button>

         <Testimonials/>
        <button onClick={handleSubmit} className=" p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-20 text-[22px] hover:scale-105 cursor-pointer place-self-center font-semibold">
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

        <button onClick={handleSubmit} className=" mb-[200px] p-4 rounded-full w-[300px] bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white mt-10  text-[22px] hover:scale-105 cursor-pointer place-self-center font-semibold">
          Start Your Journey Now
        </button>
        <Book/>
      </div>
    </>
  );
};

export default Placement;

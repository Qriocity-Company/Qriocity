import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import path from "../assets/path.png";
import person from "../assets/person.png";
import clock from "../assets/clock.png";
import calendar from "../assets/calendar.png";
import bullet from "../assets/bullet.png";
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
import { ImSpinner8 } from "react-icons/im";
import Faq from "../components/Faq";
import certificate from "../assets/certificate.png";
import axios from "axios";
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import p5 from "../assets/p5.png"
import toast, { Toaster } from "react-hot-toast";
import Testimonials from "../components/Testimonials";
import Testimonials2 from "../components/Testimonials2";
const Dsa = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [department, setDepartment] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const filled = localStorage.getItem("RoadmapPopUp");
  const [popupForm, setpopForm] = useState(false);
  const [form, setForm] = useState(false);
  const [popuploading, setPopuploading] = useState(false);
  const [name2, setName2] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone2, setPhone2] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const offerEndTime = new Date();
  offerEndTime.setHours(offerEndTime.getHours() + 12);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    let difference = Math.max(0, offerEndTime - new Date());

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    difference -= hours * 60 * 60 * 1000;

    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    difference -= minutes * 60 * 1000;

    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  }
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [department2, setDepartment2] = useState("");
  const [college2, setCollege2] = useState("");
  const [year2, setYear2] = useState("");

  const handleClose = () => {
    setpopForm(false);
  };
  const handlePopUp = async () => {
    setPopuploading(true);
    const currentDate = new Date();
    try {
      const { data } = await axios.post(
        "https://crm-backend-o6sb.onrender.com/roadmap-popup/newStudent",
        {
          name: name,
          email: email,
          phone: phone,
          college: college,
          department: department,
          year: year,
          date: currentDate.toLocaleDateString(),
        }
      );

      if (data?.success) {
        localStorage.setItem("RoadmapPopUp", true);
        window.location.href="https://courses.qriocity.in/courses/DSA-5-Days-Live-Bootcamp-Batch-7-66d1a82aecbcc22b23e91bb9"
        setPopuploading(false);
        setpopForm(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleForm = () => {
    setForm(!form);
  };
  const data2 = [
    { name: "Live Lectures", check1: "✅", check2: "✅" },
    { name: "Price", check1: "₹999", check2: "₹199" },
    { name: "Community Support", check1: "Only 5 days", check2: "Free lifetime discord community" },
    { name: "Accountability Mentor", check1: "❌", check2: "✅" },
    { name: "Bootcamp Completition Certificate", check1: "❌", check2: "✅" },
    { name: "Bonus", check1: "❌", check2: "Bonus worth ₹4999" },
    { name: "Class Recording", check1: "❌", check2: "✅" },
  ];
  const timelineData = [
    {
      content: " Day 1: Python Basics - Learn Python fundamentals with hands-on coding exercises to build a solid foundation.",
      img: p1,
      alt: "Clear roadmap",
    },
    {
      content: " Day 2: Conditional Statements and Loops - Master control flow in Python, with practice on interview-style questions.",
      img: p2,
      alt: "Portfolio",
    },
    {
      content: " Day 3: Strings and Arrays - Deep dive into string and array operations, solving common interview problems.",
      img: p3,
      alt: "Job market",
    },
    {
      content: " Day 4: Container Data Types - Understand and apply lists, tuples, sets, and dictionaries in practical scenarios.",
      img: p4,
      alt: "Internship",
    },
    {
      content: "Day 5: Searching & Sorting Algorithms - Learn and implement searching & Sorting techniques with hands-on interview problem solving.",
      img: p5,
      alt: "LinkedIn hacks",
    },
 
  ];

  const handleSubmitForm = async () => {
    setLoading(true);
    const currentDate = new Date();
    try {
      const { data } = await axios.post(
        "https://crm-backend-o6sb.onrender.com/roadmap/newStudent",
        {
          name: name2,
          email: email2,
          phone: phone2,
          college: college2,
          department: department2,
          year: year2,
          date: currentDate.toLocaleDateString(),
        }
      );

      if (data?.success) {
        toast.success("Your seat has been booked succesfully");

        setLoading(false);
         window.location.href="https://courses.qriocity.in/courses/DSA-5-Days-Live-Bootcamp-Batch-7-66d1a82aecbcc22b23e91bb9";
        setName2("");
        setEmail2("");
        setDepartment2("");
        setCollege2("");
        setPhone2("");
        setYear2("");
        setForm(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const faqs = [
    {
      question: "What if I have a busy schedule? Will I be able to keep up with the bootcamp?",
      answer: "Each session is recorded, and you'll have lifetime access to the materials. You can catch up at your own pace.",
    },
    {
      question: "I’m a beginner with only basic programming knowledge. Is this bootcamp suitable for me?",
      answer: "Absolutely! The bootcamp is designed to start from the basics and gradually move to advanced topics. Beginners are welcome and encouraged.",
    },
    {
      question: "Is the bootcamp really worth the price of 199 INR?",
      answer: "Yes! This bootcamp is a comprehensive, hands-on experience that covers everything you need to excel in DSA. Plus, you get valuable bonuses like lifetime community access, top problem sets, and Mock Interview Recordings by Industry experts.",
    },
    {
      question: "What kind of support will I receive during the bootcamp?",
      answer: "You'll have access to a dedicated community on Discord where you can ask questions, share progress, and get support from instructors and peers.",
    },
    {
      question: "Will I get any certificate after completing the bootcamp?",
      answer: "Yes, you'll receive a certificate of completion, which you can showcase on your resume and LinkedIn profile.",
    },
    {
      question: "How much time should I dedicate each day to make the most of this bootcamp?",
      answer: "We recommend setting aside 2-3 hours each day for live sessions and practice. This ensures you get the most out of the content and assignments.",
    },
    {
      question: "How does this bootcamp compare to free resources available online?",
      answer: "This bootcamp offers structured learning, personalized feedback, and live support—things you won't easily find in free resources. It's designed to fast-track your learning and prepare you for real-world challenges.",
    },
    {
      question: "How interactive are the sessions? Will I have the opportunity to ask questions?",
      answer: "The sessions are highly interactive. You'll have the chance to ask questions during the live sessions, and there will be Q&A segments at the end of each day.",
    },
  ];
  
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (!filled) {
      setpopForm(true);
    }
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col p-4 bg-white min-h-screen w-full">
        {popupForm && (
          <div className="fixed inset-0 bg-black h-screen  bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-bl from-orange-500 via-slate-500 to-white z-50  rounded-lg shadow-lg w-96 p-4 text-white flex flex-col">
              <h1
                onClick={handleClose}
                className="place-self-end cursor-pointer text-4xl font-bold text-gray-100"
              >
                &times;
              </h1>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">
                Register now at ₹199 only Now
              </h2>
              <p className="text-center mb-2 text-[12px]">After submitting this form, you will be redirected to the Graphy website. Please register using Google to receive the WhatsApp group link and the webinar link via your registered email.</p>
              <div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 md:p-2 border-2 border-black  outline-none focus:ring-2  text-black rounded-xl"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border-2 border-black rounded-xl outline-none focus:ring-2  text-black"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    placeholder="Contact Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="college"
                    name="college"
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    placeholder="College Name"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option hidden>Select Your Year</option>
                    <option>First Year</option>
                    <option>Second Year</option>
                    <option>Third Year</option>
                    <option>Fourth Year</option>
                    <option>Graduate</option>
                  </select>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-600 to-orange-400 text-white  py-2 rounded-full hover:from-orange-500 hover:to-orange-600 px-10"
                    onClick={handlePopUp}
                  >
                    {popuploading ? (
                      <ImSpinner8 className="animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {form && (
          <div className="fixed inset-0 bg-black h-screen  bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-orange-500 via-orang4-300 to-white rounded-lg shadow-lg w-96 p-4 text-white flex flex-col">
              <h1
                onClick={() => setForm(!form)}
                className="place-self-end cursor-pointer text-4xl font-bold text-gray-100"
              >
                &times;
              </h1>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">
                Register now at ₹199 only Now
              </h2>
              <p className="text-center mb-2 text-[12px]">After submitting this form, you will be redirected to the Graphy website. Please register using Google to receive the WhatsApp group link and the webinar link via your registered email.</p>
              <div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border-2 border-black  outline-none focus:ring-2  text-black rounded-xl"
                    placeholder="Name"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border-2 border-black rounded-xl outline-none focus:ring-2  text-black"
                    placeholder="Email"
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    placeholder="Contact Number"
                    value={phone2}
                    onChange={(e) => setPhone2(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="college"
                    name="college"
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    placeholder="College Name"
                    value={college2}
                    onChange={(e) => setCollege2(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    placeholder="Department"
                    value={department2}
                    onChange={(e) => setDepartment2(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    value={year2}
                    onChange={(e) => setYear2(e.target.value)}
                  >
                    <option hidden>Select Your Year</option>
                    <option>First Year</option>
                    <option>Second Year</option>
                    <option>Third Year</option>
                    <option>Fourth Year</option>
                    <option>Graduate</option>
                  </select>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-600 to-orange-400 text-white  py-2 rounded-full hover:from-orange-500 hover:to-orange-600 px-10"
                    onClick={handleSubmitForm}
                  >
                    {loading ? (
                      <ImSpinner8 className="animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
            <img className="h-[300px] -ml-52 z-40" src={person} alt="Person" />
          </div>
          <div className="flex flex-col justify-center lg:items-start items-center lg:mr-40 mt-14 lg:mt-40">
            <h1 className=" font-bold text-3xl lg:text-[40px]">
            Master the Basics of {" "}
            </h1>
            <h1 className=" font-bold text-3xl mt-2 lg:mt-5 lg:text-[40px]">
            Coding in 5 Days 
            </h1>
            <h1 className="font-semibold text-xl mt-5">
            Learn how to develop your problem solving skills

            </h1>
            <div className="bg-[#FFF7F4] border-2 border-[#F15A29] h-[121px] w-auto lg:w-[550px] mt-5 rounded-2xl flex justify-center items-center p-4 text-lg">
              <h1>
                Learn the exact strategies that made{" "}
                <span className="font-bold">10K+ students </span> 
                develop their problem solving skills   <span className="font-bold">within 5 Days</span>
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
                  September 5-10, <span>2024</span>
                  <span className="text-lg">7pm-9pm</span>{" "}
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
                onClick={handleForm}
              >
                Register now at ₹199 only
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
              Should Attend{" "}
            </span>{" "}
            This Webinar?
          </h1>
          <div className="flex justify-center flex-col gap-8 items-start mt-10 lg:mt-20">
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
              1st/2nd/3rd year Students: Kickstart your placement preparation journey by mastering DSA concepts
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
              Final year Students: Prepare for placement and technical interviews 
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
              Job Seekers: Enhance your chances of cracking interviews at top tech companies.
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
              Working Professionals: Advance in your field and secure promotions.
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
              Working Professionals: Refine your problem-solving skills for career advancement.
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
              Career Changers: Transition into software development with a strong foundation in DSA.
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
            in this 5-Day Bootcamp?
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

            {timelineData.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } justify-center items-center gap-10 md:gap-20 z-40`}
              >
                <img
                  className="h-[250px] w-full md:w-[250px] object-contain"
                  src={item.img}
                  alt={item.alt}
                />
                <div className="bg-white p-4 rounded-xl h-[200px] w-full md:w-[200px] lg:w-[250px] font-semibold text-lg flex justify-center items-center">
                  {item.content}
                </div>
              </div>
            ))}
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
              onClick={handleForm}
            >
              Register now at ₹199 only
            </button>
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
            of Attending our Bootcamp
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 mt-10 lg:mt-20 px-4 lg:px-0">
            {/* Left Column */}
            <div className="flex flex-col justify-center items-center gap-4 lg:gap-6">
              <div className="bg-[#F5FFFF] p-4 rounded-xl border-2 border-[#2E7071] w-full lg:w-[600px] flex justify-start items-center gap-4 font-semibold text-base lg:text-lg">
                <FaStar color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                Ace Technical Interviews: Gain the confidence to solve complex coding problems in interviews.
                </h1>
              </div>
              <div className="bg-[#F5FFFF] p-4 rounded-xl border-2 border-[#2E7071] w-full lg:w-[600px] flex justify-start items-center gap-4 font-semibold text-base lg:text-lg">
                <FaStar color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                Strengthen Coding Foundations: Build a solid understanding of essential DSA concepts.
                </h1>
              </div>
              <div className="bg-[#F5FFFF] p-4 rounded-xl border-2 border-[#2E7071] w-full lg:w-[600px] flex justify-start items-center gap-4 font-semibold text-base lg:text-lg">
                <FaStar color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                  
                Improve Problem-Solving Skills: Learn to approach and solve problems efficiently and effectively
                </h1>
              </div>
              <div className="bg-[#F5FFFF] p-4 rounded-xl border-2 border-[#2E7071] w-full lg:w-[600px] flex justify-start items-center gap-4 font-semibold text-base lg:text-lg">
                <FaStar color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                Boost Career Prospects: Stand out in the competitive tech industry with enhanced coding skills.
                </h1>
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden lg:flex flex-col items-center gap-4 px-4 lg:px-0 mt-10 lg:mt-20">
              <div className="bg-slate-50 shadow-xl rounded-2xl w-full lg:w-[250px] h-[100px] flex justify-center items-center flex-col text-lg lg:text-xl font-bold">
                Problem Solving{" "}
                <span className="text-base lg:text-xl">Skills</span>
              </div>

              <div className="bg-slate-50 shadow-xl rounded-2xl w-full lg:w-[500px] h-[100px] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 mt-2">
                <h1 className="text-lg lg:text-xl font-bold flex flex-col items-center">
                  Master DSA{" "}
                  <span className="text-base lg:text-xl">Concepts</span>
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
                  High Salary{" "}
                  <span className="text-base lg:text-xl">Package</span>
                </h1>
              </div>


              <div className="bg-slate-50 shadow-xl rounded-2xl w-full lg:w-[250px] h-[100px] flex justify-center items-center flex-col text-lg lg:text-xl font-bold">
                Top 1%<span className="text-base lg:text-xl">Candidate</span>
              </div>
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
              onClick={handleForm}
            >
              Register now at ₹199 only
            </button>
          </div>

          <div className="mt-20 bg-[#FEEEE9] h-auto lg:h-[500px] max-w-full rounded-xl flex flex-col justify-start items-center p-4 mb-10">
            <h1 className="text-4xl font-bold mt-6 lg:text-[50px]">
              Exciting <span className="text-[#F26530]">bonuses</span>
            </h1>
            <div className="mt-10 lg:mt-20 flex flex-wrap justify-center items-center gap-4 lg:gap-5 w-full">
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={30} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                Top 50 <span>DSA Problems</span> <span>and solution</span>pdf
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={Linkedin}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={30} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                Technical Mock <span>Interview conducted</span> <span>by Industry</span>Experts(Recorded)
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={doc}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={30} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Discord <span>Community</span> <span>lifetime </span><span> access</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={discord}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={30} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  1-1 Mentorship <span>call with founder</span>& CEO of <span>Qriocity,Kesavan</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={interview}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={30} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Lifetime <span>Access to</span>{" "}
                  <span>Bootcamp </span>
                  <span> Material</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={leetcode}
                />
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
                onClick={handleForm}
              >
                Register now at ₹199 only
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex justify-center items-center flex-col">
          <h1 className="mt-10 text-red-500 font-bold text-[25px]">COMPARISON</h1>
          <h1 className="text-black  font-semibold lg:text-[45px] text-[30px] lg:mt-0 mt-5">
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



        <div className="mt-20 flex justify-center items-center flex-col">
          <h1 className="mt-10 text-black font-bold lg:text-[40px] text-[30px]">
            Make your resume shine
          </h1>
          <h1 className="text-white  font-semibold text-[45px]">Certificate</h1>
        </div>
        <img
          className="place-self-center lg:mt-10 mt-10 p-4"
          src={certificate}
        />
        <div className="flex justify-center">
             <button
            className="px-14 py-4 rounded-full font-bold text-white "
            style={{
              background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
            }}
            onClick={handleForm}
          >
            Register now at ₹199 only
          </button>
          </div>
        
       <Testimonials2/>

        <div className="flex flex-col justify-center items-center lg:mr-10 mt-10">
          <span className="-mr-20 -mb-4 bg-black text-white rounded-2xl px-4 z-30 py-1">
            90% seats booked
          </span>
          <button
            className="px-14 py-4 rounded-full font-bold text-white "
            style={{
              background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
            }}
            onClick={handleForm}
          >
            Register now at ₹199 only
          </button>
        </div>
        <div className="w-full flex flex-col items-center p-2 md:p-0 justify-center mt-20 bg-[#e3efec]">
          <div className="max-w-2xl mx-auto py-8 md:mt-20  ">
            <h2 className="lg:text-[36px] text-[20px] font-bold text-center text-blue-600">
              FAQs :
              <span className=" ml-2 text-gray-800">
                Here’s everything you may ask...
              </span>
            </h2>

            <div className="mt-20">
              {faqs.map((faq, index) => (
                <div key={index} className="border-2 border-gray-300 mb-2">
                  <button
                    className="w-full text-left flex justify-between items-center p-4 text-lg text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </button>
                  {activeIndex === index && (
                    <div className="p-4 text-gray-700 bg-gray-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:mr-10 mt-5 mb-40">
            <span className="-mr-20 -mb-4 bg-black text-white rounded-2xl px-4 z-30 py-1">
              90% seats booked
            </span>
            <button
              className="px-14 py-4 rounded-full font-bold text-white "
              style={{
                background:
                  "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
              }}
              onClick={handleForm}
            >
              Register now at ₹199 only
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#000000] h-[100px] w-full p-4 flex justify-between z-40 items-center bottom-0 fixed">
        <div className="flex flex-col">
          <div className="flex justify-center items-center lg:gap-6 gap-2 h-full">
            <h1 className="font-bold text-2xl lg:text-5xl text-white lg:ml-10">
            ₹199
            </h1>
            <h1 className=" text-[20px] text-white line-through">₹999</h1>
          </div>
          <h1 className="mt-2 text-white lg:ml-10 text-sm">
            Offer ends in {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}
            s!!
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center lg:mr-10">
          <span className="lg:-mr-20 -mr-10 -mb-2 bg-[#DCDCDC] rounded-2xl px-2 lg:px-4 z-50 py-1">
            90% seats booked
          </span>
          <button
            className="lg:px-14 py-4 px-2 rounded-full lg:font-bold text-white "
            style={{
              background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
            }}
            onClick={handleForm}
          >
            Register now at ₹199 only
          </button>
        </div>
      </div>
    </>
  );
};

export default Dsa;

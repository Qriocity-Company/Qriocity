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
import { FaPython } from "react-icons/fa";
import { VscSymbolOperator } from "react-icons/vsc";
import { FaVideo } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FcIdea } from "react-icons/fc";
import { PiFilePpt } from "react-icons/pi";
import Testimonials4 from "../components/Testimonials4";

const ProjectWorkshop = () => {
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

  const handleForm = () => {
    window.location.href =
      "https://courses.qriocity.in/courses/Final-Year-Projects-Simplified-in-2-Hours-66f7e9dc55bbc06fd2f4b437";
  };
  const data2 = [
    { name: "Live Lectures", check1: "✅", check2: "✅" },
    { name: "Price", check1: "₹999", check2: "₹99" },
    {
      name: "Community Support",
      check1: "Only 5 days",
      check2: "Free lifetime discord community",
    },
    { name: "Accountability Mentor", check1: "❌", check2: "✅" },
    { name: "Bootcamp Completition Certificate", check1: "❌", check2: "✅" },
    { name: "Bonus", check1: "❌", check2: "Bonus worth ₹4999" },
    { name: "Class Recording", check1: "❌", check2: "✅" },
  ];
  const timelineData = [
    {
      content: "How to choose your project domain and title",
      img: "https://cdn.prod.website-files.com/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp",
      alt: "Choose Project Domain",
    },
    {
      content:
        "Step-by-step guidance on how to complete your final year project with ease.",
      img: "https://t3.ftcdn.net/jpg/00/50/28/04/360_F_50280421_c3QPI4se3DD2dpppDZKWv035EAlQrY7J.jpg",
      alt: "Step by Step guide",
    },
    {
      content:
        "How to add Novelty to your project and publish your research paper.",
      img: "https://assets.myperfectwords.com/blog/research-paper-guide/research-paper-outline/Research-Paper-Outline-MPW-9355.jpg",
      alt: "Research Paper",
    },
    {
      content:
        "The perfect project roadmap that impresses both professors and recruiters.",
      img: "https://hrfibreglass.co.uk/wp-content/uploads/2023/09/road-map.jpg",
      alt: "Project Roadmap",
    },
    {
      content:
        "Pro tips for scoring good grades in final year projects without burning out.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-Av4gw8KIUYvW5MLPU6HggvtfK7LWAYsXA&s",
      alt: "Good Grades",
    },
    {
      content:
        "Step-by-step roadmap and plan of action on how to get your dream job.",
      img: "https://www.admitedge.com/blog/wp-content/uploads/2019/02/New-to-GRE-A-step-by-step-Guide-to-GRE-ETS-Registration.jpg",
      alt: "Dream Job",
    },
  ];

  const faqs = [
    {
      question: " Is this session suitable for all final year students?",
      answer:
        "Absolutely! Whether you’re working on a technical or non-technical project, this session will help you balance both your final year work and placement preparation.",
    },
    {
      question: "When will I receive the Bonuses?",
      answer: "You’ll get all the bonuses once the session is over.",
    },
    {
      question:
        " How is this session different from other project/placement webinars?  ",
      answer:
        "This session focuses on practical strategies to manage both final year projects and placement preparation without stress, offering tools and tips that have helped thousands of students before.",
    },
    {
      question: "How long is the session?",
      answer:
        "The session lasts for 2 hours and is packed with actionable strategies to balance your project and placement preparation.",
    },
    {
      question: "Do I need any prior preparation for this session?",
      answer:
        "No prior preparation is needed. Just come with an open mind, and we’ll guide you through everything.",
    },
    {
      question: "Is the session live or recorded?",
      answer:
        "It’s a live session, so you’ll be able to interact and ask questions in real-time.",
    },
    {
      question: "Will this session help with time management?",
      answer:
        "Absolutely! We’ll focus on effective time management techniques to help you complete your project and placement prep without feeling overwhelmed.",
    },
    {
      question: "Is there a Q&A section during the session? ",
      answer:
        "Yes, there will be a dedicated Q&A section where you can ask any specific questions about your projects or placements.",
    },
    {
      question: "Can this session help with specific project titles?  ",
      answer:
        " Yes! We will also provide suggestions for project titles and guide you on how to choose the right one",
    },
    {
      question: "Will this session cover interview preparation tips as well?  ",
      answer:
        "Yes, we’ll also share tips on how to prepare for interviews and perform well during placement rounds.",
    },
  ];

  // Split the FAQs into two columns
  const firstColumnFAQs = faqs.slice(0, 5);
  const secondColumnFAQs = faqs.slice(5);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (!filled) {
      setpopForm(true);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col p-4 bg-white min-h-screen w-full">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="hidden lg:flex justify-start items-start mt-40">
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
              Final Year Projects,{" "}
            </h1>
            <h1 className=" font-bold text-3xl mt-2 lg:mt-5 lg:text-[40px]">
              Simplified in 2 Hours!
            </h1>
            <h1 className="font-semibold text-xl mt-5">
              Learn the Secrets to Stress-Free Final Year Projects!
            </h1>
            <div className="bg-[#FFF7F4] border-2 border-[#F15A29]  w-auto lg:w-[500px] mt-5 rounded-2xl flex justify-center items-center p-4 text-lg">
              <h1>
                Discover the exact strategies that have helped{" "}
                <span className="font-bold">10K+ students </span>
                complete their final year project efficiently
                <span className="font-bold">
                  {" "}
                  without compromising their placement preparation.
                </span>
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center mt-10 gap-8 lg:gap-20">
              <div className="flex justify-center items-center gap-1 lg:gap-5">
                <img src={clock} />
                <h1 className="font-bold text-lg lg:text-xl flex flex-col justify-center items-start">
                  2 hour <span>live Session</span>
                </h1>
              </div>

              <div className="flex justify-center items-center gap-1 lg:gap-5">
                <img src={calendar} />
                <h1 className="font-bold lg:text-xl text-lg flex flex-col justify-center items-start">
                  2-Hour Masterclass <span> September 16-20,2024</span>{" "}
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
                BOOK YOUR FREE SPOT NOW
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-28 lg:mt-40">
          <h1 className="font-bold lg:text-4xl text-md">
            Who{" "}
            <span
              className="px-4 lg:py-2 rounded-2xl font-bold text-white"
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
            This MasterClass?
          </h1>
          <div className="flex justify-center flex-col gap-8 items-start mt-10 lg:mt-20">
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
                Final Year Students: Learn how to balance project work and
                placement preparation effortlessly
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
                Engineering Students: Perfect your final year project without
                sacrificing placement opportunities.
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
                Postgraduates: Ace your research projects and land your dream
                job.
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
                Students Seeking Internships: Manage your time effectively to
                secure both a stellar mini project and a great internship.
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img className="lg:h-auto lg:w-auto h-11" src={bullet} />
              <h1 className="lg:text-xl text-lg font-semibold">
                Career-Focused Students: Ensure your placement preparation stays
                on track, even while tackling your final year project.
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
            in this 2-hour session?
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
              BOOK YOUR FREE SPOT NOW
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
                <FaStar size="50px" color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                  Streamlined Time Management: Master the art of balancing your
                  final year project and placement preparation.
                </h1>
              </div>
              <div className="bg-[#F5FFFF] p-4 rounded-xl border-2 border-[#2E7071] w-full lg:w-[600px] flex justify-start items-center gap-4 font-semibold text-base lg:text-lg">
                <FaStar size="50px" color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                  Maximized Job Opportunities: Impress recruiters with a strong
                  project while maintaining sharp interview skills.
                </h1>
              </div>
              <div className="bg-[#F5FFFF] p-4 rounded-xl border-2 border-[#2E7071] w-full lg:w-[600px] flex justify-start items-center gap-4 font-semibold text-base lg:text-lg">
                <FaStar size="40px" color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                  Stress-Free Workflow: Learn how to handle both without stress
                  or sacrificing quality.
                </h1>
              </div>
              <div className="bg-[#F5FFFF] p-4 rounded-xl border-2 border-[#2E7071] w-full lg:w-[600px] flex justify-start items-center gap-4 font-semibold text-base lg:text-lg">
                <FaStar size="50px" color="#26CFD3" />
                <h1 className="text-center lg:text-left">
                  Career-Boosting Project: Create a project that aligns with
                  industry trends and showcases your talent to future employers.
                </h1>
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden lg:flex flex-col items-center gap-4 px-4 lg:px-0 mt-10 lg:mt-20">
              <div className="bg-slate-50 shadow-xl rounded-2xl w-full lg:w-[250px] h-[100px] flex justify-center items-center flex-col text-lg lg:text-xl font-bold">
                Attractive{" "}
                <span className="text-base lg:text-xl">Portfolio</span>
              </div>

              <div className="bg-slate-50 shadow-xl rounded-2xl w-full lg:w-[500px] h-[100px] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 mt-2">
                <h1 className="text-lg lg:text-xl font-bold flex flex-col items-center">
                  More Job{" "}
                  <span className="text-base lg:text-xl">Oppurtunities</span>
                </h1>
                <div
                  className="rounded-full h-24 w-24 lg:h-32 lg:w-32 text-white flex flex-col justify-center items-center font-bold text-xl lg:text-2xl z-20"
                  style={{
                    background:
                      "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                  }}
                >
                  <span>Your</span>
                  <span>Career</span>
                </div>
                <h1 className="text-lg lg:text-xl font-bold flex flex-col items-center">
                  High Salary{" "}
                  <span className="text-base lg:text-xl">Package</span>
                </h1>
              </div>

              <div className="bg-slate-50 shadow-xl rounded-2xl w-full lg:w-[250px] h-[100px] flex justify-center items-center flex-col text-lg lg:text-xl font-bold">
                Stress Free
                <span className="text-base lg:text-xl">Mindset</span>
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
              BOOK YOUR FREE SPOT NOW
            </button>
          </div>

          <div className="mt-20 bg-[#FEEEE9] h-auto w-[900px] rounded-xl flex flex-col justify-start items-center p-4 mb-10">
            <h1 className="text-4xl font-bold mt-6 lg:text-[50px]">
              Exciting <span className="text-[#F26530]">bonuses</span>
            </h1>
            <div className="mt-10 lg:mt-20 flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-4 lg:gap-10 w-full">
              {/* Bonus 1 */}
              <div className="bg-white p-4 rounded-xl flex flex-col justify-between h-auto w-[250px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={25} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Top 50 <span>Final Year Project</span> Ideas E-book Rs.299
                </h1>
                <FcIdea className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>

              {/* Bonus 2 */}
              <div className="bg-white p-4 rounded-xl flex flex-col justify-between h-auto w-[250px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={25} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  PPT,Report<span> and Research </span> Templates Rs.399
                </h1>
                <PiFilePpt className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>

              {/* Bonus 3 */}
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto justify-between w-[250px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={25} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  ATS-Friendly <span>Resume and </span> Templates - Rs.99
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={doc}
                />
              </div>

              {/* Bonus 4 */}
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto justify-between w-[250px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={25} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Exclusive Access <span>to Free </span> Discord Community
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={discord}
                />
              </div>

              {/* Bonus 5 */}
              <div className="bg-white p-4 rounded-xl flex flex-col justify-between h-auto w-[250px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={25} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Python - 10 hours <span>recorded videos - Rs.1499</span>
                </h1>
                <FaPython className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>

              {/* Bonus 6 */}
              <div className="bg-white p-4 rounded-xl flex flex-col justify-between h-auto w-[250px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={25} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Aptitude - 2 hours <span>recorded videos - Rs.999</span>
                </h1>
                <VscSymbolOperator className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>

              {/* Bonus 7 */}
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto justify-between w-[250px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={25} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  DSA - 3 hours <span>recorded videos - Rs.999</span>
                </h1>
                <SiLeetcode className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>

              {/* Bonus 8 */}
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto justify-between w-[250px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={25} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  2 Recorded <span>Mock Interviews - Rs.499</span>
                </h1>
                <FaVideo className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>

              {/* Bonus 9 */}
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto justify-between w-[250px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={25} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  2 LinkedIn <span> Mastery Live Sessions - Rs.1999</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={Linkedin}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:mr-10 mt-10">
              <span className="-mr-20 -mb-4 bg-black text-white rounded-2xl px-4 z-30 py-1">
                90% seats booked
              </span>
              <button
                className="p-4 rounded-full font-bold text-white"
                style={{
                  background:
                    "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
                onClick={handleForm}
              >
                UNLOCK THESE BONUSES NOW FOR FREE !
              </button>
            </div>
          </div>
        </div>

        <Testimonials4 />

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
            TRANSFORM YOUR CAREER NOW
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center md:p-0 justify-center bg-white">
        <div className="max-w-2xl mx-auto py-8 md:mt-20 mt-10 p-2">
          <h2 className="lg:text-[36px] text-[20px] font-bold text-center text-blue-600">
            FAQs :
            <span className=" ml-2 text-gray-800">
              Here’s everything you may ask...
            </span>
          </h2>

          <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center items-start md:gap-20">
            {/* Left Column */}
            <div className="w-full md:w-auto">
              {firstColumnFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-300 mb-2 w-full md:w-[500px] transition-all duration-300"
                >
                  <button
                    className="w-full text-left flex justify-between items-center p-4 text-base md:text-lg text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 text-gray-700 bg-gray-50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="w-full md:w-auto">
              {secondColumnFAQs.map((faq, index) => (
                <div
                  key={index + 7}
                  className="border-2 border-gray-300 mb-2 w-full md:w-[500px] transition-all duration-300"
                >
                  <button
                    className="w-full text-left flex justify-between items-center p-4 text-base md:text-lg text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                    onClick={() => toggleAccordion(index + 7)}
                  >
                    {faq.question}
                    <span>{activeIndex === index + 7 ? "-" : "+"}</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index + 7 ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 text-gray-700 bg-gray-50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:mr-10 mt-5 mb-40">
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
            BOOK YOUR FREE SPOT NOW
          </button>
        </div>
      </div>

      <div className="bg-[#000000] h-[100px] w-full p-4 flex justify-between z-40 items-center bottom-0 fixed">
        <div className="flex flex-col">
          <div className="flex justify-center items-center  lg:gap-6 gap-2 h-full">
            <h1 className="font-bold text-2xl lg:text-5xl text-white lg:ml-10">
              FREE
            </h1>
            <h1 className="lg:text-[29px] text-white line-through">₹99</h1>
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
            className="lg:p-4 p-2 text-[12px] rounded-lg lg:rounded-full lg:font-bold text-white "
            style={{
              background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
            }}
            onClick={handleForm}
          >
            BOOK YOUR FREE SPOT NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectWorkshop;

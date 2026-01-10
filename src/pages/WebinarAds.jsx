import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../styles/Contact.css";
import { FaStar } from "react-icons/fa";
import Linkedin from "../assets/linkedin.png";
import doc from "../assets/doc.png";
import discord from "../assets/discord.png";
import interview from "../assets/interview.png";

import {
  FaPython,
  FaChessQueen,
  FaCertificate,
  FaCheckCircle,
  FaRobot,
  FaFileAlt,
  FaBook,
  FaChalkboardTeacher,
} from "react-icons/fa";
import Modal from "../components/Modal";

import axios from "axios";
import { ImSpinner8 } from "react-icons/im";
import emailjs from "@emailjs/browser";
import PricingSection from "../components/PricingSection";
import { Testimonial } from "../components/Testimonial";
import usePixelTracking from "../hooks/facebookPixelHook";
import {
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
const faqs = [
  {
    question: "What types of final year projects do you offer?",
    answer:
      "We offer a wide range of projects across domains such as Machine Learning, Data Science, IoT, Electronics-based, Web Development, Cloud Computing, Cybersecurity, and more.",
  },
  {
    question: "Are your projects 100% original and plagiarism-free?",
    answer:
      "Yes, all our projects come with 0% plagiarism. We ensure that the code, documentation, and content are original.",
  },
  {
    question: "Can I get a project based on an IEEE 2024 base paper?",
    answer:
      "Yes, we provide projects based on the latest IEEE 2024 base papers tailored to your specific requirements.",
  },
  {
    question: "How long will it take to deliver a complete project?",
    answer:
      "We offer a 1-day project delivery guarantee for most projects. However, the timeline may vary based on project complexity.",
  },
  {
    question: "Do you offer guidance on choosing a project domain?",
    answer:
      "Absolutely! We offer 1-1 consultation to help you select the best domain and project title based on your interests and career goals.",
  },
  {
    question: "What if I need multiple revisions for my project PPTs?",
    answer:
      "We understand that project guides may ask you to change a few slides in the PPT, and we are totally fine with doing multiple changes in the presentation.",
  },
  {
    question: "Do you provide project explanation videos?",
    answer:
      "Yes, we provide a full project explanation video where we walk you through the entire code and execution process.",
  },
  {
    question: "Is the project suitable for real-world applications?",
    answer:
      "Yes, all of our projects are designed to have real-world applicability, giving you practical experience with industry-standard technologies.",
  },
  {
    question: "Can you develop my own idea/problem statement?",
    answer:
      "Definitely! We encourage you to share your ideas, and we'll develop that into a working product.",
  },
  {
    question: "What if I need extra features added to the project?",
    answer:
      "You can request additional features, and we will assess the feasibility and make the necessary updates.",
  },
  {
    question: "What happens if my project is rejected by my guide?",
    answer:
      "Our project titles are unique and advanced research-based, so they won’t get rejected. However, if your title is rejected, we will provide a new project at no extra charge.",
  },
  {
    question: "Do you offer projects for students outside India?",
    answer:
      "Yes, we deliver projects and help with assignments internationally, ensuring they are customized to your local academic requirements.",
  },
];
const data2 = [
  {
    name: "Title Approval",
    check1: "Mostly Rejected",
    check2: "High Approval Success",
  },
  {
    name: "Review Support",
    check1: "Only Files",
    check2: "Review-Wise Training",
  },
  {
    name: "Research Paper Support",
    check1: "❌",
    check2: "Till Publishing Research Paper",
  },
  {
    name: "Documentation",
    check1: "Generic",
    check2: "College Format Guided",
  },
  {
    name: "Communication",
    check1: "One-Time",
    check2: "Till Project Final Review",
  },
  {
    name: "Doubt Solving",
    check1: "❌",
    check2: "1-1 Sessions",
  },
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

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const MainCard = ({ setShowForm }) => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  usePixelTracking(6604459609678289);

  const [formData, setFormData] = useState({
    name: "",
    senderEmail: "",
    phoneNumber: "",
    message: "",
    departmentCollege: "",
    YearCollege: "",
    College: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  async function onSubmit(event) {
    setLoading(true);
    event.preventDefault();

    // Facebook Pixel - Track form submission event
    if (window.fbq) {
      // Track the Lead event for the first Pixel ID
      window.fbq("track", "Lead", {
        pixelId: "6604459609678289", // First Pixel ID
      });
    }

    // Proceed with form submission
    await fetch("https://crm-backend-o6sb.onrender.com/adsCustomer/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, city }),
    });

    const webAppUrl =
      "https://script.google.com/macros/s/AKfycbwfekjniHA2SRTxmWJNbkZLyegxcfC7kc_T5jVo_eu_UGRLdsE6N5f4Cr9iwkmv2MrNzA/exec?source=facebook";


    await fetch(webAppUrl, {
      method: "POST",
      mode: "no-cors", // Google Script requires no-cors
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        city: city || "NA",
      }),
    });


    setLoading(false);

    // Custom styled alert using SweetAlert2
    if (city === "googleads") {
      // navigate("/thankyou", {
      //   state: { from: location.pathname + location.search },
      // });
      if (typeof window !== undefined) {
        window.location.href = "/thankyou";
      }
    } else {
      Swal.fire({
        title: "Thank You!",
        text: "Thanks for contacting, our team will contact you shortly.",
        icon: "success",
        confirmButtonText: "OK",
        background: "#f4f4f4",
        customClass: {
          popup: "rounded-lg", // Customize popup style
          title: "font-bold text-lg", // Customize title style
          content: "text-md", // Customize content style
        },
      });
      // Show popup for 2.5 seconds
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2500);
    }

    handleClick();

    // Reset form fields after submission
    setFormData({
      name: "",
      senderEmail: "",
      phoneNumber: "",
      message: "",
      departmentCollege: "",
      YearCollege: "",
      College: "",
    });
  }





  const handleClick = (e) => {
    var data = {
      name: formData.name,
      phone: formData.phoneNumber,
      message: formData.message,
      college: formData.College,
      department: formData.departmentCollege,
      year: formData.YearCollege,
    };
    emailjs
      .send("service_audiui6", "template_8gshgga", data, "gNK_PfCqn5ho5f0Kb")
      .then(
        (result) => { },
        (error) => {
          console.log(error.text);
        }
      );
  };



  return (
    <div className="lg:min-w-[1048px]  lg:h-[700px] md:min-w-[780px]  max-w-sm text-center  md:py-20 py-10 mx-auto flex flex-col p-5 justify-center items-center border-2 border-white rounded-[42px] ">
      <div className="lg:text-[72px] md:text-5xl  text-3xl md:leading-[72px]  ">
        Quick, Quality Projects <br /> Delivered in 1 Day
      </div>
      <p className="text-[#FBA154] md:text-3xl mt-5 ">
        Leave the project to us and get your dream job
      </p>

      <form onSubmit={onSubmit} className="w-[80%] mt-8 flex flex-col gap-5">
        {/* Email Field */}
        <div className="flex text-black order-1 lg:order-3 self-center lg:w-[50%] w-full">
          <input
            type="text"
            name="message"
            placeholder="Enter Message"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Name, Phone, College */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-4 text-black order-2">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="senderEmail"
            placeholder="Enter Email"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.senderEmail}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            maxLength="10"
            pattern="\d{10}"
            name="phoneNumber"
            placeholder="Enter Contact Number"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Department, Year, Message */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-4 text-black order-3 lg:order-2">
          <input
            type="text"
            name="College"
            placeholder="College Name"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.College}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="departmentCollege"
            placeholder="Enter Department"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.departmentCollege}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="YearCollege"
            placeholder="Enter year of studying"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.YearCollege}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center order-4">
          <button
            className="btn mt-10 font-bold bg-gradient-to-r from-[#FBA154] to-[#F15A29] px-8 md:px-16 md:py-4 py-2 rounded-full md:text-xl flex justify-center items-center"
            type="submit"
          >
            {loading ? (
              <ImSpinner8 size={30} className="animate-spin" />
            ) : (
              "BOOK CONSULTATION CALL"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

const ContentCard = ({ content }) => {
  return (
    <div className=" w-full rounded-xl border border-[#2ACDD0] p-6 flex gap-2 md:gap-10 items-center  mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="28"
        viewBox="0 0 27 28"
        fill="none"
      >
        <path
          d="M9.65664 5.10106C11.367 2.03393 12.2216 0.500366 13.5 0.500366C14.7784 0.500366 15.6329 2.03393 17.3434 5.10106L17.7861 5.89484C18.2721 6.76692 18.5151 7.20296 18.8931 7.4905C19.2711 7.77804 19.7436 7.88469 20.6886 8.09799L21.5472 8.29238C24.8681 9.04431 26.5272 9.41961 26.9227 10.6899C27.3169 11.9589 26.1856 13.2832 23.9218 15.9305L23.3359 16.6149C22.6933 17.3669 22.3706 17.7435 22.2262 18.2079C22.0817 18.6736 22.1303 19.1758 22.2275 20.1789L22.3166 21.0928C22.6582 24.6256 22.8296 26.3914 21.7956 27.1757C20.7615 27.9614 19.2063 27.2446 16.0987 25.8136L15.2928 25.4437C14.4099 25.036 13.9684 24.8335 13.5 24.8335C13.0316 24.8335 12.5901 25.036 11.7059 25.4437L10.9027 25.8136C7.79368 27.2446 6.23852 27.9601 5.20579 27.1771C4.17037 26.3914 4.34181 24.6256 4.68336 21.0928L4.77245 20.1802C4.86965 19.1758 4.91825 18.6736 4.77245 18.2092C4.62936 17.7435 4.30672 17.3669 3.66413 16.6163L3.07825 15.9305C0.814348 13.2846 -0.316925 11.9602 0.0772654 10.6899C0.472806 9.41961 2.13327 9.04296 5.45419 8.29238L6.31277 8.09799C7.2564 7.88469 7.72754 7.77804 8.10688 7.4905C8.48487 7.20296 8.72786 6.76692 9.21385 5.89484L9.65664 5.10106Z"
          fill="url(#paint0_linear_209_3862)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_209_3862"
            x1="13.5"
            y1="0.500366"
            x2="13.5"
            y2="27.4996"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#26CFD3" />
            <stop offset="1" stop-color="#1A8A8C" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-white md:text-2xl text-l font-[300]">
        {" "}
        {content}
      </div>
    </div>
  );
};

const ProblemCard = ({ content, boldContent, pos }) => {
  return (
    <div className=" md:min-w-[447px] min-w-[320px]  flex flex-col md:items-start items-center md:text-start text-center bg-black p-8 rounded-3xl border border-white">
      <div className="bg-[#26CFD3] p-1 rounded-full w-fit px-4 flex gap-2  items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
        >
          <path
            d="M5.05296 10.0463L8.83328 13.1966L13.8737 6.89607M9.46333 18.8671C8.30497 18.8671 7.15796 18.6389 6.08778 18.1957C5.01759 17.7524 4.0452 17.1026 3.22612 16.2836C2.40703 15.4645 1.7573 14.4921 1.31402 13.4219C0.870734 12.3517 0.642578 11.2047 0.642578 10.0463C0.642578 8.88798 0.870734 7.74097 1.31402 6.67078C1.7573 5.6006 2.40703 4.62821 3.22612 3.80912C4.0452 2.99004 5.01759 2.34031 6.08778 1.89703C7.15796 1.45374 8.30497 1.22559 9.46333 1.22559C11.8027 1.22559 14.0463 2.15491 15.7005 3.80913C17.3548 5.46334 18.2841 7.70693 18.2841 10.0463C18.2841 12.3857 17.3548 14.6293 15.7005 16.2836C14.0463 17.9378 11.8027 18.8671 9.46333 18.8671Z"
            stroke="black"
            stroke-width="1.26011"
          />
        </svg>
        Solved
      </div>

      <div className="text-white mt-3 text-lg">
        {content}
        <br />
        <span className="font-bold">{boldContent}</span>
      </div>
    </div>
  );
};

const BrochureModal = ({ setShowBrochureForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    college: "",
    department: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://crm-backend-o6sb.onrender.com/adsCustomer/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "BrochureDownload" }),
      });

      const webAppUrl = "https://script.google.com/macros/s/AKfycbwfekjniHA2SRTxmWJNbkZLyegxcfC7kc_T5jVo_eu_UGRLdsE6N5f4Cr9iwkmv2MrNzA/exec?source=facebook";
      await fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "BrochureDownload" }),
      });

      Swal.fire({
        title: "Success!",
        text: "Brochure sent to your number! It is also downloading now.",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Trigger PDF download
      const link = document.createElement("a");
      link.href = "/Qriocity Project Titles 2026.pdf";
      link.download = "Qriocity Project Titles 2026.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setShowBrochureForm(false);
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm relative">
        <button
          onClick={() => setShowBrochureForm(false)}
          className="absolute top-4 right-4 text-gray-500 font-bold text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Download Brochure</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full text-black"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full text-black"
            required
            pattern="\d{10}"
            maxLength="10"
          />
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full text-black"
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full text-black"
            required
          />
          <button
            type="submit"
            className="bg-[#F15A29] text-white font-bold py-3 rounded-full mt-2"
          >
            {loading ? <ImSpinner8 className="animate-spin mx-auto" /> : "Download Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

const WebinarAds = () => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already active
    } else {
      setActiveIndex(index); // Open the clicked one
    }
  };

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

  return (
    <div className=" w-full  ">
      {showForm && <Modal setShowForm={setShowForm} />}
      {showBrochureForm && <BrochureModal setShowBrochureForm={setShowBrochureForm} />}

      <div className="relative mt-20">
        <div className=" text-white w-full md:mt-20 mt-10  flex justify-center items-center  font-figtree ">


          <div className="bg-[#3cffff] hidden md:block absolute top-[2.5%] -left-[15%]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[12rem]"></div>
          <div className="bg-[#FF7A00]  hidden md:block absolute -top-[2%] -right-[10%] h-[35.25rem]   w-[20rem] rounded-full blur-[14rem]"></div>
          <MainCard setShowForm={setShowForm} />
        </div>
        <div className="bg-gradient-to-b  md:mt-20 mt-10  from-[#04131300] to-[#041313] w-full ">
          <div className=" md:w-5/6 mx-auto   md:p-16 p-4">
            <div className="lg:text-6xl md:text-4xl text-2xl text-center  text-white  ">
              Why Students Choose us?
            </div>

          </div>

          <div className="relative md:mt-0 mt-10  space-y-10 text-center md:p-16 p-4 ">
            <ContentCard content="Fast Project Mentorship (No Delays)" />
            <ContentCard content="Review-Wise PPT & Report Guidance" />
            <ContentCard content="Research Paper Publication Support " />
            <ContentCard content="Doubt Solving via WhatsApp" />
            <button
              className="btn md:mt-20 font-bold  mt-10 text-white bg-gradient-to-r from-[#FBA154] to-[#F15A29]  px-16 py-4 rounded-full md:text-xl "
              style={{}}
              onClick={() => {
                scrollToTop();
              }}
            >
              {" "}
              BOOK CONSULTATION CALL{" "}
            </button>
            <div className="bg-[#3cffff] hidden md:block absolute top-[50%] -left-[15%]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[12rem]"></div>
            <div className="bg-[#FF7A00]  hidden md:block absolute top-[80%] -right-[10%] h-[35.25rem]   w-[20rem] rounded-full blur-[14rem]"></div>
          </div>

          {/* What problem we will solve? section  */}
          <div className="md:mt-20 mt-10 md:p-16 p-4 z-0 ">
            <div className="lg:text-6xl md:text-4xl text-2xl text-center text-white  ">
              Stuck with Projects or Placements? Consider its solved
            </div>
            <div className="relative mt-16 md:px-20   space-y-12    ">
              <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center ">
                <ProblemCard
                  content="Guide keeps rejecting your title? "
                  boldContent=""
                  pos="left"
                />
                <div className="lg:flex hidden justify-between items-center w-full  ">
                  <div className=" w-[10px] h-[10px]  bg-white  rounded-full  text-white "></div>
                  <div
                    className="w-full h-0 "
                    style={{ border: "2px dashed white" }}
                  ></div>
                  <div className=" w-[10px] h-[10px] bg-white  rounded-full  text-white "></div>
                </div>
                <ProblemCard
                  content=" Struggling to add novelty? "
                  boldContent=""
                  pos="right"
                />
              </div>
              <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center ">
                <ProblemCard
                  content=" Don’t know which AI tools to use for coding?"
                  boldContent=""
                  pos="left"
                />
                <div className=" lg:flex hidden  justify-between items-center w-full ">
                  <div className=" w-[10px] h-[10px]  bg-white  rounded-full  text-white "></div>
                  <div
                    className="w-full h-0 "
                    style={{ border: "2px dashed white" }}
                  ></div>
                  <div className=" w-[10px] h-[10px] bg-white  rounded-full  text-white "></div>
                </div>
                <ProblemCard
                  content="Don’t know where to publish research papers?"
                  boldContent=""
                  pos="right"
                />
              </div>

              <div
                className="lg:block hidden absolute font-[500] text-white text-9xl top-[40%] left-[50%]   "
                style={{ transform: "translate( -50% , -50%)" }}
              >
                ?
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:mr-10 mt-10 mb-10">
              <button
                className="px-14 py-4 rounded-full font-bold text-white"
                style={{
                  background:
                    "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
                onClick={() => {
                  scrollToTop();
                }}
              >
                SOLVE ALL YOUR PROBLEMS NOW
              </button>
            </div>
          </div>


          <div className="md:mt-20 mt-10 text-center md:p-16 p-2 ">
            <div className="md:text-6xl  text-2xl md:p-5 p-2 md:px-20 px-10 w-fit mx-auto   text-center text-white mb-10 ">
              We’ll guide you on how to:
            </div>
            <div className="md:mt-20 mt-10 md:max-w-3xl max-w-[350px] text-center mx-auto bg-[#0C2F31] rounded-xl">
              <div className=" p-6 flex gap-3 md:gap-10  md:ml-10  items-center  mx-auto">
                <FaCheckCircle size={60} color="white" />
                <div className="text-white md:text-2xl text-lg font-[300] text-start">
                  {" "}
                  Select a title that gets approved
                </div>
              </div>

              <div className=" p-6 flex gap-3 md:gap-10  md:ml-10  items-center  mx-auto">
                <FaRobot size={60} color="white" />
                <div className="text-white md:text-2xl text-lg font-[300]">
                  {" "}
                  Add novelty and AI tech to your project
                </div>
              </div>

              <div className=" p-6 flex gap-3 md:gap-10  md:ml-10  items-center  mx-auto">
                <FaFileAlt size={60} color="white" />
                <div className="text-white md:text-2xl text-lg font-[300]">
                  {" "}
                  Prepare PPTs & reports in your college format
                </div>
              </div>

              <div className=" p-6 flex gap-3 md:gap-10   md:ml-10 items-center  mx-auto">
                <FaBook size={60} color="white" />
                <div className="text-white md:text-2xl text-lg font-[300]">
                  {" "}
                  Publish research papers at low cost
                </div>
              </div>

              <div className=" p-6 flex gap-3 md:gap-10  md:ml-10  items-center  mx-auto">
                <FaChalkboardTeacher size={60} color="white" />
                <div className="text-white md:text-2xl text-lg font-[300]">
                  {" "}
                  Explain your project confidently
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:mr-10 mt-10 ">
              <button
                className="px-14 py-4 rounded-full font-bold text-white"
                style={{
                  background:
                    "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
                onClick={() => {
                  scrollToTop();
                }}
              >
                GET END-END PROJECT SOLUTION NOW
              </button>
            </div>
          </div>

          {/* Exclusive Offer section*/}
          <div className="mt-10 bg-[#FEEEE9] h-auto w-full rounded-xl flex flex-col justify-center items-center p-4 mb-10">
            <h1 className="text-4xl font-bold mt-10 lg:text-[50px]">
              Exciting <span className="text-[#F26530]">bonuses</span>
            </h1>
            <div className="mt-10 lg:mt-20 grid grid-cols-2 md:flex md:flex-wrap justify-items-center gap-2 lg:gap-5 w-full">
              <div className="bg-white p-2 md:p-4 rounded-xl flex flex-col justify-between h-full w-full lg:h-[220px] lg:w-[270px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg lg:flex-col mt-4 ml-2">
                  Python 10 hours recorded videos Rs.1499
                </h1>

                <FaPython className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>
              <div className="bg-white p-2 md:p-4 rounded-xl flex flex-col justify-between h-full w-full lg:h-[220px] lg:w-[270px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-2 ml-2">
                  Aptitude 2 hoursrecorded videos Rs.999
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={doc}
                />
              </div>
              <div className="bg-white p-2 md:p-4 rounded-xl flex flex-col justify-between h-full w-full lg:h-[220px] lg:w-[270px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  DSA 3 hours recorded videos Rs.999
                </h1>
                <FaChessQueen className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>
              <div className="bg-white p-2 md:p-4 rounded-xl flex flex-col justify-between h-full w-full lg:h-[220px] lg:w-[270px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Higher Studies A - Z 1 hour recorded videos Rs.999
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={interview}
                />
              </div>
              <div className="bg-white p-2 md:p-4 rounded-xl flex flex-col justify-between h-full w-full lg:h-[220px] lg:w-[270px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  2 Recorded Mock Interviews Rs.499
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={interview}
                />
              </div>

              <div className="bg-white p-2 md:p-4 rounded-xl flex flex-col justify-between h-full w-full lg:h-[220px] lg:w-[270px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  2 Resume & Cold Email Live Sessions Rs.999
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={doc}
                />
              </div>
              <div className="bg-white p-2 md:p-4 rounded-xl flex flex-col justify-between h-full w-full lg:h-[220px] lg:w-[270px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  2 Linkedin Mastery Live Sessions Rs.1999
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={Linkedin}
                />
              </div>
              <div className="bg-white p-2 md:p-4 rounded-xl flex flex-col justify-between h-full w-full lg:h-[220px] lg:w-[270px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Discord Community lifetime Access
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={discord}
                />
              </div>
              <div className="bg-white p-2 md:p-4 rounded-xl flex flex-col justify-between h-full w-full lg:h-[220px] lg:w-[270px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Free Career Guidance Session By Founder & CEO of
                  Qriocity,Kesavan
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={interview}
                />
              </div>
              <div className="bg-white p-2 md:p-4 rounded-xl flex flex-col justify-between h-full w-full lg:h-[220px] lg:w-[270px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Course Completion Linkedin Shareable Certificate
                </h1>
                <FaCertificate className="place-self-end mt-5 h-10 w-10 text-blue-500 lg:h-14 lg:w-14" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:mr-10 mt-10 mb-10">
              <button
                className="px-14 py-4 rounded-full font-bold text-white"
                style={{
                  background:
                    "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
                onClick={() => {
                  scrollToTop();
                }}
              >
                UNLOCK THESE BONUSES FOR FREE NOW
              </button>
            </div>
          </div>

          <div className="mt-20 flex justify-center items-center flex-col">
            <h1 className="mt-10 text-red-500 font-bold text-[25px]">
              COMPARISON
            </h1>
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
                      Other Project Companies
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
            <div className="flex flex-col justify-center items-center lg:mr-10 mt-10 mb-10">
              <button
                className="px-14 py-4 rounded-full font-bold text-white"
                style={{
                  background:
                    "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
                onClick={() => {
                  scrollToTop();
                }}
              >
                START YOUR PROJECT JOURNEY WITH QRIOCITY
              </button>
            </div>
          </div>

          <Testimonial title="Unable to Decide? Hear our Students Success Stories" />

          {/* Still Not Sure? We Have */}
          {/* <div className="md:mt-20 mt-10 text-center mb-36 md:mb-20 md:p-16 p-4 ">
            <div className="lg:text-6xl md:text-4l  text-2xl md:p-5 p-2 md:px-20 px-10 w-fit mx-auto   text-center text-white mb-10 ">
              Still Not Sure? We Have
            </div>
            <img src={MoneyBack} className="w-1/2 mx-auto mb-10" />

            <div className="relative  lg:h-[710px] md:h-[550px] h-[360px] md:w-[974px]  mx-auto md:p-16">
              <img
                src={Refund}
                className="hidden lg:block absolute top-1/2 left-1/2  "
                style={{ transform: "translate(-50% , -50%)" }}
              />
              <div className=" absolute    lg:p-10 p-8  text-white text-justify md:leading-9 md:text-xl  flex flex-col  md:gap-10 gap-5 md:mt-28 ">
                <div>
                  Secure your incredible final year project offer today and
                  enjoy a money-back guarantee. Enroll now, explore our project
                  details, and if you're not satisfied for any reason, just drop
                  us an email, and{" "}
                  <span className="bg-[#F15A29]">
                    we'll refund your entire investment - no questions asked!
                  </span>
                </div>
                <div>
                  At Qriocity, we are committed to your satisfaction and
                  success. Dive into our comprehensive{" "}
                  <span className="bg-[#F15A29]">
                    project resources, expert guidance,
                  </span>
                  and dedicated support.
                </div>
                <div>
                  Your venture into your final year project is{" "}
                  <span className="bg-[#F15A29]"> completely risk-free</span>{" "}
                  with our money-back guarantee. Your success, satisfaction, and
                  peace of mind are our top priorities. Join us today and
                  experience the difference!
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:mr-10 mt-[250px] mb-10">
              <button
                className="px-14 py-4 rounded-full font-bold text-white"
                style={{
                  background:
                    "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
                onClick={() => {
                  scrollToTop();
                }}
              >
                BOOK YOUR FREE CONSULTATION CALL NOW
              </button>
            </div>
          </div> */}


        </div>
      </div>

      <footer className="z-40 py-4 fixed bottom-0 left-0 w-full bg-black text-white p-2 border-t border-gray-800">
        {/* Desktop View (Timer + CTA) */}
        <div className="hidden md:flex md:w-5/6 mx-auto justify-between items-center">
          <div>
            <div className="text-xl font-bold text-[#FBA154]">
              Expires in: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
            <div className="text-sm text-gray-400">
              Offer ends soon!
            </div>
          </div>
          <div>
            <button
              className="md:text-2xl text-xs bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white md:px-12 px-4 md:py-3 py-2 rounded-full transition duration-300"
              onClick={() => {
                scrollToTop();
              }}
            >
              BOOK CONSULTATION CALL
            </button>
          </div>
        </div>

        {/* Mobile View (Split Buttons) */}
        <div className="flex md:hidden w-full gap-2 px-1">
          <button
            className="flex-1 text-sm font-bold bg-white text-black py-3 rounded-full border border-gray-300 shadow-lg"
            onClick={() => setShowBrochureForm(true)}
          >
            Download Brochure
          </button>
          <button
            className="flex-1 text-sm font-bold bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white py-3 rounded-full shadow-lg"
            onClick={() => scrollToTop()}
          >
            Book Call
          </button>
        </div>
      </footer>
    </div>
  );
};

export default WebinarAds;

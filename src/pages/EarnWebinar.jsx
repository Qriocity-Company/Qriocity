import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Faq from "../components/Faq";
import "../styles/Contact.css";
import User1 from "../assets/user_01.jpg";
import User2 from "../assets/user_02.jpg";
import User3 from "../assets/user_03.jpg";
import User4 from "../assets/User4.jpg";
import Review from "../assets/review.png";
import clock from "../assets/clock.png";
import calendar from "../assets/calendar.png";
import bullet from "../assets/bullet.png";
import { FaStar } from "react-icons/fa";
import Linkedin from "../assets/linkedin.png";
import doc from "../assets/doc.png";

import discord from "../assets/discord.png";
import interview from "../assets/interview.png";

import leetcode from "../assets/leetcode.png";
import DataScience from "../assets/Data_Science.svg";
import MachineLearning from "../assets/machineLearning.svg";
import ArtificialIntelligence from "../assets/Ai.svg";
import DeepLearning from "../assets/deeplearning.svg";
import Blockchain from "../assets/blockchain.svg";
import Cloud from "../assets/cloud.svg";
import Cyber from "../assets/cyber.svg";
import Web from "../assets/web.svg";
import App from "../assets/app.svg";
import Testimonial from "../assets/testimonial.png";
import Laptop from "../assets/laptop.png";
import Group from "../assets/group.png";
import MoneyBack from "../assets/money_back.png";
import Refund from "../assets/refund.png";
import fb from "../assets/Group 1000004395.svg";
import insta from "../assets/Group 1000004397.svg";
import name from "../assets/ri_user-4-fill.svg";
import email from "../assets/ic_round-alternate-email.svg";
import phone from "../assets/fluent_phone-20-filled.svg";
import {
  FaLinkedin,
  FaPython,
  FaChessQueen,
  FaCertificate,
} from "react-icons/fa";
import hand from "../assets/Image COntact.png";
import Modal from "../components/Modal";
import laptop2 from "../assets/laptop-2.png";
import hs from "../assets/higher-studies.png";
import cap from "../assets/g-cap.png";
import cguidance from "../assets/career-guidance.png";
import play from "../assets/play-btn.svg";
import vcbtn from "../assets/vc-icon.png";
import pdf from "../assets/pdf.png";
import Popup from "../components/Popup";
import axios from "axios";
import { ImSpinner8 } from "react-icons/im";
import emailjs from "@emailjs/browser";
import PricingSection from "../components/PricingSection";
import Testimonials4 from "../components/Testimonials4";
import dream from "../assets/dream.png";
import portfolio from "../assets/portfolio.png";
import jobmarket from "../assets/jobmarket.png";
import internship from "../assets/internship.png";
import hacks from "../assets/hacks.png";
import interviewprep from "../assets/interviewprep.png";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import Testimonials9 from "../components/Testimonials9";
import usePixelTracking from "../hooks/facebookPixelHook";

// import MachineLearning from "../assets/machineLearning.svg";
const faqs = [
  {
    question: " How many hours per week do I need to commit?",
    answer:
      "Just 2-3 hours per week - completely flexible around your class schedule.",
  },
  {
    question: " Is there any registration fee?",
    answer:
      "Currently, registration is FREE (limited time offer). Regular fee is ₹1,000.",
  },
  {
    question: " Do I need any prior experience?",
    answer:
      " No prior experience needed! We provide complete training and support.",
  },
  {
    question: "How quickly can I start earning?",
    answer: "You can start earning within 7 days of joining the program.",
  },
  {
    question: "Will this affect my studies?",
    answer:
      "No! The program is designed to complement your studies with flexible timing.",
  },
  {
    question: "When will I get paid?",
    answer: " Weekly payments directly to your bank account.",
  },
  {
    question: " Who can join the program?",
    answer: " Final Year Engineering Students are welcome.",
  },
  {
    question: "What placement support do you provide?",
    answer:
      " Complete placement preparation, mock interviews, and direct referrals to top MNCs.",
  },
  {
    question: "How can I earn a iPhone and MacBook?",
    answer: "Through consistent performance and achieving monthly targets.",
  },
  {
    question: "Is the final year project support really free?",
    answer:
      "Yes! Complete project guidance and support is provided free of cost.",
  },
];

const images = [
  { name: "Data Science", src: DataScience },
  { name: "Machine Learning", src: MachineLearning },
  { name: "Artificial Intelligence", src: ArtificialIntelligence },
  { name: "Deep Learning", src: DeepLearning },
  { name: "Blockchain", src: Blockchain },
  { name: "Cloud Computing", src: Cloud },
  { name: "Cyber security", src: Cyber },
  { name: "Full Stack Development", src: Web },
  { name: "App Development", src: App },
  // Add more objects as needed
];
const data2 = [
  { name: "Registration Fee", check1: "High", check2: "FREE (Limited Time)" },
  {
    name: "Time Commitment",
    check1: "Full-time",
    check2: "Few hours/week",
  },
  { name: "Rewards", check1: "❌", check2: "iPhone 16, MacBook M2 Engineers" },
  {
    name: "Referral Program",
    check1: "❌",
    check2: "Earn upto 10k by referring friends",
  },
  {
    name: "Placement Preparation Suppor",
    check1: "❌",
    check2: "Free Placement Support ",
  },
  { name: "Bonus", check1: "❌", check2: "Bonus worth ₹7993" },
];

const timelineData = [
  {
    content:
      " Step 1: Initial Registration – Free registration and program orientation",
    img: "https://cdn.prod.website-files.com/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp",
    alt: "Choose Project Domain",
  },
  {
    content:
      "Step 2: Training & Onboarding – Complete training on your role and responsibilities",
    img: "https://t3.ftcdn.net/jpg/00/50/28/04/360_F_50280421_c3QPI4se3DD2dpppDZKWv035EAlQrY7J.jpg",
    alt: "Step by Step guide",
  },
  {
    content:
      "Step 3: Goal Setting – Set your monthly earning and learning targets",
    img: "https://assets.myperfectwords.com/blog/research-paper-guide/research-paper-outline/Research-Paper-Outline-MPW-9355.jpg",
    alt: "Research Paper",
  },
  {
    content: "Step 4: Start Earning – Begin your journey as a campus expert",
    img: "https://hrfibreglass.co.uk/wp-content/uploads/2023/09/road-map.jpg",
    alt: "Project Roadmap",
  },
  {
    content:
      "Step 5: Skills Development – Access to premium courses and training materials",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-Av4gw8KIUYvW5MLPU6HggvtfK7LWAYsXA&s",
    alt: "Good Grades",
  },
  {
    content:
      "Step 6: Rewards & Recognition – Earn exciting rewards like iPhone 16 and MacBook M2",
    img: "https://www.admitedge.com/blog/wp-content/uploads/2019/02/New-to-GRE-A-step-by-step-Guide-to-GRE-ETS-Registration.jpg",
    alt: "Dream Job",
  },
  {
    content:
      "Step 7: Career Development – Get job referrals and placement assistance",
    img: "https://www.admitedge.com/blog/wp-content/uploads/2019/02/New-to-GRE-A-step-by-step-Guide-to-GRE-ETS-Registration.jpg",
    alt: "Dream Job",
  },
];

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const MainCard = ({ setShowForm }) => {
  const [loading, setLoading] = useState(false);
  const [popuploading, setPopuploading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupForm, setpopForm] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [department, setDepartment] = useState();
  const [college, setCollege] = useState();
  const [year, setYear] = useState();
  const filled = localStorage.getItem("PopUp");
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
    event.preventDefault(); // Prevent the default form submission behavior

    setLoading(true);
    if (window.fbq) {
      // Track the Lead event for the first Pixel ID
      window.fbq("track", "Lead", {
        pixelId: "6604459609678289", // First Pixel ID
      });
    }

    try {
      // Proceed with form submission
      await fetch("https://crm-backend-o6sb.onrender.com/earnCustomer/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      // Custom styled alert using SweetAlert2
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

      await updateSpreadSheet(); // Update the spreadsheet if needed
      handleClick(); // Additional logic or redirection after form submission

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

      // Show popup for 2.5 seconds
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2500);
    } catch (error) {
      console.error("Error during form submission:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an issue with the form submission. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        background: "#f4f4f4",
        customClass: {
          popup: "rounded-lg",
          title: "font-bold text-lg",
          content: "text-md",
        },
      });
    } finally {
      setLoading(false); // Hide loading state
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const handleClose = () => {
    setpopForm(false);
  };

  useEffect(() => {
    if (!filled) {
      setpopForm(true);
    }
  }, []);

  const updateSpreadSheet = async () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    // Format the time as HH:MM:SS
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    try {
      fetch("https://sheetdb.io/api/v1/jjsk0slgx4fy2", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Name: formData.name,
              Email: formData.senderEmail,
              Date: formattedDate,
              Time: formattedTime,
              Number: formData.phoneNumber,
              Message: formData.message,
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const updatePopSpreadSheet = async () => {
    const currentDate = new Date();
    // Format the date as DD/MM/YYYY
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    // Format the time as HH:MM:SS
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    try {
      const response = await fetch("https://sheetdb.io/api/v1/qr63j4ua71frc", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Name: name,
              Email: email,
              Date: formattedDate,
              Time: formattedTime,
              Contact: phone,
            },
          ],
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePopUp = async () => {
    setPopuploading(true);
    const currentDate = new Date();
    try {
      const { data } = await axios.post(
        "https://crm-backend-o6sb.onrender.com/enquiry/newStudent",
        {
          name: name,
          email: email,
          phone: phone,
          date: currentDate.toLocaleDateString(),
        }
      );

      if (data?.success) {
        handleClickPopup();
        localStorage.setItem("PopUp", true);
        setPopuploading(false);
        setpopForm(false);
        await updatePopSpreadSheet();
        window.location.href =
          "https://docs.google.com/document/d/1p3nWOTCdn80Jfyb0t9BH1rrBSOcdFCuzb2UBQjIuBJY/edit?usp=drivesdk";
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      .send("service_audiui6", "template_2j6t4hf", data, "gNK_PfCqn5ho5f0Kb")
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClickPopup = (e) => {
    var data = {
      name: name,
      phone: phone,
      email: email,
    };
    emailjs
      .send("service_audiui6", "template_gftaflp", data, "gNK_PfCqn5ho5f0Kb")
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-32E3FF3TEW"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-32E3FF3TEW', {
              page_path: '/webinar',
            });
          `}
        </script>
      </Helmet>
      <div className="lg:min-w-[1048px]  lg:h-[544px] md:min-w-[780px]  max-w-sm text-center  md:py-20 py-10 mx-auto flex flex-col p-5 justify-center items-center border-2 border-white rounded-[42px] ">
        <div className="lg:text-[72px] md:text-5xl  text-3xl md:leading-[72px]  ">
          Earn ₹50,000/Month With
          <br /> Zero Experience Required
        </div>
        <p className="text-[#FBA154] md:text-3xl mt-5 ">
          Join 10,000+ students who are already earning while learning!
        </p>

        <form onSubmit={onSubmit} className="w-[80%] mt-8">
          <div className="flex  flex-col  md:flex-row w-[100%] justify-between gap-4 text-black">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="p-4 bg-white rounded-lg outline-none w-full "
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              maxlength="10"
              pattern="\d{10}"
              name="phoneNumber"
              placeholder="Enter Contact Number"
              className="p-4 bg-white rounded-lg outline-none w-full"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="College"
              placeholder="College Name"
              className="p-4 bg-white rounded-lg outline-none w-full"
              value={formData.College}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex  flex-col  mt-5 md:mt-10  md:flex-row w-[100%] justify-between gap-4 text-black">
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
          <div className="flex justify-center items-center">
            <button
              className="btn mt-10  font-bold bg-gradient-to-r from-[#FBA154] to-[#F15A29] px-8 md:px-16 md:py-4 py-2 rounded-full md:text-xl  flex justify-center items-center"
              type="submit"
            >
              {" "}
              {loading ? (
                <ImSpinner8 size={30} className="animate-spin" />
              ) : (
                "REGISTER FOR FREE NOW"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

const AchivementCard = ({ number, title }) => {
  return (
    <div className="max-w-xs bg-white p-5 rounded-xl ">
      <div className="text-[#F15A29] md:text-5xl text-4xl font-[700] ">
        {number}+
      </div>
      <div className="text-xl font-[500]  "> {title}</div>
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
      <div className="text-white md:text-2xl text-xs font-[300]">
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

      <div className="text-white mt-3 ">
        <span className="font-bold">{boldContent}</span>
        <br />
        {content}
      </div>
    </div>
  );
};

const EarnWebinar = () => {
  const [showForm, setShowForm] = useState(false);
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

      <div className="relative mt-20">
        <div className=" text-white w-full md:mt-20 mt-10  flex justify-center items-center  font-figtree ">
          {/* <div class="blob blob-orange"></div>
    <div class="blob blob-blue"></div> */}

          <div className="bg-[#3cffff] hidden md:block absolute top-[2.5%] -left-[15%]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[12rem]"></div>
          <div className="bg-[#FF7A00]  hidden md:block absolute -top-[2%] -right-[10%] h-[35.25rem]   w-[20rem] rounded-full blur-[14rem]"></div>
          <MainCard setShowForm={setShowForm} />
        </div>
        <div className="bg-gradient-to-b  md:mt-20 mt-10  from-[#04131300] to-[#041313] w-full ">
          <div className=" md:w-5/6 mx-auto   md:p-16 p-4">
            <div className="lg:text-6xl md:text-4xl text-2xl text-center  text-white  ">
              Why join us?
            </div>
          </div>

          <div className="relative md:mt-0 mt-10  space-y-10 text-center md:p-16 p-4 ">
            <ContentCard content="Earn upto ₹50,000 per month" />
            <ContentCard content="Trusted by 10,000+ students just like you" />
            <ContentCard content="iPhone 16 & MacBook M2 for top performers" />
            <ContentCard content="Free placement preparation Course (Worth ₹8,000)" />
            <ContentCard content="Free Internship Completion Certificate" />
            <ContentCard content="Advanced Job Referrals to Top MNCs" />
            <button
              className="btn md:mt-20 font-bold  mt-10 text-white bg-gradient-to-r from-[#FBA154] to-[#F15A29]  px-16 py-4 rounded-full md:text-xl "
              style={{}}
              onClick={() => {
                scrollToTop();
              }}
            >
              {" "}
              REGISTER FOR FREE NOW{" "}
            </button>
            <div className="bg-[#3cffff] hidden md:block absolute top-[50%] -left-[15%]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[12rem]"></div>
            <div className="bg-[#FF7A00]  hidden md:block absolute top-[80%] -right-[10%] h-[35.25rem]   w-[20rem] rounded-full blur-[14rem]"></div>
          </div>

          {/* What problem we will solve? section  */}
          <div className="md:mt-20 mt-10 md:p-16 p-4 z-0 ">
            <div className="lg:text-6xl md:text-4xl text-2xl text-center text-white  ">
              Need Support for Your Life & Career Growth? Consider It Done.
            </div>
            <div className="relative mt-16 md:px-20   space-y-12    ">
              <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center ">
                <ProblemCard
                  content="Earn ₹50,000 monthly with just a few hours of work - perfect for students!"
                  boldContent="Need Extra Income for College? "
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
                  content="Get comprehensive training materials, mock interviews, and expert guidance - completely FREE!"
                  boldContent="Worried About Placement Preparation? "
                  pos="right"
                />
              </div>
              <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center ">
                <ProblemCard
                  content="Work from anywhere, anytime - fully flexible with your college schedule.
"
                  boldContent="Looking for Part-Time Work? "
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
                  content="Earn rewards like iPhone 16 and MacBook M2 by performing well."
                  boldContent="Want Exciting Rewards? "
                  pos="right"
                />
              </div>

              <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center ">
                <ProblemCard
                  content="Receive internship certification and real-world work experience.

"
                  boldContent="Looking for Internship Opportunities? "
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
                  content="Start earning from week one with guaranteed monthly payments."
                  boldContent="Need Financial Independence? "
                  pos="right"
                />
              </div>

              <div
                className="lg:block hidden absolute font-[500] text-white text-9xl top-[25%] left-[50%]   "
                style={{ transform: "translate( -50% , -50%)" }}
              >
                ?
              </div>

              <div
                className="lg:block hidden absolute font-[500] text-white text-9xl top-[60%] left-[50%]   "
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

          <div className="bg-[#EDEDED] mt-20 flex flex-col justify-start items-center p-4">
            <h1 className="font-bold lg:text-4xl lg:mt-20 mt-8">
              Complete A-Z{" "}
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
                Roadmap for{" "}
              </span>{" "}
              Your Growth
            </h1>

            <div className="relative flex flex-col justify-center items-center mt-10 gap-10 px-4 sm:px-8 md:px-16">
              {/* Vertical Line */}
              <div className="absolute inset-0 flex justify-center">
                <div className="w-1 h-full bg-gray-300 relative">
                  {/* Circles on the line */}
                  <div
                    className="hidden lg:block absolute w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"
                    style={{ top: "0%" }} // Start of the line
                  ></div>
                  <div
                    className="hidden lg:block absolute w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"
                    style={{ top: "16%" }}
                  ></div>
                  <div
                    className="hidden lg:block absolute w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"
                    style={{ top: "33%" }}
                  ></div>
                  <div
                    className="hidden lg:block absolute w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"
                    style={{ top: "50%" }}
                  ></div>
                  <div
                    className="hidden lg:block absolute w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"
                    style={{ top: "66%" }}
                  ></div>
                  <div
                    className="hidden lg:block absolute w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"
                    style={{ top: "83%" }}
                  ></div>
                  <div
                    className="hidden lg:block absolute w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"
                    style={{ top: "100%" }} // End of the line
                  ></div>
                </div>
              </div>

              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } justify-center  items-center gap-10 md:gap-20 z-40`}
                >
                  <img
                    className="h-[250px] w-full md:w-[250px] object-contain"
                    src={item.img}
                    alt={item.alt}
                  />
                  <div className="bg-slate-200 p-4 rounded-xl h-[200px] w-full md:w-[200px] lg:w-[250px] font-semibold text-lg flex justify-center items-center">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive Offer section*/}
          <div className="mt-10 bg-[#FEEEE9] h-auto w-full rounded-xl flex flex-col justify-center items-center p-4 mb-10">
            <h1 className="text-4xl font-bold mt-10 lg:text-[50px]">
              Exciting <span className="text-[#F26530]">bonuses</span>
            </h1>
            <div className="mt-10 lg:mt-20 flex flex-wrap justify-center items-center gap-4 lg:gap-5 w-full">
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Python <span>10 hours </span> <span>recorded videos</span>
                  Rs.1499
                </h1>

                <FaPython className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Apptitude <span>2 hours</span> <span>recorded videos</span>
                  Rs.999
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={doc}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  DSA <span>3 hours</span> <span>recorded videos </span>
                  <span>Rs.999</span>
                </h1>
                <FaChessQueen className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Higher Studies <span>A - Z</span> 1 hour recorded videos{" "}
                  <span>Rs.999</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={interview}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  2 <span>Recorded</span> <span>Mock Interviews </span>
                  <span>Rs.499</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={interview}
                />
              </div>

              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  2 Resume <span>& Cold Email</span> <span>Live Sessions</span>{" "}
                  Rs.999
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={doc}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  2 <span>Linkedin Mastery</span> <span>Live Sessions</span>
                  Rs.1999
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={Linkedin}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Discord <span>Community</span> <span>lifetime </span>
                  <span>Access</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={discord}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Free Career Guidance <span>Session By Founder</span>& CEO of{" "}
                  <span>Qriocity,Kesavan</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={interview}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Course <span>Completion</span>{" "}
                  <span>Linkedin Shareable </span>
                  <span> Certificate</span>
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
                      Other Programs
                    </th>
                    <th className=" text-center p-4 text-orange-500 lg:text-2xl text-xl border-b border-gray-700">
                      Our Programs
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
                START YOUR CAMPUS EXPERT JOURNEY WITH QRIOCITY
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col mt-20 items-center justify-center">
            <h1 className="text-white text-[32px] font-bold ">
              Exclusive Offers
            </h1>
            <PricingSection />
          </div>

          <Testimonials9 />

          <div className="w-full flex flex-col items-center p-2 md:p-0 justify-center mt-20 bg-white">
            <div className="max-w-5xl mx-auto py-8 md:mt-20">
              <h2 className="lg:text-[36px] text-[20px] font-bold text-center text-blue-600">
                FAQs :
                <span className="ml-2 text-gray-800">
                  Here’s everything you may ask...
                </span>
              </h2>

              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                REGISTER FOR FREE NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className=" z-40 py-6   fixed bottom-0 left-0 w-full bg-black text-white p-2">
        <div className="md:w-5/6 mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <p className="md:text-4xl text-xl font-semibold  text-[#F15A29] ">
                Free
                <span className="ml-3 md:text-2xl text-xs line-through">
                  {" "}
                  ₹1000
                </span>
              </p>
              <p className="md:text-lg  text-sm font-semibold">
                Offer ends in {timeLeft.hours}h {timeLeft.minutes}m{" "}
                {timeLeft.seconds}s!!!
              </p>
            </div>

            <div>
              <button
                className="md:text-2xl text-xs bg-gradient-to-r from-[#FBA154] to-[#F15A29]  text-white md:px-12 px-4 md:py-4 py-2 rounded-full transition duration-300 "
                onClick={() => {
                  scrollToTop();
                }}
              >
                REGISTER FOR FREE NOW
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EarnWebinar;

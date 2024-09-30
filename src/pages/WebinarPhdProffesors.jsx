import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../styles/Contact.css";
import { FaSchool, FaStar } from "react-icons/fa";
import Linkedin from "../assets/linkedin.png";
import discord from "../assets/discord.png";
import MoneyBack from "../assets/money_back.png";
import Refund from "../assets/refund.png";
import Modal from "../components/Modal";
import { ImSpinner8 } from "react-icons/im";
import emailjs from "@emailjs/browser";
import PricingSection3 from "../components/PricingSection3";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Testimonials7 from "../components/Testimonials7";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GrInProgress } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TbReportAnalytics, TbReportSearch } from "react-icons/tb";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import step1 from "../assets/ukpics/step1.jpg";
import step2 from "../assets/ukpics/step2.jpg";
import step3 from "../assets/ukpics/step3.jpg";
import step4 from "../assets/ukpics/step4.jpg";
import step5 from "../assets/ukpics/step5.jpg";
import step6 from "../assets/ukpics/step6.jpg";
import step7 from "../assets/ukpics/step7.jpg";
import step8 from "../assets/ukpics/step8.jpg";
import step9 from "../assets/ukpics/step9.jpg";
import { TbFileCv } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { BiSolidReport } from "react-icons/bi";
import usePixelTracking from "../hooks/facebookPixelHook";

// import MachineLearning from "../assets/machineLearning.svg";
const faqs = [
  {
    question: "Do you offer topic suggestions for AI/ML research? ",
    answer:
      "Yes, we assist in developing novel ideas that align with current trends in AI and machine learning.",
  },
  {
    question: "How do you ensure originality?",
    answer:
      "We use Turnitin and provide a detailed report to ensure your research is 100% original.",
  },
  {
    question: "Can I monitor progress?  ",
    answer:
      "Yes, we provide regular progress reports and drafts to keep you informed.",
  },
  {
    question: "Do you offer support for AI/ML model development?",
    answer:
      "Absolutely! We specialize in developing and optimizing AI/ML models tailored to your research needs.",
  },
  {
    question: "Is the consultation free?  ",
    answer:
      "Yes, we offer a free initial consultation to discuss your research goals and how we can assist you.",
  },
  {
    question: "What type of data can you work with? ",
    answer:
      " We work with a wide range of data types, including structured, unstructured, time-series, and image data for AI/ML model development.",
  },
  {
    question: " Can you assist with thesis writing and formatting?  ",
    answer:
      "Yes, we provide full support for structuring, writing, and formatting your thesis according to academic standards.",
  },
  {
    question: "Do you offer support after the research is completed?   ",
    answer:
      "Yes, we provide post-submission support, including revisions and answering questions during your review process.",
  },
  {
    question: "Can you help with literature review?",
    answer:
      " Yes, we assist in conducting a comprehensive literature review and identifying key papers relevant to your research topic.",
  },
  {
    question: "What is the timeline for completing a research paper or thesis?",
    answer:
      " Timelines vary based on the complexity of your project, but we always work to meet your deadlines, with ongoing progress updates.",
  },
  {
    question: "Do you provide data analysis services? ",
    answer:
      " Yes, we offer advanced data analysis services for quantitative, qualitative, and mixed-methods research.",
  },
  {
    question: "Can you help with publishing my paper?  ",
    answer:
      " Yes, we assist in preparing your research for submission, formatting according to journal requirements, and providing guidance on choosing the right journal.",
  },
];

const data2 = [
  {
    name: "Formatting according to Journal guidelines",
    check1: "❌",
    check2: "✅",
  },
  {
    name: "Experience",
    check1: "1-2 years of Experience",
    check2: "5+ Years of Experience",
  },
  {
    name: "Team",
    check1: "Inexperienced team",
    check2: "Professional team of expert developers & writers",
  },
  {
    name: "Research Novelty ",
    check1: "Basic",
    check2: "Cutting-Edge Research in AI and ML",
  },
  {
    name: "Plagiarism",
    check1: "No Turtunin Report",
    check2: "Turnitin Report for both AI and Plagiarism",
  },
  {
    name: "Progress reports",
    check1: "Only Final Report",
    check2: "Weekly Progress Reports",
  },
  {
    name: "Referral Program",
    check1: "❌",
    check2: "Earn upto 10K by referring others",
  },
  {
    name: "Bonus",
    check1: "❌",
    check2: "Bonuses worth ₹7993",
  },
  {
    name: "Price Discount",
    check1: "5-10%",
    check2: "30-40%",
  },
  {
    name: "Doubt solving Sessions",
    check1: "❌",
    check2: "1-1 Project explanations",
  },
  {
    name: "Delivery timing",
    check1: "No guaranteed delivery date",
    check2: "Guaranteed delivered date",
  },
];

const timelineData = [
  {
    content:
      "Initial Consultation – We begin with a 1-on-1 consultation to understand your research goals, timelines, and specific requirements.",
    img: step1,
    alt: "Choose Project Domain",
    step: "Step 1",
  },
  {
    content:
      "Topic Ideation & Proposal Writing – We assist in developing novel research topics and drafting proposals that meet academic standards and gain approval.",
    img: step2,
    alt: "Step by Step guide",
    step: "Step 2",
  },
  {
    content:
      "Literature Review – We perform a deep dive into existing research, ensuring a robust theoretical foundation for your paper.",
    img: step3,
    alt: "Research Paper",
    step: "Step 3",
  },
  {
    content:
      "Research Design & Methodology – We design a research plan tailored to your project, covering both qualitative and quantitative methods.",
    img: step4,
    alt: "Project Roadmap",
    step: "Step 4",
  },
  {
    content:
      "Data Collection & AI/ML Model Development – Our experts collect and analyze data using cutting-edge machine learning techniques, ensuring accurate and valuable insights.",
    img: step5,
    alt: "Good Grades",
    step: "Step 5",
  },
  {
    content:
      "Writing & Structuring – We meticulously write each section, from introduction to conclusion, maintaining logical flow and academic coherence.",
    img: step6,
    alt: "Dream Job",
    step: "Step 6",
  },
  {
    content:
      " Plagiarism & AI Checks – We validate the originality of your work with Turnitin to ensure no AI-generated content.",
    img: step7,
    alt: "Dream Job",
    step: "Step 7",
  },
  {
    content:
      "Final Edits & Revisions – We incorporate your feedback, ensuring the final document is polished and ready for submission",
    img: step8,
    alt: "Dream Job",
    step: "Step 8",
  },
  {
    content:
      "Submission-Ready Paper or Thesis – Receive a research paper or thesis that adheres to all university or journal guidelines.",
    img: step9,
    step: "Step 9",
  },
];

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const MainCard = ({ setShowForm }) => {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  usePixelTracking(1217867812672830);

  const [formData, setFormData] = useState({
    name: "",
    senderEmail: "",
    phoneNumber: "",
    fieldOfStudy: "",
    requirement: "",
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

    if (window.fbq) {
      // Track the Lead event for the first Pixel ID
      window.fbq("track", "Lead", {
        pixelId: "1217867812672830", // First Pixel ID
      });
    }

    // Proceed with form submission
    await fetch("https://crm-backend-o6sb.onrender.com/phdProffesors/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    setLoading(false);

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

    await updateSpreadSheet();
    handleClick();

    // Reset form fields after submission
    setFormData({
      name: "",
      senderEmail: "",
      phoneNumber: "",
      fieldOfStudy: "",
      requirement: "",
    });

    // Show popup for 2.5 seconds
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2500);
  }

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
              Message: formData.requirement,
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

  const handleClick = (e) => {
    var data = {
      name: formData.name,
      phone: formData.phoneNumber,
      message: formData.message,
    };
    emailjs
      .send("service_audiui6", "template_mwv0oup", data, "gNK_PfCqn5ho5f0Kb")
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="p-4">
      <div className="lg:min-w-[1048px]  lg:h-[544px] md:min-w-[780px]  max-w-sm text-center  md:py-20 py-10 mx-auto flex flex-col p-5 justify-center items-center border-2 border-white rounded-[42px] ">
        <div className="lg:text-[60px] md:text-5xl  text-3xl md:leading-[72px]  mt-8">
          Quick, Quality Phd Thesis &
          <br /> Research Papers delivered with 0% AI and plagiarism
        </div>
        <p className="text-[#FBA154] md:text-3xl mt-5 ">
          Leave the research paper work to us and finish your PhD
          with zero stress
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
              maxlength="10"
              pattern="\d{10}"
              name="phoneNumber"
              placeholder="Enter Contact Number"
              className="p-4 bg-white rounded-lg outline-none w-full"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex  flex-col  mt-5 md:mt-10  md:flex-row w-[100%] justify-between gap-4 text-black">
            <input
              type="text"
              name="fieldOfStudy"
              placeholder="Field Of Study "
              className="p-4 bg-white rounded-lg outline-none w-full"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="requirement"
              placeholder="Your requirement"
              className="p-4 bg-white rounded-lg outline-none w-full"
              value={formData.requirement}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="btn mt-10  lg:font-bold font-semibold bg-gradient-to-r from-[#FBA154] to-[#F15A29] px-6 md:px-16 md:py-4 py-2 rounded-full md:text-xl  flex justify-center items-center"
              type="submit"
            >
              {" "}
              {loading ? (
                <ImSpinner8 size={30} className="animate-spin" />
              ) : (
                "BOOK FREE CONSULTATION CALL"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
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
    <div className=" w-full rounded-xl border border-[#2ACDD0] p-6 flex justify-start items-center gap-2 md:gap-10   mx-auto">
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
      <div className="text-white md:text-2xl text-xs font-[300] text-start">
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
        {content}
        <br />
        <span className="font-bold">{boldContent}</span>
      </div>
    </div>
  );
};

const WebinarPhdProffesors = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    // If the currently active FAQ is clicked again, close it; otherwise, set the new index
    setActiveIndex(activeIndex === index ? null : index);
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
          <div className="bg-[#3cffff] hidden md:block absolute top-[2.5%] -left-[15%]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[12rem]"></div>
          <div className="bg-[#FF7A00]  hidden md:block absolute -top-[2%] -right-[10%] h-[35.25rem]   w-[20rem] rounded-full blur-[14rem]"></div>
          <MainCard setShowForm={setShowForm} />
        </div>
        <div className="bg-gradient-to-b  md:mt-20 mt-10  from-[#04131300] to-[#041313] w-full ">
          <div className=" md:w-5/6 mx-auto   md:p-16 p-4">
            <div className="lg:text-6xl md:text-4xl text-2xl text-center  text-white  ">
              Why Choose us?
            </div>
          </div>

          <div className="relative md:mt-0 mt-10  space-y-10 text-center md:p-16 p-4 ">
            <ContentCard content="On-Time Delivery Guaranteed" />
            <ContentCard content="Expert Developers & Researchers" />
            <ContentCard content="5+ Years of Expertise" />
            <ContentCard content="0% AI and Plagiarism – Verified with Turnitin Reports" />
            <ContentCard content=" Proven Success with Over 500 Published Papers and Projects" />
            <button
              className="btn md:mt-20 lg:font-bold font-semibold  mt-10 text-white bg-gradient-to-r from-[#FBA154] to-[#F15A29]  lg:px-16 lg:py-4 p-4 rounded-full md:text-xl "
              style={{}}
              onClick={() => {
                scrollToTop();
              }}
            >
              {" "}
              BOOK FREE CONSULTATION CALL{" "}
            </button>
            <div className="bg-[#3cffff] hidden md:block absolute top-[50%] -left-[15%]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[12rem]"></div>
            <div className="bg-[#FF7A00]  hidden md:block absolute top-[80%] -right-[10%] h-[35.25rem]   w-[20rem] rounded-full blur-[14rem]"></div>
          </div>

          {/* What problem we will solve? section  */}
          <div className="md:mt-20 mt-10 md:p-16 p-4 z-0 ">
            <div className="lg:text-6xl md:text-4xl text-2xl text-center text-white  ">
              Need Support for Your PhD Thesis or Research Paper? Consider It’s
              Done.
            </div>
            <div className="relative mt-16 md:px-20   space-y-12    ">
              <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center ">
                <ProblemCard
                  content="Struggling with Complex Research? "
                  boldContent="We simplify the entire process, from formulating research questions to executing advanced AI/ML models.
"
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
                  content="Need breakthrough ideas?"
                  boldContent="We help you create research-worthy, innovative concepts in AI and ML.
"
                  pos="right"
                />
              </div>
              <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center ">
                <ProblemCard
                  content="Worried About Deadlines?"
                  boldContent="We deliver on time, providing continuous progress updates and guaranteeing timely submission."
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
                  content="Concerned About Plagiarism? "
                  boldContent="We ensure 100% originality in all deliverables, backed by comprehensive Turnitin reports."
                  pos="right"
                />
              </div>

              <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center ">
                <ProblemCard
                  content=" Require Guidance in Writing?"
                  boldContent="Our Developers & Researchers are here to assist with structured writing that aligns with academic standards.
"
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
                  content="Data Analysis Challenges?"
                  boldContent="We handle advanced data analysis for quantitative, qualitative, and mixed-methods research with ease.
"
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
                className="lg:px-14 lg:py-4 p-6 rounded-full lg:font-bold font-semibold text-white"
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
              Your Research Paper or Thesis
            </h1>

            <div className="relative flex flex-col justify-center items-center mt-10 gap-10 px-4 sm:px-8 md:px-16 mb-5">
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
                    className="h-[250px] w-[250px] rounded-lg hover:opacity-80 cursor-pointer"
                    src={item.img}
                    alt={item.alt}
                  />
                  <div className="bg-slate-200 p-4 rounded-xl h-[280px] w-full md:w-[200px] lg:w-[250px] font-semibold flex flex-col justify-center items-center">
                    <h1 className="font-bold text-[26px] text-orange-400">
                      {item.step}
                    </h1>
                    <h2 className="mt-2 text-lg lg:text-start text-center">
                      {" "}
                      {item.content}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:mt-20 mt-10 text-center md:p-16 p-2 ">
            <div className="md:text-6xl  text-2xl md:p-5 p-2 md:px-20 px-10 w-fit mx-auto   text-center text-white mb-10 ">
              Our Deliverables
            </div>
            <div className="md:mt-20 mt-10 md:max-w-3xl max-w-[350px] text-center mx-auto bg-[#0C2F31] rounded-xl">
              {/* Reusable Item Wrapper */}
              {[
                {
                  icon: <TbReportAnalytics size="50px" color="white" />,
                  text: "Complete Research Paper/Thesis ",
                },
                {
                  icon: <HiOutlineDocumentReport size="50px" color="white" />,
                  text: "Turnitin Reports for AI and Plagiarism ",
                },
                {
                  icon: <TbReportSearch size="50px" color="white" />,
                  text: "Advanced Data Analysis Reports for AI/ML Models",
                },
                {
                  icon: <FaSchool size="50px" color="white" />,
                  text: "Customized Formatting as per academic guidelines ",
                },
                {
                  icon: <LiaChalkboardTeacherSolid size="50px" color="white" />,
                  text: "Unlimited Revisions until your satisfaction",
                },
                {
                  icon: <GrInProgress size="50px" color="white" />,
                  text: "Regular Progress Reports at each stage  ",
                },
                {
                  icon: <RiCustomerServiceFill size="50px" color="white" />,
                  text: "24/7 Research Support for all queries",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 flex items-center gap-6 md:gap-10"
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div className="text-white text-left md:text-2xl text-xs font-light">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center items-center lg:mr-10 mt-10 ">
              <button
                className="lg:px-14 lg:py-4 p-6  rounded-full font-bold text-white"
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
          </div>

          {/* Exclusive Offer section*/}
          <div className="mt-10 bg-[#FEEEE9] h-auto w-full rounded-xl flex flex-col justify-center items-center p-4 mb-10">
            <h1 className="text-4xl font-bold mt-10 lg:text-[50px]">
              Exciting <span className="text-[#F26530]">bonuses</span>
            </h1>

            {/* Bonuses Grid */}
            <div className="mt-10 lg:mt-20 flex justify-center items-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-20 justify-center items-center mx-auto">
                {/* Bonus Item 1 */}
                <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[260px] lg:h-[220px] lg:w-[250px]">
                  <FaStar className="ml-2" size={25} color="#F15A29" />
                  <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                    AI/ML Research based AI/ML Project Titles worth Rs.999
                  </h1>
                  <TbFileCv className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
                </div>

                {/* Bonus Item 2 */}
                <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[260px] lg:h-[220px] lg:w-[250px]">
                  <FaStar className="ml-2" size={25} color="#F15A29" />
                  <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                    Access to Exclusive AI Tools worth Rs.1999
                  </h1>
                  <img
                    className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                    src={Linkedin}
                  />
                </div>

                {/* Bonus Item 3 */}
                <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[260px] lg:h-[220px] lg:w-[250px]">
                  <FaStar className="ml-2" size={25} color="#F15A29" />
                  <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                    Unlimited Turnitin Reports worth Rs.1999
                  </h1>
                  <img
                    className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                    src={discord}
                  />
                </div>

                {/* Bonus Item 4 */}
                <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[260px] lg:h-[220px] lg:w-[250px]">
                  <FaStar className="ml-2" size={25} color="#F15A29" />
                  <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                    How to write Research Paper A-Z Guideline worth Rs.2999
                  </h1>
                  <CiDiscount1 className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
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
                      Other Project Centers
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
                className="lg:px-14 lg:py-4 p-3 rounded-full lg:font-bold font-semibold text-white"
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
          </div>

          <div className="flex w-full flex-col mt-20 items-center justify-center">
            <h1 className="text-white text-[32px] font-bold ">
              Exclusive Offers
            </h1>
            <PricingSection3 />
          </div>

          <Testimonials7 />

          {/* Still Not Sure? We Have */}
          <div className="md:mt-20 mt-10 text-center mb-36 md:mb-20 md:p-16 p-4 ">
            <div className="lg:text-6xl md:text-4l  text-2xl md:p-5 p-2 md:px-20 px-10 w-fit mx-auto   text-center text-white mb-10 ">
              Still Not Sure? We Have
            </div>
            <img src={MoneyBack} className="w-1/2 mx-auto mb-10" />

            <div className="relative  lg:h-[710px] md:h-[550px] h-[550px] md:w-[974px]  mx-auto md:p-16">
              <img
                src={Refund}
                className="hidden lg:block absolute top-1/2 left-1/2  "
                style={{ transform: "translate(-50% , -50%)" }}
              />
              <div className=" absolute lg:p-10 p-8  text-white justify-center items-start md:leading-9 md:text-xl  flex flex-col  md:gap-10 gap-5 mt-14 ">
                <div>
                  Secure your exceptional PhD research paper or thesis
                  assistance today with our risk-free, money-back guarantee.
                  Enroll now to explore our comprehensive services, and if
                  you're not fully satisfied, simply send us an email, and we'll{" "}
                  <span className="bg-[#F15A29]">
                    refund your entire investment
                  </span>{" "}
                  no questions asked!
                </div>
                <div>
                  At Qriocity, we are dedicated to your academic success.
                  Leverage our expert guidance, tailored research support, and
                  in-depth resources to ensure the highest quality in your work.
                </div>
                <div>
                  Your journey toward completing your PhD thesis or research
                  paper is{" "}
                  <span className="bg-[#F15A29]">completely risk-free</span>{" "}
                  with our money-back guarantee. Your success, satisfaction, and
                  peace of mind are our top priorities. Partner with us today
                  and elevate your research to new heights!{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:mr-10 mt-[250px] ">
              <button
                className="px-10 py-2 lg:px-14 lg:py-4 rounded-full font-bold text-white"
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
          </div>

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
                BOOK FREE CONSULTATION CALL
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
                  ₹ 8000
                </span>
              </p>
              <p className="md:text-lg  text-sm font-semibold">
                Offer ends in {timeLeft.hours}h {timeLeft.minutes}m{" "}
                {timeLeft.seconds}s!!!
              </p>
            </div>

            <div>
              <button
                className="md:text-2xl text-xs font-bold bg-gradient-to-r from-[#FBA154] to-[#F15A29]  text-white md:px-12 px-4 md:py-4 py-2 rounded-full transition duration-300 "
                onClick={() => {
                  scrollToTop();
                }}
              >
                BOOK FREE CONSULTATION CALL
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebinarPhdProffesors;

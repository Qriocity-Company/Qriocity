import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Linkedin from "../assets/linkedin.png";
import doc from "../assets/doc.png";
import Testimonials4 from "../components/Testimonials4";
import discord from "../assets/discord.png";
import interview from "../assets/interview.png";
import { FaPython, FaChessQueen, FaCertificate } from "react-icons/fa";
import { GiCalendarHalfYear } from "react-icons/gi";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import axios from "axios";
import { ImSpinner8 } from "react-icons/im";


const ContentCard = ({ content }) => {
  return (
    <div className="w-full rounded-xl border border-[#2ACDD0] p-6 flex gap-2 md:gap-10 items-center mx-auto">
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
            <stop stopColor="#26CFD3" />
            <stop offset="1" stopColor="#1A8A8C" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-white md:text-2xl text-xs font-[300]">{content}</div>
    </div>
  );
};

const WorkStepCard = ({ number, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-8 md:p-10 w-full flex flex-col items-center text-center overflow-hidden group"
    >
      {/* Animated background elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#26CFD3] rounded-full opacity-20 group-hover:opacity-30 transition-all duration-700 group-hover:scale-150"></div>
      <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-[#FF7A00] rounded-full opacity-20 group-hover:opacity-30 transition-all duration-700 group-hover:scale-150"></div>

      {/* Animated connecting line (for desktop) */}
      {number !== 3 && (
        <div className="hidden md:block absolute top-1/2 -right-10 w-20 h-1 bg-gradient-to-r from-[#26CFD3] to-[#FF7A00] opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
      )}

      {/* Number badge with animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
        className="relative w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#26CFD3] to-[#1A8A8C] rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00] to-[#FF9B45] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="relative z-10">{number}</span>
      </motion.div>

      {/* Title with gradient animation */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
        className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-[#3cffff] bg-clip-text text-transparent group-hover:from-[#FF7A00] group-hover:to-[#FF9B45] transition-all duration-500"
      >
        {title}
      </motion.h3>

      {/* Description with fade-in */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
        className="text-white/80 text-center group-hover:text-white transition-colors duration-300"
      >
        {description}
      </motion.p>

      {/* Animated arrow for the last step */}
      {number === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.8 }}
          className="mt-6 text-[#26CFD3] group-hover:text-[#FF7A00] transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
};

const ProblemCard = ({ content, boldContent, pos }) => {
  return (
    <div className="md:min-w-[447px] min-w-[320px] flex flex-col md:items-start items-center md:text-start text-center bg-black p-8 rounded-3xl border border-white">
      <div className="bg-[#26CFD3] p-1 rounded-full w-fit px-4 flex gap-2 items-center">
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
            strokeWidth="1.26011"
          />
        </svg>
        Solved
      </div>

      <div className="text-white mt-3">
        {content}
        <br />
        <span className="font-bold">{boldContent}</span>
      </div>
    </div>
  );
};

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-white/20 shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#26CFD3] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#FF7A00] rounded-full opacity-20 blur-xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-r from-[#26CFD3] to-[#1A8A8C] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-white/80 mb-6">
                Our team will contact you shortly to discuss your project
                requirements.
              </p>

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="bg-gradient-to-r from-[#FF7A00] to-[#FF9B45] text-white font-medium py-3 px-6 rounded-lg w-full"
              >
                Continue Browsing
              </motion.button> */}
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BookConsultations = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Add this state
  const navigate = useNavigate();
  // Create a ref for the form section
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://crm-backend-o6sb.onrender.com/bookConsultations/send",
        formData
      );
      const webAppUrl =
        "https://script.google.com/macros/s/AKfycbwfekjniHA2SRTxmWJNbkZLyegxcfC7kc_T5jVo_eu_UGRLdsE6N5f4Cr9iwkmv2MrNzA/exec?source=book";

      await fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors", // Google Script requires no-cors
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // setShowSuccessModal(true); // Show success modal
      setFormData({
        // Reset form
        name: "",
        email: "",
        phone: "",
        department: "",
        year: "",
      });
      if (typeof window !== undefined) {
        window.location.href = "/thankyou-consultation";
      }
      // navigate("/thankyou-consultation");
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 2500);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to scroll to the form
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-gray-900">
      {/* Background elements matching the Hero component */}
      <div className="bg-[#FF7A00] absolute top-[8rem] right-[18rem] h-[35.25rem] w-[25rem] rounded-full blur-[10rem] opacity-70"></div>
      <div className="bg-[#3cffff] absolute bottom-[12rem] -right-[6rem] h-[15.25rem] w-[30.25rem] rounded-2xl blur-[10rem] opacity-50"></div>

      {/* Main container */}
      <div className="relative z-20 w-full space-y-12 mt-20 flex flex-col justify-center items-center">
        {/* First Section - HEADLINE with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-3xl  z-20  p-8 md:p-10 w-full flex justify-center items-center flex-col"
        >
          <h1 className="text-3xl text-center md:text-5xl font-bold bg-gradient-to-r from-[#FF7A00] to-[#3cffff] bg-clip-text text-transparent mb-4">
            Stress Free Final year projects in 1 day
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 text-center">
            Get your PPT, Reports in your college format with guaranteed
            research paper publication
            <br />
          </h2>
        </motion.div>

        {/* Second Section - Form with ref */}
        <div ref={formRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-8 md:p-10 w-[300px]  lg:w-[800px]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-white flex items-center"
                >
                  <FaUser className="mr-2 text-[#FF7A00]" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-white flex items-center"
                >
                  <FaEnvelope className="mr-2 text-[#FF7A00]" />
                  Email Id
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                  placeholder="Your email id"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-white flex items-center"
                >
                  <FaPhone className="mr-2 text-[#FF7A00]" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="department"
                  className="text-sm font-medium text-white flex items-center"
                >
                  <HiMiniBuildingOffice
                    className="mr-2 text-[#FF7A00]"
                    color="orange"
                  />
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                  placeholder="Your department"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="year"
                  className="text-sm font-medium text-white flex items-center"
                >
                  <GiCalendarHalfYear className="mr-2 text-[#FF7A00]" />
                  Year Of Studying
                </label>
                <input
                  type="text"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all"
                  placeholder="Your year of studying"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF9B45] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-all hover:shadow-lg"
              >
                {loading ? (
                  <ImSpinner8 className="animate-spin" />
                ) : (
                  "Book a Call"
                )}

                {/* <FiArrowRight className="ml-2" /> */}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* DIV - 4  */}
        <div className="md:mt-20 mt-10 md:p-16 p-4 z-0">
          <div className="lg:text-6xl md:text-4xl text-2xl text-center text-white">
            Stuck with Projects or Placements? Consider its solved
          </div>
          <div className="relative mt-16 md:px-20 space-y-12">
            <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center">
              <ProblemCard
                content="Don't know which "
                boldContent="domain and title to choose?"
                pos="left"
              />
              <div className="lg:flex hidden justify-between items-center w-full">
                <div className="w-[10px] h-[10px] bg-white rounded-full text-white"></div>
                <div
                  className="w-full h-0"
                  style={{ border: "2px dashed white" }}
                ></div>
                <div className="w-[10px] h-[10px] bg-white rounded-full text-white"></div>
              </div>
              <ProblemCard
                content="Finding it difficult to create "
                boldContent="PPTs and Reports?"
                pos="right"
              />
            </div>
            <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center">
              <ProblemCard
                content="Couldn't manage your"
                boldContent="academics and projects"
                pos="left"
              />
              <div className="lg:flex hidden justify-between items-center w-full">
                <div className="w-[10px] h-[10px] bg-white rounded-full text-white"></div>
                <div
                  className="w-full h-0"
                  style={{ border: "2px dashed white" }}
                ></div>
                <div className="w-[10px] h-[10px] bg-white rounded-full text-white"></div>
              </div>
              <ProblemCard
                content="Have to focus on"
                boldContent="Placements?"
                pos="right"
              />
            </div>

            <div
              className="lg:block hidden absolute font-[500] text-white text-9xl top-[40%] left-[50%]"
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
              onClick={scrollToForm} // Changed from scrollToTop to scrollToForm
            >
              SOLVE ALL YOUR PROBLEMS NOW
            </button>
          </div>
        </div>

        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
        />

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-8 md:p-10 w-full"
        >
          <div className="md:w-5/6 mx-auto md:p-8 p-4">
            <div className="lg:text-6xl md:text-4xl text-2xl text-center text-white">
              Why Choose us?
            </div>
          </div>

          <div className="relative md:mt-0 mt-10 space-y-6 text-center">
            <ContentCard content="Project Delivery in 1 day" />
            <ContentCard content="Advanced Unique IEEE Titles" />
            <ContentCard content="PPT's and Reports in your college format" />
            <ContentCard content="24/7 Support through WhatsApp" />

            <button
              className="btn md:mt-16 mt-8 font-bold text-white bg-gradient-to-r from-[#FBA154] to-[#F15A29] px-12 py-3 rounded-full md:text-lg text-sm w-full max-w-xs mx-auto"
              onClick={scrollToForm} // Changed from scrollToTop to scrollToForm
            >
              Book a Call
              {/* <FiArrowRight className="ml-2" /> */}
            </button>

            <div className="bg-[#3cffff] hidden md:block absolute top-[50%] -left-[15%] h-[15.25rem] w-[30.25rem] rounded-full blur-[12rem] opacity-50"></div>
            <div className="bg-[#FF7A00] hidden md:block absolute top-[80%] -right-[10%] h-[35.25rem] w-[20rem] rounded-full blur-[14rem] opacity-50"></div>
          </div>
        </motion.div>

        <Testimonials4 />

        {/* How to work with us */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-8 md:p-10 w-full overflow-hidden"
        >
          {/* Background gradient elements */}
          <div className="bg-[#3cffff] absolute -top-24 -left-24 h-80 w-80 rounded-full blur-[100px] opacity-20"></div>
          <div className="bg-[#FF7A00] absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-[100px] opacity-20"></div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF7A00] via-[#3cffff] to-[#26CFD3] bg-clip-text text-transparent"
          >
            How to work with us
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <WorkStepCard
              number="1"
              title="Book a Call"
              description="Schedule a quick consultation call to discuss your project details."
              delay={0.1}
            />

            <WorkStepCard
              number="2"
              title="Get a Personalized Plan"
              description="We'll create a tailored learning or project roadmap designed to help you achieve success faster."
              delay={0.3}
            />

            <WorkStepCard
              number="3"
              title="Start Your Journey"
              description="Begin working with our mentors, follow the plan, and see your skills and career grow."
              delay={0.5}
            />
          </div>

          {/* Animated decorative elements */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity },
            }}
            className="absolute top-4 right-4 w-12 h-12 border-2 border-[#26CFD3] rounded-full opacity-30"
          ></motion.div>

          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity },
            }}
            className="absolute bottom-4 left-4 w-8 h-8 border-2 border-[#FF7A00] rounded-full opacity-30"
          ></motion.div>
        </motion.div>
        {/* Bonuses Section - DIV 8 */}
        <div className="mt-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl  h-auto w-full flex flex-col justify-center items-center p-4 mb-10">
          <h1 className="text-4xl font-bold mt-10 lg:text-[50px] text-white">
            Exciting <span className="text-[#F26530]">Bonuses</span>
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
                Course <span>Completion</span> <span>Linkedin Shareable </span>
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
              onClick={scrollToForm} // Changed from scrollToTop to scrollToForm
            >
              Book a Call
              {/* <FiArrowRight className="ml-2" /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultations;

import React, { useState, useEffect } from "react";
import Faq from "../components/Faq";
import "../styles/Contact.css";
import { MdCancel } from "react-icons/md";
import Review from "../assets/review.png";
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
import { FaLinkedin } from "react-icons/fa";
import hand from "../assets/Image COntact.png";
// import MachineLearning from "../assets/machineLearning.svg";

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

const MainCard = () => {
  return (
    <div className="lg:min-w-[1048px]  lg:h-[544px] md:min-w-[780px]  max-w-sm text-center  md:py-20 py-10 mx-auto flex flex-col p-5 justify-center items-center border-2 border-white rounded-[42px] ">
      <div className="lg:text-[72px] md:text-5xl  text-3xl md:leading-[72px]  ">
        Empowering Future <br /> Tech Innovators
      </div>
      <p className="text-[#FBA154] md:text-3xl mt-5 ">
        Your Final Year Project, Our Expert Guidance
      </p>
      <button
        className="btn mt-10 bg-gradient-to-r from-[#FBA154] to-[#F15A29] px-8 md:px-16 md:py-4 py-2 rounded-full md:text-xl "
        style={{}}
      >
        {" "}
        Book Free Consultation Call{" "}
      </button>
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
    <div className=" md:max-w-3xl max-w-xs  rounded-xl border border-[#2ACDD0] p-6 flex gap-2 md:gap-10 items-center  mx-auto">
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
        {content}
        <br />
        <span className="font-bold">{boldContent}</span>
      </div>
    </div>
  );
};

const Webinar = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    senderEmail: "",
    phoneNumber: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
    }, 5000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function onSubmit(event) {
    event.preventDefault();
    //   const { data, error } = await sendEmail(formData);
  }

  return (
    <div className=" lg:max-w-[1440px] md:max-w[660px] max-w-[760px]  ">
      {showForm && (
        <div className="fixed top-0 left-0 z-10   w-full h-full flex justify-center   items-center">
          <div className="p-3 bg-white text-black   z-[999]  border border-white  rounded-xl w-[500px] ">
            <button
              onClick={() => {
                setShowForm(false);
              }}
              className="w-full "
            >
              <MdCancel size={32} className="text-[#F15A29] ml-auto " />
            </button>
           <div className="text-4xl font-[700] text-center mb-5">Reach to us!</div>
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-2 p-2">
                <label className="font-[500]">Your Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="p-2"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
             
              <div className="flex flex-col gap-2 p-2">
              <label className="font-[500]" >Your Mobile No.</label>
                <input
                  type="text"
                  placeholder="Your phone number"
                  name="phoneNumber"
                  className="p-2"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2 p-2">
               <label className="font-[500]" >Message</label>
                <input
                  type="text"
                  placeholder="Message "
                  name="message"
                  className="p-2"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className=" flex justify-center">
                {/* <img src={phone} alt="" className="hid" /> */}
                <button  className="btn  text-white bg-gradient-to-r from-[#FBA154] to-[#F15A29]  px-8 py-2 rounded-full  " type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="relative mt-20">
        <div className=" text-white w-full md:mt-20 mt-10  flex justify-center items-center  font-figtree ">
          {/* <div class="blob blob-orange"></div>
    <div class="blob blob-blue"></div> */}

          <div className="bg-[#3cffff] hidden md:block absolute top-[2.5%] -left-[15%]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[12rem]"></div>
          <div className="bg-[#FF7A00]  hidden md:block absolute -top-[2%] -right-[10%] h-[35.25rem]   w-[20rem] rounded-full blur-[14rem]"></div>
          <MainCard />
        </div>
        <div className="bg-gradient-to-b  md:mt-20 mt-10  from-[#04131300] to-[#041313] w-full ">
          <div className=" md:w-5/6 mx-auto   md:p-16 p-4">
            <div className="lg:text-6xl md:text-4xl text-2xl text-center  text-white  ">
              Why Choose us?
            </div>
            <div className="bg-[#353535] rounded-xl mt-16 p-10 grid lg:grid-cols-3 md:grid-cols-2 gap-10 place-content-center">
              <div className="max-w-xs bg-white p-5 rounded-xl ">
                <div className="text-[#F15A29] md:text-5xl text-4xl font-[700] ">
                  200+
                </div>
                <div className="flex items-end justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="122"
                    height="40"
                    viewBox="0 0 122 41"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_208_3815)">
                      <path
                        d="M118.199 24.4647L121.584 26.721C120.486 28.3389 117.858 31.1149 113.316 31.1149C107.675 31.1149 103.475 26.7508 103.475 21.199C103.475 15.2913 107.72 11.2834 112.841 11.2834C117.992 11.2834 120.515 15.3802 121.332 17.5919L121.777 18.7202L108.507 24.2123C109.516 26.2015 111.09 27.2109 113.316 27.2109C115.543 27.2109 117.086 26.1124 118.199 24.4647ZM107.794 20.8876L116.656 17.2062C116.166 15.9743 114.711 15.0986 112.974 15.0986C110.763 15.0986 107.69 17.058 107.794 20.8876Z"
                        fill="#FF302F"
                      />
                      <path
                        d="M97.0771 1.17492H101.352V30.2095H97.0771V1.17468V1.17492Z"
                        fill="#20B15A"
                      />
                      <path
                        d="M90.3386 12.0554H94.4651V29.6898C94.4651 37.0077 90.1456 40.021 85.0392 40.021C80.23 40.021 77.3356 36.7851 76.2519 34.1579L80.037 32.5842C80.7197 34.2022 82.3674 36.1172 85.0392 36.1172C88.3196 36.1172 90.3386 34.0835 90.3386 30.2836V28.8587H90.1902C89.2103 30.0461 87.3401 31.1148 84.9651 31.1148C80.0072 31.1148 75.4648 26.7952 75.4648 21.229C75.4648 15.6327 80.0072 11.2688 84.9651 11.2688C87.3253 11.2688 89.2103 12.3227 90.1902 13.4805H90.3386V12.0556V12.0554ZM90.6353 21.229C90.6353 17.7257 88.3049 15.1726 85.3361 15.1726C82.3376 15.1726 79.8142 17.7257 79.8142 21.229C79.8142 24.6874 82.3376 27.196 85.3361 27.196C88.3051 27.211 90.6355 24.6874 90.6355 21.229H90.6353Z"
                        fill="#3686F7"
                      />
                      <path
                        d="M51.9972 21.1547C51.9972 26.8697 47.5442 31.0703 42.0816 31.0703C36.6193 31.0703 32.166 26.8549 32.166 21.1547C32.166 15.4103 36.6193 11.2244 42.0816 11.2244C47.5442 11.2244 51.9972 15.4103 51.9972 21.1547ZM47.6629 21.1547C47.6629 17.5924 45.0799 15.1429 42.0816 15.1429C39.0833 15.1429 36.5003 17.5924 36.5003 21.1547C36.5003 24.6875 39.0833 27.1666 42.0816 27.1666C45.0801 27.1666 47.6629 24.6875 47.6629 21.1547Z"
                        fill="#FF302F"
                      />
                      <path
                        d="M73.6535 21.199C73.6535 26.914 69.2002 31.1146 63.7379 31.1146C58.2753 31.1146 53.8223 26.9137 53.8223 21.199C53.8223 15.4546 58.2753 11.2834 63.7379 11.2834C69.2002 11.2834 73.6535 15.4398 73.6535 21.199ZM69.3041 21.199C69.3041 17.6367 66.7214 15.1872 63.7228 15.1872C60.7246 15.1872 58.1416 17.6367 58.1416 21.199C58.1416 24.7318 60.7246 27.2109 63.7228 27.2109C66.7362 27.2109 69.3041 24.717 69.3041 21.199Z"
                        fill="#FFBA40"
                      />
                      <path
                        d="M15.8676 26.7656C9.64798 26.7656 4.77942 21.7483 4.77942 15.5287C4.77942 9.30933 9.64798 4.29209 15.8676 4.29209C19.2224 4.29209 21.6714 5.61312 23.4824 7.30539L26.4661 4.32187C23.9427 1.90236 20.5732 0.0614014 15.8676 0.0614014C7.34738 0.0616396 0.177734 7.00873 0.177734 15.5287C0.177734 24.0492 7.34738 30.996 15.8676 30.996C20.4693 30.996 23.9427 29.482 26.6591 26.6617C29.4496 23.8709 30.3105 19.9522 30.3105 16.7756C30.3105 15.7811 30.1919 14.7569 30.0582 13.9999H15.8676V18.1265H25.9762C25.6793 20.7094 24.863 22.4758 23.6606 23.6779C22.2059 25.1477 19.9053 26.7656 15.8676 26.7656Z"
                        fill="#3686F7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_208_3815">
                        <rect width="122" height="40.0312" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <img src={Review} />
                </div>
              </div>
              <AchivementCard number="5000" title="Projects Delivered" />
              <AchivementCard number="10000" title="Satisfied Students" />
              <AchivementCard number="5" title="Years of Experience" />
              <AchivementCard number="10000" title="IEEE Papers published" />

              <AchivementCard number="500" title="Colleges Served" />
            </div>
          </div>

          <div className="relative md:mt-20 mt-10  space-y-10 text-center md:p-16 p-4 ">
            <ContentCard content="Project Delivery in 1 day" />
            <ContentCard content="IEEE Research based Advanced Titles" />
            <ContentCard content="Support including PPTs, Reports and VIVA preparation" />
            <ContentCard content="24/7 Support through WhatsApp and Phone" />
            <button
              className="btn md:mt-20  mt-10 text-white bg-gradient-to-r from-[#FBA154] to-[#F15A29]  px-16 py-4 rounded-full md:text-xl "
              style={{}}
            >
              {" "}
              Book Free Consultation Call{" "}
            </button>
            <div className="bg-[#3cffff] hidden md:block absolute top-[50%] -left-[15%]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[12rem]"></div>
            <div className="bg-[#FF7A00]  hidden md:block absolute top-[80%] -right-[10%] h-[35.25rem]   w-[20rem] rounded-full blur-[14rem]"></div>
          </div>

          {/* What problem we will solve? section  */}
          <div className="md:mt-20 mt-10 md:p-16 p-4 z-0 ">
            <div className="lg:text-6xl md:text-4xl text-2xl text-center text-white  ">
              What problem we will solve?
            </div>
            <div className="relative mt-16 md:px-20   space-y-12    ">
              <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center ">
                <ProblemCard
                  content="Don't know which "
                  boldContent="domain and title to choose?"
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
                  content=" Finding it difficult to create "
                  boldContent="PPTs and Reports?"
                  pos="right"
                />
              </div>
              <div className="flex lg:flex-row flex-col md:gap-0 gap-10 p-5 justify-between items-center ">
                <ProblemCard
                  content=" Couldn't manage your"
                  boldContent="academics and projects"
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
                  content=" Have to focus on"
                  boldContent="Placements?"
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
          </div>

          {/* Our Project Categories section */}
          <div className="md:mt-20 mt-10 text-center md:p-16 p-4 ">
            <div className="md:text-4xl  text-2xl p-2 md:p-5 px-10 md:px-24 w-fit mx-auto  rounded-full border border-white  text-center text-white mb-10 ">
              Our Project Categories
            </div>
            <div className="grid md:grid-cols-3 gap-14 place-items-center mt-16 w-[75%] mx-auto">
              {images.map((m, index) => {
                return (
                  <div className="flex flex-col items-center">
                    <img
                      src={m.src}
                      className="bg-[#0C2F31] p-8 rounded-2xl  border border-[#F15A29] "
                      style={{ boxShadow: "0px 9px 0px 0px #F15A29" }}
                    />
                    <p className="text-white md:text-2xl mt-5">{m.name}</p>
                  </div>
                );
              })}
            </div>
            <button
              className="btn text-white md:mt-20 mt-10 bg-gradient-to-r from-[#FBA154] to-[#F15A29]  px-16 py-4 rounded-full md:text-xl "
              style={{}}
            >
              {" "}
              Book Free Consultation Call{" "}
            </button>
          </div>

          {/* Your Path to Project Success section */}
          <div className="md:mt-20 mt-10   ">
            <div className="md:text-6xl  text-2xl md:p-5 p-2 md:px-20 px-10 w-fit mx-auto   text-center text-white mb-10 ">
              Your Path to Project Success Our Deliverables
            </div>
            <img src={Group} />
          </div>

          {/* Our Deliverables  section    */}
          <div className="md:mt-20 mt-10 text-center md:p-16 p-2 ">
            <div className="md:text-6xl  text-2xl md:p-5 p-2 md:px-20 px-10 w-fit mx-auto   text-center text-white mb-10 ">
              Our Deliverables
            </div>
            <div className="md:mt-20 mt-10 md:max-w-3xl max-w-[350px] text-center mx-auto bg-[#0C2F31] rounded-xl">
              <div className=" p-6 flex gap-3 md:gap-10   md:ml-10  items-center  mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 63 65"
                  fill="none"
                >
                  <path
                    d="M15.7414 25.0273C14.6698 25.0273 13.8008 25.8963 13.8008 26.968C13.8008 28.0396 14.6698 28.9086 15.7414 28.9086H36.5492C37.6209 28.9086 38.4898 28.0396 38.4898 26.968C38.4898 25.8963 37.6209 25.0273 36.5492 25.0273H15.7414Z"
                    fill="white"
                  />
                  <path
                    d="M25.0974 36.0449H15.7414C14.6698 36.0449 13.8008 36.9139 13.8008 37.9856C13.8008 39.0572 14.6698 39.9262 15.7414 39.9262H25.0974C26.169 39.9262 27.038 39.0572 27.038 37.9856C27.038 36.9139 26.169 36.0449 25.0974 36.0449Z"
                    fill="white"
                  />
                  <path
                    d="M24.8093 60.7461H10.039C6.86288 60.7461 4.28184 58.1543 4.28184 54.9673V15.6589C4.28184 12.472 6.86288 9.88016 10.039 9.88016H14.0475V10.3675C14.0475 13.1986 16.3504 15.4993 19.1815 15.4993H37.7253C40.5564 15.4993 42.8593 13.1986 42.8593 10.3675V9.88016H46.8484C50.0763 9.88016 52.6034 12.4181 52.6034 15.6589V26.7205C52.6034 27.7921 53.4724 28.6611 54.544 28.6611C55.6157 28.6611 56.4847 27.7921 56.4847 26.7205V15.6589C56.4847 10.333 52.1614 5.99891 46.8462 5.99891H42.8572V5.50297C42.8572 2.67181 40.5543 0.371094 37.7231 0.371094H19.1794C16.3482 0.371094 14.0453 2.67181 14.0453 5.50297V5.99891H10.039C4.72388 5.99891 0.398438 10.333 0.398438 15.6589V54.9673C0.398438 60.2933 4.72388 64.6273 10.039 64.6273H24.8093C25.881 64.6273 26.75 63.7584 26.75 62.6867C26.75 61.6151 25.881 60.7461 24.8093 60.7461ZM17.9309 5.50297C17.9309 4.81297 18.4915 4.25234 19.1815 4.25234H37.7253C38.4153 4.25234 38.9759 4.81297 38.9759 5.50297V10.3653C38.9759 11.0553 38.4153 11.6159 37.7253 11.6159H19.1815C18.4915 11.6159 17.9309 11.0553 17.9309 10.3653V5.50297Z"
                    fill="white"
                  />
                  <path
                    d="M60.5493 35.4274C57.8928 32.7688 53.2547 32.7666 50.5961 35.4274L33.3914 52.6321C32.8372 53.1863 32.4749 53.8892 32.3434 54.6633L31.399 60.2459C31.1985 61.4426 31.593 62.6716 32.4512 63.5277C33.1606 64.2371 34.1202 64.6252 35.1056 64.6252C35.3147 64.6252 35.5217 64.608 35.7287 64.5735L41.3091 63.6312C42.0832 63.4996 42.7861 63.1374 43.3403 62.5832L60.545 45.3785C63.2899 42.6358 63.2899 38.1723 60.5493 35.4274ZM40.6644 59.806L35.2285 60.8906L36.1384 55.377L48.47 43.0455L52.9356 47.511L40.6644 59.806ZM57.8023 42.6336L55.6762 44.764L51.2128 40.3005L53.341 38.1723C53.9361 37.5772 54.7296 37.2473 55.5705 37.2473C56.4158 37.2473 57.2071 37.575 57.8023 38.1723C59.0335 39.4035 59.0335 41.4024 57.8023 42.6336Z"
                    fill="white"
                  />
                </svg>
                <div className="text-white md:text-2xl text-xs font-[300]">
                  {" "}
                  IEEE 2023 Base paper
                </div>
              </div>

              <div className=" p-6 flex gap-3 md:gap-10  md:ml-10  items-center  mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 65 65"
                  fill="none"
                >
                  <path
                    d="M62.7793 17.5902L46.2196 0.383145C45.9841 0.138379 45.6591 0 45.3191 0H20.638C17.8759 0 15.6288 2.24631 15.6288 5.00729V22.5H5.62644C3.56015 22.5 1.87891 24.1808 1.87891 26.2468V45.0034C1.87891 47.0693 3.56015 48.75 5.62644 48.75H15.6288V60.0015C15.6288 62.7576 17.8758 65 20.638 65H58.1196C60.8818 65 63.1288 62.7589 63.1288 60.0043V18.4571C63.1288 18.1339 63.0037 17.8232 62.7793 17.5902ZM45.6289 3.37454L59.2229 17.5H45.6289V3.37454ZM5.62644 46.25C4.9386 46.25 4.37887 45.6908 4.37887 45.0034V26.2468C4.37887 25.5593 4.9386 25 5.62644 25H39.381C40.0692 25 40.6288 25.5593 40.6288 26.2468V45.0034C40.6288 45.6908 40.0691 46.25 39.381 46.25H5.62644ZM60.6287 60.0043C60.6287 61.3804 59.5033 62.5 58.1196 62.5H20.638C19.2543 62.5 18.1289 61.3793 18.1289 60.0016V48.75H39.381C41.4477 48.75 43.1289 47.0693 43.1289 45.0034V26.2468C43.1289 24.1808 41.4477 22.5 39.381 22.5H18.1288V5.00729C18.1288 3.62464 19.2542 2.49996 20.6379 2.49996H43.1288V18.75C43.1288 19.4403 43.6885 19.9999 44.3787 19.9999H60.6287V60.0043Z"
                    fill="white"
                  />
                  <path
                    d="M28.4531 30.5137V32.3299H31.6394V41.2509H33.8071V32.3299H36.9859V30.5137H28.4531Z"
                    fill="white"
                  />
                  <path
                    d="M26.8252 31.7258C26.4102 31.1861 25.8949 30.8359 25.28 30.6745C24.8793 30.567 24.02 30.5137 22.7018 30.5137H19.2227V41.2509H21.3905V37.2005H22.8043C23.7855 37.2005 24.5353 37.1493 25.0527 37.0468C25.4337 36.9637 25.8083 36.7939 26.177 36.5377C26.5454 36.2814 26.8495 35.9286 27.0889 35.4793C27.328 35.0303 27.4477 34.4759 27.4477 33.8167C27.4477 32.9625 27.2403 32.2652 26.8252 31.7258ZM24.9687 34.6812C24.8049 34.9202 24.5789 35.0962 24.2911 35.2084C24.0029 35.3205 23.4318 35.3767 22.577 35.3767H21.3905V32.3299H22.438C23.2193 32.3299 23.7391 32.3542 23.998 32.403C24.3495 32.4667 24.6401 32.6252 24.8695 32.8792C25.0993 33.133 25.214 33.4554 25.214 33.8461C25.214 34.1633 25.1321 34.4417 24.9687 34.6812Z"
                    fill="white"
                  />
                  <path
                    d="M16.8174 31.7258C16.4024 31.1861 15.8874 30.8359 15.272 30.6745C14.8717 30.567 14.0124 30.5137 12.6939 30.5137H9.21484V41.2509H11.3829V37.2005H12.7963C13.7779 37.2005 14.5273 37.1493 15.0448 37.0468C15.4258 36.9637 15.8004 36.7939 16.1692 36.5377C16.5379 36.2814 16.8417 35.9286 17.0811 35.4793C17.3204 35.0303 17.4399 34.4759 17.4399 33.8167C17.4399 32.9625 17.2324 32.2652 16.8174 31.7258ZM14.9609 34.6812C14.7971 34.9202 14.5715 35.0962 14.2833 35.2084C13.9953 35.3205 13.424 35.3767 12.5696 35.3767H11.3829V32.3299H12.4302C13.2115 32.3299 13.7315 32.3542 13.9902 32.403C14.3417 32.4667 14.6323 32.6252 14.8617 32.8792C15.0915 33.133 15.2061 33.4554 15.2061 33.8461C15.2063 34.1634 15.1244 34.4417 14.9609 34.6812Z"
                    fill="white"
                  />
                </svg>
                <div className="text-white md:text-2xl text-xs font-[300]">
                  {" "}
                  0,1,2,3 Review PPT in your college format
                </div>
              </div>

              <div className=" p-6 flex gap-3 md:gap-10  md:ml-10  items-center  mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 59 59"
                  fill="none"
                >
                  <g clip-path="url(#clip0_222_4493)">
                    <path
                      d="M58.3805 12.03L46.8575 0.50634C46.5334 0.18207 46.0936 0 45.6352 0H19.1309C16.2715 0 13.9453 2.32624 13.9453 5.18555V27.9833C6.17782 28.8459 0.117188 35.4497 0.117188 43.4434C0.117188 52.0213 7.0959 59 15.6738 59H53.7012C56.5605 59 58.8867 56.6738 58.8867 53.8145V13.2523C58.8867 12.7938 58.7046 12.3543 58.3805 12.03ZM47.3633 5.9015L51.1188 9.6571L52.9851 11.5234H47.3633V5.9015ZM3.57422 43.4434C3.57422 36.7716 9.0021 31.3438 15.6738 31.3438C22.3456 31.3438 27.7734 36.7716 27.7734 43.4434C27.7734 50.1151 22.3456 55.543 15.6738 55.543C9.0021 55.543 3.57422 50.1151 3.57422 43.4434ZM53.7012 55.543H25.4398C28.5469 53.0303 30.6702 49.3481 31.134 45.1719H49.0918C50.0464 45.1719 50.8203 44.398 50.8203 43.4434C50.8203 42.4888 50.0464 41.7148 49.0918 41.7148H31.1339C30.852 39.1774 29.9581 36.8221 28.6024 34.8008H49.0918C50.0464 34.8008 50.8203 34.0269 50.8203 33.0723C50.8203 32.1177 50.0464 31.3438 49.0918 31.3438H25.4398C23.1903 29.5247 20.4259 28.3191 17.4023 27.9833V5.18555C17.4023 4.23244 18.1778 3.45703 19.1309 3.45703H43.9062V13.252C43.9062 14.2066 44.6802 14.9805 45.6348 14.9805H55.4297V53.8145C55.4297 54.7676 54.6543 55.543 53.7012 55.543Z"
                      fill="white"
                    />
                    <path
                      d="M49.0879 20.9727H23.7363C22.7817 20.9727 22.0078 21.7466 22.0078 22.7012C22.0078 23.6558 22.7817 24.4297 23.7363 24.4297H49.0879C50.0425 24.4297 50.8164 23.6558 50.8164 22.7012C50.8164 21.7466 50.0425 20.9727 49.0879 20.9727Z"
                      fill="white"
                    />
                    <path
                      d="M22.5406 39.1097C21.8657 38.4348 20.7712 38.4348 20.0961 39.1097L13.252 45.9538L11.0172 43.719C10.3422 43.044 9.24773 43.044 8.57269 43.719C7.89765 44.3939 7.89765 45.4884 8.57269 46.1634L12.0297 49.6205C12.3672 49.958 12.8096 50.1268 13.252 50.1268C13.6944 50.1268 14.1368 49.958 14.4742 49.6205L22.5406 41.5541C23.2156 40.8791 23.2156 39.7846 22.5406 39.1097Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_222_4493">
                      <rect width="59" height="59" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="text-white md:text-2xl text-xs font-[300]">
                  {" "}
                  60 Pages Documentation
                </div>
              </div>

              <div className=" p-6 flex gap-3 md:gap-10  md:ml-10  items-center  mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 72 72"
                  fill="none"
                >
                  <g clip-path="url(#clip0_222_4483)">
                    <path
                      d="M66 43.2H55.2V33.6C55.2 32.9635 55.4529 32.353 55.9029 31.9029C56.353 31.4529 56.9635 31.2 57.6 31.2C58.2365 31.2 58.847 31.4529 59.2971 31.9029C59.7471 32.353 60 32.9635 60 33.6V37.2C60 38.1548 60.3793 39.0705 61.0544 39.7456C61.7295 40.4207 62.6452 40.8 63.6 40.8C64.5548 40.8 65.4705 40.4207 66.1456 39.7456C66.8207 39.0705 67.2 38.1548 67.2 37.2V33.6C67.2057 32.1333 66.874 30.685 66.2306 29.367C65.5871 28.0491 64.649 26.8968 63.489 25.9993C62.329 25.1018 60.9781 24.4831 59.5408 24.1912C58.1035 23.8992 56.6182 23.9418 55.2 24.3156V4.8C55.2 3.52696 54.6943 2.30606 53.7941 1.40589C52.8939 0.505713 51.673 0 50.4 0L4.8 0C3.52696 0 2.30606 0.505713 1.40589 1.40589C0.505713 2.30606 0 3.52696 0 4.8L0 52.8C0 54.073 0.505713 55.2939 1.40589 56.1941C2.30606 57.0943 3.52696 57.6 4.8 57.6H43.2V66C43.2019 67.5907 43.8347 69.1157 44.9595 70.2405C46.0843 71.3653 47.6093 71.9981 49.2 72H66C67.5907 71.9981 69.1157 71.3653 70.2405 70.2405C71.3653 69.1157 71.9981 67.5907 72 66V49.2C71.9981 47.6093 71.3653 46.0843 70.2405 44.9595C69.1157 43.8347 67.5907 43.2019 66 43.2ZM64.8 33.6V37.2C64.8 37.5183 64.6736 37.8235 64.4485 38.0485C64.2235 38.2736 63.9183 38.4 63.6 38.4C63.2817 38.4 62.9765 38.2736 62.7515 38.0485C62.5264 37.8235 62.4 37.5183 62.4 37.2V33.6C62.4 32.327 61.8943 31.1061 60.9941 30.2059C60.0939 29.3057 58.873 28.8 57.6 28.8C56.327 28.8 55.1061 29.3057 54.2059 30.2059C53.3057 31.1061 52.8 32.327 52.8 33.6V43.2H50.4V33.6C50.4 31.6904 51.1586 29.8591 52.5088 28.5088C53.8591 27.1586 55.6904 26.4 57.6 26.4C59.5096 26.4 61.3409 27.1586 62.6912 28.5088C64.0414 29.8591 64.8 31.6904 64.8 33.6ZM43.2 49.2V50.4H7.2V12H48V43.32C46.6457 43.5985 45.4288 44.3354 44.5545 45.4065C43.6801 46.4776 43.2017 47.8174 43.2 49.2ZM4.8 55.2C4.16348 55.2 3.55303 54.9471 3.10294 54.4971C2.65286 54.047 2.4 53.4365 2.4 52.8V4.8C2.4 4.16348 2.65286 3.55303 3.10294 3.10294C3.55303 2.65286 4.16348 2.4 4.8 2.4H50.4C51.0365 2.4 51.647 2.65286 52.0971 3.10294C52.5471 3.55303 52.8 4.16348 52.8 4.8V25.2984C51.899 25.8225 51.0886 26.4887 50.4 27.2712V12C50.4 11.3635 50.1471 10.753 49.6971 10.3029C49.247 9.85286 48.6365 9.6 48 9.6H7.2C6.56348 9.6 5.95303 9.85286 5.50294 10.3029C5.05286 10.753 4.8 11.3635 4.8 12V50.4C4.8 51.0365 5.05286 51.647 5.50294 52.0971C5.95303 52.5471 6.56348 52.8 7.2 52.8H43.2V55.2H4.8ZM69.6 66C69.6 66.9548 69.2207 67.8705 68.5456 68.5456C67.8705 69.2207 66.9548 69.6 66 69.6H49.2C48.2452 69.6 47.3296 69.2207 46.6544 68.5456C45.9793 67.8705 45.6 66.9548 45.6 66V49.2C45.6 48.2452 45.9793 47.3296 46.6544 46.6544C47.3296 45.9793 48.2452 45.6 49.2 45.6H66C66.9548 45.6 67.8705 45.9793 68.5456 46.6544C69.2207 47.3296 69.6 48.2452 69.6 49.2V66Z"
                      fill="white"
                    />
                    <path
                      d="M60.7196 51.5436C60.0825 50.9998 59.3141 50.6322 58.491 50.4773C57.6678 50.3224 56.8184 50.3856 56.0272 50.6607C55.236 50.9358 54.5305 51.4131 53.9809 52.0452C53.4314 52.6773 53.0568 53.4423 52.8944 54.264C52.7557 54.9525 52.7713 55.6631 52.9402 56.3447C53.1091 57.0264 53.4271 57.6621 53.8712 58.206L53.12 61.926C53.0499 62.274 53.0578 62.6331 53.1432 62.9776C53.2286 63.322 53.3894 63.6433 53.6139 63.9182C53.8384 64.1931 54.121 64.4147 54.4415 64.5672C54.762 64.7197 55.1123 64.7992 55.4672 64.8H59.732C60.088 64.8003 60.4396 64.7213 60.7614 64.5689C61.0831 64.4164 61.3669 64.1943 61.5922 63.9186C61.8174 63.6429 61.9786 63.3205 62.0638 62.9749C62.1491 62.6292 62.1564 62.2689 62.0852 61.92L61.3376 58.2168L61.2908 58.2588C62.0976 57.2879 62.4894 56.0382 62.3814 54.7804C62.2734 53.5226 61.6742 52.358 60.7136 51.5388L60.7196 51.5436ZM58.9904 58.6968L59.732 62.4H55.4672L56.2184 58.68C56.2915 58.3376 56.2863 57.9831 56.2032 57.6429C56.1201 57.3028 55.9612 56.9858 55.7384 56.7156C55.5124 56.4399 55.3507 56.1174 55.2649 55.7713C55.1792 55.4253 55.1716 55.0646 55.2428 54.7152C55.3429 54.2441 55.581 53.8134 55.9268 53.4781C56.2726 53.1427 56.7104 52.918 57.1844 52.8324C57.3217 52.8109 57.4606 52.8001 57.5996 52.8C58.1714 52.7963 58.7254 52.9991 59.1596 53.3712C59.4236 53.5971 59.6355 53.8776 59.7805 54.1933C59.9256 54.5091 60.0003 54.8526 59.9996 55.2C60.0013 55.7551 59.808 56.2932 59.4536 56.7204C59.231 56.993 59.0732 57.3124 58.9919 57.6547C58.9107 57.9971 58.9081 58.3534 58.9844 58.6968H58.9904Z"
                      fill="white"
                    />
                    <path
                      d="M7.2 7.1998H8.4C8.71826 7.1998 9.02348 7.07338 9.24853 6.84833C9.47357 6.62329 9.6 6.31806 9.6 5.9998C9.6 5.68154 9.47357 5.37632 9.24853 5.15128C9.02348 4.92623 8.71826 4.7998 8.4 4.7998H7.2C6.88174 4.7998 6.57652 4.92623 6.35147 5.15128C6.12643 5.37632 6 5.68154 6 5.9998C6 6.31806 6.12643 6.62329 6.35147 6.84833C6.57652 7.07338 6.88174 7.1998 7.2 7.1998Z"
                      fill="white"
                    />
                    <path
                      d="M13.2 7.1998H14.4C14.7183 7.1998 15.0235 7.07338 15.2485 6.84833C15.4736 6.62329 15.6 6.31806 15.6 5.9998C15.6 5.68154 15.4736 5.37632 15.2485 5.15128C15.0235 4.92623 14.7183 4.7998 14.4 4.7998H13.2C12.8817 4.7998 12.5765 4.92623 12.3515 5.15128C12.1264 5.37632 12 5.68154 12 5.9998C12 6.31806 12.1264 6.62329 12.3515 6.84833C12.5765 7.07338 12.8817 7.1998 13.2 7.1998Z"
                      fill="white"
                    />
                    <path
                      d="M19.2 7.1998H20.4C20.7183 7.1998 21.0235 7.07338 21.2485 6.84833C21.4736 6.62329 21.6 6.31806 21.6 5.9998C21.6 5.68154 21.4736 5.37632 21.2485 5.15128C21.0235 4.92623 20.7183 4.7998 20.4 4.7998H19.2C18.8817 4.7998 18.5765 4.92623 18.3515 5.15128C18.1264 5.37632 18 5.68154 18 5.9998C18 6.31806 18.1264 6.62329 18.3515 6.84833C18.5765 7.07338 18.8817 7.1998 19.2 7.1998Z"
                      fill="white"
                    />
                    <path
                      d="M40.8016 7.1998H48.0016C48.3198 7.1998 48.625 7.07338 48.8501 6.84833C49.0751 6.62329 49.2016 6.31806 49.2016 5.9998C49.2016 5.68154 49.0751 5.37632 48.8501 5.15128C48.625 4.92623 48.3198 4.7998 48.0016 4.7998H40.8016C40.4833 4.7998 40.1781 4.92623 39.953 5.15128C39.728 5.37632 39.6016 5.68154 39.6016 5.9998C39.6016 6.31806 39.728 6.62329 39.953 6.84833C40.1781 7.07338 40.4833 7.1998 40.8016 7.1998Z"
                      fill="white"
                    />
                    <path
                      d="M20.0779 23.181C19.8608 22.9484 19.5602 22.8116 19.2423 22.8005C18.9243 22.7895 18.615 22.9052 18.3823 23.1222L11.5603 29.4738C11.321 29.693 11.1298 29.9596 10.9991 30.2567C10.8683 30.5538 10.8008 30.8748 10.8008 31.1994C10.8008 31.5239 10.8683 31.845 10.9991 32.142C11.1298 32.4391 11.321 32.7057 11.5603 32.925L18.3823 39.2766C18.6164 39.4852 18.9228 39.5939 19.236 39.5795C19.5492 39.5651 19.8443 39.4287 20.0582 39.1994C20.2721 38.9701 20.3878 38.6663 20.3805 38.3528C20.3732 38.0394 20.2435 37.7412 20.0191 37.5222L13.2007 31.2282L20.0239 24.8766C20.2558 24.6588 20.3918 24.3579 20.4019 24.0399C20.412 23.722 20.2955 23.413 20.0779 23.181Z"
                      fill="white"
                    />
                    <path
                      d="M36.8205 23.1226C36.5864 22.9139 36.28 22.8052 35.9668 22.8196C35.6536 22.8341 35.3584 22.9705 35.1445 23.1998C34.9306 23.429 34.815 23.7329 34.8223 24.0463C34.8296 24.3598 34.9593 24.6579 35.1837 24.877L42.0021 31.171L35.1789 37.5226C35.0595 37.629 34.9626 37.7581 34.8939 37.9025C34.8252 38.0468 34.786 38.2035 34.7786 38.3632C34.7713 38.5229 34.7959 38.6824 34.8511 38.8325C34.9062 38.9826 34.9909 39.1201 35.0999 39.237C35.209 39.3539 35.3403 39.4478 35.4862 39.5132C35.6321 39.5787 35.7895 39.6143 35.9494 39.618C36.1092 39.6218 36.2682 39.5935 36.4169 39.5349C36.5657 39.4764 36.7013 39.3887 36.8157 39.277L43.6377 32.9254C43.877 32.7062 44.0681 32.4395 44.1989 32.1425C44.3297 31.8454 44.3972 31.5244 44.3972 31.1998C44.3972 30.8752 44.3297 30.5542 44.1989 30.2571C44.0681 29.96 43.877 29.6934 43.6377 29.4742L36.8205 23.1226Z"
                      fill="white"
                    />
                    <path
                      d="M31.7338 22.9265C31.5927 22.856 31.4392 22.8139 31.2819 22.8028C31.1247 22.7917 30.9667 22.8116 30.8172 22.8616C30.6676 22.9115 30.5294 22.9904 30.4103 23.0938C30.2913 23.1972 30.1938 23.323 30.1234 23.4641L22.9234 37.8641C22.8529 38.0051 22.811 38.1586 22.7999 38.3159C22.7888 38.4732 22.8087 38.6311 22.8587 38.7806C22.9086 38.9302 22.9875 39.0684 23.0908 39.1875C23.1942 39.3065 23.3199 39.404 23.461 39.4745C23.602 39.5449 23.7555 39.5869 23.9128 39.598C24.0701 39.6091 24.228 39.5891 24.3775 39.5392C24.5271 39.4893 24.6653 39.4104 24.7844 39.307C24.9034 39.2037 25.0009 39.0779 25.0714 38.9369L32.2714 24.5369C32.3419 24.3958 32.3839 24.2423 32.395 24.085C32.4062 23.9278 32.3862 23.7698 32.3363 23.6203C32.2864 23.4707 32.2075 23.3325 32.1041 23.2134C32.0007 23.0944 31.8749 22.9969 31.7338 22.9265Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_222_4483">
                      <rect width="72" height="72" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="text-white md:text-2xl text-xs font-[300]">
                  {" "}
                  Source code (0% Plagiarism)
                </div>
              </div>

              <div className=" p-6 flex gap-3 md:gap-10   md:ml-10 items-center  mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 72 58"
                  fill="none"
                >
                  <path
                    d="M68.3234 42.1607H3.677C1.64953 42.1607 0 40.5119 0 38.4847V3.72397C0 1.69695 1.64953 0.0478516 3.677 0.0478516H68.3234C70.3502 0.0478516 72 1.69695 72 3.72397V38.4847C72 40.5119 70.3502 42.1607 68.3234 42.1607ZM3.677 3.01734C3.28702 3.01734 2.96919 3.33428 2.96919 3.72397V38.4847C2.96919 38.8744 3.28702 39.1915 3.677 39.1915H68.3234C68.7133 39.1915 69.0307 38.8744 69.0307 38.4847V3.72397C69.0307 3.33428 68.7134 3.01734 68.3234 3.01734H3.677Z"
                    fill="white"
                  />
                  <path
                    d="M28.3164 32.3869C27.8288 32.1202 27.5117 31.6231 27.5117 31.0677V11.14C27.5117 10.5843 27.8223 10.0754 28.3164 9.82048C28.8101 9.56569 29.4043 9.60816 29.8572 9.93025L43.8689 19.894C44.261 20.1726 44.4931 20.6234 44.4931 21.1039C44.4931 21.5845 44.261 22.0354 43.8689 22.314C43.8689 22.314 33.3596 29.7864 29.8572 32.2774C29.6012 32.4595 29.0494 32.7882 28.3164 32.3869ZM30.4815 14.0176V28.19L40.4464 21.1039L30.4815 14.0176Z"
                    fill="white"
                  />
                  <path
                    d="M70.5155 50.5889H42.1372C41.4782 48.0645 39.1783 46.1963 36.4504 46.1963C33.7227 46.1963 31.4234 48.0645 30.7643 50.5889H1.48467C0.664898 50.5889 0 51.2538 0 52.0735C0 52.8936 0.664898 53.5582 1.48467 53.5582H30.7644C31.4236 56.0826 33.723 57.9511 36.4505 57.9511C39.1784 57.9511 41.4783 56.0825 42.1373 53.5582H70.5155C71.3347 53.5582 72 52.8938 72 52.0735C72 51.2538 71.3347 50.5889 70.5155 50.5889ZM36.4504 54.9815C34.8476 54.9815 33.5427 53.6769 33.5427 52.0734C33.5427 50.4702 34.8476 49.1658 36.4504 49.1658C38.0539 49.1658 39.3584 50.4702 39.3584 52.0734C39.3584 53.6771 38.0539 54.9815 36.4504 54.9815Z"
                    fill="white"
                  />
                </svg>
                <div className="text-white md:text-2xl text-xs font-[300]">
                  {" "}
                  IEEE 2023 Base paper
                </div>
              </div>

              <div className=" p-6 flex gap-3 md:gap-10  md:ml-10  items-center  mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 63 65"
                  fill="none"
                >
                  <path
                    d="M15.7414 25.0273C14.6698 25.0273 13.8008 25.8963 13.8008 26.968C13.8008 28.0396 14.6698 28.9086 15.7414 28.9086H36.5492C37.6209 28.9086 38.4898 28.0396 38.4898 26.968C38.4898 25.8963 37.6209 25.0273 36.5492 25.0273H15.7414Z"
                    fill="white"
                  />
                  <path
                    d="M25.0974 36.0449H15.7414C14.6698 36.0449 13.8008 36.9139 13.8008 37.9856C13.8008 39.0572 14.6698 39.9262 15.7414 39.9262H25.0974C26.169 39.9262 27.038 39.0572 27.038 37.9856C27.038 36.9139 26.169 36.0449 25.0974 36.0449Z"
                    fill="white"
                  />
                  <path
                    d="M24.8093 60.7461H10.039C6.86288 60.7461 4.28184 58.1543 4.28184 54.9673V15.6589C4.28184 12.472 6.86288 9.88016 10.039 9.88016H14.0475V10.3675C14.0475 13.1986 16.3504 15.4993 19.1815 15.4993H37.7253C40.5564 15.4993 42.8593 13.1986 42.8593 10.3675V9.88016H46.8484C50.0763 9.88016 52.6034 12.4181 52.6034 15.6589V26.7205C52.6034 27.7921 53.4724 28.6611 54.544 28.6611C55.6157 28.6611 56.4847 27.7921 56.4847 26.7205V15.6589C56.4847 10.333 52.1614 5.99891 46.8462 5.99891H42.8572V5.50297C42.8572 2.67181 40.5543 0.371094 37.7231 0.371094H19.1794C16.3482 0.371094 14.0453 2.67181 14.0453 5.50297V5.99891H10.039C4.72388 5.99891 0.398438 10.333 0.398438 15.6589V54.9673C0.398438 60.2933 4.72388 64.6273 10.039 64.6273H24.8093C25.881 64.6273 26.75 63.7584 26.75 62.6867C26.75 61.6151 25.881 60.7461 24.8093 60.7461ZM17.9309 5.50297C17.9309 4.81297 18.4915 4.25234 19.1815 4.25234H37.7253C38.4153 4.25234 38.9759 4.81297 38.9759 5.50297V10.3653C38.9759 11.0553 38.4153 11.6159 37.7253 11.6159H19.1815C18.4915 11.6159 17.9309 11.0553 17.9309 10.3653V5.50297Z"
                    fill="white"
                  />
                  <path
                    d="M60.5493 35.4274C57.8928 32.7688 53.2547 32.7666 50.5961 35.4274L33.3914 52.6321C32.8372 53.1863 32.4749 53.8892 32.3434 54.6633L31.399 60.2459C31.1985 61.4426 31.593 62.6716 32.4512 63.5277C33.1606 64.2371 34.1202 64.6252 35.1056 64.6252C35.3147 64.6252 35.5217 64.608 35.7287 64.5735L41.3091 63.6312C42.0832 63.4996 42.7861 63.1374 43.3403 62.5832L60.545 45.3785C63.2899 42.6358 63.2899 38.1723 60.5493 35.4274ZM40.6644 59.806L35.2285 60.8906L36.1384 55.377L48.47 43.0455L52.9356 47.511L40.6644 59.806ZM57.8023 42.6336L55.6762 44.764L51.2128 40.3005L53.341 38.1723C53.9361 37.5772 54.7296 37.2473 55.5705 37.2473C56.4158 37.2473 57.2071 37.575 57.8023 38.1723C59.0335 39.4035 59.0335 41.4024 57.8023 42.6336Z"
                    fill="white"
                  />
                </svg>
                <div className="text-white md:text-2xl text-xs font-[300]">
                  {" "}
                  Full Project Explanation video
                </div>
              </div>
            </div>
          </div>

          {/* Exclusive Bonuses for Our Students section */}
          <div className="md:mt-20 mt-10 text-center md:p-16 p-4 ">
            <div className="md:text-6xl  text-2xl md:p-5 p-2 md:px-20 px-10 w-fit mx-auto   text-center text-white mb-10 ">
              Exclusive Bonuses for Our Students
            </div>
            <div className="grid gap-10 mt-10 md:mt-20 md:gap-20 md:grid-cols-2  place-items-center">
              <div className=" p-8 bg-white text-black md:max-w-md max-w-xs  flex flex-col items-start md:gap-5 gap-2 rounded-xl">
                <img src={Laptop} />
                <div className="text-start text-2xl font-[700]">
                  Master Python from basics to Advanced Levels
                </div>
                <div className="bg-[#26CFD3] p-2 px-4 rounded-full w-fit">
                  Worth ₹ 999
                </div>
              </div>

              <div className=" p-8 bg-white text-black md:max-w-md max-w-xs  flex flex-col items-start md:gap-5 gap-2 rounded-xl">
                <img src={Laptop} />
                <div className="text-start text-2xl font-[700]">
                  Master Python from basics to Advanced Levels
                </div>
                <div className="bg-[#26CFD3] p-2 px-4 rounded-full w-fit">
                  Worth ₹ 999
                </div>
              </div>

              <div className=" p-8 bg-white text-black md:max-w-md max-w-xs  flex flex-col items-start md:gap-5 gap-2 rounded-xl">
                <img src={Laptop} />
                <div className="text-start text-2xl font-[700]">
                  Master Python from basics to Advanced Levels
                </div>
                <div className="bg-[#26CFD3] p-2 px-4 rounded-full w-fit">
                  Worth ₹ 999
                </div>
              </div>

              <div className=" p-8 bg-white text-black md:max-w-md max-w-xs  flex flex-col items-start md:gap-5 gap-2 rounded-xl">
                <img src={Laptop} />
                <div className="text-start text-2xl font-[700]">
                  Master Python from basics to Advanced Levels
                </div>
                <div className="bg-[#26CFD3] p-2 px-4 rounded-full w-fit">
                  Worth ₹ 999
                </div>
              </div>

              <div className="md:col-span-2 p-8 bg-white text-black md:max-w-md max-w-xs  flex flex-col items-start md:gap-5 gap-2 rounded-xl">
                <img src={Laptop} />
                <div className="text-start text-2xl font-[700]">
                  Master Python from basics to Advanced Levels
                </div>
                <div className="bg-[#26CFD3] p-2 px-4 rounded-full w-fit">
                  Worth ₹ 999
                </div>
              </div>
            </div>
            <button
              className="btn text-white md:mt-20 mt-10 bg-gradient-to-r from-[#FBA154] to-[#F15A29]  px-16 py-4 rounded-full md:text-xl "
              style={{}}
            >
              {" "}
              Unlock These Bonuses Now!{" "}
            </button>
          </div>

          {/* Exclusive Offer section  */}
          <div className="md:mt-20 mt-10 text-center ">
            <div className="md:text-6xl bg-white w-full  text-2xl md:p-5 p-2 px-20 text-center text-black mb-10 font-[500] flex  items-center justify-center gap-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 94 94"
                fill="none"
              >
                <path
                  d="M31.7666 34.8523H37.9379M56.4521 59.5377H62.6234M62.6234 31.7666L31.7666 62.6234M42.8812 5.78511L35.9137 12.7402C34.7718 13.8842 33.2225 14.5279 31.6061 14.5299H20.6334C19.0163 14.5299 17.4654 15.1723 16.322 16.3158C15.1785 17.4593 14.5361 19.0101 14.5361 20.6273V31.5999C14.5341 33.2163 13.8904 34.7657 12.7464 35.9076L5.78511 42.8874C4.6421 44.0308 4 45.5813 4 47.1981C4 48.8148 4.6421 50.3654 5.78511 51.5088L12.7588 58.4763C13.3243 59.042 13.773 59.7136 14.079 60.4527C14.385 61.1918 14.5424 61.9839 14.5423 62.7839V73.7566C14.5423 77.1261 17.27 79.8539 20.6396 79.8539H31.6123C33.2292 79.8539 34.7782 80.4957 35.9199 81.6436L42.8936 88.6111C44.037 89.7541 45.5875 90.3962 47.2043 90.3962C48.821 90.3962 50.3716 89.7541 51.515 88.6111L58.4824 81.6374C59.6254 80.4957 61.1746 79.8543 62.7901 79.8539H73.7627C75.3799 79.8539 76.9307 79.2115 78.0742 78.068C79.2177 76.9246 79.8601 75.3737 79.8601 73.7566V62.7839C79.8601 61.167 80.5019 59.618 81.6498 58.4763L88.6172 51.5026C89.7602 50.3592 90.4023 48.8087 90.4023 47.1919C90.4023 45.5752 89.7602 44.0246 88.6172 42.8812L81.6436 35.9137C80.5019 34.7708 79.8605 33.2216 79.8601 31.6061V20.6334C79.8601 19.0163 79.2177 17.4654 78.0742 16.322C76.9307 15.1785 75.3799 14.5361 73.7627 14.5361H62.7901C61.1737 14.5341 59.6243 13.8904 58.4824 12.7464L51.5026 5.78511C50.3592 4.6421 48.8087 4 47.1919 4C45.5752 4 44.0246 4.6421 42.8812 5.78511Z"
                  stroke="#F15A29"
                  stroke-width="6.17137"
                />
              </svg>
              Exclusive Offer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 94 94"
                fill="none"
              >
                <path
                  d="M31.7666 34.8523H37.9379M56.4521 59.5377H62.6234M62.6234 31.7666L31.7666 62.6234M42.8812 5.78511L35.9137 12.7402C34.7718 13.8842 33.2225 14.5279 31.6061 14.5299H20.6334C19.0163 14.5299 17.4654 15.1723 16.322 16.3158C15.1785 17.4593 14.5361 19.0101 14.5361 20.6273V31.5999C14.5341 33.2163 13.8904 34.7657 12.7464 35.9076L5.78511 42.8874C4.6421 44.0308 4 45.5813 4 47.1981C4 48.8148 4.6421 50.3654 5.78511 51.5088L12.7588 58.4763C13.3243 59.042 13.773 59.7136 14.079 60.4527C14.385 61.1918 14.5424 61.9839 14.5423 62.7839V73.7566C14.5423 77.1261 17.27 79.8539 20.6396 79.8539H31.6123C33.2292 79.8539 34.7782 80.4957 35.9199 81.6436L42.8936 88.6111C44.037 89.7541 45.5875 90.3962 47.2043 90.3962C48.821 90.3962 50.3716 89.7541 51.515 88.6111L58.4824 81.6374C59.6254 80.4957 61.1746 79.8543 62.7901 79.8539H73.7627C75.3799 79.8539 76.9307 79.2115 78.0742 78.068C79.2177 76.9246 79.8601 75.3737 79.8601 73.7566V62.7839C79.8601 61.167 80.5019 59.618 81.6498 58.4763L88.6172 51.5026C89.7602 50.3592 90.4023 48.8087 90.4023 47.1919C90.4023 45.5752 89.7602 44.0246 88.6172 42.8812L81.6436 35.9137C80.5019 34.7708 79.8605 33.2216 79.8601 31.6061V20.6334C79.8601 19.0163 79.2177 17.4654 78.0742 16.322C76.9307 15.1785 75.3799 14.5361 73.7627 14.5361H62.7901C61.1737 14.5341 59.6243 13.8904 58.4824 12.7464L51.5026 5.78511C50.3592 4.6421 48.8087 4 47.1919 4C45.5752 4 44.0246 4.6421 42.8812 5.78511Z"
                  stroke="#F15A29"
                  stroke-width="6.17137"
                />
              </svg>
            </div>
            <div className="md:max-w-lg max-w-xs mb-10 mt-20  p-10 text-2xl rounded mx-auto text-white bg-[#2E2E2E]">
              Total Value - <span className="font-bold">₹22495</span>
            </div>
            <div className="md:max-w-lg max-w-xs mb-10  p-10 text-2xl rounded mx-auto  text-white bg-[#2D8F91]">
              Regular Price - <span className="font-bold">₹12000</span>
            </div>
            <div className="md:max-w-lg max-w-xs  p-10 text-2xl  rounded mx-auto   bg-[#26CFD3]">
              Discounted Price <span className="font-bold">₹7999</span>
            </div>
            <button
              className="btn text-white md:mt-20 mt-10 bg-gradient-to-r from-[#FBA154] to-[#F15A29]  px-16 py-4 rounded-full md:text-xl "
              style={{}}
            >
              {" "}
              Book Free Consultation Call{" "}
            </button>
          </div>

          {/* Unable to decide? */}
          <div className="md:mt-20 mt-10 text-center md:p-16 p-4 ">
            <div className="md:text-6xl  text-2xl md:p-5 p-2 px-10 md:px-20 w-fit mx-auto    text-center text-white font-[500] ">
              Unable to decide?
            </div>
            <p className="text-white md:text-xl">
              Listen Stories Of Success From Other People I have Worked With
            </p>

            <div className="md:mt-20 mt-10  grid md:grid-cols-2 gap-10 place-items-center">
              <div className=" relative md:max-w-md max-w-xs p-5 bg-[#0C2F31] rounded-xl ">
                <svg
                  className="absolute -top-5 right-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 108 98"
                  fill="none"
                >
                  <path
                    d="M97.2002 97.1983C100.064 97.1983 102.811 96.0605 104.837 94.0351C106.862 92.0098 108 89.2628 108 86.3985V60.0254C108 57.1611 106.862 54.4141 104.837 52.3887C102.811 50.3634 100.064 49.2255 97.2002 49.2255H82.21C82.21 45.4348 82.4368 41.6333 82.8796 37.8425C83.5492 33.825 84.6724 30.2503 86.2276 27.1291C87.7935 23.9972 89.8023 21.5456 92.2647 19.7529C94.7162 17.7441 97.8374 16.7397 101.639 16.7397V0C95.3858 0 89.9211 1.33918 85.2232 4.01753C80.5662 6.66873 76.5622 10.3295 73.5054 14.7309C70.4374 19.5835 68.1762 24.9011 66.8095 30.4771C65.4324 36.6304 64.7585 42.9202 64.8007 49.2255V86.3985C64.8007 89.2628 65.9386 92.0098 67.9639 94.0351C69.9893 96.0605 72.7363 97.1983 75.6006 97.1983H97.2002ZM32.4013 97.1983C35.2656 97.1983 38.0126 96.0605 40.0379 94.0351C42.0633 92.0098 43.2011 89.2628 43.2011 86.3985V60.0254C43.2011 57.1611 42.0633 54.4141 40.0379 52.3887C38.0126 50.3634 35.2656 49.2255 32.4013 49.2255H17.4112C17.4112 45.4348 17.638 41.6333 18.0808 37.8425C18.7503 33.825 19.8735 30.2503 21.4287 27.1291C22.9947 23.9972 25.0034 21.5456 27.4658 19.7529C29.9174 17.7441 33.0385 16.7397 36.84 16.7397V0C30.5869 0 25.1222 1.33918 20.4243 4.01753C15.7673 6.66873 11.7633 10.3295 8.70652 14.7309C5.63856 19.5835 3.37729 24.9011 2.01064 30.4771C0.63351 36.6304 -0.0403975 42.9202 0.00187137 49.2255V86.3985C0.00187137 89.2628 1.1397 92.0098 3.16506 94.0351C5.19042 96.0605 7.9374 97.1983 10.8017 97.1983H32.4013Z"
                    fill="#F15A29"
                  />
                </svg>
                <p className="text-white text-start mb-8 w-5/6 p-8 md:text-2xl">
                  Right strategies and systems gave her a clear vision for a
                  successful business
                </p>
                <img src={Testimonial} className="md:w-[400px] w-[300px]" />
              </div>

              <div className=" relative md:max-w-md max-w-xs p-5 bg-[#0C2F31] rounded-xl ">
                <svg
                  className="absolute -top-5 right-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 108 98"
                  fill="none"
                >
                  <path
                    d="M97.2002 97.1983C100.064 97.1983 102.811 96.0605 104.837 94.0351C106.862 92.0098 108 89.2628 108 86.3985V60.0254C108 57.1611 106.862 54.4141 104.837 52.3887C102.811 50.3634 100.064 49.2255 97.2002 49.2255H82.21C82.21 45.4348 82.4368 41.6333 82.8796 37.8425C83.5492 33.825 84.6724 30.2503 86.2276 27.1291C87.7935 23.9972 89.8023 21.5456 92.2647 19.7529C94.7162 17.7441 97.8374 16.7397 101.639 16.7397V0C95.3858 0 89.9211 1.33918 85.2232 4.01753C80.5662 6.66873 76.5622 10.3295 73.5054 14.7309C70.4374 19.5835 68.1762 24.9011 66.8095 30.4771C65.4324 36.6304 64.7585 42.9202 64.8007 49.2255V86.3985C64.8007 89.2628 65.9386 92.0098 67.9639 94.0351C69.9893 96.0605 72.7363 97.1983 75.6006 97.1983H97.2002ZM32.4013 97.1983C35.2656 97.1983 38.0126 96.0605 40.0379 94.0351C42.0633 92.0098 43.2011 89.2628 43.2011 86.3985V60.0254C43.2011 57.1611 42.0633 54.4141 40.0379 52.3887C38.0126 50.3634 35.2656 49.2255 32.4013 49.2255H17.4112C17.4112 45.4348 17.638 41.6333 18.0808 37.8425C18.7503 33.825 19.8735 30.2503 21.4287 27.1291C22.9947 23.9972 25.0034 21.5456 27.4658 19.7529C29.9174 17.7441 33.0385 16.7397 36.84 16.7397V0C30.5869 0 25.1222 1.33918 20.4243 4.01753C15.7673 6.66873 11.7633 10.3295 8.70652 14.7309C5.63856 19.5835 3.37729 24.9011 2.01064 30.4771C0.63351 36.6304 -0.0403975 42.9202 0.00187137 49.2255V86.3985C0.00187137 89.2628 1.1397 92.0098 3.16506 94.0351C5.19042 96.0605 7.9374 97.1983 10.8017 97.1983H32.4013Z"
                    fill="#F15A29"
                  />
                </svg>
                <p className="text-white text-start mb-8 w-5/6 p-8 md:text-2xl">
                  Right strategies and systems gave her a clear vision for a
                  successful business
                </p>
                <img src={Testimonial} className="md:w-[400px] w-[300px]" />
              </div>
              <div className=" relative md:max-w-md max-w-xs p-5 bg-[#0C2F31] rounded-xl ">
                <svg
                  className="absolute -top-5 right-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 108 98"
                  fill="none"
                >
                  <path
                    d="M97.2002 97.1983C100.064 97.1983 102.811 96.0605 104.837 94.0351C106.862 92.0098 108 89.2628 108 86.3985V60.0254C108 57.1611 106.862 54.4141 104.837 52.3887C102.811 50.3634 100.064 49.2255 97.2002 49.2255H82.21C82.21 45.4348 82.4368 41.6333 82.8796 37.8425C83.5492 33.825 84.6724 30.2503 86.2276 27.1291C87.7935 23.9972 89.8023 21.5456 92.2647 19.7529C94.7162 17.7441 97.8374 16.7397 101.639 16.7397V0C95.3858 0 89.9211 1.33918 85.2232 4.01753C80.5662 6.66873 76.5622 10.3295 73.5054 14.7309C70.4374 19.5835 68.1762 24.9011 66.8095 30.4771C65.4324 36.6304 64.7585 42.9202 64.8007 49.2255V86.3985C64.8007 89.2628 65.9386 92.0098 67.9639 94.0351C69.9893 96.0605 72.7363 97.1983 75.6006 97.1983H97.2002ZM32.4013 97.1983C35.2656 97.1983 38.0126 96.0605 40.0379 94.0351C42.0633 92.0098 43.2011 89.2628 43.2011 86.3985V60.0254C43.2011 57.1611 42.0633 54.4141 40.0379 52.3887C38.0126 50.3634 35.2656 49.2255 32.4013 49.2255H17.4112C17.4112 45.4348 17.638 41.6333 18.0808 37.8425C18.7503 33.825 19.8735 30.2503 21.4287 27.1291C22.9947 23.9972 25.0034 21.5456 27.4658 19.7529C29.9174 17.7441 33.0385 16.7397 36.84 16.7397V0C30.5869 0 25.1222 1.33918 20.4243 4.01753C15.7673 6.66873 11.7633 10.3295 8.70652 14.7309C5.63856 19.5835 3.37729 24.9011 2.01064 30.4771C0.63351 36.6304 -0.0403975 42.9202 0.00187137 49.2255V86.3985C0.00187137 89.2628 1.1397 92.0098 3.16506 94.0351C5.19042 96.0605 7.9374 97.1983 10.8017 97.1983H32.4013Z"
                    fill="#F15A29"
                  />
                </svg>
                <p className="text-white text-start mb-8 w-5/6 p-8 md:text-2xl">
                  Right strategies and systems gave her a clear vision for a
                  successful business
                </p>
                <img src={Testimonial} className="md:w-[400px] w-[300px]" />
              </div>

              <div className=" relative md:max-w-md max-w-xs p-5 bg-[#0C2F31] rounded-xl ">
                <svg
                  className="absolute -top-5 right-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 108 98"
                  fill="none"
                >
                  <path
                    d="M97.2002 97.1983C100.064 97.1983 102.811 96.0605 104.837 94.0351C106.862 92.0098 108 89.2628 108 86.3985V60.0254C108 57.1611 106.862 54.4141 104.837 52.3887C102.811 50.3634 100.064 49.2255 97.2002 49.2255H82.21C82.21 45.4348 82.4368 41.6333 82.8796 37.8425C83.5492 33.825 84.6724 30.2503 86.2276 27.1291C87.7935 23.9972 89.8023 21.5456 92.2647 19.7529C94.7162 17.7441 97.8374 16.7397 101.639 16.7397V0C95.3858 0 89.9211 1.33918 85.2232 4.01753C80.5662 6.66873 76.5622 10.3295 73.5054 14.7309C70.4374 19.5835 68.1762 24.9011 66.8095 30.4771C65.4324 36.6304 64.7585 42.9202 64.8007 49.2255V86.3985C64.8007 89.2628 65.9386 92.0098 67.9639 94.0351C69.9893 96.0605 72.7363 97.1983 75.6006 97.1983H97.2002ZM32.4013 97.1983C35.2656 97.1983 38.0126 96.0605 40.0379 94.0351C42.0633 92.0098 43.2011 89.2628 43.2011 86.3985V60.0254C43.2011 57.1611 42.0633 54.4141 40.0379 52.3887C38.0126 50.3634 35.2656 49.2255 32.4013 49.2255H17.4112C17.4112 45.4348 17.638 41.6333 18.0808 37.8425C18.7503 33.825 19.8735 30.2503 21.4287 27.1291C22.9947 23.9972 25.0034 21.5456 27.4658 19.7529C29.9174 17.7441 33.0385 16.7397 36.84 16.7397V0C30.5869 0 25.1222 1.33918 20.4243 4.01753C15.7673 6.66873 11.7633 10.3295 8.70652 14.7309C5.63856 19.5835 3.37729 24.9011 2.01064 30.4771C0.63351 36.6304 -0.0403975 42.9202 0.00187137 49.2255V86.3985C0.00187137 89.2628 1.1397 92.0098 3.16506 94.0351C5.19042 96.0605 7.9374 97.1983 10.8017 97.1983H32.4013Z"
                    fill="#F15A29"
                  />
                </svg>
                <p className="text-white text-start mb-8 w-5/6 p-8 md:text-2xl">
                  Right strategies and systems gave her a clear vision for a
                  successful business
                </p>
                <img src={Testimonial} className="md:w-[400px] w-[300px]" />
              </div>
            </div>
          </div>

          {/* Still Not Sure? We Have */}
          <div className="md:mt-20 mt-10 text-center mb-20 md:p-16 p-4 ">
            <div className="lg:text-6xl md:text-4l  text-2xl md:p-5 p-2 md:px-20 px-10 w-fit mx-auto   text-center text-white mb-10 ">
              Still Not Sure? We Have
            </div>
            <img src={MoneyBack} className="w-1/2 mx-auto mb-10" />

            <div className="relative  lg:h-[710px] md:h-[550px] h-[360px] md:w-[974px]  mx-auto md:p-16">
              <img src={Refund} className="hidden lg:block absolute top-1/2 left-1/2  " style={{transform :"translate(-50% , -50%)"}} />
              <div className=" absolute    lg:p-10 p-8  text-white text-justify md:leading-9 md:text-xl  flex flex-col  md:gap-10 gap-5 md:mt-28 ">
               <div>   
               Secure your incredible final year project offer today and enjoy
                a money-back guarantee. Enroll now, explore our project details,
                and if you're not satisfied for any reason, just drop us an
                email, and{" "}
                <span className="bg-[#F15A29]">
                  we'll refund your entire investment - no questions asked! 
                </span>
               </div>
               <div>
               At Qriocity, we are committed to your satisfaction and success.
                Dive into our comprehensive <span className="bg-[#F15A29]" >project resources, expert guidance,</span>
                and dedicated support.
               </div>
               <div>
               Your venture into your final year project
                is <span className="bg-[#F15A29]"  > completely risk-free</span> with our money-back guarantee. Your
                success, satisfaction, and peace of mind are our top priorities.
                Join us today and experience the difference!
               </div>
              </div>
            </div>



          </div>


         <Faq/>

        </div>
      </div>

      

      <footer className=" z-50  fixed bottom-0 left-0 w-full bg-black text-white p-2">
        <div className="md:w-5/6 mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <p className="md:text-5xl text-xl font-semibold  text-white ">
                ₹99
                <span className="ml-3 md:text-2xl text-xs line-through"> ₹12000</span>
              </p>
              <p className="md:text-lg  text-sm font-semibold">
              Offer ends in 15 Minutes!!!
              </p>
            </div>

            <div>
              <button className="md:text-2xl text-xs bg-gradient-to-r from-[#FBA154] to-[#F15A29]  text-white md:px-12 px-4 md:py-4 py-2 rounded-full transition duration-300 ">
              Book Free Consultation Call
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Webinar;

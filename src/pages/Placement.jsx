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
import plans from "../assets/plans.png";

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

          <img className="mt-20" src={plans} />
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

          <img className="mt-20" src={plans} />
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

        <div className="mt-20 flex flex-col p-4">
          <h1 className="place-self-center mt-10 text-[50px] font-serif font-bold text-white">
            Testimonials
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            <div className="p-4 border rounded-lg shadow-xl bg-white flex flex-col justify-between h-full">
              <p className="text-gray-700 mb-4">
                "This webinar was incredibly insightful and well-organized. The
                speakers were knowledgeable and engaging. Highly recommend!"
              </p>
              <div className="p-2 bg-orange-500 text-white rounded mt-4 text-center">
                <p className="text-sm"> Rahul</p>
                <p className="text-sm">Chennai</p>
              </div>
            </div>
            <div className="p-4 border rounded-lg shadow-xl bg-white flex flex-col justify-between h-full">
              <p className="text-gray-700 mb-4">
                "I learned so much from this webinar. The content was relevant
                and the delivery was excellent. Looking forward to the next
                one!"
              </p>
              <div className="p-2 bg-orange-500 text-white rounded mt-4 text-center">
                <p className="text-sm">Gowthami</p>
                <p className="text-sm">Chennai</p>
              </div>
            </div>
            <div className="p-4 border rounded-lg shadow-xl bg-white flex flex-col justify-between h-full">
              <p className="text-gray-700 mb-4">
                "I attended Qriocity’s Webinar last week, the webinar was really
                good and I got a clear process of how I can get my dream job.
                Also I understood how to crack high package jobs in top
                companies"
              </p>
              <div className="p-2 bg-orange-500 text-white rounded mt-4 text-center">
                <p className="text-sm">Krithika</p>
                <p className="text-sm">Bangalore</p>
              </div>
            </div>
            <div className="p-4 border rounded-lg shadow-xl bg-white flex flex-col justify-between h-full">
              <p className="text-gray-700 mb-4">
                "Fantastic webinar! The presenters were top-notch, and the
                content was both informative and inspiring."
              </p>
              <div className="p-2 bg-orange-500 text-white rounded mt-4 text-center">
                <p className="text-sm">Ayush</p>
                <p className="text-sm">Delhi</p>
              </div>
            </div>
            <div className="p-4 border rounded-lg shadow-xl bg-white flex flex-col justify-between h-full">
              <p className="text-gray-700 mb-4">
                "The webinar exceeded my expectations. The topics covered were
                current and the speakers were engaging."
              </p>
              <div className="p-2 bg-orange-500 text-white rounded mt-4 text-center">
                <p className="text-sm">Kishore</p>
                <p className="text-sm">Vellore</p>
              </div>
            </div>
            <div className="p-4 border rounded-lg shadow-xl bg-white flex flex-col justify-between h-full">
              <p className="text-gray-700 mb-4">
                "Great webinar with valuable insights. The Q&A session was
                particularly helpful."
              </p>
              <div className="p-2 bg-orange-500 text-white rounded mt-4 text-center">
                <p className="text-sm">Arthi</p>
                <p className="text-sm">Coimbatore</p>
              </div>
            </div>
          </div>
        </div>
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

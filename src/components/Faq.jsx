import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

const Faq = () => {
  const faqData = [
    {
      question: "Alright, but what exactly do you do? ",
      answer:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
    },
    {
      question:
        "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together? ",
      answer:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
    },
    {
      question: "Are your rates competitive?",
      answer:
        "To register, visit our registration page and follow the instructions.",
    },
    {
      question: "Why do you have a monthly project cap?",
      answer: "The workshop is free of charge for all participants.",
    },

    // Add more questions and answers as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="md:mt-20 mt-10 text-center mb-20 md:p-16    md:max-w-5xl max-w-xs mx-auto  text-white">
     <div className="lg:text-6xl md:text-4xl   text-2xl md:p-5 p-2 px-20 w-fit mx-auto   text-center text-white mb-10 ">
     Frequently Asked Questions:
            </div>
     

      {faqData.map((item, index) => (
        <div key={index} className="mb-1 md:p-10 p-1 bg-white text-black">
          <div
            className="flex justify-between items-center  p-4 cursor-pointer border-b border-gray-300"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex  items-center   w-full">
              <i
                className={`fas ${
                  openIndex === index ? "fa-minus" : "fa-plus"
                } mr-2 text-blue-500`}
              ></i>
              <div className="flex justify-between items-center w-full ">
                <div className="flex  gap-5 items-start">
                  {" "}
                  <div className="md:text-3xl text-xl text-gray-500 font-[700]">
                    {index + 1}
                  </div>
                  <span
                    className={`text-xl text-start font-semibold md:px-5 }`}
                  >
                    {item.question}
                  </span>
                </div>
                <div>
                  {" "}
                  {openIndex === index ? (
                    <TiMinus size={20} />
                  ) : (
                    <FaPlus size={20} />
                  )}{" "}
                </div>
              </div>
            </div>
          </div>
          {openIndex === index && (
            <div className="p-5 px-10  border-t border-gray-300">
              <p className="text-gray-500">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;

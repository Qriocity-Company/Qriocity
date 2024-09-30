import React, { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full flex flex-col items-center p-2 md:p-0 justify-center mt-20 bg-white">
      <div className="max-w-5xl mx-auto py-8 md:mt-20">
        <h2 className="lg:text-[36px] text-[20px] font-bold text-center text-blue-600">
          FAQs :
          <span className="ml-2 text-gray-800">Here’s everything you may ask...</span>
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
                <div className="p-4 text-gray-700 bg-gray-50">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:mr-10 mt-5 mb-40">
        <button
          className="px-14 py-4 rounded-full font-bold text-white"
          style={{
            background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
          }}
          onClick={scrollToTop}
        >
          BOOK FREE CONSULTATION CALL
        </button>
      </div>
    </div>
  );
};

export default FaqSection;

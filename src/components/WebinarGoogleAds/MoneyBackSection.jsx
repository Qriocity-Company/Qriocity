import React from 'react';
import MoneyBack from '../../assets/money_back.png'; // Import your MoneyBack image
import Refund from '../../assets/refund.png'; // Import your Refund image

const MoneyBackSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="md:mt-20 mt-10 text-center mb-36 md:mb-20 md:p-16 p-4">
      <div className="lg:text-6xl md:text-4xl text-2xl md:p-5 p-2 md:px-20 px-10 w-fit mx-auto text-center text-white mb-10">
        Still Not Sure? We Have
      </div>
      
      <img src={MoneyBack} className="w-1/2 mx-auto mb-10" alt="Money Back Guarantee" />

      <div className="relative lg:h-[710px] md:h-[550px] h-[360px] md:w-[974px] mx-auto md:p-16">
        <img
          src={Refund}
          className="hidden lg:block absolute top-1/2 left-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
          alt="Refund Guarantee"
        />
        <div className="absolute lg:p-10 p-8 text-white text-justify md:leading-9 md:text-xl flex flex-col md:gap-10 gap-5 md:mt-28">
          <div>
            Secure your incredible final year project offer today and enjoy a money-back guarantee. Enroll now, explore our project details, and if you're not satisfied for any reason, just drop us an email, and{" "}
            <span className="bg-[#F15A29]">
              we'll refund your entire investment - no questions asked!
            </span>
          </div>
          <div>
            At Qriocity, we are committed to your satisfaction and success. Dive into our comprehensive{" "}
            <span className="bg-[#F15A29]">
              project resources, expert guidance,
            </span>
            and dedicated support.
          </div>
          <div>
            Your venture into your final year project is{" "}
            <span className="bg-[#F15A29]">completely risk-free</span>{" "}
            with our money-back guarantee. Your success, satisfaction, and peace of mind are our top priorities. Join us today and experience the difference!
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center lg:mr-10 mt-10 mb-10">
        <button
          className="px-14 py-4 rounded-full font-bold text-white"
          style={{
            background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
          }}
          onClick={scrollToTop}
        >
          BOOK YOUR FREE CONSULTATION CALL NOW
        </button>
      </div>
    </div>
  );
};

export default MoneyBackSection;

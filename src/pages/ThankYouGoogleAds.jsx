import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ThankYouGoogleAds = () => {
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md border-2 border-[#FBA154]">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#FBA154] to-[#F15A29] bg-clip-text text-transparent">
          Thank you for contacting us
        </h1>
        <p className="text-gray-700 text-lg mb-6 font-medium">
          You will get a call from our team in 1-2 hours
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouGoogleAds;

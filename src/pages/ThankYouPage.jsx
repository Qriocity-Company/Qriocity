import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-600 via-green-300 to-green-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          Thank you for registering with us!
        </h1>
        <p className="text-gray-700 mb-6">
          You will get an call soon from our team.
        </p>
        <Link
          to="/bookAcallnow"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ThankYouPage2 = () => {
  useEffect(() => {
    // Inject the event script dynamically
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      gtag('event', 'conversion', {'send_to': 'AW-11517624771/h4s3CIzTn4IaEMODhPQq'});
    `;
    document.head.appendChild(script);

    // Trigger GTM page view event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page: "ThankYouPage",
    });

    // Cleanup script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-600 via-green-300 to-green-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          Thank you for registering with us!
        </h1>
        <p className="text-gray-700 mb-6">
          You will get a call soon from our team.
        </p>
        <Link
          to="/bookconsultation"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage2;

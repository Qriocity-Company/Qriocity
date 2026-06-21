import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ThankYouPage = () => {
  const location = useLocation();

  const getBackLink = () => {
    if (location.state && location.state.from) {
      return location.state.from;
    }
    if (location.pathname === "/thankyou-consultation") {
      return "/consultations";
    } else if (location.pathname === "/thankyou-phd") {
      return "/phd-projects";
    }
    return "/";
  };
  useEffect(() => {
    // Ensure global gtag and dataLayer are defined for the conversion script
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    // Inject the event script dynamically
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      gtag('event', 'conversion', {'send_to': 'AW-11517624771/h4s3CIzTn4IaEMODhPQq'});
    `;
    document.head.appendChild(script);

    // Google Tag Manager Head
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-NNLKLS24");

    // Trigger GTM page view event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page: "ThankYouPage",
    });

    // Cleanup script when the component unmounts
    return () => {
      document.head.removeChild(script);
      // Optional: Cleanup GTM script if needed, but usually GTM persists.
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-600 via-green-300 to-green-100 p-4">
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NNLKLS24"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          Thank you for contacting us
        </h1>
        <p className="text-gray-700 mb-6">
          You will get an call from our team in 1-2 hours
        </p>
        <Link
          to={getBackLink()}
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

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const WebinarPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-[400px]   bg-gradient-to-br from-blue-400 to-white bg-opacity-80 z-50">
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <h2 className="text-xl font-bold mb-4 text-center text-black">
            Be part of our next Webinar event!
          </h2>
          <p className="text-center mb-6 text-white">
            Get your dream job in just 3 hours! Join Today!
          </p>
          <button
            onClick={closePopup}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Join Now
          </button>
        </div>
      </div>
    )
  );
};

export default WebinarPopup;

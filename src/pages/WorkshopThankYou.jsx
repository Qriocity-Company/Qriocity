import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WorkshopThankYou = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-600 via-green-300 to-green-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md animate-fade-in-up">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    Thanks for registering! <span className="text-4xl">🎉</span>
                </h1>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    All workshop updates, reminders, and materials will be shared <span className="font-bold text-green-600">ONLY</span> in our WhatsApp community.
                </p>

                <a
                    href="https://chat.whatsapp.com/FZoxdKCJzzw0oHSJf0zRSb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-[#20bd5a] transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                    <FaWhatsapp size={24} />
                    Click to Join Now
                </a>
            </div>
        </div>
    );
};

export default WorkshopThankYou;

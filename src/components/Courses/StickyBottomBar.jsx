import React, { useState, useEffect } from 'react';
import { Download, Sparkles } from 'lucide-react';

const StickyBottomBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show bar if scrolled past 600px (approx hero height)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.3)] backdrop-blur-lg animate-slide-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

                <div className="text-center sm:text-left flex items-center gap-2">
                    <Sparkles className="text-yellow-300 hidden sm:block" size={24} />
                    <div>
                        <p className="text-lg font-bold">Become an AI/ML Expert in Just 3 Months! 🚀</p>
                        <p className="text-sm text-purple-200 hidden sm:block">Limited seats available - Book your slot now!</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button className="group bg-white text-purple-700 font-bold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap flex items-center gap-2">
                        <Download size={18} className="group-hover:animate-bounce" />
                        Download Syllabus
                    </button>
                    <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StickyBottomBar;

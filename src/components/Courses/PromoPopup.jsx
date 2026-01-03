import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenPromoPopup');

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 10000); // 10 seconds delay

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('hasSeenPromoPopup', 'true');
    };

    const handleApplyNow = () => {
        handleClose();
        // Scroll to hero section where the form is
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (!isVisible) return null;

    const courseHighlights = [
        "6-Month Comprehensive Program",
        "Live Interactive Classes",
        "Real-World Internship Certificate",
        "Personal Mentor Support",
        "87% Placement Rate",
        "200+ Hiring Partners"
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-300 animate-fade-in">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full mx-auto relative max-h-[90vh] overflow-y-auto animate-scale-in">

                {/* Close Button - Fixed position to always be visible */}
                <button
                    onClick={handleClose}
                    className="sticky top-4 float-right mr-4 text-gray-500 hover:text-gray-700 z-20 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                    aria-label="Close popup"
                >
                    <X size={20} />
                </button>

                {/* Content */}
                <div className="p-6 md:p-10 pt-16 md:pt-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <Sparkles className="text-primary" size={32} />
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Transform Your Career!
                            </h3>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base">
                            Join HCL GUVI's Zen Class Data Science Program
                        </p>
                    </div>

                    {/* Course Highlights */}
                    <div className="bg-gradient-to-br from-primary/5 to-purple-50 rounded-2xl p-6 mb-6">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg">What You'll Get:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {courseHighlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 text-sm md:text-base">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Special Offer */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-4 mb-6">
                        <p className="text-center text-gray-800 font-semibold text-sm md:text-base">
                            🎉 <span className="text-primary">Limited Time Offer:</span> Early Bird Discount Available!
                        </p>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={handleApplyNow}
                        className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                        Apply Now - Talk to a Mentor
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                        Click above to fill the application form and book your free career counseling call
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PromoPopup;

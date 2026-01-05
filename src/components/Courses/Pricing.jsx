import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden" id="pricing">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Investment in Your AI Career</h2>
                    <p className="text-xl text-green-400 font-semibold mb-2 flex items-center justify-center gap-2">
                        <Sparkles size={20} />
                        Limited Time Offer — 47% OFF
                        <Sparkles size={20} />
                    </p>
                    <p className="text-gray-400">Join the community of future AI leaders.</p>
                </div>

                <div className="max-w-lg mx-auto bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow">
                    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 p-5 text-center text-white font-bold text-sm uppercase tracking-wide relative overflow-hidden">
                        <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            🔥 Early Bird Offer 🔥
                        </span>
                    </div>

                    <div className="p-8 text-center bg-gradient-to-br from-white to-gray-50">
                        <div className="flex justify-center items-center gap-4 mb-2">
                            <span className="text-gray-400 line-through text-2xl font-semibold">₹55,000</span>
                            <span className="text-6xl font-extrabold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">₹29,999</span>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg animate-pulse">
                            SAVE ₹25,001 (47% OFF)
                        </div>

                        <ul className="text-left space-y-4 mb-8 max-w-xs mx-auto">
                            {[
                                "Live + Recorded Classes",
                                "Daily Mentor Support",
                                "Real Internship Certificate",
                                "Placement Assistance",
                                "Lifetime Community Access"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 group">
                                    <div className="bg-green-100 rounded-full p-1 group-hover:scale-110 transition-transform">
                                        <Check className="text-green-600 flex-shrink-0" size={18} />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 text-lg mb-4">
                            Book Free Demo Class
                        </button>
                        <p className="text-xs text-red-600 font-semibold animate-pulse">⏰ Only 12 seats left at this price</p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 text-center text-gray-600 text-sm border-t border-gray-200">
                        💳 EMI Options Available for Credit/Debit Cards
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

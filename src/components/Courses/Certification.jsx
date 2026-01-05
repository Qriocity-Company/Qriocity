import React from 'react';
import { Award, CheckCircle, Shield, TrendingUp } from 'lucide-react';

const Certification = () => {
    const credibilityPoints = [
        {
            icon: Award,
            title: "Industry-Recognized Certificate",
            description: "Receive an official certificate from HCL GUVI upon successful completion of the program, recognized by top companies across India."
        },
        {
            icon: Shield,
            title: "Verified & Authentic",
            description: "Each certificate comes with a unique verification ID that employers can validate online, ensuring authenticity and credibility."
        },
        {
            icon: TrendingUp,
            title: "Boost Your Career Prospects",
            description: "Add this certificate to your resume and LinkedIn profile to stand out from other candidates and increase your chances of landing your dream AI/ML job."
        }
    ];

    return (
        <section className="py-20 bg-white" id="certification">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        🎓 Get Certified & Stand Out
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Earn an industry-recognized certificate that validates your AI/ML expertise
                    </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left Side: Credibility Points */}
                        <div className="lg:w-1/2 space-y-6">
                            {credibilityPoints.map((point, index) => {
                                const Icon = point.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                                                    <Icon className="text-white" size={24} />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                    {point.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {point.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Additional Info */}
                            <div className="bg-gradient-to-r from-primary to-purple-600 rounded-xl p-6 text-white">
                                <div className="flex items-center gap-3 mb-3">
                                    <CheckCircle size={24} className="flex-shrink-0" />
                                    <h4 className="font-bold text-lg">What You'll Receive:</h4>
                                </div>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-0.5">✓</span>
                                        <span>Digital certificate with unique verification ID</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-0.5">✓</span>
                                        <span>Internship completion certificate</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-0.5">✓</span>
                                        <span>LinkedIn-ready certificate badge</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Certificate Image */}
                        <div className="lg:w-1/2 flex items-center justify-center">
                            <div className="relative w-full max-w-lg">
                                {/* Certificate Mockup */}
                                <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-gradient-to-br from-primary to-purple-600 transform hover:scale-105 transition-transform duration-300">
                                    <div className="border-2 border-gray-200 rounded-xl p-6">
                                        {/* Certificate Header */}
                                        <div className="text-center mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                <Award className="text-white" size={32} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                Certificate of Completion
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                HCL GUVI Zen Class
                                            </p>
                                        </div>

                                        {/* Certificate Body */}
                                        <div className="text-center space-y-4 py-6 border-t border-b border-gray-200">
                                            <p className="text-sm text-gray-600">This is to certify that</p>
                                            <p className="text-xl font-bold text-primary">
                                                [Your Name]
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                has successfully completed the
                                            </p>
                                            <p className="text-lg font-semibold text-gray-900">
                                                AI/ML + GenAI Program
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                with excellence and dedication
                                            </p>
                                        </div>

                                        {/* Certificate Footer */}
                                        <div className="mt-6 flex justify-between items-center text-xs text-gray-500">
                                            <div>
                                                <p className="font-semibold">Date: Dec 2024</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">ID: #QR2024XXX</p>
                                            </div>
                                        </div>

                                        {/* Signature Line */}
                                        <div className="mt-6 pt-4 border-t border-gray-200">
                                            <div className="text-center">
                                                <div className="w-32 h-0.5 bg-gray-300 mx-auto mb-2"></div>
                                                <p className="text-xs font-semibold text-gray-700">Authorized Signature</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certification;

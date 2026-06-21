import React from 'react';
import { Briefcase, Code, Users, Rocket, CheckCircle } from 'lucide-react';

const Internship = () => {
    const highlights = [
        {
            icon: Code,
            title: "Real-Time Project Experience",
            description: "Work on live industry projects that mirror real-world challenges. Build production-ready AI/ML applications from scratch, gaining hands-on experience that goes beyond theoretical knowledge."
        },
        {
            icon: Users,
            title: "Mentorship & Code Reviews",
            description: "Get personalized guidance from industry experts throughout your internship. Receive detailed code reviews, best practice recommendations, and career advice to accelerate your professional growth."
        },
        {
            icon: Rocket,
            title: "Portfolio-Ready Deliverables",
            description: "Complete your internship with tangible projects that showcase your skills to potential employers. Each project is designed to demonstrate your ability to solve complex problems and deliver results."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="internship">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        💼 Internship Program
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our internship program bridges the gap between learning and professional work
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
                    {/* Acknowledgement Text */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-10 border-l-4 border-primary">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                    <CheckCircle className="text-white" size={24} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Why Our Internship Matters
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We understand that landing your first AI/ML role requires more than just completing courses.
                                    Employers want to see <span className="font-semibold text-primary">proven experience</span> and
                                    <span className="font-semibold text-primary"> real project work</span>. That's why our internship
                                    program is designed to give you the practical, hands-on experience that sets you apart from other
                                    candidates.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Upon completion, you'll receive an <span className="font-semibold text-primary">official internship
                                        completion certificate</span> that validates your practical experience and demonstrates to employers
                                    that you're ready to contribute from day one.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {highlights.map((highlight, index) => {
                            const Icon = highlight.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="text-white" size={28} />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                                        {highlight.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {highlight.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Stats Section */}
                    <div className="mt-10 pt-8 border-t border-gray-200">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-1">3-4</div>
                                <div className="text-sm text-gray-600">Weeks Duration</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-1">2-3</div>
                                <div className="text-sm text-gray-600">Live Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                                <div className="text-sm text-gray-600">Practical Work</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-1">1:1</div>
                                <div className="text-sm text-gray-600">Mentor Support</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 text-center">
                        <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-yellow-50 px-4 py-2 rounded-lg border border-yellow-200">
                            <span className="text-yellow-600">⭐</span>
                            <span>Internship certificate included with course completion</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Internship;

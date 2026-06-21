import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    // PRD: SECTION 13 - Enhanced with categories
    const faqData = {
        placement: [
            {
                q: "Will I definitely get placed after this course?",
                a: "While we can't legally \"guarantee\" a job (no one can), here's what we DO guarantee: We'll support you until you get hired. Resume reviews, mock interviews, job referrals — we don't stop until you succeed. 87% of our students get placed within 3 months of completing the course."
            },
            {
                q: "What kind of job roles can I apply for after this course?",
                a: "You'll be qualified for: ML Engineer, AI Developer, GenAI Engineer, Prompt Engineer, Data Scientist (Junior), AI/ML Intern. Freshers typically get ₹4-8 LPA, experienced professionals can expect ₹8-15 LPA based on prior experience."
            }
        ],
        pricing: [
            {
                q: "Why is there such a big discount right now?",
                a: "We're building our community and want serious learners to join at an accessible price. This early bird pricing won't last forever. Once we hit our target batch size, prices go back to ₹55,000."
            },
            {
                q: "What if I don't like the course after starting?",
                a: "Attend the FREE demo class first! See our teaching style, ask questions, and decide with confidence. We want students who are sure about their commitment."
            }
        ],
        mentors: [
            {
                q: "What if I miss a class or fall behind?",
                a: "That's exactly why we have daily mentor follow-ups! If you miss a session, your mentor will reach out to you. You can always catch up with recorded lessons. We don't let anyone fall behind — that's our promise."
            },
            {
                q: "Is there Tamil support available?",
                a: "Yes, our mentors can explain concepts in Tamil whenever needed. While the main content is in English (as it should be for technical interviews), doubt clarification and mentorship is available in Tamil."
            }
        ],
        general: [
            {
                q: "I have zero coding experience. Can I still join?",
                a: "Absolutely! We start from the very basics. Our Python module assumes zero prior knowledge. Many of our successful students came from non-tech backgrounds (Commerce, Arts, even Hotel Management!). Your mentor will guide you through every step."
            },
            {
                q: "How is this different from free YouTube courses?",
                a: "Three words: Accountability, Community, and Support. On YouTube, you're alone. Here, you have a batch of peers, a personal mentor, daily check-ins, and someone who genuinely cares if you complete the course. That's why our completion rate is 89% vs industry average of 15%."
            },
            {
                q: "Is the internship real or just a 'project'?",
                a: "It's a REAL internship. You'll work on actual business problems, collaborate with a team, and get a proper internship certificate. This goes on your resume and LinkedIn as genuine work experience."
            },
            {
                q: "Can I do this along with my college/job?",
                a: "Yes! The recorded lessons can be watched anytime. Live sessions are on weekends. You need about 2-3 hours daily. Many of our students are final-year students or working professionals who manage this alongside their commitments."
            }
        ]
    };

    const categories = [
        { id: 'placement', label: 'Placement' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'mentors', label: 'Mentors' },
        { id: 'general', label: 'General' }
    ];

    const [activeCategory, setActiveCategory] = useState('placement');
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        setOpenIndex(null); // Close any open FAQ when switching categories
    };

    const currentFaqs = faqData[activeCategory];

    return (
        <section className="py-20 bg-white" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions ✨
                    </h2>
                    <p className="text-gray-600">Everything You Need to Know Before Joining</p>
                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-gray-900 text-white shadow-lg scale-105'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 animate-fade-in">
                    {currentFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-semibold text-gray-900 pr-8">{faq.q}</span>
                                {openIndex === index ? (
                                    <Minus className="text-gray-900 flex-shrink-0 w-5 h-5" />
                                ) : (
                                    <Plus className="text-gray-400 flex-shrink-0 w-5 h-5" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="p-6 pt-0 bg-gray-50 text-gray-600 leading-relaxed animate-fade-in border-t border-gray-100">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
